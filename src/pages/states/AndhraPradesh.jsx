import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';
import tirupathi from '../../images/andhraImages/tirupathi.jpg';
import brahmam from '../../images/andhraImages/brahmamGariMatam2.jpg';
import srisailam from '../../images/andhraImages/srisailam.jpg';
import simhachalam from '../../images/andhraImages/simhachalam1.jpg';
import goddurga from '../../images/andhraImages/Godkanakadurga.jpg';
import kanipakam from '../../images/andhraImages/kanipakam2.jpg';
import saraswathi from '../../images/andhraImages/saraswathi4.jpg';
import yaganti from '../../images/andhraImages/yaganti-temple-kurnoo2.jpg';
import ranganadha from '../../images/andhraImages/ranganadhaTemple3.jpg';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const images = [
  { src: tirupathi, alt: 'Tirupati', title: 'Tirupati Balaji Temple', location: 'Tirupathi', description: 'A magnificent temple dedicated to Lord Venkateswara, attracting millions of devotees annually for its spiritual significance and architectural beauty.' },
  { src: brahmam, alt: 'Brahmam Gari Matam', title: 'Brahmam Gari Matam', location: 'Kadapa', description: 'A sacred site known for its serene atmosphere and deep-rooted traditions, making it a popular pilgrimage destination.' },
  { src: srisailam, alt: 'SRISAILAM', title: 'Srisailam', location: 'Kurnool', description: 'Home to the ancient Mallikarjuna Temple, this site is revered for its historical importance and breathtaking landscapes.' },
  { src: simhachalam, alt: 'Simhachalam', title: 'Simhachalam', location: 'Kurnool', description: 'Famous for its scenic beauty and the historic Simhachalam Temple, which showcases intricate carvings and architectural brilliance.' },
  { src: goddurga, alt: 'LORD DURGA', title: 'Kanaka Durgamma', location: 'Vijayawada', description: 'A revered temple dedicated to Goddess Durga, known for its vibrant festivities and divine aura.' },
  { src: kanipakam, alt: 'LORD VINAYAKA', title: 'Vinayaka Swamy', location: 'Chittoor', description: 'Famous for its miraculous deity of Lord Ganesha, this temple attracts devotees seeking blessings and prosperity.' },
  { src: saraswathi, alt: 'LORD SARASWATHI', title: 'Saraswathi Devi', location: 'Kurnool', description: 'A sacred temple dedicated to Goddess Saraswati, symbolizing wisdom and knowledge, attracting students and scholars alike.' },
  { src: yaganti, alt: 'LORD YAGANTI', title: 'Uma Maheswara Swamy', location: 'Kurnool', description: 'Set amidst the lush hills, this temple is known for its scenic beauty and is believed to be a site of miracles and blessings.' },
  { src: ranganadha, alt: 'LORD RANGANADHA', title: 'Sri Ranganadha Swamy', location: 'Nellore', description: 'An ancient temple known for its stunning architecture and intricate sculptures, offering a glimpse into the region’s rich heritage.' },
];

const AndhraPradesh = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchChange = (value) => {
    setSearchInput(value);
  };

  const filteredImages = images.filter((image) =>
    image.title.toLowerCase().includes(searchInput.toLowerCase()) ||
    image.location.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <Container sx={{ marginTop: '40px', padding: 0 }}>
      <Typography variant="h4" component="h1" gutterBottom marginTop='100px' marginLeft='500px' textTransform='uppercase' fontFamily='initial'>
        Andhra Pradesh
      </Typography>
      
      <Navbar onSearch={handleSearchChange} />

      <Grid container spacing={4} justifyContent="flex-start">
        {filteredImages.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              onClick={() => { /* navigate to the specific page if needed */ }}
              sx={{
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 10px 30px rgba(0, 102, 255, 0.3), 0 6px 20px rgba(0, 102, 255, 0.15)',
                  cursor: 'pointer',
                },
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start', 
                marginLeft: '75px'
              }}
            >
              <CardMedia
                component="img"
                alt={image.alt}
                height="200"
                image={image.src}
                sx={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  {image.title.toUpperCase()}
                </Typography>
                <Typography variant="h6" component="h3" gutterBottom>
                  {image.location.toUpperCase()}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {image.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          marginTop: '40px',
          marginLeft: '120px'
        }}
      >
        <Footer />
      </Box>
    </Container>
  );
};

export default AndhraPradesh;
