import { Box, Button, Card, CircularProgress, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


    
const Purchase = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const {user,isLoading} = useAuth();
    const basicInfo = {userName: user.displayName, email: user.email}
    const [orderData, newOrderData] = useState({basicInfo})
    // get data database to ui
    useEffect(() => {
        const url = (`http://localhost:5000/products/${id}`)
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [id])
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...orderData}
        newInfo[field] = value;
        newOrderData(newInfo);
    }
    const handleOrderSubmit = e => {
        e.preventDefault();
        //Prepare Data
        const orderInfo = {
            ...orderData,
            status: "Pending",
        }

        // Send Order data to database
        fetch('http://localhost:5000/orders',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderInfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
            alert('Order Submit successfully')
            }
        })
        e.target.reset();
    }
    if(isLoading){
        return <CircularProgress/>
    }
    return (
        <Container>
            <Box sx={{ flexGrow: 1, py:5}}>
                
                <Typography variant='h4' sx={{py:3}}>Order your Best choice</Typography>
                
                <Card variant="outlined" >
                    <Grid container>
                    <Grid item xs={12} sm={12} md={6}>
                        <Box>
                            <Card variant="outlined" square>
                                <img style={{width: '100%'}} src={product.image} alt=""/>
                                <Typography variant='h6'>{product?.title}</Typography>
                                <Typography variant='h8'>{product?.description}</Typography>
                                <hr />
                                
                                <Box style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px'}}>
                                    <Typography variant='h6' style={{color: 'green'}}>Package: {product?.package}</Typography>
                                    <Typography variant='h6' style={{color: 'black'}}>Price: $ {product?.price}</Typography>
                                
                                </Box>
                            </Card>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Box>
                            <Card variant="outlined" square  sx={{m:5, pb: 5, borderRadius: 2}} style={{background: 'rgba(65, 189, 204, 0.2)'}}>
                                <Typography variant='h5' sx={{pt: 4}}>Proceed to Order</Typography>
                                <Typography variant='h6' sx={{pb: 3}} >Service: {product?.title}</Typography>
                            
                                <form onSubmit={handleOrderSubmit}>
                                    <TextField
                                    sx={{width: '60%', mb: 2}}
                                    required
                                    label="Your Name"
                                    id="outlined-size-small"
                                    size="small"
                                    name="name"
                                    type="text"
                                    defaultValue={user.displayName}
                                    onBlur={handleOnBlur}          
                                    ></TextField>
                                    <TextField
                                    sx={{width: '60%', mb: 2}}
                                    required
                                    label="Your Email"
                                    id="outlined-size-small"
                                    size="small"
                                    name="email"
                                    type="email"
                                    defaultValue={user.email}
                                    onBlur={handleOnBlur}
                                    ></TextField>
                                    <TextField
                                    sx={{width: '60%', mb: 2}}
                                    required
                                    label="Phone Number"
                                    id="outlined-size-small"
                                    size="small"
                                    name="phone"
                                    type="text"
                                    ></TextField>
                                    <TextField
                                    sx={{width: '60%', mb: 2}}
                                    required
                                    label="Address"
                                    id="outlined-size-small"
                                    size="small"
                                    name="address"
                                    type="text"
                                    onBlur={handleOnBlur}
                                    ></TextField>
                                    <TextField
                                    sx={{width: '60%', mb: 2}}
                                    required
                                    label="City"
                                    id="outlined-size-small"
                                    size="small"
                                    name="city"
                                    type="text"
                                    onBlur={handleOnBlur}
                                    ></TextField>
                                    <TextField
                                    sx={{width: '60%', mb: 2}}
                                    required
                                    label="Product Price"
                                    id="outlined-size-small"
                                    size="small"
                                    name="price"
                                    type="text"
                                    defaultValue={product?.price}
                                    onBlur={handleOnBlur}
                                    ></TextField>
                                    <Link to="/dashboard/payment" style={{textDecoration: 'none'}}>
                                    <Button type="submit" sx={{width: '60%'}} variant='contained' style={{background: 'orange'}}>Submit Order</Button>
                                    </Link>
                                </form>
                            </Card>
                        </Box>
                    </Grid>
                    </Grid>
                </Card>
            </Box>      
        </Container>
    );
};

export default Purchase;

/* 

 */