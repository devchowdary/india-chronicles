import React from 'react';
import { Container, Grid, Typography, Box, Link } from '@mui/material';
import { Facebook, Twitter, Instagram, Info, Email, Group } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#222',
      color: '#fff',
      padding: '40px 20px',
      textAlign: 'center',
      position: 'relative',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box>
              <Typography variant="h6" component="h3" gutterBottom>
                Quick Links
              </Typography>
              <Box sx={{
                display: 'flex',
                justifyContent: 'center', 
                gap: 4, 
                flexWrap: 'wrap' 
              }}>
                <Link href="/about" color="inherit" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                  <Info sx={{ mr: 1 }} />
                  About Us
                </Link>
                <Link href="/contact" color="inherit" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                  <Email sx={{ mr: 1 }} />
                  Contact
                </Link>
                <Link href="/team" color="inherit" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                  <Group sx={{ mr: 1 }} />
                  Team
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box>
              <Typography variant="h6" component="h3" gutterBottom>
                Follow Us
              </Typography>
              <Box sx={{
                display: 'flex',
                justifyContent: 'center', // Center items horizontally
                gap: 2 // Space between icons
              }}>
                <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                  <Facebook fontSize="large" />
                </Link>
                <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                  <Twitter fontSize="large" />
                </Link>
                <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                  <Instagram fontSize="large" />
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Typography variant="body2" color="inherit" style={{ marginTop: '30px', fontSize: "18px" }}>
          &copy; {new Date().getFullYear()} Dev Chowdary💛. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
