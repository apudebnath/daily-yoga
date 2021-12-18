import { Button, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const {user} = useAuth();

    useEffect(() => {
        const url = `http://localhost:5000/orders?email=${user.email}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setOrders(data)
        })
    }, [])

    const handleDelete = (id) => {
        const proceed = window.confirm('Hey, are you SURE! to DELETE the Order?')
        if(proceed){
            fetch(`http://localhost:5000/deleteOrder/${id}`,{
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert('Order deleted successfully')
                    const restOfOrders = orders.filter(order => order._id !== id)
                    setOrders(restOfOrders);
                }
            })
        }
    }
    return (
        <Container sx={{my:8}}>
            <Typography>My Orders</Typography>
            <Box sx={{ flexGrow: 1, py:5}}>
                <Grid item xs={12} sm={12} md={12} sx={{display: 'flex', justifyContent: 'center'}}>
                <TableContainer component={Paper} sx={{width: '70%', overflow: 'scroll'}}>
                    <Table sx={{border: '1px solid orange'}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align='right'>Email</TableCell>
                                <TableCell align='right'>Price</TableCell>
                                <TableCell align='right'>Status</TableCell>
                                <TableCell align='right'>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                orders.map(row => (
                                    <TableRow
                                    key={row._id}
                                    sx={{'&:last-child td, &:last-child th':{border: 0}}}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.email}</TableCell>
                                        <TableCell align="right">{row.price}</TableCell>
                                        <TableCell align="right">{row.status}</TableCell>
                                        <TableCell align="right"><Button onClick={() => handleDelete(row._id)}>Delete</Button></TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                </Grid>
            </Box>
        </Container>
    );
};

export default MyOrders;