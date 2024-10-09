import React from 'react';
import { Card, CardContent, Typography, CardMedia, CardActions, IconButton } from '@mui/material';
import { Instagram, Twitter, Email } from '@mui/icons-material'; // Import icons from Material UI
import Footer from './Footer';
import dev from '../images/teamImages/dev.jpg';
import mohith from '../images/teamImages/mohith.jpg'

const teamMembers = [
  {
    name: 'DEVENDRA CHOWDARY',
    role: 'Project Developer',
    image: dev, 
  },
  {
    name: 'CHARAN CHOWDARY',
    role: 'TEAM LEAD',
    image: 'https://via.placeholder.com/200', 
  },
  {
    name: 'MOHITH REDDY',
    role: 'Developer',
    image: mohith, 
  },
];

export default function Team() {
  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      {/* Header Section */}
      <div 
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '30px', 
        }}
      >
        <Typography variant="h2" component="div" gutterBottom marginTop='50px' marginLeft='100px'>
          TEAM
        </Typography>
      </div>

      {/* Cards Section */}
      <div 
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          flexGrow: 1, // Ensure this section grows to push the footer down
          padding: '20px', // Reduced padding
          marginLeft: '120px',
          marginTop: '20px',
        }}
      >
        <div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px', // Reduced gap between cards
            flexWrap: 'wrap',
            cursor: 'pointer', // Set cursor to pointer for hover effect
          }}
        >
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              style={{ 
                width: '350px', 
                height: '450px', 
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Add transition effects
              }}
              // Hover effect: slightly zoom in and add blue shadow
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 255, 0.5)'; // Blue shadow
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <CardMedia
                component="img"
                alt={member.name}
                height="300"
                image={member.image}
                style={{ objectFit: 'cover' }}
              />
              <CardContent style={{ textAlign: 'center' }}>
                <Typography variant="h5" component="div">
                  {member.name}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {member.role.toUpperCase()}
                </Typography>
              </CardContent>

              {/* Social Media Icons */}
              <CardActions style={{ justifyContent: 'center' }}>
                <IconButton href="https://www.instagram.com" target="_blank" aria-label="Instagram">
                  <Instagram />
                </IconButton>
                <IconButton href="https://twitter.com" target="_blank" aria-label="Twitter">
                  <Twitter />
                </IconButton>
                <IconButton href="mailto:someone@example.com" aria-label="Gmail">
                  <Email />
                </IconButton>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <Footer style={{ marginTop: 'auto' }} />
    </div>
  );
}
