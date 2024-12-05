import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import axios from 'axios';

const SessionManager = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('token')); // Get token from localStorage initially

    useEffect(() => {
        const timer = setTimeout(() => setShowPopup(true), 10 * 60 * 1000); // Trigger after 10 minutes
        return () => clearTimeout(timer); // Clear timeout on component unmount
    }, []);

    // Refresh the session with the current token
    const handleExtendSession = async () => {
        try {
            // Send the current token to the backend to refresh it
            const response = await axios.post('https://indiachronicles-backend.onrender.com/user/refresh-token', {}, {
                headers: { Authorization: `Bearer ${token}` }, // Send the current token in the Authorization header
            });

            const newToken = response.data.token; // Get the new token from the response
            setToken(newToken); // Update the token state
            localStorage.setItem('token', newToken); // Store the new token in localStorage
            setShowPopup(false); // Close the popup
        } catch (error) {
            console.error('Failed to refresh token:', error);
            handleLogout(); // If the token refresh fails, log out the user
        }
    };

    // Log out the user by removing the token
    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove the token from localStorage
        setShowPopup(false); // Close the popup
        window.location.href = '/login'; // Redirect to the login page
    };

    return (
        <Dialog open={showPopup} onClose={handleLogout}>
            <DialogTitle>Session Timeout</DialogTitle>
            <DialogContent>
                <Typography>Your session is about to expire. Would you like to extend it?</Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleExtendSession} color="primary" variant="contained">
                    Extend Session
                </Button>
                <Button onClick={handleLogout} color="secondary" variant="outlined">
                    Logout
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default SessionManager;
