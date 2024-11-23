import React from 'react';
import { Card, CardContent, Typography, CardMedia, CardActions, IconButton } from '@mui/material';
import { Instagram, Twitter, Email } from '@mui/icons-material';
import { Helmet } from 'react-helmet';
import dev from '../images/teamImages/devendra.jpg';
import mohith from '../images/teamImages/mohith.jpg';

const teamMembers = [
  {
    name: 'DEV CHOWDARY',
    role: 'PROJECT DEVELOPER',
    image: dev,
    social: {
      instagram: 'https://www.instagram.com/dev_chowdary._/',
      twitter: 'https://x.com/dev_chowdary11',
      email: '2200030138@kluniversity.in',
    },
  },
  {
    name: 'CHARAN CHOWDARY',
    role: 'TEAM LEAD',
    image: '',
    social: {
      instagram: 'https://www.instagram.com/charan_chowdary',
      twitter: 'https://twitter.com/charan_chowdary',
      email: 'charan@example.com',
    },
  },
  {
    name: 'MOHITH REDDY',
    role: 'Developer',
    image: mohith,
    social: {
      instagram: 'https://www.instagram.com/mohith_reddy',
      twitter: 'https://twitter.com/mohith_reddy',
      email: 'mohith@example.com',
    },
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
      {/* React Helmet for Dynamic Metadata */}
      <Helmet>
        <title>Project Developers</title>
        <meta
          name="description"
          content="Get to know the talented minds behind our project. Meet our developers and team lead who bring ideas to life."
        />
      </Helmet>

      {/* Header Section */}
      <div 
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '30px', 
        }}
      >
        <Typography variant="h2" component="div" gutterBottom marginTop='50px' marginLeft='50px'>
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
          flexGrow: 1,
          padding: '20px',
          marginLeft: '10px',
          marginTop: '0px',
        }}
      >
        <div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            flexWrap: 'wrap',
            cursor: 'pointer',
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
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 255, 0.5)';
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
                image={member.image || 'https://via.placeholder.com/350x300?text=No+Image'}
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
                {member.social.instagram && (
                  <IconButton href={member.social.instagram} target="_blank" aria-label="Instagram">
                    <Instagram />
                  </IconButton>
                )}
                {member.social.twitter && (
                  <IconButton href={member.social.twitter} target="_blank" aria-label="Twitter">
                    <Twitter />
                  </IconButton>
                )}
                {member.social.email && (
                  <IconButton href={`mailto:${member.social.email}`} aria-label="Email">
                    <Email />
                  </IconButton>
                )}
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
