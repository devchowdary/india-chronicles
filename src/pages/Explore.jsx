import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Grid, Card, CardContent, Typography, Box } from '@mui/material';
import '@fontsource/playfair-display';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import uttarpradesh from '../images/uttarakhand.jpeg';
import andhra2 from '../images/andhra1.jpg';
import hyderabad from '../images/hyderabad.jpg';
import himachal from '../images/himachal.jpg';
import jammu from '../images/jammu.jpg';
import karnataka from '../images/karnataka.jpg';
import kerala from '../images/kerala.jpg';
import maharastra from '../images/maharastra.jpg';
import rajasthan from '../images/rajasthan.jpg';
import tamilnadu from '../images/tamilnadu.jpg';
import punjab from '../images/punjab.jpg';

const Explore = () => {
  const [searchInput, setSearchInput] = useState('');
  const [states] = useState([
    { name: 'Andhra Pradesh', description: 'Famous for temples and cultural traditions.', image: andhra2, link: "/andhrapradesh" },
    { name: 'Rajasthan', description: 'Land of kings and deserts.', image: rajasthan, link:'/rajasthan' },
    { name: 'Kerala', description: 'God\'s own country with scenic backwaters.', image: kerala,  link:'/kerala'},
    { name: 'Maharashtra', description: 'Home to Mumbai and diverse cultural heritage.', image: maharastra, link:'/maharastra' },
    { name: 'TamilNadu', description: 'Famous for temples and cultural traditions.', image: tamilnadu, link:'/tamilnadu'},
    { name: 'Himachal Pradesh', description: 'Location of the iconic Taj Mahal.', image: himachal, link:'/himachal' },
    { name: 'Telangana', description: 'Popular for beaches and nightlife.', image: hyderabad, link:'/telangana'},
    { name: 'Karnataka', description: 'Known for its vibrant culture and history.', image: karnataka, link:'/karnataka' },
    { name: 'Punjab', description: 'The heartland of Sikh culture.', image: punjab, link:'/punjab' },
    { name: 'Uttar Pradesh', description: 'Rich in heritage with forts and palaces.', image: uttarpradesh, link:'/uttarpradesh' },
    { name: 'Jammu & Kashmir', description: 'Known for its art, culture, and heritage.', image: jammu, link:'/jammu' }
  ]);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if user is logged in by checking for the token in localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      navigate('/login');  // Redirect to login if not logged in
    }
  }, [navigate]);

  const handleSearch = (input) => {
    setSearchInput(input.toLowerCase()); 
  };

  const filteredStates = states.filter(state =>
    state.name.toLowerCase().includes(searchInput)
  );

  return (
    <div>
      {/* Only render the content if the user is logged in */}
      {isLoggedIn ? (
        <>
          <Container
            style={{
              marginTop: '80px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              marginLeft:'70px'
            }}
          >
            <Typography variant="h2" component="h1" gutterBottom style={{ marginLeft: '200px' }} textTransform='uppercase'>
              Explore by State
            </Typography>
            <Navbar onSearch={handleSearch} /> 
            
            <Grid container spacing={4} justifyContent="space-between" style={{ marginLeft: '150px' }}>
              {filteredStates.map((state, index) => (
                <Grid item xs={12} key={index}>
                  <Link to={state.link || "#"} style={{ textDecoration: 'none' }}>
                    <Card
                      sx={{
                        position: 'relative',
                        overflow: 'hidden',
                        padding: '16px',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        height: '350px',
                        borderRadius:'40px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontFamily: 'georgia',
                        '&:hover': {
                          transform: 'scale(1.05)',
                          boxShadow: '0 10px 30px rgba(0, 102, 255, 0.3), 0 6px 20px rgba(0, 102, 255, 0.15)', // Blue shadow effect
                          cursor: 'pointer',
                        },
                      }}
                    >
                      {state.image && (
                        <img
                          src={state.image}
                          alt={state.name}
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            filter: 'brightness(50%)',
                          }}
                        />
                      )}
                      <CardContent
                        sx={{
                          position: 'relative',
                          zIndex: 1,
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          textAlign: 'center',
                          color: 'white',
                        }}
                      >
                        <Typography variant="h4" component="h2" style={{ fontFamily: 'Playfair Display, serif', fontSize: '4rem',color:'white',marginBottom:'150px' }}>
                          {state.name.toUpperCase()}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Container>
        </>
      ) : (
        <Container>
          <Typography variant="h4" color="error" align="center">
            This page is not accessible. Please log in to continue.
          </Typography>
        </Container>
      )}
    </div>
  );
};

export default Explore;
