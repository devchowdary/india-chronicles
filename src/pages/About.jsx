import React from 'react';
import { Typography, Box, Container, Grid, Divider } from '@mui/material';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <Box sx={{ backgroundColor: '#1a1a1a', color: '#f5f5f5', minHeight: '100vh',marginLeft:'220px',marginTop:'50px' }}> {/* Dark background with light text */}
        <Container maxWidth="md" sx={{ mt: 8, mb: 8,  }}>
          {/* Header Section */}
          <Box textAlign="center" mb={6}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
              About Us
            </Typography>
            <Divider variant="middle" sx={{ width: '60%', mx: 'auto', mb: 4, bgcolor: 'secondary.main', height: 2 }} />
            <Typography variant="body1" color="#f5f5f5" sx={{ fontSize: '1.2rem', mb: 4 }}>
              Welcome to <strong>India: Culture, Heritage, and Monuments</strong> – a platform dedicated to celebrating
              India's rich cultural tapestry, timeless heritage, and awe-inspiring monuments. Our goal is to inspire
              awareness and appreciation for the incredible landmarks, historical sites, and traditions that make
              India a diverse and unique nation.
            </Typography>
          </Box>

          {/* Grid Content */}
          <Grid container spacing={6}>
            {/* Vision Section */}
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.light' }}>
                  Our Vision
                </Typography>
                <Typography variant="body1" color="#f5f5f5" sx={{ fontSize: '1.1rem' }}>
                  We aim to inspire both Indians and global citizens to discover and appreciate India’s{' '}
                  <strong>ancient heritage</strong> and <strong>modern culture</strong>. By highlighting{' '}
                  <strong>monuments</strong>, <strong>heritage sites</strong>, and <strong>cultural landmarks</strong>, we
                  hope to foster a deeper connection with India’s millennia-old stories.
                </Typography>
              </Box>
            </Grid>

            {/* What We Offer Section */}
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.light' }}>
                  What We Offer
                </Typography>
                <Typography variant="body1" color="#f5f5f5" sx={{ fontSize: '1.1rem', mb: 1 }}>
                  - <strong>State-wise Exploration</strong>: Explore heritage from the serene landscapes of Kerala to the
                  forts of Rajasthan.
                </Typography>
                <Typography variant="body1" color="#f5f5f5" sx={{ fontSize: '1.1rem', mb: 1 }}>
                  - <strong>Cultural Exchange</strong>: Engage in discussions about Indian festivals, art forms, and
                  traditions.
                </Typography>
                <Typography variant="body1" color="#f5f5f5" sx={{ fontSize: '1.1rem', mb: 1 }}>
                  - <strong>Monument Highlights</strong>: Learn about India's iconic monuments and their historical
                  significance.
                </Typography>
                <Typography variant="body1" color="#f5f5f5" sx={{ fontSize: '1.1rem' }}>
                  - <strong>Heritage Awareness</strong>: Understand why preserving India’s historical structures is vital for
                  future generations.
                </Typography>
              </Box>
            </Grid>

            {/* Mission Section */}
            <Grid item xs={12}>
              <Box>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.light' }}>
                  Our Mission
                </Typography>
                <Typography variant="body1" color="#f5f5f5" sx={{ fontSize: '1.1rem' }}>
                  Our mission is to promote awareness and understanding of India’s diverse culture, rich history, and
                  architectural marvels. We aim to be a resource for students, historians, travelers, and anyone curious about
                  India’s unparalleled heritage.
                </Typography>
              </Box>
            </Grid>

            {/* Join Us Section */}
            <Grid item xs={12}>
              <Box>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.light' }}>
                  Join Us on the Journey
                </Typography>
                <Typography variant="body1" color="#f5f5f5" sx={{ fontSize: '1.1rem' }}>
                  India’s story is a journey of evolution and transformation. We invite you to explore with us, engage with our
                  content, and contribute to preserving and celebrating India’s cultural and monumental legacy for generations
                  to come.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box marginLeft='220px'>
      <Footer />

      </Box>
    </>
  );
};

export default About;
