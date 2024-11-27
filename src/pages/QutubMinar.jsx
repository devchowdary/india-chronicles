import React from "react";
import { Container, Typography, Grid, Card, CardMedia, CardContent, Box } from "@mui/material";
import { styled } from '@mui/system';

const QutubMinar = () => {
  const images = [
    {
      url: "https://www.shutterstock.com/image-photo/panoramic-view-qutub-minar-unesco-260nw-1330061627.jpg",
      title: "Qutub Minar Full View",
      quote: "“Qutub Minar is a masterpiece of Indo-Islamic architecture.”"
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Lascar_Qutab_Minar_-_Close-up_%28Delhi%29_%284499193279%29.jpg/1200px-Lascar_Qutab_Minar_-_Close-up_%28Delhi%29_%284499193279%29.jpg",
      title: "Close-Up of Intricate Carvings",
      quote: "“The intricate carvings on Qutub Minar are a testament to its artistry.”"
    },
    {
      url: "https://pragyata.com/wp-content/uploads/2022/06/Quub-Complex.jpg",
      title: "Complex Surrounding Qutub Minar",
      quote: "“The Qutub Complex is home to some of the finest examples of Mughal and Indo-Islamic architecture.”"
    },
    {
      url: "https://imgmedia.lbb.in/media/2023/11/654377527b6db1676cee7aa3_1698920274430.jpg",
      title: "Night View of Qutub Minar",
      quote: "“The beauty of Qutub Minar at night is unmatched.”"
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST8GYAp2UelvD8uULq2d5PU9oPOatl2vnZpk-GTOkS-RX615MQjZfyMyKC_rgHgD16GPI&usqp=CAU",
      title: "View from Alai Darwaza",
      quote: "“The view of Qutub Minar from Alai Darwaza is truly majestic.”"
    },
    {
      url: "https://th-i.thgim.com/public/incoming/338hjp/article68460620.ece/alternates/FREE_1200/iron.jpeg",
      title: "The Iron Pillar Near Qutub Minar",
      quote: "“The Iron Pillar near Qutub Minar is a marvel of ancient metallurgy.”"
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4h-l6QflSXnv_HZKM_vNKj-5mJQBHOh__4w&s",
      title: "Alai Minar - Unfinished Tower",
      quote: "“Alai Minar, though unfinished, remains an intriguing piece of history.”"
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOCsMZdHk26_p9nkju1-gIkZ2mQFVk0xvWnw&s",
      title: "Quwwat-ul-Islam Mosque",
      quote: "“The Quwwat-ul-Islam Mosque is the first mosque built in India.”"
    },
  ];

  return (
    <Container sx={{ marginTop: 4, marginBottom: 4 }}>
      {/* Header Section */}
      <Box textAlign="center" marginBottom={6}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, color: "#3f51b5", marginTop: '50px' }}>
          Qutub Minar: A Marvel of Architecture
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: "900px", margin: "0 auto", textAlign: "justify", fontWeight: 400, color: "#555" }}>
          The Qutub Minar is an awe-inspiring minaret and a symbol of India's rich cultural and architectural history.
          Standing tall at 73 meters, it remains one of the tallest brick minarets in the world. Built by Qutb al-Din Aibak
          in 1193, this monumental structure celebrates India's rich history and Islamic architecture. The Qutub Minar
          complex also features several other historically significant structures.
        </Typography>
      </Box>

      {/* Gallery Section */}
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center", marginBottom: 3, fontWeight: 500 }}>
        Gallery: Capturing the Glory of Qutub Minar
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
            }}>
              {/* Card Container for Flip Effect */}
              <Box sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
                transformStyle: 'preserve-3d',
                transition: 'transform 0.6s ease',
                '&:hover': { transform: 'rotateY(180deg)' },
                cursor:'pointer'
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
                  cursor:'pointer'
                }}>
                  <Typography variant="h6" >{image.quote}</Typography>
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
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, textAlign: "center", marginBottom: 2 }}>
          Architectural Significance
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "justify", lineHeight: "1.6", color: "#333", marginBottom: 3 }}>
          The Qutub Minar was built in 1193 by Qutb al-Din Aibak, marking the beginning of Muslim rule in India. Constructed
          primarily with red sandstone, the tower features beautiful inscriptions from the Quran, geometric patterns, and
          intricate carvings. It stands as a symbol of India’s Islamic heritage and architectural ingenuity.
          Over the years, the Qutub Minar has become a symbol of India's multicultural history, blending Hindu, Jain,
          and Islamic architectural influences.
        </Typography>

        <Typography variant="body1" sx={{ textAlign: "justify", lineHeight: "1.6", color: "#333", marginBottom: 3 }}>
          Apart from the Minar itself, the Qutub Complex houses several important historical structures. One such structure
          is the Quwwat-ul-Islam Mosque, the first mosque built in India, constructed using materials from demolished Hindu
          temples. Another iconic feature is the Iron Pillar, a remarkable example of ancient Indian metallurgy. Standing at
          over 7 meters tall, the pillar has been rust-free for over 1,600 years.
        </Typography>

        <Typography variant="body1" sx={{ textAlign: "justify", lineHeight: "1.6", color: "#333", marginBottom: 3 }}>
          The Qutub Minar’s unique blend of architectural styles, its towering presence, and its historical significance make
          it a must-visit landmark for history enthusiasts, travelers, and architecture aficionados alike. It has been designated
          a UNESCO World Heritage Site and continues to inspire awe and admiration from people across the world.
        </Typography>
      </Box>
    </Container>
  );
};

export default QutubMinar;
