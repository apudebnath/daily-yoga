import { Button, Card, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import image from '../../../images/login3.jpg'
import Footer from '../../Shared/Footer/Footer';
const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {signInWithEmail, user, isLoading, authError, googleSignIn} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
const handleFormSubmit = e => {
    e.preventDefault();
    signInWithEmail(loginData.email, loginData.password, navigate, location);

    e.target.reset();
}
const handleGoogleLogin = () => {
    googleSignIn(navigate, location);
}

    return (
        <>
        <Container sx={{my: 8}}>
            <Box sx={{flexGrow: 1}} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Card sx={{ display: 'flex',justifyContent: 'center', alignItems: 'center'}}  style={{width: '70%', height: '70%'}}>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={6}>
                          
                                <img src={image} alt="" style={{width: '100%', height: '100%', objectFit: 'fill'}}/>
                         
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} >
                        <Box sx={{py: 5}}>
                            <Typography variant='h6' gutterBottom component="div" sx={{mb:3}}>Login</Typography>
                            <div className="flex justify-center ">
                            { isLoading && <CircularProgress/>}
                            </div>
                            <form onSubmit={handleFormSubmit}>
                                <TextField
                                sx={{width: '60%', mb:1}}
                                required
                                label="Your Email"
                                id="outlined-size-small"
                                size="small"
                                name="email"
                                type="email"
                                onBlur={handleOnBlur}
                                />
                                <TextField
                                sx={{width: '60%', mb:1}}
                                required
                                label="Your Password"
                                id="outlined-size-small"
                                size="small"
                                name="password"
                                type="password"
                                onBlur={handleOnBlur}
                                />
                                <br />
                                <NavLink to="/register" style={{textDecoration: 'none'}}>
                                    <span> New user? Please Register</span>
                                </NavLink>
                                <br />
                                <Button type="submit" sx={{width: '60%', m: 1, background: 'orange'}} variant="contained">Login</Button>
                            </form>
                            {user.email && <Typography sx={{textColor: 'green'}}>Congrats, Login successfully</Typography>}
                            {authError && <Typography sx={{textColor: 'red'}}>{authError}</Typography>}
                            <Button onClick={handleGoogleLogin} sx={{width: '60%', m: 3, background: 'orange'}} variant="contained" >GOOGLE LOGIN</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Card>  
            </Box>    
        </Container>
        <Footer/>
        </>
    );
};

export default Login;