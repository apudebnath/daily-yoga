import { Button, Container, Grid, IconButton, List, ListItemText, TextField, Typography } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YoutubeIcon from '@mui/icons-material/YouTube';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';


const Footer = () => {
    const useStyle = makeStyles({
        iconStyle: {
            color: 'orange!important',
            background: '#ffffff!important',
            border: '1px solid orange!important',
            margin: '10px 10px 30px 0!important',
            '&:hover' : {
                color:'#17252a!important',
                background: '#ffff!important',
                border: '1px solid #17252a!important',
            }
        }
    })
    const {iconStyle} = useStyle();
    return (
        <Box sx={{background: '#F7F7F7'}}>
            <Container>
                <Box sx={{flexGrow: 1}}>
                    <Grid container spacing={{ xs: 3, md: 5 }} sx={{mb: 5}}>
                        <Grid item xs={12} sm={12} md={3}>
                            <List sx={{mt:5}}>
                                <Typography variant='h4' sx={{mb:1}}>Daily Yoga</Typography>
                                <Typography variant='body1' sx={{mb:3}}>The Daily Yoga is an exclusive and committed organization to spread the information of the Yoga.</Typography>
                                <IconButton sx={{mr: 1}} className={iconStyle}><FacebookIcon/></IconButton>
                                <IconButton sx={{mr: 1}} className={iconStyle}><TwitterIcon/></IconButton>
                                <IconButton sx={{mr: 1}} className={iconStyle}><YoutubeIcon/></IconButton>
                                <IconButton sx={{mr: 1}} className={iconStyle}><InstagramIcon/></IconButton>
                            </List>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>
                            <List sx={{mt:5}}>
                                <Typography sx={{fontSize: '24px', color: '#17252a', mb: 1}}>Our Process
                                </Typography>
                                <ListItemText sx={{fontSize: '24px',color: '#7E7E7E'}}>Concentration</ListItemText>
                                <ListItemText sx={{fontSize: '24px',color: '#7E7E7E'}}>Basic thinking</ListItemText>
                                <ListItemText sx={{fontSize: '24px',color: '#7E7E7E'}}>Secondary Steps</ListItemText>
                                <ListItemText sx={{fontSize: '24px',color: '#7E7E7E'}}>Expertise stage</ListItemText>
                            </List>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>
                            <List sx={{mt:5}}>
                                <Typography sx={{fontSize: '24px', color: '#17252a', mb: 1}}>Resources
                                </Typography>
                                <ListItemText sx={{color: '#7E7E7E'}}>Yoga Practice Center</ListItemText>
                                <ListItemText sx={{color: '#7E7E7E'}}>Special site</ListItemText>
                                <ListItemText sx={{color: '#7E7E7E'}}>Documentation</ListItemText>
                                <ListItemText sx={{color: '#7E7E7E'}}>Special Toolkit</ListItemText>
                            </List>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>
                            <List sx={{mt:5}}>
                                <Typography sx={{fontSize: '24px', color: '#17252a', mb: 1}}>Connect with Us</Typography>
                                <form>
                                <TextField
                                sx={{width: '80%',}}
                                required
                                label="Your Email"
                                id="outlined-size-small"
                                size="small"
                                name="email"
                                type="email"
                                onBlur=""
                                />
                                <Button type="submit" sx={{width: '80%', m: 1, background: 'orange'}} variant="contained">Send</Button>
                                </form>
                                <ListItemText sx={{fontSize: '20px', color: '#17252a'}}>333/5 DestintGer, OldHome</ListItemText>
                                <ListItemText sx={{fontSize: '20px', color: '#17252a'}}>YanstShayer</ListItemText>
                                <ListItemText sx={{fontSize: '20px', color: '#17252a', mb: 1}}>Tel: +022 555 696969</ListItemText>
                            </List>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Grid sx={{py:4, background: '#18252f'}}>
                <Typography sx={{color: '#2b6d7d',}}>Copyright - {new Date().getFullYear()}&copy; || All rights reserved By - <strong>Daily Yoga</strong></Typography>
            </Grid>
        </Box>
    );
};

export default Footer;