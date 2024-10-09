import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, Box, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import tajmahal from "../images/taj-mahal.jpg";
import qutabminar from "../images/qutab-minar.jpg";
import redfort from "../images/red-fort.jpg";
import Navbar from './Navbar'; // Ensure Navbar is updated
import { Facebook, Twitter, Instagram, Info, Email, Group } from '@mui/icons-material'; 
import Footer from './Footer'; 

const HomePage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(''); // State to track search query

  // Featured Content
  const featuredContent = [
    {
      title: 'Taj Mahal',
      description: 'An iconic symbol of India, known for its stunning white marble architecture.',
      location: "Agra",
      image: tajmahal,
      link: "/tajMahal"
    },
    {
      title: 'Qutub Minar',
      description: 'A historical minaret and victory tower in Delhi, renowned for its intricate carvings.',
      location: "Delhi",
      image: qutabminar,
      link: "/qutubMinar"
    },
    {
      title: 'Red Fort',
      description: 'A majestic fortification in Delhi, reflecting Mughal architecture and history.',
      location: "Delhi",
      image: redfort,
      link: "/redFort"
    }
  ];

  // Filter cards based on the search query
  const filteredContent = featuredContent.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Navbar onSearch={(query) => setSearchQuery(query)} /> {/* Pass search handler to Navbar */}

      {/* Hero Section */}
      <header style={{
        position: 'relative',
        background: 'url(../images/hero-bg.jpg) no-repeat center center',
        backgroundSize: 'cover',
        color: '#fff',
        padding: '80px 20px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100vw',
        boxSizing: 'border-box',
        overflow: 'hidden',
        backgroundAttachment: 'fixed' // Parallax effect
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))', // Softer gradient overlay
          zIndex: 0
        }} />
        <Container maxWidth="md" style={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h2" component="h1" gutterBottom style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
            fontWeight: 700,
            fontSize: '3rem',
            lineHeight: '1.2'
          }}>
            Explore the Rich Heritage of India
          </Typography>
          <Typography variant="h5" component="p" gutterBottom style={{
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.4)',
            fontSize: '1.5rem',
            lineHeight: '1.4'
          }}>
            Discover the historical places, famous monuments, and vibrant culture of India.
          </Typography>
          <Button
            variant="contained"
            color="error"
            onClick={() => navigate('/explore')}
            size="large"
            sx={{
              mt: 3,
              background: 'linear-gradient(45deg, #FF5722 30%, #F44336 90%)',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 8px 12px rgba(0, 0, 0, 0.5)',
              }
            }}
          >
            Explore by State
          </Button>
        </Container>
       
        <div className="particle-background" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url(../images/particles.png) no-repeat center center',
          backgroundSize: 'cover',
          opacity: 0.2,
          zIndex: 0
        }} />
      </header>

      {/* Featured Content Section */}
      <section style={{ padding: '40px 20px' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" gutterBottom>
            Iconic Landmarks and Timeless Treasures
          </Typography>
          <Grid container spacing={4}>
            {filteredContent.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  onClick={() => navigate(item.link)}
                  sx={{
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 10px 30px rgba(0, 102, 255, 0.3), 0 6px 20px rgba(0, 102, 255, 0.15)', 
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    alt={item.title}
                    height="200"
                    image={item.image}
                  />
                  <CardContent>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {item.location}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
      <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            marginTop: '40px',
            marginLeft: '50px'
          }}
        >
                <Footer /> 

        </Box>
    </div>
  );
};

export default HomePage;
