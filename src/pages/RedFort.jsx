import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, Box } from '@mui/material';
import { styled } from '@mui/system';

const RedFort = () => {
  const images = [
    {
      url: "https://cdn.britannica.com/20/189820-050-D650A54D/Red-Fort-Old-Delhi-India.jpg",
      title: "Red Fort Full View",
      quote: "“Red Fort stands as a timeless symbol of India's rich history and architecture.”"
    },
    {
      url: "https://pbs.twimg.com/media/FX4x6OZaIAAJ9sv.jpg:large",
      title: "Entrance of the Red Fort",
      quote: "“The grand entrance of the Red Fort leaves visitors in awe of its magnitude.”"
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Delhi%2C_India%2C_White_marble_palace%2C_Red_Fort.jpg/2560px-Delhi%2C_India%2C_White_marble_palace%2C_Red_Fort.jpg",
      title: "Intricate Carvings of Red Fort",
      quote: "“The intricate carvings and marble accents within the Red Fort showcase Mughal craftsmanship.”"
    },
    {
      url: "https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/09/29/Pictures/_42994ab4-e252-11e9-a910-fb95b571a1f5.jpg",
      title: "Night View of Red Fort",
      quote: "“The Red Fort at night, with its illuminated walls, is a magnificent sight to behold.”"
    },
  ];

  return (
    <Container sx={{ marginTop: 4, marginBottom: 4 }}>
      {/* Header Section */}
      <Box textAlign="center" marginBottom={6}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, color: "#c62828", marginTop: '50px' }}>
          Red Fort: The Jewel of Mughal Architecture
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: "900px", margin: "0 auto", textAlign: "justify", fontWeight: 400, color: "#555" }}>
          The Red Fort, also known as Lal Qila, is one of the most iconic landmarks in India, reflecting the grandeur and magnificence of Mughal architecture. 
          Built by Emperor Shah Jahan in 1648, the fort served as the main residence of the Mughal emperors for around 200 years. 
          Its red sandstone walls and impressive architecture are testaments to the skill and artistic brilliance of the Mughal craftsmen.
        </Typography>
      </Box>

      {/* Gallery Section */}
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center", marginBottom: 3, fontWeight: 500 }}>
        Gallery: Explore the Majesty of Red Fort
      </Typography>

      <Grid container spacing={4}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{
              boxShadow: 6,
              borderRadius: 3,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": { transform: "scale(1.05)", boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" },
              position: 'relative',
              transformStyle: 'preserve-3d',
              perspective: '1000px',
              cursor:'pointer'
            }}>
              {/* Card Container for Flip Effect */}
              <Box sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
                transformStyle: 'preserve-3d',
                transition: 'transform 0.6s ease',
                '&:hover': { transform: 'rotateY(180deg)' },
              }}>
                {/* Front Side with Image */}
                <CardMedia
                  component="img"
                  image={image.url}
                  alt={image.title}
                  sx={{
                    height: 250,
                    objectFit: "cover",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    backfaceVisibility: 'hidden',
                  }}
                />
                {/* Back Side with Quote */}
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
                  fontSize: '18px',
                  fontWeight: '700',  // Increased font weight for the quote
                  borderRadius: '10px',
                }}>
                  <Typography variant="h6">{image.quote}</Typography>
                </Box>
              </Box>
              {/* Title Text */}
              <CardContent>
                <Typography variant="h6" align="center" sx={{ fontWeight: 600 }}>
                  {image.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Details Section */}
      <Box sx={{ marginTop: 6 }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, textAlign: "center", marginBottom: 2 }}>
          Architectural Splendor of Red Fort
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "justify", lineHeight: "1.6", color: "#333", marginBottom: 3 }}>
          The Red Fort is an excellent example of Indo-Islamic Mughal architecture, built with red sandstone and adorned with intricate carvings and marble accents. 
          The fort spans 2.41 kilometers in length and is surrounded by massive walls that stand over 30 feet high. Within the fort, you’ll find several grand structures, 
          including the Diwan-i-Aam (Hall of Public Audience) and Diwan-i-Khas (Hall of Private Audience), both showcasing magnificent Mughal artistry.
        </Typography>

        <Typography variant="body1" sx={{ textAlign: "justify", lineHeight: "1.6", color: "#333", marginBottom: 3 }}>
          The fort is divided into multiple sections, each serving different functions. The Lahore Gate is the main entrance, leading into a bustling courtyard that 
          was once a center of political activity. The fort also houses the beautiful Rang Mahal (Palace of Colors), the Meena Bazaar (a vibrant market), 
          and the Samarkand Tower. The fusion of Persian, Timurid, and Indian architectural styles makes the Red Fort a masterpiece of Mughal construction.
        </Typography>

        <Typography variant="body1" sx={{ textAlign: "justify", lineHeight: "1.6", color: "#333", marginBottom: 3 }}>
          Over time, the fort became a symbol of India's struggle for independence, particularly during the 1857 Revolt. Today, it stands as a UNESCO World Heritage 
          Site, attracting millions of tourists from around the globe. The Red Fort is also the site where India’s Prime Minister hoists the national flag on Independence Day.
        </Typography>

        <Typography variant="body1" sx={{ textAlign: "justify", lineHeight: "1.6", color: "#333", marginBottom: 3 }}>
          The Red Fort’s grandeur is not just in its architecture but also in its rich history and cultural significance. It remains a vital part of India's heritage and a 
          symbol of the nation's struggle for freedom.
        </Typography>
      </Box>
    </Container>
  );
};

export default RedFort;
