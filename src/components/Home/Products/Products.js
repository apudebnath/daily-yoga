import { Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { NavLink } from 'react-router-dom';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:5000/products';
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data))
    } , [])

    return (
        <Container sx={{py: 5}}>
            <h2>Exclusive Packages</h2>
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 3, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    products.slice(0,6).map(product => <Grid item xs={4} sm={4} md={4} key={product._id}>
                        <Item>
                            <img style={{width: '100%'}} src={product.image} alt=""/>

                            <Typography variant='h6'>{product.title}</Typography>
                            <hr />
                            <Grid item xs={12} style={{display: 'flex', justifyContent: 'space-between'}}>
                                <Box style={{textAlign: 'left'}}>
                                    <Typography variant='h6' style={{color: 'green'}}>Package: {product.package}</Typography>
                                    <Typography variant='h6' style={{color: 'black'}}>Price: $ {product.price}</Typography>
                                </Box>
                                <Typography>
                                    <NavLink to={`/purchase/${product._id}`} style={{textDecoration: 'none'}}><Button variant='contained' sx={{background: 'orange'}}>Details</Button></NavLink>
                                </Typography>
                            </Grid>
                        </Item>
                      </Grid>
                    )
                }
            </Grid>
    </Box>
        </Container>
    );
};

export default Products;