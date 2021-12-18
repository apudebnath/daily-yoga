import { Grid, Typography } from '@mui/material';
import React from 'react';

const DashboardHome = () => {
    return (
        <div>
            <h2>Welcome to Daily Yoga Dashboard</h2>
            <Typography paragraph>
             <Grid container spacing={2}>
                 <Grid item xs={6}>
                     Hello!!!
                 </Grid>
                 <Grid item xs={6}></Grid>
                 
             </Grid>
            
          </Typography>
        </div>
    );
};

export default DashboardHome;