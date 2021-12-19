import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';



const Navigation = () => {
    const {user, logOut} = useAuth();
    const theme = useTheme();
    const useStyle = makeStyles({
        navItem:{
            color: '#ffffff',
            textDecoration: 'none',
        },
        navIcon:{
            [theme.breakpoints.up('sm')]: {
                display: 'none !important',
              },
        },
        navContainer:{
            [theme.breakpoints.down('sm')]: {
                display: 'none !important',
              },
        },
        logo:{
            [theme.breakpoints.down('sm')]: {
                textAlign: 'right',
              },
              [theme.breakpoints.up('sm')]: {
                textAlign: 'left',
              },
        },
        mobileItem:{
            textDecoration: 'none',
            textAlign: 'center',
        }
    });
    const {navItem, navIcon, navContainer, logo, mobileItem } = useStyle();
    const [state, setState] = React.useState(false);
    // Mobile menu
    const list = (
        <Box
          sx={{ width: 250 }}
          role="presentation"
        >
          <List>
                <Link className={mobileItem} to="/">
                    <ListItem button sx={{ textAlign: 'center' }}>
                        <ListItemText>Home</ListItemText>
                    </ListItem>
                </Link>
              <Divider />
                <Link className={mobileItem} to="services">
                    <ListItem button sx={{ textAlign: 'center' }}>
                        <ListItemText>Services</ListItemText>
                    </ListItem>
                </Link>
              <Divider />
                <Link className={mobileItem} to="contact">
                    <ListItem button sx={{ textAlign: 'center' }}>
                        <ListItemText>Contact</ListItemText>
                    </ListItem>
                </Link>
              <Divider />
                <Link className={mobileItem} to="register">
                    <ListItem button sx={{ textAlign: 'center' }}>
                        <ListItemText>Register</ListItemText>
                    </ListItem>
                </Link>
              <Divider />
                { !user.email ? 
                <> 
                    <Link className={mobileItem} to="login">
                        <ListItem button sx={{ textAlign: 'center' }}>
                            <ListItemText>Login</ListItemText>
                        </ListItem>
                    </Link>
                    <Divider />
                </>
                :
                <>
                    <Link className={mobileItem} to="dashboard">
                        <ListItem button sx={{ textAlign: 'center' }}>
                            <ListItemText>Dashboard</ListItemText>
                        </ListItem>
                    </Link>
                    <Divider />
                    <Link className={mobileItem} to="logout">
                        <ListItem button onClick={logOut} sx={{ textAlign: 'center' }}>
                           <ListItemText>Logout</ListItemText>
                        </ListItem>
                    </Link>
                </> }
              <Divider />
          </List>
          <Divider />
        </Box>
    );
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{background: 'orange',}} sx={{py: 1}}>
                  <Toolbar>
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ mr: 2 }}
                      className={navIcon}
                      onClick={() => setState(true)}
                    >
                      <MenuIcon />
                    </IconButton>
                    <Typography className={logo} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                      <Link to='/' style={{textDecoration: 'none', fontSize: '38px', color: '#02346C'}}>Daily Yoga</Link>
                    </Typography>
                    <Box className={navContainer}>
                        <Link className={navItem} to="home"><Button color="inherit"className='mx-5 text-lg text-blue-500'>Home</Button></Link>
                        <Link className={navItem} to="services"><Button color="inherit" >Services</Button></Link>
                        <Link className={navItem} to="contact"><Button color="inherit" >Contact</Button></Link>
                        <Link className={navItem} to="register"><Button color="inherit" >Register</Button></Link>
                        {
                           user.email ?
                           <>
                           <Link className={navItem} to="dashboard"><Button color="inherit" >Dashboard</Button></Link>
                        
                           <Button onClick={logOut} className='mx-3 text-lg text-blue-500 rounded'><Button color="inherit" style={{color: 'orange',background: 'white', border: '1px solid white',}}>Logout</Button></Button>
                           </> 
                           :
                           <Link className={navItem} to="login" ><Button color="inherit" className='mx-5 text-lg text-blue-500'>Login</Button></Link>
                        }
                        <span>{user.displayName}</span>
                    </Box>
                    
                  </Toolbar>
                </AppBar>
            </Box>
            
            <div>
                  <React.Fragment>
                    <Drawer
                      open={state}
                      onClose={() => setState(false)}
                    >
                      {list}
                    </Drawer>
                  </React.Fragment>
            </div>
        </div>
    );
};

export default Navigation;