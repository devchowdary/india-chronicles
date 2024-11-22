// src/pages/ContactPage.js
import React from 'react';
import { Box, Typography, TextField, Button, Grid, IconButton } from '@mui/material';

const Contact = () => {
  return (
    <Box
      sx={{
        padding: '20px',
        maxWidth: '600px', // Decreased the max width
        margin: '0 auto',
        textAlign: 'center',
        border: '1px solid #ccc', // Added border
        borderRadius: 2, // Added border radius
        boxShadow: 3, // Optional: adds a shadow for better look
        marginTop:'100px',
        backgroundColor:'white'
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom color='black' fontStyle={'oblique'}>
        Contact Us
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ marginBottom: 4 }}>
        Have any questions or want to get in touch? Fill out the form below, or reach out via email, phone, or our social media.
      </Typography>

      {/* Form Section */}
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
        noValidate
        autoComplete="off"
      >
        <TextField label="Name" variant="outlined" fullWidth required />
        <TextField label="Email" variant="outlined" type="email" fullWidth required />
        <TextField label="Message" variant="outlined" multiline rows={4} fullWidth required />
        <Button variant="contained" color="primary" size="large" sx={{ marginTop: 2 }}>
          Send Message
        </Button>
      </Box>

    </Box>
  );
};

export default Contact;
