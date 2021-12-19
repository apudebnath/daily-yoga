import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
const image1 = ('https://i.ibb.co/jf5HjT2/icon111.jpg');
const image2 = ('https://i.ibb.co/gJ70bSz/icon222.jpg');
const image3 = ('https://i.ibb.co/4Zc1zLT/icon333.jpg');
const image4 = ('https://i.ibb.co/dGNRZQd/image4.jpg');

const BookSession = () => {
    return (
        <Container sx={{my: 12}}>
            <Box>
            <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 6, md: 12 }} sx={{pt: 5 }}>
                    <Grid item xs={6} sm={6} md={6} >
                        <Typography sx={{pb: 1, textAlign: 'left', fontFamily: 'bellmt'}} variant="h6">Easy and Fast</Typography>
                        <Typography sx={{pb: 1, fontWeight: 'bold', textAlign: 'left', fontFamily: 'bellmt'}} variant="h4">Book your next session <br /> in 3 easy steps</Typography>
                            <Box sx={{ display: 'flex', }}>
                                <Typography sx={{p:3}}>
                                    <img src={image1} alt="" style={{width: '100px', height: '100px'}} />
                                </Typography>
    
                                <CardContent sx={{textAlign:'left'}}>
                                    <Typography gutterBottom variant="h5" component="div">
                                      Select your best
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                      We ensure friendly ecosystem to understand each others. Perfectly concentrate our process and ultimately achieve out goal.
                                    </Typography>
                                </CardContent>
                            </Box>
                            <Box sx={{ display: 'flex', }}>
                                <Typography sx={{p:3}}>
                                    <img src={image2} alt="" style={{width: '100px', height: '100px'}} />
                                </Typography>
    
                                <CardContent sx={{textAlign:'left'}}>
                                    <Typography gutterBottom variant="h5" component="div">
                                      Make payment
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                      We ensure friendly ecosystem to understand each others. Perfectly concentrate our process and ultimately achieve out goal.
                                    </Typography>
                                </CardContent>
                            </Box>
                            <Box sx={{ display: 'flex', }}>
                                <Typography sx={{p:3}}>
                                    <img src={image3} alt="" style={{width: '100px', height: '100px'}} />
                                </Typography>
    
                                <CardContent sx={{textAlign:'left'}}>
                                    <Typography gutterBottom variant="h5" component="div">
                                      Start your steps
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                      We ensure friendly ecosystem to understand each others. Perfectly concentrate our process and ultimately achieve out goal.
                                    </Typography>
                                </CardContent>
                            </Box>

                    </Grid>
                    {/* <Grid item xs={6} sm={6} md={6} >
                        <Card sx={{ maxWidth: 545, borderRadius: 5,}} >
                            <Box sx={{ display: 'flex', }}>
                                <Typography sx={{p:3}}>
                                    <img src={image1} alt="" style={{width: '100px', height: '100px'}} />
                                </Typography>
    
                                <CardContent sx={{textAlign:'left'}}>
                                    <Typography gutterBottom variant="h5" component="div">
                                      Understanding
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                      We ensure friendly ecosystem to understand each others. Perfectly concentrate our process and ultimately achieve out goal.
                                    </Typography>
                                </CardContent>
                            </Box>
                            <Box sx={{ display: 'flex', }}>
                                <Typography sx={{p:3}}>
                                    <img src={image1} alt="" style={{width: '100px', height: '100px'}} />
                                </Typography>
    
                                <CardContent sx={{textAlign:'left'}}>
                                    <Typography gutterBottom variant="h5" component="div">
                                      Understanding
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                      We ensure friendly ecosystem to understand each others. Perfectly concentrate our process and ultimately achieve out goal.
                                    </Typography>
                                </CardContent>
                            </Box>
                            <Box sx={{ display: 'flex', }}>
                                <Typography sx={{p:3}}>
                                    <img src={image1} alt="" style={{width: '100px', height: '100px'}} />
                                </Typography>
    
                                <CardContent sx={{textAlign:'left'}}>
                                    <Typography gutterBottom variant="h5" component="div">
                                      Understanding
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                      We ensure friendly ecosystem to understand each others. Perfectly concentrate our process and ultimately achieve out goal.
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                    </Grid> */}
                    <Grid item xs={6} sm={6} md={6} >
                        <Box sx={{ maxWidth: 550, borderRadius: 5, }} >
                            <Typography>
                                <img src={image4} alt="" style={{width: '100%', height: '100%'}}/>
                            </Typography>
                        </Box>
                    </Grid>
                    {/* <Grid item xs={6} sm={6} md={6} >
                        <Card sx={{ maxWidth: 500, borderRadius: 5, }} >
                            <Typography>
                                <img src={image4} alt="" style={{width: '100%', height: '100%'}}/>
                            </Typography>
                        </Card>
                    </Grid> */}
                </Grid>
            </Box>
        </Container>
    );
};

export default BookSession;