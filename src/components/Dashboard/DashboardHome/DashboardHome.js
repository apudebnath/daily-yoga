import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

const image=('https://i.ibb.co/Bf35Tmk/image12.jpg');

const DashboardHome = () => {
    return (
        <Container>
            <Typography variant='h3'>Welcome to Daily Yoga</Typography>
            <Typography paragraph>
             <Grid container spacing={5} sx={{pt:5}}>
                 <Grid item xs={6}>
                     <img src={image} alt="" />
                 </Grid>
                 <Grid item xs={6} sx={{textAlign: 'left'}}>
                     <Typography variant='h4' sx={{color: 'orange', }}>Hello!!!</Typography>
                     <Typography variant='h6'>
                     Join The Yoga International Community
                     </Typography>
                     <Typography>
                         <br />
                        You can find daily inspiration or dive into workshops when you join the Yoga International community. We believe in yoga’s profound effects and whole-life benefits. That’s why we offer highly accessible information to support every member, from those who are new to yoga to those who are advancing their practice. <br/> <br />
                        Join a yoga community that provides both restorative and powerful classes, valuable health tips, motivating workshops and more. Accessing yoga online will connect you to standout teachers and unique perspectives. Stream a live event, benefit from a soothing sequence, or participate in a fun challenge.
                        <br />
                        
                         Some of us are attracted to the strength and mobility aspects of asana, while others connect more with the philosophies espoused in class. Some come to yoga to find a sense of belonging and connection through community, while others want to explore the psychological inquiry facilitated by the somatic journey of movement, breath, and awareness. 

                     </Typography>
                 </Grid>
                 <Grid item xs={6}></Grid>
                 
             </Grid>
            
          </Typography>
        </Container>
    );
};

export default DashboardHome;