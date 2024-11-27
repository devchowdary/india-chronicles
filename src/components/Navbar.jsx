import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Search as SearchIcon, AccountCircle, Menu as MenuIcon } from '@mui/icons-material';
import logo from '../images/logo.jpg';

const Navbar = ({ onSearch }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State to track if search is open
  const [searchInput, setSearchInput] = useState(''); // State for search input
  const [anchorEl, setAnchorEl] = useState(null); // State for user menu anchor
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State for mobile drawer

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen); // Toggle search field open/close
  };

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value); // Update search input state
    onSearch(event.target.value); // Pass search input to parent (HomePage)
  };

  const handleUserClick = (event) => {
    setAnchorEl(event.currentTarget); // Set anchor for dropdown menu
  };

  const handleCloseMenu = () => {
    setAnchorEl(null); // Close dropdown menu
  };

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open); // Toggle the drawer state
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#f5f5f5',
        color: '#000',
        boxShadow: 'none',
        zIndex: 1201,
        transition: 'background-color 0.3s ease',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo Image - Align Left */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button
            component={Link}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 0,
            }}
          >
            <img
              src={logo}
              alt="India Chronicles Logo"
              style={{
                height: '50px',
                width: 'auto',
                borderRadius: '25px',
                backgroundColor: 'orange',
              }}
            />
          </Button>
        </Box>

        {/* Navigation Links - Hidden on Small Screens */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
          <Button color="inherit" component={Link} to="/" sx={{ fontSize: '0.95rem', padding: '6px 12px' }}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/explore" sx={{ fontSize: '0.95rem', padding: '6px 12px' }}>
            Temples
          </Button>
          <Button color="inherit" component={Link} to="/view-tours" sx={{ fontSize: '0.95rem', padding: '6px 12px' }}>
            Tours
          </Button>
          <Button color="inherit" component={Link} to="/traditions" sx={{ fontSize: '0.95rem', padding: '6px 12px' }}>
            Traditions
          </Button>
          <Button color="inherit" component={Link} to="/monuments" sx={{ fontSize: '0.95rem', padding: '6px 12px' }}>
            Monuments
          </Button>
        </Box>

        {/* Search Icon */}
        <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <IconButton
            onClick={handleSearchClick}
            sx={{
              color: '#000',
              padding: 0,
              mr: isSearchOpen ? 1 : 0,
              transition: 'all 0.3s ease',
            }}
          >
            <SearchIcon />
          </IconButton>

          {isSearchOpen && (
            <InputBase
              value={searchInput} // Controlled input
              onChange={handleSearchChange} // Trigger search change
              placeholder="Search…"
              sx={{
                width: isSearchOpen ? '200px' : '0px',
                transition: 'width 0.3s ease',
                borderRadius: 1,
                backgroundColor: 'white',
                paddingLeft: 2,
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
              }}
            />
          )}
        </Box>

        {/* Hamburger Menu for Mobile Screens */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton onClick={toggleDrawer(true)} sx={{ color: '#000' }}>
            <MenuIcon />
          </IconButton>
        </Box>

        <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
          <Box sx={{ width: 250 }}>
            <List>
              <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button component={Link} to="/explore" onClick={toggleDrawer(false)}>
                <ListItemText primary="Temples" />
              </ListItem>
              <ListItem button component={Link} to="/view-tours" onClick={toggleDrawer(false)}>
                <ListItemText primary="Tours" />
              </ListItem>
              <ListItem button component={Link} to="/traditions" onClick={toggleDrawer(false)}>
                <ListItemText primary="Traditions" />
              </ListItem>
              <ListItem button component={Link} to="/monuments" onClick={toggleDrawer(false)}>
                <ListItemText primary="Monuments" />
              </ListItem>
            </List>
          </Box>
        </Drawer>

        {/* User Icon - Dropdown Menu */}
        <Box>
          <IconButton onClick={handleUserClick} sx={{ color: '#000', borderRadius: '10px' }}>
            <AccountCircle />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
            <MenuItem component={Link} to="/login" onClick={handleCloseMenu}>
              Login
            </MenuItem>
            <MenuItem component={Link} to="/register" onClick={handleCloseMenu}>
              Registration
            </MenuItem>
            <MenuItem component={Link} to="/profile" onClick={handleCloseMenu}>
              Profile
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
