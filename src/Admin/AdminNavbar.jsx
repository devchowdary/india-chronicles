import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Menu, MenuItem, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const AdminNavbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
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

    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit',
    };

    return (
        <AppBar position="static">
            <Toolbar>
                {/* Centered Links */}
                <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
                    {/* Tours Dropdown */}
                    <Button
                        color="inherit"
                        sx={{ mx: 2 }} // Add horizontal margin for spacing
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

                    {/* Other Links */}
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
        </AppBar>
    );
};

export default AdminNavbar;
