import React from 'react';
import { Box, Typography, Link, IconButton, Grid } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{   
        backgroundColor: '#1e1e1e',
        color: 'white',
        padding: '40px 20px',
        position: 'relative',
        bottom: 0,
        height:'180px',
        width: '100%',
        textAlign: 'center',
        boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.3)',
        marginTop:'100px'
      }}
    >
      {/* Main Content */}
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
            Indian Heritage
          </Typography>
          <Typography variant="body2">
            Explore the rich culture and history of India through monuments, cuisine, and more.
          </Typography>
        </Grid>

        {/* Links Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
            Quick Links
          </Typography>
          <Typography variant="body2">
            <Link href="/" color="inherit" underline="hover">
              Home
            </Link>
            <br />
            <Link href="/about" color="inherit" underline="hover">
              About Us
            </Link>
            <br />
            <Link href="/contact" color="inherit" underline="hover">
              Contact
            </Link>
            <br />
            <Link href="/team" color="inherit" underline="hover">
              Our Team
            </Link>
          </Typography>
        </Grid>

        {/* Social Media Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
            Follow Us
          </Typography>
          <Box>
            <IconButton color="inherit" href="https://www.instagram.com" target="_blank">
              <InstagramIcon />
            </IconButton>
            <IconButton color="inherit" href="https://www.linkedin.com" target="_blank">
              <LinkedInIcon />
            </IconButton>
            <IconButton color="inherit" href="https://github.com" target="_blank">
              <GitHubIcon />
            </IconButton>
            <IconButton color="inherit" href="mailto:contact@example.com" target="_blank">
              <EmailIcon />
            </IconButton>
            <IconButton color="inherit" href="tel:+123456789" target="_blank">
              <PhoneIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Text */}
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Indian Heritage. All rights reserved by Dev Chowdary💛.
        </Typography>
        <Typography variant="body2" sx={{ marginTop: 1 }}>
          <Link href="/privacy-policy" color="inherit" underline="hover">
            Privacy Policy
          </Link>{' | '}
          <Link href="/terms-of-service" color="inherit" underline="hover">
            Terms of Service
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
