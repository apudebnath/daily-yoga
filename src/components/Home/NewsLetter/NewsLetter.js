import { Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
const image=('https://i.ibb.co/7rMt4MB/banner11.jpg')
const sectionBg ={
    background: `url(${image})`,
    backgroundColor: 'rgba(1, 28, 38, 0.5)',
    backgroundBlendMode: 'multiply, luminosity',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
}

const NewsLetter = () => {
    const {isLoading} = useAuth();
    return (
        <div style={sectionBg} >
            <Container>
            <Box sx={{py: 8}}>
                <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{pt: 5 }}>
                    <Grid item xs={4} sm={4} md={6} >
                            <Typography sx={{pb: 1, fontWeight: 'normal', color: 'white'}} variant="h3">Stay with us and get NewsLetter.</Typography>
                            <Typography variant="h6" sx={{color: 'white'}}>
                              We always with you and keep love with us. Please subscribe with email and get updated promotion and news.
                            </Typography>
                    </Grid>
                    <Grid item xs={4} sm={4} md={6} >
                    <Box sx={{py: 5}}>
                            <div className="flex justify-center ">
                            { isLoading && <CircularProgress/>}
                            </div>
                            <form>
                                <TextField
                                sx={{width: '60%', mb:1}}
                                style={{border: '1px solid white', borderRadius: '5px', color: 'white'}}
                                required
                                label="Your Email"
                                id="outlined-size-small"
                                size="small"
                                name="email"
                                type="email"
                                onBlur=""
                                />
                                <br />
                                <Button type="submit" sx={{width: '60%', m: 1, background: 'orange'}} variant="contained">Login</Button>
                            </form>
                            </Box>
                    </Grid>
                </Grid>
            </Box>
            </Container>
        </div>
    );
};

export default NewsLetter;