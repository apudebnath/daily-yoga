import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const image = ('https://i.ibb.co/dMhxYry/banner.jpg');
const bannerBackground = {
    background: `url(${image})`,
    backgroundColor: 'rgba(28, 76, 94, 0.3 )',
    backgroundBlendMode: 'darken, luminosity',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'scroll',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
}
const Header = () => {
    return (
        <Box style={bannerBackground}>
            <Container style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Box sx={{flexGrow: 1}}>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={6} >
                            <Box sx={{py: 8}} style={{textAlign: 'left'}}>
                                <Typography variant='h3' style={{textAlign: 'left', color: 'white'}}>
                                    Health is the power fo success in your LIFE
                                </Typography>
                                <Typography variant='h6' style={{textAlign: 'left', paddingBottom: '30px', color: '#4C4C4C'}}>
                                    Yoga is a most powerful way to maintain and minimize your daily life stress and keep fresh mentally and physically.
                                </Typography>
                                <Link to="/services" style={{textDecoration: 'none'}}>
                                    <Button sx={{ background: 'orange'}} variant="contained">Know More</Button>
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Header;