import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
const image1 = ('https://i.ibb.co/dGNRZQd/image4.jpg');
const image2 = ('https://i.ibb.co/P9FTMxS/image5.jpg');
const image3 = ('https://i.ibb.co/c8hVmH8/image6.jpg');
const image4 = ('https://i.ibb.co/VM8DD25/image7.jpg');
const image5 = ('https://i.ibb.co/fxHwZNr/image8.jpg');
const image6 = ('https://i.ibb.co/Fqk05bx/image9.jpg');
const image7 = ('https://i.ibb.co/kxrTK8B/image10.jpg');
const image8 = ('https://i.ibb.co/WPMwLNh/image11.jpg');
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
                            <img src={image2} alt="" style={{width: '100%', borderRadius: '5px'}}/>
                        </Typography>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} >
                        <Typography>
                            <img src={image3} alt="" style={{width: '100%', borderRadius: '5px'}}/>
                        </Typography>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} >
                        <Typography>
                            <img src={image4} alt="" style={{width: '100%', borderRadius: '5px'}}/>
                        </Typography>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} >
                        <Typography>
                            <img src={image5} alt="" style={{width: '100%', borderRadius: '5px'}}/>
                        </Typography>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} >
                        <Typography>
                            <img src={image6} alt="" style={{width: '100%', borderRadius: '5px'}}/>
                        </Typography>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} >
                        <Typography>
                            <img src={image7} alt="" style={{width: '100%', borderRadius: '5px'}}/>
                        </Typography>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} >
                        <Typography>
                            <img src={image8} alt="" style={{width: '100%', borderRadius: '5px'}}/>
                        </Typography>
                    </Grid>
                    
                </Grid>
            </Box>
        </Container>
    );
};

export default Gallary;