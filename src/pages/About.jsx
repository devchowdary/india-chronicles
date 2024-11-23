// src/pages/AboutPage.js
import React from 'react';
import { Typography, Container, Box, Card, Grid, Avatar } from '@mui/material';
import { Helmet } from 'react-helmet';

// Replace with actual logo URLs
const logos = [
  { name: 'Incredible India', src: 'https://ih1.redbubble.net/image.3626599082.0979/flat,750x,075,f-pad,750x1000,f8f8f8.jpg' },
  { name: 'Archaeological Survey of India', src: 'https://upload.wikimedia.org/wikipedia/en/f/f3/Archaeological_Survey_of_India.jpg' },
  { name: 'Ministry of Culture, India', src: 'https://himachaltonite.com/wp-content/uploads/2020/10/Ministery-of-culture.png' },
  { name: 'Sahapedia', src: 'https://cdn.razorpay.com/logos/GUiH77AZJJN04f_large.png' },
  { name: 'Indian Heritage Society', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUaDLPH0gOL7_zdkywoX92nMhlRGGHnaG8KbrVUwj_SEGMH80xGP5kcdk0sNEQMUwZLv4&usqp=CAU' },
  { name: 'INTACH (Indian National Trust for Art and Cultural Heritage)', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmHzLj5kNlUm1bV5uY9oZXATaZ_FsPk_eWlYYRSmXzzCd_2jUyXDQZ0rmQiaS7dzVl5zo&usqp=CAU' },
  { name: 'National Museum, New Delhi', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFrUzrqAeV3bIL5JiN87GsREbvI8JcHm2Geg&s' },
  { name: 'Sangeet Natak Akademi', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwGxXQ4Gip5rTqfqkezAGZA-rGJ-0U8KXFkg&s' },
];

const About = () => {
  return (
    <Box sx={{ backgroundColor: 'white', width: '100%', py: 5, mt: '90px' }}>
      <Helmet>
        <title>About Us </title>
        <meta
          name="description"
          content="Learn about our vision and mission to bridge cultural gaps and showcase the vibrant heritage of India. Meet our partners and discover our journey."
        />
      </Helmet>

      <Container maxWidth="md">
        <Box textAlign="center">
          <Typography variant="h3" gutterBottom color="black">About Us</Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Discover our mission to celebrate and share the vibrant tapestry of Indian culture.
          </Typography>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom color='black' fontStyle={'oblique'}>Our Vision</Typography>
          <Typography variant="body1" color="text.secondary">
            We aim to create an immersive platform that showcases the beauty, diversity, and heritage of India through interactive virtual experiences, detailed insights into historical monuments, and explorations of traditional arts, crafts, music, and dance.
          </Typography>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom color='black' fontStyle={'oblique'}>Our Mission</Typography>
          <Typography variant="body1" color="text.secondary">
            Our mission is to bridge cultural gaps, bringing the world closer to Indian traditions. We want to provide an accessible resource for learning, appreciation, and engagement with India’s rich cultural legacy. Through interactive tours and curated content, we strive to inspire a global audience to connect with India’s historical and cultural wonders.
          </Typography>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom color='black' fontStyle={'oblique'}>Our Partners</Typography>
          <Grid container spacing={3} justifyContent="center">
            {logos.map((logo, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <Card variant="outlined" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 120 }}>
                  <Avatar src={logo.src} alt={logo.name} sx={{ width: 80, height: 80 }} />
                </Card>
                <Typography variant="body2" align="center" color="text.secondary">
                  {logo.name}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box mt={5} mb={4} textAlign="center">
          <Typography variant="h5" gutterBottom color='black' fontStyle={'oblique'}>Our Journey</Typography>
          <Typography variant="body1" color="text.secondary">
            This platform began as a dream to preserve and share India’s unique heritage. With passion and dedication, our team researched, documented, and curated each detail to bring you an authentic experience of India’s cultural richness. We believe that learning about the past and appreciating the present connects us to a shared future.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
