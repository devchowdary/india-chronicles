import React from 'react';
import { Typography, Container } from '@mui/material';

const AdminProfile = () => {
    return (
        <Container>
            <Typography variant="h3" gutterBottom>
                Admin Profile
            </Typography>
            <Typography variant="body1">
                Manage your profile details here.
            </Typography>
        </Container>
    );
};

export default AdminProfile;
