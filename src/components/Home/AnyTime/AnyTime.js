import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
const image1 = ('https://i.ibb.co/JcjNJyM/image2.jpg');
const image2 = ('https://i.ibb.co/kB3h5Qx/image1.jpg');
const image3 = ('https://i.ibb.co/mhJ5mZK/image3.jpg');


const AnyTime = () => {
    return (
        <Container  >
            <Box sx={{py: 8}}>
                <Typography sx={{pb: 1, fontWeight: 'semibold'}} variant="h4">At Home OR On The Way</Typography>
                 
                    <Typography >Customize your membership and grow your practice by choosing from our expansive library of classes, courses, and articles.</Typography>
                
                <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{pt: 5 }}>
                    <Grid item xs={4} sm={4} md={4} >
                        <Card sx={{ maxWidth: 345, borderRadius: 5, }} >
                          <CardContent>
                              <Typography>
                                  <img src={image1} alt="" style={{width: '100%', height: '100%'}}/>
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
                    <Grid item xs={4} sm={4} md={4} >
                        <Card sx={{ maxWidth: 345, borderRadius: 5, }} >
                          <CardContent>
                              <Typography>
                                  <img src={image2} alt="" style={{width: '100%', height: '100%'}} />
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
                    <Grid item xs={4} sm={4} md={4} >
                        <Card sx={{ maxWidth: 345, borderRadius: 5, }} >
                          <CardContent>
                              <Typography>
                                  <img src={image3} alt="" style={{width: '100%', height: '100%'}}/>
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
                </Grid>
            </Box>
            
        </Container>
    );
};

export default AnyTime;