import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,  } from '@mui/material';
import {Box} from '@mui/material';
import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [status, setStatus] = useState('');

    const handleChange = e => {
        setStatus(e.target.value);
    }
    // Show all order from database
    useEffect(() => {
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => {
            setOrders(data);
        })
    } , [])

    // Update order status
    const handleUpdate = (id) => {  
        fetch(`http://localhost:5000/statusUpdate/${id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status})
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                alert('Update Status Successfully')
            }
        })
    }
    // Delete order
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
        <Container sx={{my: 8}}>
            <Box sx={{ flexGrow: 1, py:5}}>
            <h2>Manage all Orders</h2>
            <Grid item xs={12} sm={12} md={12} sx={{display: 'flex', justifyContent: 'center'}}>
                <TableContainer component={Paper} sx={{width: '80%', overflow: 'scroll'}}>
                    <Table sx={{border: '1px solid orange'}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Email</TableCell>
                                <TableCell align="right">Status</TableCell>
                                <TableCell align="right">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                orders.map(row => (
                                    <TableRow
                                    key={row._id}
                                    sx={{'&:last-child td, &:last-child th':{border: 0}}}
                                    >
                                        <TableCell component="th"
                                        scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.email}</TableCell>
                                        <TableCell align="right"><Box sx={{ minWidth: 120 }}>
                                                <FormControl fullWidth>
                                                  <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                                  <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={status}
                                                    label="Status"
                                                    onChange={handleChange}
                                                  >
                                                    <MenuItem value="pending">Pending</MenuItem>
                                                    <MenuItem value="approved">Approved</MenuItem>
                                                  </Select>
                                                </FormControl>
                                            </Box>
                                        </TableCell>
                                        <TableCell align="right"><Button onClick={() => handleUpdate(row._id)}>Update</Button></TableCell>
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

export default ManageAllOrders;