import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Grid, Divider } from '@mui/material';
import Footer from '../components/Footer';
import { address } from 'framer-motion/client';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    address:''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <>
      <Box sx={{ backgroundColor: '#f4f4f4', minHeight: '100vh', paddingTop: '50px',marginLeft:'300px',marginTop:'100px' }}>
        <Container maxWidth="md">
          <Box textAlign="center" mb={6}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
              Contact Us
            </Typography>
            <Divider variant="middle" sx={{ width: '60%', mx: 'auto', mb: 4, bgcolor: 'secondary.main', height: 2 }} />
            <Typography variant="body1" color="textSecondary" sx={{ fontSize: '1.2rem', mb: 4 }}>
              We'd love to hear from you! Please fill out the form below or reach out to us directly.
            </Typography>
          </Box>

          {/* Contact Form */}
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  variant="outlined"
                  margin="normal"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  variant="outlined"
                  margin="normal"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  required
                />
                 <TextField
                  fullWidth
                  label="Address"
                  name="address"
                  variant="outlined"
                  margin="normal"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  required
                />
                <TextField
                  fullWidth
                  label="Queries"
                  name="message"
                  variant="outlined"
                  margin="normal"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2, fontWeight: 'bold',marginLeft:'120px' }}
                >
                  Send Message
                </Button>
              </form>
            </Grid>

            {/* Contact Details */}
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.dark' }}>
                  Get In Touch
                </Typography>
                <Typography variant="body1" color="textSecondary" sx={{ fontSize: '1.1rem', mb: 1 }}>
                  Email: contact@cultureheritage.in
                </Typography>
                <Typography variant="body1" color="textSecondary" sx={{ fontSize: '1.1rem', mb: 1 }}>
                  Phone: +91 9701772245
                </Typography>
                <Typography variant="body1" color="textSecondary" sx={{ fontSize: '1.1rem', mb: 1 }}>
                  Address: 123,Vaddeswaram,Vijayawada, India
                </Typography>
                <Typography variant="body1" color="textSecondary" sx={{ fontSize: '1.1rem' }}>
                  Feel free to reach out via email, phone, or drop by our office.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box marginTop='50px' marginLeft='270px'>
      <Footer />
      </Box>
      
    </>
  );
};

export default Contact;
