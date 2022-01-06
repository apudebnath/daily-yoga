import { Button, CircularProgress, Container, Grid, Rating, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const Reviews = () => {
    const {user, isLoading} = useAuth();
    const [review, setReview] = useState({});
    const [value, setValue] = useState(5);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReview = {...review};
        newReview[field] = value;
        setReview(newReview);
    }
    const handleSubmit = e => {
        e.preventDefault();
        const reviewData = {
            ...review,
            name: user.displayName,
            value,
        }
        console.log(reviewData);
        fetch('https://secure-crag-84125.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                alert('Review submit successfully')
            }
        })
        e.target.reset();
        if(isLoading){
            return <CircularProgress/>
        }
    }
    return (
        <Container>
            <Typography variant='h4' component='legend'>Reviews</Typography>
            <Typography variant='h6' component='legend'>Please share your valuable experience with us.</Typography>
            <Box sx={{flexGrow: 1}}>
                <Grid container >
                    <Grid item xs={12} sm={12} md={12}>
                        <form onSubmit={handleSubmit}>
                            <TextField
                            sx={{width: '60%', mb:2}}
                            id="standard-basic"
                            label="Please share review"
                            name="review"
                            type="text"
                            onBlur={handleOnBlur}
                            ></TextField>
                            <Typography component="legend">Review Rating</Typography>
                            <Rating
                            sx={{width: '60%', mb:1}}
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                            ></Rating>
                            <Button type="submit" sx={{width: '60%', background: 'orange'}} variant= 'contained'>Review Submit</Button>
                        </form>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Reviews;