import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const image = ('https://i.ibb.co/K24phq2/banner1.jpg');
const bannerBackground = {
    background: `url(${image})`,
    backgroundColor: 'rgba(28, 76, 94, 0.99 )',
    backgroundBlendMode: 'darken, luminosity',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'scroll',
    backgroundPosition: 'center',
    backgroundSize: 'fill'
}
const Contact = () => {
    return (
        <Box style={bannerBackground} sx={{py: 8}}>
            <Container sx={{py: 8}}>
            <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 6, md: 12 }} sx={{pt: 5 }}>
                    <Grid item xs={6} sm={6} md={6} sx={{py: 3}}>
                        <Typography variant='h4' sx={{color: 'white', pb: 3, textAlign: 'left'}}>
                            We are eagerly waiting to hear you.
                        </Typography>
                        <Typography  sx={{color: 'white', pb: 3, fontSize: '18px', textAlign: 'left'}}>
                            Take your practice to the next level with our on-going yoga challenges. Empower your practice and your life with online yoga resources, articles and videos from Yoga International. Our community is a holistic home for those who are seeking to deepen their yoga knowledge. We offer engaging and inspiring content designed to bring a beautiful balance to your life. Nurture body, mind and spirit with Yoga International.
                            <br />
                            You can find daily inspiration or dive into workshops when you join the Yoga International community. We believe in yoga’s profound effects and whole-life benefits. That’s why we offer highly accessible information to support every member, from those who are new to yoga to those who are advancing their practice
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} sx={{py: 3}} >
                        <Typography variant='h3' sx={{color: 'white'}}>
                        Join The Yoga International Community
                        </Typography>
                        <Typography variant='h6' sx={{color: 'white', py: 8, background: 'rgba(255, 255, 255, 0.5)'}}>
                        <form sx={{py: 5}}>
                                <TextField
                                sx={{width: '60%', mb:2, }}
                                required
                                label="Your Name"
                                id="outlined-size-small"
                                size="small"
                                name="name"
                                type="text"
                                />
                                <TextField
                                sx={{width: '60%', mb:2}}
                                required
                                label="Your Email"
                                id="outlined-size-small"
                                size="small"
                                name="email"
                                type="email"
                                />
                                <br />
                                <Button type="submit" sx={{width: '60%', m: 1, background: 'orange'}} variant="contained">Contact</Button>
                            </form>
                        </Typography>
                        
                    </Grid>
            </Grid>
            </Container>
        </Box>
    );
};

export default Contact;