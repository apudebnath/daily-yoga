import { Card, CardContent, Container, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ShowReviews = () => {
    const [reviews, setReviews] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        /* responsive:[
          {
            breakpoint: 992,
            settings: {
                slideToShow: 2,
                slideToScroll: 2,
                initialSlide: 2,
            }
          },
          {
            breakpoint: 785,
            settings: {
                slideToShow: 2,
                slideToScroll: 2,
                initialSlide: 2,
            } 
          },
          {
            breakpoint: 574,
            settings: {
                slideToShow: 1,
                slideToScroll: 1,
                initialSlide: 1,
            } 
          },
      ] */
    };
    return (
        <Container sx={{mt: 8, mb:16}}>
            <Typography variant='h4' sx={{pb:5}}> Our Client Voice </Typography>
            <Slider {...settings}>
                {
                    reviews.map(review => <Box style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Card sx={{background: 'rgba(65, 189, 204, 0.2)',  py: 5}}
                    key={review._id}>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div" sx={{pb: 3}}>
                            Happy opinion
                          </Typography>
                          <Typography variant="body1" color="text.secondary" >
                            {review.review}
                          </Typography>
                          <Rating name='read-only' sx={{pt: 5}} value={review.value}/>
                          <Typography variant='subtitle1' gutterBottom component="div" sx={{fontSize: '18px', color: '#17252a', textAlign: 'right', pr: 8}}> - {review.name}</Typography>
                        </CardContent>
                    </Card>
                </Box>)
                }
            </Slider>
      </Container>
    );
};

export default ShowReviews;