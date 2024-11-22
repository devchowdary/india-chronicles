import React,{useState,useEffect} from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Container } from '@mui/material';
import Footer from '../components/Footer';

import { useNavigate } from 'react-router-dom';
const martialArtsInIndia = [
    {
      "name": "Kalaripayattu",
      "location": "Kerala",
      "description": "Kalaripayattu is one of the oldest fighting systems in existence, originating from Kerala. It focuses on strikes, kicks, grappling, as well as weaponry and healing techniques.",
      "image": "https://storage.karmagroup.com/assets/karmagroup.com/blog/2018/03/KALARIPAYATTU.jpg"
    },
    {
      "name": "Silambam",
      "location": "Tamil Nadu",
      "description": "Silambam is a weapon-based martial art from Tamil Nadu. It emphasizes the use of a long bamboo stick (called 'Silambam') and includes techniques for self-defense, including footwork and agility.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKevNH1tBYf81FnCU0qLi5yc47EplRqDbmQw&s"
    },
    {
      "name": "Thang-Ta",
      "location": "Manipur",
      "description": "Thang-Ta is a traditional Manipuri martial art that focuses on the sword (Thang) and spear (Ta). It was originally developed as a form of warfare and has now evolved into a cultural practice.",
      "image": "https://enrouteindianhistory.com/wp-content/uploads/2024/08/4-1.png"
    },
    {
      "name": "Gatka",
      "location": "Punjab",
      "description": "Gatka is a martial art associated with the Sikh warriors of Punjab. It uses wooden sticks to simulate swords and is practiced with techniques of sparring, self-defense, and battlefield training.",
      "image": "https://www.sikhnet.com/files/styles/max-width-page-wide/public/news/2015/07-July/Gatka.png?itok=ND1bkFMg"
    },
    {
      "name": "Mardani Khel",
      "location": "Maharashtra",
      "description": "Mardani Khel is a traditional martial art from Maharashtra, focusing on armed combat with swords, spears, and other weapons. It developed as a way for Maratha warriors to defend their territory.",
      "image": "https://gallery.vit.ac.in/wp-content/uploads/2024/03/004A2594_1.webp"
    },
    {
      "name": "Lathi Khela",
      "location": "West Bengal",
      "description": "Lathi Khela is a traditional Bengali martial art that uses the lathi (a long bamboo stick) for combat and self-defense. It is still practiced in rural Bengal as a sport and form of entertainment.",
      "image": "https://akm-img-a-in.tosshub.com/sites/indiacontent/0/images/product/public/29072019/00/01/56/43/94/58/21/43/1564394582143/659-girls-participate-in-traditional-bangladeshi-martial-art----lathi-image-7432b15f1a8adec3ef48228603e48a43-IANS.jpg"
    },
    {
      "name": "Musti-Yuddha",
      "location": "Uttar Pradesh",
      "description": "Musti-Yuddha is an ancient Indian martial art that emphasizes hand-to-hand combat. Practiced in Uttar Pradesh, it incorporates strikes, joint locks, and grappling techniques.",
      "image": "https://www.shutterstock.com/shutterstock/photos/489750703/display_1500/stock-photo-muay-thai-muay-boran-martial-arts-of-muay-thai-489750703.jpg"
    },
    {
      "name": "Mallakhamb",
      "location": "Maharashtra, Madhya Pradesh",
      "description": "Mallakhamb is a traditional Indian sport where gymnasts perform aerial yoga poses and wrestling grips on a vertical wooden pole. It requires strength, agility, and flexibility.",
      "image": "https://heritage-india.com/wp-content/uploads/2022/03/mallakhamb.png"
    },
    
    {
      "name": "Pehlwani",
      "location": "Nationwide",
      "description": "Pehlwani is a traditional Indian wrestling form practiced across India. Wrestlers train in grappling techniques, joint locks, and ground fighting while emphasizing physical fitness and discipline.",
      "image": "https://www.orphanednation.com/wp-content/uploads/2019/10/DSC_6058-1024x682-1024x682.jpg"
    }
];

  


const MartialArts = () => {
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
        <Container>
            <Typography variant="h3" component="h1" gutterBottom align="center" marginTop='80px' marginLeft='10px'>
                  MARTIAL ARTS IN INDIA
            </Typography>
            <Grid container spacing={4} marginLeft='-60px'>
                {martialArtsInIndia.map((art, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ maxWidth: '350px',height:'400px', margin: 'auto', boxShadow: 3 }}>
                            <CardMedia
                                component="img"
                                height="250"
                                image={art.image}
                                alt={art.name}
                            />
                            <CardContent>
                                <Typography variant="h5" component="div" gutterBottom>
                                    {art.name}
                                </Typography>
                                <Typography variant="subtitle1" color="text.primary">
                                    {art.location}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {art.description}
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

export default MartialArts;
