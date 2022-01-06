import { Button, Card, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import image from '../../../images/login1.jpg'
const AddProduct = () => {
    const {isLoading} = useAuth();
    const [product, setProduct] = useState({});
    const [productData, setProductData] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = {...product};
        newProduct[field] = value;
        setProduct(newProduct);
        console.log(field, value);
    }
    const handleFormSubmit = e => {
        e.preventDefault();
        const productInfo = {...product};
        console.log(productInfo)
        fetch('https://secure-crag-84125.herokuapp.com/products',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productInfo)
        })
        .then(res => res.json())
        .then(data => {
            setProductData(data);
            if(data.insertedId){

            }
        })
        e.target.reset();
        if(isLoading){
            <CircularProgress/>
        }
    }
    return (
        <Container sx={{mb: 8}}>
            <Box sx={{flexGrow: 1,}}>             
                <Card sx={{ display: 'flex' }}>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={6}>
                            
                                <img style={{width: '100%', height: '100%', objectFit: 'cover'}} src={image} alt="" />
                            
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} sx={{display: 'flex', alignItems: 'center'}}>
                            <Box sx={{pb: 5}}>
                            <Typography variant='h5' sx={{py:3}}>
                                Add Product
                            </Typography>
                            <form onSubmit={handleFormSubmit}>
                                <TextField
                                sx={{width: '60%', mb:1}}
                                required
                                label='Product Title'
                                id="outlined-size-small"
                                size="small"
                                name='title'
                                type='text'
                                onBlur={handleOnBlur}
                                >
                                </TextField>
                                <TextField
                                sx={{width: '60%', mb:1}}
                                required
                                label='Product Description'
                                id="outlined-size-small"
                                size="small"
                                name='description'
                                type='text'
                                onBlur={handleOnBlur}
                                >
                                </TextField>
                                <TextField
                                sx={{width: '60%', mb:1}}
                                required
                                label='Product Image Url'
                                id="outlined-size-small"
                                size="small"
                                name='image'
                                type='url'
                                onBlur={handleOnBlur}
                                >
                                </TextField>
                                <TextField
                                sx={{width: '60%', mb:1}}
                                required
                                label='Product Price'
                                id="outlined-size-small"
                                size="small"
                                name='price'
                                type='number'
                                onBlur={handleOnBlur}
                                >
                                </TextField>
                                <TextField
                                sx={{width: '60%', mb:1}}
                                required
                                label='Package Duration'
                                id="outlined-size-small"
                                size="small"
                                name='package'
                                type='text'
                                onBlur={handleOnBlur}
                                >
                                </TextField>
                                <Button sx={{width: '60%', m:1, background: 'orange'}} variant="contained" type="submit">Add Product</Button>
                            </form>
                            {productData.insertedId && <Typography>Product upload Successfully</Typography>}
                            </Box>
                        </Grid>
                    </Grid>
                </Card>                
            </Box>
        </Container>
    );
};

export default AddProduct;