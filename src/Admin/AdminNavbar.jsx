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
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const AdminNavbar = () => {
  const [dataAnchorEl, setDataAnchorEl] = useState(null); // For Data dropdown
  const [subMenuAnchorEl, setSubMenuAnchorEl] = useState(null); // For left-side dropdown
  const [drawerOpen, setDrawerOpen] = useState(false); // For mobile drawer
  const [activeCategory, setActiveCategory] = useState(null); // Track active submenu
  const navigate = useNavigate();

  const handleMenuOpen = (setAnchorEl, category = null) => (event) => {
    setAnchorEl(event.currentTarget);
    if (category) setActiveCategory(category);
  };

  const handleMenuClose = (setAnchorEl) => () => {
    setAnchorEl(null);
    setActiveCategory(null);
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

  const subMenuItems = {
    Tours: [
      { text: 'View Tours', path: '/admin/tours/view' },
      { text: 'Add Tour', path: '/admin/tours/add' },
    ],
    Monuments: [
      { text: 'View Monuments', path: '/admin/view-monuments' },
      { text: 'Add Monument', path: '/admin/add-monument' },
    ],
    Hotels: [
      { text: 'View Hotels', path: '/admin/view-hotels' },
      { text: 'Add Hotel', path: '/admin/add-hotel' },
    ],
  };

  const handleLogoClick = () => {
    navigate('/admin-dashboard'); // Redirect to Admin Dashboard
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Admin Logo on the Left */}
        <Box sx={{ flexGrow: 1 }}>
          <IconButton onClick={handleLogoClick} edge="start" color="inherit">
            <AdminPanelSettingsIcon />
          </IconButton>
        </Box>

        {/* Hamburger Menu for Mobile */}
        <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1 }}>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Links for Desktop */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'center' }}>
          {/* Main Data Dropdown */}
          <Button
            color="inherit"
            sx={{ mx: 2 }}
            onClick={handleMenuOpen(setDataAnchorEl)}
          >
            Data
          </Button>
          <Menu
            anchorEl={dataAnchorEl}
            open={Boolean(dataAnchorEl)}
            onClose={handleMenuClose(setDataAnchorEl)}
          >
            {Object.keys(subMenuItems).map((category) => (
              <MenuItem
                key={category}
                onClick={handleMenuOpen(setSubMenuAnchorEl, category)}
                onMouseEnter={handleMenuOpen(setSubMenuAnchorEl, category)}
              >
                {category}
              </MenuItem>
            ))}
          </Menu>

          {/* Submenu for Tours, Monuments, and Hotels */}
          <Menu
            anchorEl={subMenuAnchorEl}
            open={Boolean(subMenuAnchorEl)}
            onClose={handleMenuClose(setSubMenuAnchorEl)}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          >
            {activeCategory &&
              subMenuItems[activeCategory].map((item) => (
                <MenuItem key={item.text} onClick={handleMenuClose(setSubMenuAnchorEl)}>
                  <Link to={item.path} style={linkStyle}>
                    {item.text}
                  </Link>
                </MenuItem>
              ))}
          </Menu>

          {/* Other menu items */}
          <Button color="inherit" sx={{ mx: 2 }}>
            <Link to="/admin/users/view" style={linkStyle}>
              View Users
            </Link>
          </Button>
          <Button color="inherit" sx={{ mx: 2 }}>
            <Link to="/admin/profile" style={linkStyle}>
              Admin Profile
            </Link>
          </Button>
          <Button color="inherit" sx={{ mx: 2 }}>
            <Link to="/admin/queries/view" style={linkStyle}>
              View Queries
            </Link>
          </Button>
          <Button color="inherit" sx={{ mx: 2 }}>
            <Link to="/admin-bookings" style={linkStyle}>
              View Bookings
            </Link>
          </Button>
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
            {Object.keys(subMenuItems).map((category) => (
              <React.Fragment key={category}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary={category} />
                  </ListItemButton>
                </ListItem>
                {subMenuItems[category].map((item) => (
                  <ListItem key={item.text} disablePadding sx={{ pl: 4 }}>
                    <ListItemButton component={Link} to={item.path}>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </React.Fragment>
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
