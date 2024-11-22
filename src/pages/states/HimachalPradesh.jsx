import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import bababalak from '../../images/himachalImages/bababalak.jpeg';
import chamundadevi from '../../images/himachalImages/chamundadevi.jpg';
import durga from'../../images/himachalImages/durga.jpg';
import hanuman from'../../images/himachalImages/hanuman.jpg';
import jwalamukhi from'../../images/himachalImages/jwalamukhi.jpg';
import lakshanadevi from'../../images/himachalImages/lakshanadevi.jpg';
import lordram from'../../images/himachalImages/lordram.jpg';
import taradevi from '../../images/himachalImages/taradevi.jpg';
import triloknadh from '../../images/himachalImages/triloknadh.jpg';
import Navbar from '../../components/Navbar';

const images = [
  { src: bababalak, alt: 'baba balak', title: 'baba balak', location: 'chakmoh', description: 'Ravanasura, the ten-headed king of Lanka, is the primary antagonist in the Ramayana, known for abducting Sita. Despite his villainy, he is revered for his wisdom, power, and devotion to Lord Shiva.' },
  { src: chamundadevi, alt: 'goddess chamunda devi', title: 'goddess chamunda devi', location: 'padar', description: 'God Brahma is the Hindu creator deity, responsible for the creation of the universe and all living beings. As part of the Hindu trinity, Brahma is the deity who created the cosmos and established time.' },
  { src: durga, alt: 'goddess durga', title: 'goddess durga', location: 'shimla', description: 'Meenakshi Matha, an incarnation of Goddess Parvati, is the presiding deity of the Meenakshi Amman Temple in Madurai and is revered for her beauty, strength, and compassion.' },
  { src: hanuman, alt: 'hanuman', title: 'lord hanuman', location: 'shimla', description: 'Lord Shiva is worshipped as Arunachaleswarar at the Arunachaleswarar Temple. The Arunachala hill as a fiery lingam, celebrated during the Karthigai Deepam festival with a giant lamp.' },
  { src: jwalamukhi, alt: 'goddess jwalamukhi', title: 'goddess jwalamukhi', location: 'jwalamukhi', description: 'Lord Vishnu is a principal Hindu deity, known as the preserver of the universe. He is often depicted with a blue complexion and incarnates as various forms, such as Rama and Krishna, to restore cosmic order.' },
  { src: lakshanadevi, alt: 'goddess lakshana devi', title: 'lakshana devi', location: 'bharmour', description: 'Lakshmi Devi is the Hindu goddess of prosperity, often depicted on a lotus. She is the consort of Lord Vishnu and is worshipped for blessings of abundance, especially during festivals like Diwali.' },
  { src: lordram, alt: 'lord ram', title: 'lord rama', location: 'kangra', description: 'Meenakshi Amman is the principal goddess of the Meenakshi Amman Temple in Madurai, Tamil Nadu. An incarnation of Goddess Parvati, she is revered for her beauty and strength.' },
  { src: taradevi, alt: 'goddess tara', title: 'goddess tara devi', location: 'shimla', description: 'In Rameshwaram, Lord Shiva is worshipped as Ramanathaswamy, one of the twelve Jyotirlingas. Significant for its sacred rituals, it is believed to have been built by Lord Rama to atone for his sins.' },
  { src: triloknadh, alt: 'god triloknadh', title: 'god triloknadh', location: 'lahaul', description: 'Kumara Swamy, or Kartikeya, is the Hindu god of war and the son of Lord Shiva and Goddess Parvati. He is celebrated for his valor and wisdom, with festivals like Thaipusam dedicated to him.' },
];


const HimachalPradesh = () => {
  const [searchInput, setSearchInput] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in
    const token = localStorage.getItem("token");
    if (!token) {
      setIsLoggedIn(false);
      navigate("/login");  // Redirect to login if not logged in
    } else {
      setIsLoggedIn(true);
    }
  }, [navigate]);

  const handleSearchChange = (value) => {
    setSearchInput(value);
  };

  const filteredImages = images.filter((image) =>
    image.title.toLowerCase().includes(searchInput.toLowerCase()) ||
    image.location.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    isLoggedIn ? 
    (
      <Container sx={{ marginTop: '40px', padding: 0 }}>
        <Typography variant="h4" component="h1" gutterBottom marginTop='100px' marginLeft='450px' textTransform='uppercase' fontFamily='initial' fontSize='40px'>
          Himachal Pradesh
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
      </Container>
    ) : (
      // Show message if not logged in
      <Typography variant="h6" color="error" marginTop="20px" textAlign="center">
        Please log in to access this page.
      </Typography>
    )
  );
};

export default HimachalPradesh;
