import React,{useState} from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';

import dhudeswaranadh from '../../images/uttarImages/dhudeswaranadh.jpg';
import lordhanuman from '../../images/uttarImages/lordhanuman.jpg';
import lordkrishna from'../../images/uttarImages/lordkrishna.jpg';
import lordvinayaka from'../../images/uttarImages/lordvinayaka.jpg';
import lordvishnu from'../../images/uttarImages/lordvishnu.jpg';
import rama from'../../images/uttarImages/rama.jpg';
import shiva from'../../images/uttarImages/shiva.jpg';
import sriranganadha from '../../images/uttarImages/sriranganadh.jpg';
import vindhyachal from '../../images/uttarImages/vindhyachal.jpg';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
const images = [
  { src: dhudeswaranadh, alt: 'lord shiva', title: 'lord shiva', location: 'Ghaziabad', description: 'God Brahma is the Hindu creator deity, responsible for the creation of the universe and all living beings.As part of the Hindu trinity, Brahma is the deity who created the cosmos and established time.' },
  { src: lordhanuman, alt: 'lord hanuman', title: 'lord hanuman', location: 'varanasi', description: 'Meenakshi Matha, an incarnation of Goddess Parvati, is the presiding deity of the Meenakshi Amman Temple in Madurai and is revered for her beauty, strength, and compassion.' },
  { src: lordkrishna, alt: 'sri krishna', title: 'sri krishna', location: 'mathura', description: ' Lord Shiva is worshipped as Arunachaleswarar at the Arunachaleswarar Temple. The Arunachala hill as a fiery lingam, celebrated during the Karthigai Deepam festival with a giant lamp.' },
  { src: lordvinayaka, alt: 'lord vinayaka', title: 'lord vinayaka', location: 'tulsi ghat', description: 'Ravanasura, the ten-headed king of Lanka, is the primary antagonist in the Ramayana, known for abducting Sita. Despite his villainy, he is revered for his wisdom, power, and devotion to Lord Shiva.' },
  { src: lordvishnu, alt: 'lord vishnu ', title: 'lord vishnu', location: 'ghaziabad', description: 'Lord Vishnu is a principal Hindu deity, known as the preserver of the universe. He is often depicted with a blue complexion and incarnates as various forms, such as Rama and Krishna, to restore cosmic order.' },
  { src: rama, alt: 'sri rama', title: 'sri rama', location: 'ayodhya', description: 'Lakshmi Devi is the Hindu goddess  prosperity, often depicted on a lotus. She is the consort of Lord Vishnu and is worshipped for blessings of abundance, especially during festivals like Diwali.' },
  { src: shiva, alt: 'mahadev', title: 'mahadev ', location: 'vrindavan', description: 'Meenakshi Amman is the principal goddess of the Meenakshi Amman Temple in Madurai, Tamil Nadu. An incarnation of Goddess Parvati, she is revered for her beauty and strength.' },
  { src: sriranganadha, alt: 'sri ranganadha', title: 'lord sri ranganadha', location: 'vrindavan', description: 'In Rameshwaram, Lord Shiva is worshipped as Ramanathaswamy, one of the twelve Jyotirlingas.  significant for its sacred rituals, is believed to have been built by Lord Rama to atone for his sins.' },
  { src: vindhyachal, alt: 'vindhyachal', title: 'Maa Vindhyavasini ', location: 'mirzapur', description:'Kumara Swamy, or Kartikeya, is the Hindu god of war and the son of Lord Shiva and Goddess Parvati. He is celebrated for his valor and wisdom, with festivals like Thaipusam dedicated to him.' },

];

const UttarPradesh = () => {

  const [searchInput, setSearchInput] = useState('');

  const handleSearchChange = (value) => {
    setSearchInput(value);
  };

  const filteredImages = images.filter((image) =>
    image.title.toLowerCase().includes(searchInput.toLowerCase()) ||
    image.location.toLowerCase().includes(searchInput.toLowerCase())
  );
  
  
  
  
  return (

  <Container sx={{ marginTop: '40px', padding: 0 }}> {/* Remove padding for the container */}
    <Typography variant="h4" component="h1" gutterBottom marginTop='100px' marginLeft='450px' textTransform='uppercase' fontFamily='initial' fontSize='50px'>
    Uttar Pradesh
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
              marginLeft:'75px'
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
   
    <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            marginTop: '40px',
            marginLeft: '120px'
          }}
        >
            <Footer/>

    </Box>

  </Container>
);
};

export default UttarPradesh;
