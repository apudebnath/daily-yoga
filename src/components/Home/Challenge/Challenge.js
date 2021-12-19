import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const image = ('https://i.ibb.co/K24phq2/banner1.jpg');
const bannerBackground = {
    background: `url(${image})`,
    backgroundColor: 'rgba(28, 76, 94, 0.5 )',
    backgroundBlendMode: 'darken, luminosity',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'scroll',
    backgroundPosition: 'center',
    backgroundSize: 'fill'
}
const Challenge = () => {
    return (
        <Box style={bannerBackground} sx={{py: 12}}>
            <Container sx={{py: 8}}>
            <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 6, md: 12 }} sx={{pt: 5 }}>
                    <Grid item xs={6} sm={6} md={6} >
                        <Typography variant='h3' sx={{color: 'white'}}>
                            Learn on Demand
                        </Typography>
                        <Typography variant='h6' sx={{color: 'white', pb: 3}}>
                            Take your practice to the next level with our on-going yoga challenges.
                        </Typography>
                        <Link to="/contact" style={{textDecoration: 'none'}}>
                            <Button sx={{ background: 'orange', py: 2, px:4}} variant="contained">Know More</Button>
                        </Link>
                    </Grid>
            </Grid>
            </Container>
        </Box>
    );
};

export default Challenge;