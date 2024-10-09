import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';

import ayyappa from '../../images/keralaImages/godAyyappa.jpg';
import attukal from '../../images/keralaImages/attukalceleb.jpg';
import aranmula from '../../images/keralaImages/godAranmula.jpg';
import chottanikkara from '../../images/keralaImages/godchottanikkara.jpg';
import ganesh from '../../images/keralaImages/godganesh.jpg';
import padmanabaswamy from '../../images/keralaImages/godpadmanabaswamy.jpg';
import malayala from '../../images/keralaImages/godmalayalappuzha.jpg';
import srikrishna from '../../images/keralaImages/godsrikrishna.jpg';
import nagaraja from '../../images/keralaImages/godnagaraja.jpeg';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const images = [
  { src: ayyappa, alt: 'Ayyappa Swamy', title: 'Ayyappa Swamy', location: 'Pathanamthitta', description: 'God Brahma is the Hindu creator deity, responsible for the creation of the universe and all living beings.' },
  { src: attukal, alt: 'Malayalapuzha Bhagavathy', title: 'Malayalapuzha Bhagavathy', location: 'Pathanamthitta', description: 'Meenakshi Matha, an incarnation of Goddess Parvati, is the presiding deity of the Meenakshi Amman Temple in Madurai.' },
  { src: aranmula, alt: 'Lord Krishna', title: 'Lord Krishna', location: 'Kerala', description: 'Lord Shiva is worshipped as Arunachaleswarar at the Arunachaleswarar Temple.' },
  { src: chottanikkara, alt: 'Thalli Rajarajeswari', title: 'Thalli Rajarajeswari', location: 'Kochi', description: 'Ravanasura is the primary antagonist in the Ramayana, known for abducting Sita.' },
  { src: ganesh, alt: 'Vinayaka Swamy', title: 'Vinayaka Swamy', location: 'Thiruvananthapuram', description: 'Lord Vishnu is a principal Hindu deity, known as the preserver of the universe.' },
  { src: padmanabaswamy, alt: 'Padmanabaswamy', title: 'Padmanaba Swamy', location: 'Vellore', description: 'Lakshmi Devi is the Hindu goddess of prosperity, often depicted on a lotus.' },
  { src: malayala, alt: 'Bhadrakali Matha', title: 'Bhadrakali Matha', location: 'Thrissur', description: 'Meenakshi Amman is the principal goddess of the Meenakshi Amman Temple in Madurai.' },
  { src: srikrishna, alt: 'God Sri Krishna', title: 'God Sri Krishna', location: 'Guruvayoor', description: 'In Rameshwaram, Lord Shiva is worshipped as Ramanathaswamy, one of the twelve Jyotirlingas.' },
  { src: nagaraja, alt: 'Nagaraja Swamy', title: 'Nagaraja Swamy', location: 'Alappuzha', description: 'Kumara Swamy, or Kartikeya, is the Hindu god of war and the son of Lord Shiva and Goddess Parvati.' },
];

const Kerala = () => {
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
      <Typography variant="h4" component="h1" gutterBottom marginTop='100px' marginLeft='585px' textTransform='uppercase' fontFamily='initial'>
        Kerala
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

export default Kerala;
