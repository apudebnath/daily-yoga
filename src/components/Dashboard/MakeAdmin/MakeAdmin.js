import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    //const [userData, setUserData] = useState({});
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        e.preventDefault();
        const user = {email};
        fetch('https://secure-crag-84125.herokuapp.com/users/admin',{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            //setUserData(data)
            if(data.modifiedCount){
                setSuccess(true);
            }
        })
         e.target.reset();
    }
    return (
        <Container>
            <h2>Make an Admin</h2>
            <Grid>
                <form onSubmit = {handleAdminSubmit}>
                    <TextField
                    sx={{width: '60%', mb: 2}}
                    label='Enter Email'
                    variant= 'standard'
                    onBlur= {handleOnBlur}
                    ></TextField>
                    <Button type='submit' variant="contained" sx={{background: 'orange'}}>Make an Admin</Button>
                </form>
                {success && <Typography variant='h6'>
                    Admin create successfully.    
                </Typography>}
            </Grid>
        </Container>
    );
};

export default MakeAdmin;