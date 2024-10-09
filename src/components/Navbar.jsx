import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, IconButton, InputBase } from '@mui/material';
import { Link } from 'react-router-dom';
import { Search as SearchIcon } from '@mui/icons-material';
import logo from '../images/logo.jpg';

const Navbar = ({ onSearch }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State to track if search is open
  const [searchInput, setSearchInput] = useState(''); // State for search input

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen); // Toggle search field open/close
  };

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value); // Update search input state
    onSearch(event.target.value); // Pass search input to parent (HomePage)
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{
        backgroundColor: '#f5f5f5',
        color: '#000',
        boxShadow: 'none',
        zIndex: 1201, // Ensure navbar stays on top
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
              padding: 0
            }}
          >
            <img 
              src={logo} 
              alt="India Chronicles Logo" 
              style={{ height: '60px', width: 'auto', borderRadius: "25px", backgroundColor: 'orange' }} 
            />
          </Button>
        </Box>

        {/* Navigation Links - Center */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
          <Button color="inherit" component={Link} to="/" sx={{ fontSize: '0.95rem', padding: '6px 12px' }}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/explore" sx={{ fontSize: '0.95rem', padding: '6px 12px' }}>
            Explore 
          </Button>
          <Button color="inherit" component={Link} to="/tours" sx={{ fontSize: '0.95rem', padding: '6px 12px' }}>
            Tours
          </Button>
          <Button color="inherit" component={Link} to="/traditions" sx={{ fontSize: '0.95rem', padding: '6px 12px' }}>
            Traditions
          </Button>
          <Button color="inherit" component={Link} to="/monuments" sx={{ fontSize: '0.95rem', padding: '6px 12px' }}>
            Monuments
          </Button>
        </Box>

        {/* Search Icon - Align Right */}
        <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <IconButton 
            onClick={handleSearchClick} 
            sx={{ 
              color: '#000', 
              padding: 0, 
              mr: isSearchOpen ? 1 : 0, 
              transition: 'all 0.3s ease' 
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
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
