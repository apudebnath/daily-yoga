import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
const image1 = ('https://i.ibb.co/dGNRZQd/image4.jpg');
const Gallary = () => {
    return (
        <Container sx={{my: 12}}>
            <Box sx={{ flexGrow: 1 }} >
                <Typography sx={{pb: 5,}} variant="h4">Our Gallery </Typography>
                <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 3, sm: 6, md: 12 }} style={{ }}>
                    <Grid item xs={3} sm={3} md={3} >
                        <Typography>
                            <img src={image1} alt="" style={{width: '100%', borderRadius: '5px'}}/>
                        </Typography>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} >
                        <Typography>
                            <img src={image1} alt="" style={{width: '100%', borderRadius: '5px'}}/>
                        </Typography>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} >
                        <Typography>
                            <img src={image1} alt="" style={{width: '100%', borderRadius: '5px'}}/>
                        </Typography>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} >
                        <Typography>
                            <img src={image1} alt="" style={{width: '100%', borderRadius: '5px'}}/>
                        </Typography>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} >
                        <Typography>
                            <img src={image1} alt="" style={{width: '100%', borderRadius: '5px'}}/>
                        </Typography>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} >
                        <Typography>
                            <img src={image1} alt="" style={{width: '100%', borderRadius: '5px'}}/>
                        </Typography>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} >
                        <Typography>
                            <img src={image1} alt="" style={{width: '100%', borderRadius: '5px'}}/>
                        </Typography>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} >
                        <Typography>
                            <img src={image1} alt="" style={{width: '100%', borderRadius: '5px'}}/>
                        </Typography>
                    </Grid>
                    
                </Grid>
            </Box>
        </Container>
    );
};

export default Gallary;