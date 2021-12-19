
import { Button, Card, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import image from '../../../images/login2.jpg';
import Footer from '../../Shared/Footer/Footer';
const Registration = () => {
    const [registerData, setRegisterData] = useState({});
    const {registerWithEmail, user, isLoading, authError, googleSignIn} = useAuth();
    const navigate = useNavigate();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = {...registerData};
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
    }
    
    const handleFormSubmit = e => {
        e.preventDefault();
        if(registerData.password !== registerData.confirmPassword){
            alert("Password didn't match! Please enter the same password.")
            return;
        }
        registerWithEmail(registerData.email, registerData.password, registerData.name, navigate)
        e.target.reset();
    }
    const handleGoogleLogin = () => {
        googleSignIn();
    }
    return (
        <>
        <Container sx={{my: 8}}>
            <Box sx={{flexGrow: 1}} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '35px'}}>
                <Card sx={{ display: 'flex',justifyContent: 'center', alignItems: 'center'}}  style={{width: '70%', height: '70%'}}>
                    <Grid container >
                        <Grid item sx={12} sm={12} md={6}>
                          <img src={image} alt="" style={{width: '100%', height: '100%', objectFit: 'fill'}}/>
                        </Grid>
                        <Grid item sx={12} sm={12} md={6}>
                            <Typography variant='h6' gutterBottom component="div" sx={{my:3}}>Register</Typography>
                            { isLoading && <CircularProgress/>}
                            <form onSubmit={handleFormSubmit}>
                                <TextField
                                sx={{width: '60%', mb:1}}
                                required
                                label="Your Name"
                                id="outlined-size-small"
                                size="small"
                                name="name"
                                type="text"
                                onBlur={handleOnBlur}
                                />
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
                                <TextField
                                sx={{width: '60%', mb:1}}
                                required
                                label="Confirm Password"
                                id="outlined-size-small"
                                size="small"
                                name="confirmPassword"
                                type="password"
                                onBlur={handleOnBlur}
                                />
                                <br />
                                <NavLink to="/login" style={{textDecoration: 'none'}} >
                                    <span>Already Registered? Please Login</span>
                                </NavLink>
                                <br />
                                <Button type="submit" sx={{width: '60%', m: 1, background: 'orange'}} variant="contained">Register</Button>
                            </form>
                            {user.email && <Typography sx={{textColor: 'green'}}>Congrats, Register successfully</Typography>}
                            {authError && <Typography sx={{textColor: 'red'}}>{authError}</Typography>}
                            <Button onClick={handleGoogleLogin} sx={{width: '60%', m: 3, background: 'orange'}} variant="contained">GOOGLE LOGIN</Button>
                        </Grid>
                    </Grid>
                </Card>
            </Box>    
        </Container>
        <Footer/>
        </>
    );
};

export default Registration;