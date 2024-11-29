import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, Box } from '@mui/material';

const TajMahal = () => {
  const images = [
    {
      url: "https://media-cdn.tripadvisor.com/media/photo-s/0b/fb/57/07/full-view-of-taj-mahal.jpg",
      title: "Taj Mahal Full View",
      quote: "“The Taj Mahal rises above the banks of the river like a solitary tear suspended on the cheek of time.” – Rabindranath Tagore"
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Taj_Mahal_Front.JPG",
      title: "Taj Mahal from the Front",
      quote: "“A teardrop on the cheek of time.” – Persian poet"
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQmBdwBHyVHPCu1EoksCbV2BaSQVQUdIBkmQ&s",
      title: "Taj Mahal Reflection",
      quote: "“The Taj Mahal is a vision that stays in the heart forever.” – William Dalrymple"
    },
    {
      url: "https://i.ytimg.com/vi/CkrWdxcimQ4/maxresdefault.jpg",
      title: "View from the Taj Mahal Garden",
      quote: "“The Taj Mahal is a place of love, a place where beauty and elegance merge to create something extraordinary.”"
    },
  ];

  return (
    <Container sx={{ marginTop: 7, marginBottom: 4 }}>
      {/* Header Section */}
      <Box textAlign="center" marginBottom={6}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, color: "#00695c" }}>
          Taj Mahal: A Monument of Eternal Love
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: "900px", margin: "0 auto", textAlign: "justify", fontWeight: 400, color: "#555" }}>
          The Taj Mahal, one of the Seven Wonders of the World, is an enduring symbol of love and a masterpiece of Mughal architecture. 
          Located in Agra, India, this white marble mausoleum was built by Emperor Shah Jahan in memory of his beloved wife, Mumtaz Mahal. 
          The Taj Mahal is renowned for its stunning symmetry, intricate carvings, and the serene beauty of its surroundings, attracting millions of visitors each year.
        </Typography>
      </Box>

      {/* Gallery Section */}
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center", marginBottom: 3, fontWeight: 500 }}>
        Gallery: Discover the Beauty of the Taj Mahal
      </Typography>

      <Grid container spacing={4}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{  boxShadow: 6,
              borderRadius: 3,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": { transform: "scale(1.05)", boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" },
              position: 'relative',
              transformStyle: 'preserve-3d',
              perspective: '1000px',
              cursor:'pointer'}}>
              {/* Card Container */}
              <Box sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
                transformStyle: 'preserve-3d',
                transition: 'transform 0.6s ease',
                '&:hover': { transform: 'rotateY(180deg)' }
              }}>
                {/* Front Side */}
                <CardMedia
                  component="img"
                  image={image.url}
                  alt={image.title}
                  sx={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                    borderRadius: '10px',
                    backfaceVisibility: 'hidden'
                  }}
                />
                {/* Back Side (Quote) */}
                <Box sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#fff',
                  color: '#333',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '10px',
                  transform: 'rotateY(180deg)',
                  backfaceVisibility: 'hidden',
                  textAlign: 'center',
                  fontStyle: 'italic',
                  fontSize: '16px',
                  borderRadius: '10px'
                }}>
                  <Typography variant="h6">{image.quote}</Typography>
                </Box>
                
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Details Section */}
      <Box sx={{ marginTop: 6 }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, textAlign: "center", marginBottom: 2 }}>
          Taj Mahal: A Masterpiece of Mughal Architecture
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "justify", lineHeight: "1.6", color: "#333", marginBottom: 3 }}>
          The Taj Mahal is built entirely out of white marble and adorned with intricate designs, making it an extraordinary example of Mughal architecture. 
          Its large dome and four towering minarets are a blend of Persian, Ottoman Turkish, and Indian architectural styles. The main structure is surrounded by beautiful gardens, 
          reflecting pools, and a series of stunning courtyards that add to its serene ambiance. The Taj Mahal’s symmetrical design is a marvel of precision and craftsmanship.
        </Typography>

        <Typography variant="body1" sx={{ textAlign: "justify", lineHeight: "1.6", color: "#333", marginBottom: 3 }}>
          Emperor Shah Jahan commissioned the Taj Mahal after the death of his wife, Mumtaz Mahal, in 1631. It took over 20 years and thousands of artisans, 
          engineers, and craftsmen to complete. The Taj Mahal is not only a mausoleum but also a testament to the enduring love of the emperor for his wife.
        </Typography>

        <Typography variant="body1" sx={{ textAlign: "justify", lineHeight: "1.6", color: "#333", marginBottom: 3 }}>
          The Taj Mahal is a UNESCO World Heritage Site, drawing millions of visitors from around the world. The monument's breathtaking beauty, both in the day and at night, 
          makes it one of the most photographed monuments globally. Its reflection in the surrounding water pools adds a magical touch to the entire experience.
        </Typography>

        <Typography variant="body1" sx={{ textAlign: "justify", lineHeight: "1.6", color: "#333", marginBottom: 3 }}>
          Over the years, the Taj Mahal has not only symbolized love but has also become a key part of India’s cultural identity. Its architectural brilliance, combined with 
          its rich history and cultural significance, ensures its place as one of the greatest monuments in the world.
        </Typography>
      </Box>
    </Container>
  );
};

export default TajMahal;
