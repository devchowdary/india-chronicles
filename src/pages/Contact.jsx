// src/pages/ContactPage.js
import React from 'react';
import { Box, Typography, TextField, Button, Grid, IconButton } from '@mui/material';
import { Helmet } from 'react-helmet';

const Contact = () => {
  return (
    <Box
      sx={{
        padding: '20px',
        maxWidth: '600px',
        margin: '0 auto',
        textAlign: 'center',
        border: '1px solid #ccc', 
        borderRadius: 2,
        boxShadow: 3,
        marginTop:'100px',
        backgroundColor:'white'
      }}
    >
      <Helmet>
        <title>Contact Us </title>
        <meta
          name="description"
          content="Learn about our vision and mission to bridge cultural gaps and showcase the vibrant heritage of India. Meet our partners and discover our journey."
        />
      </Helmet>

      <Typography variant="h4" component="h1" gutterBottom color='black' fontStyle={'oblique'}>
        Contact Us
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ marginBottom: 4 }}>
        Have any questions or want to get in touch? Fill out the form below, or reach out via email, phone, or our social media.
      </Typography>

     
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
