import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const AdminNavbar = () => {
  const [anchorEl, setAnchorEl] = useState(null); // For dropdown menu
  const [drawerOpen, setDrawerOpen] = useState(false); // For mobile drawer
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Clear session data
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    localStorage.removeItem('token');
    navigate('/'); // Redirect to home page
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit',
  };

  const menuItems = [
    { text: 'View Tours', path: '/admin/tours/view' },
    { text: 'Add Tour', path: '/admin/tours/add' },
    { text: 'View Users', path: '/admin/users/view' },
    { text: 'Admin Profile', path: '/admin/profile' },
    { text: 'View Queries', path: '/admin/queries/view' },
    { text: 'View Bookings', path: '/admin-bookings' },
  ];

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Hamburger Menu for Mobile */}
        <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1 }}>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Links for Desktop */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'center' }}>
          <Button
            color="inherit"
            sx={{ mx: 2 }}
            onClick={handleMenuOpen}
          >
            Tours
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>
              <Link to="/admin/tours/view" style={linkStyle}>
                View Tours
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link to="/admin/tours/add" style={linkStyle}>
                Add Tour
              </Link>
            </MenuItem>
          </Menu>

          {menuItems.slice(2).map((item) => (
            <Button key={item.text} color="inherit" sx={{ mx: 2 }}>
              <Link to={item.path} style={linkStyle}>
                {item.text}
              </Link>
            </Button>
          ))}
        </Box>

        {/* Logout Button */}
        <Button color="inherit" onClick={handleLogout}>
          Logout
        </Button>
      </Toolbar>

      {/* Drawer for Mobile */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem>
              <ListItemText primary="Admin Panel" sx={{ fontWeight: 'bold' }} />
            </ListItem>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component={Link} to={item.path}>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <ListItemButton onClick={handleLogout}>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default AdminNavbar;
