import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import image1 from '../../../images/icon0111.png';
import image2 from '../../../images/icon0122.png';
import image3 from '../../../images/icon0133.png';
import image4 from '../../../images/icon0144.png';

const ServicePoint = () => {
    return (
        <Container sx={{mb:5}}>
            <Box sx={{ flexGrow: 1 }} style={{marginTop: '-70px', background: '#f5f6f6', borderRadius: '15px', padding: '40px',  }}>
                <Typography sx={{pb: 5, fontWeight: 'semiold'}} variant="h4">Offer Best Service for You</Typography>
                <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 3, sm: 6, md: 12 }} style={{ }}>
                    <Grid item xs={3} sm={3} md={3} >
                        <Card sx={{ maxWidth: 345, borderRadius: 5, }} >
                          <CardContent>
                              <Typography>
                                  <img src={image1} alt="" style={{width: '100px', height: '100px'}}/>
                              </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                              Understanding
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              We ensure friendly ecosystem to understand each others. Perfectly concentrate our process and ultimately achieve out goal.
                            </Typography>
                          </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} >
                        <Card sx={{ maxWidth: 345, borderRadius: 5, }} >
                          <CardContent>
                              <Typography>
                                  <img src={image2} alt="" style={{width: '100px', height: '100px'}} />
                              </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                              Best Trainer
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              We ensure friendly ecosystem to understand each others. Perfectly concentrate our process and ultimately achieve out goal.
                            </Typography>
                          </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} >
                        <Card sx={{ maxWidth: 345, borderRadius: 5, }} >
                          <CardContent>
                              <Typography>
                                  <img src={image3} alt="" style={{width: '100px', height: '100px'}}/>
                              </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                              Local Event
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              We ensure friendly ecosystem to understand each others. Perfectly concentrate our process and ultimately achieve out goal.
                            </Typography>
                          </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} >
                        <Card sx={{ maxWidth: 345, borderRadius: 5, }} >
                          <CardContent>
                              <Typography>
                                  <img src={image4} alt="" style={{width: '100px', height: '100px'}}/>
                              </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                            customize Plan
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              We ensure friendly ecosystem to understand each others. Perfectly concentrate our process and ultimately achieve out goal.
                            </Typography>
                          </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default ServicePoint;