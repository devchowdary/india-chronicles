import React,{useState,useEffect} from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import khandoba from '../../images/maharastraImages/khandoba.jpeg';
import mahalakshmi from '../../images/maharastraImages/mahalakshmi.jpg';
import renukadevi from'../../images/maharastraImages/renukadevi.jpeg';
import saibaba from'../../images/maharastraImages/saibaba.jpg';
import shansishignapur from'../../images/maharastraImages/shansishignapur.jpeg';
import triambakeswar from'../../images/maharastraImages/triambakeswar.jpeg';
import bhavani from'../../images/maharastraImages/tuljaBhavani.jpg';
import vinayaka from '../../images/maharastraImages/vinayaka.jpg';
import vishnu from '../../images/maharastraImages/vithoba.jpg';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
const images = [
  { src: saibaba, alt: ' sai baba', title: 'sri sai baba ', location: 'sainagar', description: 'Ravanasura, the ten-headed king of Lanka, is the primary antagonist in the Ramayana, known for abducting Sita. Despite his villainy, he is revered for his wisdom, power, and devotion to Lord Shiva.' },
  { src: khandoba, alt: 'god khandoba', title: 'lord khandoba', location: 'jejuri', description: 'God Brahma is the Hindu creator deity, responsible for the creation of the universe and all living beings.As part of the Hindu trinity, Brahma is the deity who created the cosmos and established time.' },
  { src: mahalakshmi, alt: ' goddess mahalakshmi ', title: 'goddess mahalakshmi', location: 'kolhapur', description: 'Meenakshi Matha, an incarnation of Goddess Parvati, is the presiding deity of the Meenakshi Amman Temple in Madurai and is revered for her beauty, strength, and compassion.' },
  { src: renukadevi, alt: 'renukadevi', title: 'goddess renuka devi', location: 'mahur', description: ' Lord Shiva is worshipped as Arunachaleswarar at the Arunachaleswarar Temple. The Arunachala hill as a fiery lingam, celebrated during the Karthigai Deepam festival with a giant lamp.' },
  { src: shansishignapur, alt: 'lord shani dev ', title: 'lord shani dev', location: 'Nevasa Taluka', description: 'Lord Vishnu is a principal Hindu deity, known as the preserver of the universe. He is often depicted with a blue complexion and incarnates as various forms, such as Rama and Krishna, to restore cosmic order.' },
  { src: triambakeswar, alt: 'LORD shiva', title: 'lord shiva ', location: 'triambakeswar', description: 'Lakshmi Devi is the Hindu goddess  prosperity, often depicted on a lotus. She is the consort of Lord Vishnu and is worshipped for blessings of abundance, especially during festivals like Diwali.' },
  { src: bhavani, alt: 'LORD bhavani', title: 'lord bhavani', location: 'tuljapur', description: 'Meenakshi Amman is the principal goddess of the Meenakshi Amman Temple in Madurai, Tamil Nadu. An incarnation of Goddess Parvati, she is revered for her beauty and strength.' },
  { src: vinayaka, alt: 'LORD vinayaka', title: 'lord vigneshwar', location: 'ozar', description: 'In Rameshwaram, Lord Shiva is worshipped as Ramanathaswamy, one of the twelve Jyotirlingas.  significant for its sacred rituals, is believed to have been built by Lord Rama to atone for his sins.' },
  { src: vishnu, alt: 'goddess VITHAL RUKMINI', title: 'goddess VITHAL RUKMINI', location: 'jejuri', description:'Kumara Swamy, or Kartikeya, is the Hindu god of war and the son of Lord Shiva and Goddess Parvati. He is celebrated for his valor and wisdom, with festivals like Thaipusam dedicated to him.' },

];

const Maharashtra = () => {

  const [searchInput, setSearchInput] = useState('');

  const handleSearchChange = (value) => {
    setSearchInput(value);
  };

  const filteredImages = images.filter((image) =>
    image.title.toLowerCase().includes(searchInput.toLowerCase()) ||
    image.location.toLowerCase().includes(searchInput.toLowerCase())
  );
  
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
  
  
  return (
    isLoggedIn ? (

  <Container sx={{ marginTop: '40px', padding: 0 }}> {/* Remove padding for the container */}
    <Typography variant="h4" component="h1" gutterBottom marginTop='100px' marginLeft='520px' textTransform='uppercase' fontFamily='initial' fontSize='40px'>
     maharastra
    </Typography>
   

    <Navbar onSearch={handleSearchChange} />
    

    <Grid container spacing={4} justifyContent="flex-start"> {/* Align items to the start */}
      {filteredImages.map((image, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card
            onClick={() => { /* navigate to the specific page if needed */ }}
            sx={{
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 10px 30px rgba(0, 102, 255, 0.3), 0 6px 20px rgba(0, 102, 255, 0.15)',
                cursor:'pointer',
              },
              width: '100%', // Use full width of the grid item
              height: '100%', // Use full height of the grid item
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start', 
              // marginLeft:'75px'
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
                {image.title.toUpperCase() }
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

export default Maharashtra;
