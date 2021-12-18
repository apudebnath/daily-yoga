import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Grid, ListItemButton } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import useAuth from './../../../Hooks/useAuth';
const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {logOut, admin} = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const useStyle = makeStyles({
    navItem:{
        color: '#ffffff',
        textDecoration: 'none',
    },
    mobileItem:{
        textDecoration: 'none',
        textAlign: 'center',
    }
});
const {navItem, mobileItem } = useStyle();
  const drawer = (
    <div>
      <Toolbar sx={{bgcolor: 'orange', display: "flex", justifyContent: 'center'}}>
        <Link className={mobileItem} to="/home">
          <ListItemButton sx={{ fontSize: '38px'}}>
            <ListItemText style={{color: 'white', fontSize: '38px'}}>Home</ListItemText>
          </ListItemButton>
        </Link>
      </Toolbar>
      <Divider />
      <List>
        {admin && <Box>
          <Link className={mobileItem} to="manageallorders">
            <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText>ManageAllOrders</ListItemText>
            </ListItemButton>
          </Link>
          <Divider />
          <Link className={mobileItem} to="addproduct">
            <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText>AddProduct</ListItemText>
            </ListItemButton>
          </Link>
          <Divider />
          <Link className={mobileItem} to="makeadmin">
            <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText>MakeAdmin</ListItemText>
            </ListItemButton>
          </Link>
        </Box>}
        <Divider />
        <Link className={mobileItem} to="myorders">
          <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText>MyOrders</ListItemText>
          </ListItemButton>
        </Link>
        <Divider />
        <Link className={mobileItem} to="payment">
          <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText>Payment</ListItemText>
          </ListItemButton>
        </Link>
        <Divider />
        {!admin && <Link className={mobileItem} to="reviews">
          <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText>Reviews</ListItemText>
          </ListItemButton>
        </Link>}
        <Divider />
        <Button onClick={logOut}>
        <Link className={mobileItem} to="logout">
          <ListItemButton sx={{ textAlign: 'center' }}>
              Logout
          </ListItemButton>
        </Link>
        </Button>
        <Divider />
      </List>
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              DashBoard
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Toolbar />
          <Outlet />
        </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
