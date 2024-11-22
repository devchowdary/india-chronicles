import React,{useState,useEffect} from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import devitalab from '../../images/punjabImages/devitalab.jpg';
import durgianamandir from '../../images/punjabImages/durgianamandir.jpg';
import gurudwara from'../../images/punjabImages/gurudwara.jpg';
import jayanthidevi from'../../images/punjabImages/jayanthidevi.jpg';
import kalidevi from'../../images/punjabImages/kalidevi.jpg';
import gurugranth from'../../images/punjabImages/gurugranth.jpg';
import keshkarasaheb from'../../images/punjabImages/keshkarsaheb.jpg';
import mahadev from '../../images/punjabImages/mahadev.jpg';
import matalaldevi from '../../images/punjabImages/matalaldevi.jpeg';
import Navbar from '../../components/Navbar';
const images = [
  { src: devitalab, alt: 'devi talab', title: 'devi talab', location: 'jalandhar', description: 'God Brahma is the Hindu creator deity, responsible for the creation of the universe and all living beings.As part of the Hindu trinity, Brahma is the deity who created the cosmos and established time.' },
  { src: durgianamandir, alt: 'maa durga', title: 'maa durga', location: 'amritsar', description: 'Meenakshi Matha, an incarnation of Goddess Parvati, is the presiding deity of the Meenakshi Amman Temple in Madurai and is revered for her beauty, strength, and compassion.' },
  { src: gurudwara, alt: 'Gurudwara Shri Dukhniwaran Sahib', title: ' Shri Dukhniwaran Sahib', location: 'patiala', description: ' Lord Shiva is worshipped as Arunachaleswarar at the Arunachaleswarar Temple. The Arunachala hill as a fiery lingam, celebrated during the Karthigai Deepam festival with a giant lamp.' },
  { src: jayanthidevi, alt: ' goddess jayanthidevi', title: 'goddess jayanthi devi', location: 'majrian', description: 'Ravanasura, the ten-headed king of Lanka, is the primary antagonist in the Ramayana, known for abducting Sita. Despite his villainy, he is revered for his wisdom, power, and devotion to Lord Shiva.' },
  { src: kalidevi, alt: 'kali devi ', title: 'shri kali devi', location: 'patiala', description: 'Lord Vishnu is a principal Hindu deity, known as the preserver of the universe. He is often depicted with a blue complexion and incarnates as various forms, such as Rama and Krishna, to restore cosmic order.' },
  { src: gurugranth, alt: 'god gurugranth', title: 'god gurugranth', location: 'amritsar', description: 'Lakshmi Devi is the Hindu goddess  prosperity, often depicted on a lotus. She is the consort of Lord Vishnu and is worshipped for blessings of abundance, especially during festivals like Diwali.' },
  { src: keshkarasaheb, alt: 'Sri Kesgarh Sahib', title: 'Sri Kesgarh Sahib ', location: 'anandpur sahib', description: 'Meenakshi Amman is the principal goddess of the Meenakshi Amman Temple in Madurai, Tamil Nadu. An incarnation of Goddess Parvati, she is revered for her beauty and strength.' },
  { src: mahadev, alt: 'LORD SHIVA', title: 'Mukteshwar Mahadev', location: 'Thara jhikla', description: 'In Rameshwaram, Lord Shiva is worshipped as Ramanathaswamy, one of the twelve Jyotirlingas.  significant for its sacred rituals, is believed to have been built by Lord Rama to atone for his sins.' },
  { src: matalaldevi, alt: 'Mata Lal Devi', title: 'Mata Lal Devi', location: 'amritsar', description:'Kumara Swamy, or Kartikeya, is the Hindu god of war and the son of Lord Shiva and Goddess Parvati. He is celebrated for his valor and wisdom, with festivals like Thaipusam dedicated to him.' },

];

const Punjab = () => {

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
    <Typography variant="h4" component="h1" gutterBottom marginTop='100px' marginLeft='540px' textTransform='uppercase' fontFamily='initial' fontSize='50px'>
     punjab
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

export default Punjab;
