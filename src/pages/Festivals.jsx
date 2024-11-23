import React,{useState,useEffect} from 'react';
import { Card, CardContent, Typography, Box, CardMedia, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';


const festivals = [
  {
    name: "Diwali",
    date: "November 12, 2024",
    state: "All over India",
    description: "Diwali, the Festival of Lights, symbolizes the victory of light over darkness and good over evil. Celebrated with fireworks, diyas, and sweets.",
    image: "https://i0.wp.com/gangautsav.in/wp-content/uploads/2024/03/diwali-dates.webp?resize=1792%2C1024&ssl=1"
  },
  {
    name: "Holi",
    date: "March 25, 2024",
    state: "All over India",
    description: "Holi is the festival of colors, celebrated with enthusiasm. People smear colors on each other and celebrate the arrival of spring.",
    image: "https://cdn.zeebiz.com/sites/default/files/2024/03/25/285353-happy-holi-2024-wishes-images.jpg"
  },
  {
    name: "Durga Puja",
    date: "October 10, 2024",
    state: "West Bengal",
    description: "Durga Puja celebrates the victory of Goddess Durga over the demon Mahishasura. The festival is widely celebrated in West Bengal.",
    image: "https://images.news18.com/ibnlive/uploads/2022/09/3cecaf35-hero-image-70.jpg"
  },
  {
    name: "Ganesh Chaturthi",
    date: "September 18, 2024",
    state: "Maharashtra",
    description: "Ganesh Chaturthi is dedicated to Lord Ganesha. People bring home idols, worship them, and immerse the idols in water at the end of the festival.",
    image: "https://www.hindustantimes.com/ht-img/img/2024/09/07/550x309/ganesh_chaturthi_2024_1725684121239_1725684121494.jpg"
  },
  {
    name: "Navratri",
    date: "October 2, 2024",
    state: "Gujarat",
    description: "Navratri is a nine-day festival celebrated with garba and dandiya dances, worshiping the nine forms of Goddess Durga.",
    image: "https://i.pinimg.com/736x/57/78/05/577805f637b05357110fd03ac1a7e39f.jpg"
  },
  {
    name: "Makar Sankranti",
    date: "January 14, 2024",
    state: "All over India",
    description: "Makar Sankranti marks the harvest season and is celebrated with kite flying, feasts, and bonfires, especially in northern India.",
    image: "https://www.holidify.com/images/cmsuploads/compressed/5353409599_383fee1b04_o_20180403112312.jpg"
  },
  {
    name: "Pongal",
    date: "January 15, 2024",
    state: "Tamil Nadu",
    description: "Pongal is a harvest festival celebrated in Tamil Nadu, thanking the Sun God and nature for the year's harvest.",
    image: "https://www.holidify.com/images/cmsuploads/compressed/Office_Pongal_celebration_20180403112554.jpg"
  },
  {
    name: "Raksha Bandhan",
    date: "August 19, 2024",
    state: "All over India",
    description: "Raksha Bandhan celebrates the bond between brothers and sisters, where sisters tie rakhi and brothers give gifts in return.",
    image: "https://images.tv9hindi.com/wp-content/uploads/2024/08/raksha-bandhan-rakhi.jpg?w=1280"
  },
  {
    name: "Eid al-Fitr",
    date: "April 10, 2024",
    state: "All over India",
    description: "Eid al-Fitr marks the end of Ramadan and is celebrated with prayers, feasts, and sharing gifts with family and friends.",
    image: "https://www.holiday-times.com/wp-content/uploads/eid-al-fitr-crecent-moon-1200x675.png"
  },
  {
    name: "Onam",
    date: "August 29, 2024",
    state: "Kerala",
    description: "Onam is a harvest festival celebrated in Kerala, known for its boat races, traditional feasts, and beautiful pookalams (flower arrangements).",
    image: "https://www.vedantu.com/seo/content-images/6badc782-0c7f-4c80-9e8c-80fcfa54c670_onam_2k24.png"
  },
  {
    name: "Christmas",
    date: "December 25, 2024",
    state: "All over India",
    description: "Christmas celebrates the birth of Jesus Christ. It's marked with midnight mass, gift-giving, and decorating Christmas trees.",
    image: "https://cdnuploads.aa.com.tr/uploads/Contents/2023/12/26/thumbs_b_c_bf250caaabd0ae811ad543eb0796d6bb.jpg?v=164748"
  },
  {
    name: "Baisakhi",
    date: "April 14, 2024",
    state: "Punjab",
    description: "Baisakhi is a harvest festival celebrated in Punjab, marking the Sikh New Year and the formation of the Khalsa in 1699.",
    image: "https://im.indiatimes.in/content/2023/Apr/vector-illustration-happy-vaisak_6435137ba5278.jpg?w=640&h=481&cc=1&webp=1&q=75"
  },
  {
    name: "Mahashivratri",
    date: "March 8, 2024",
    state: "All over India",
    description: "Mahashivratri is a major Hindu festival dedicated to Lord Shiva, marked by prayers and fasting in Shiva temples across India.",
    image: "https://grahanakshtra.com/storage/uploads/blog/1636801775.png"
  },
  {
    name: "Janmashtami",
    date: "August 23, 2024",
    state: "Uttar Pradesh",
    description: "Janmashtami celebrates the birth of Lord Krishna, with temples and homes decorated, and Dahi Handi events held across India.",
    image: "https://static.theprint.in/wp-content/uploads/2023/08/janmashtami-696x392.jpg?compress=true&quality=80&w=376&dpr=2.6"
  },
  {
    name: "Gurpurab",
    date: "November 15, 2024",
    state: "Punjab",
    description: "Gurpurab celebrates the birth of Sikh gurus, with processions, hymns, and prayers held in gurudwaras.",
    image: "https://m.media-amazon.com/images/I/81kMXta+GlL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    name: "Bihu",
    date: "April 14, 2024",
    state: "Assam",
    description: "Bihu marks the Assamese New Year and is celebrated with traditional dances, music, and feasts.",
    image: "https://t4.ftcdn.net/jpg/04/98/11/75/360_F_498117565_mCNYa3bCJJC52Opvrxurqy3F54UMp6AN.jpg"
  },
  {
    name: "Karva Chauth",
    date: "October 22, 2024",
    state: "Northern India",
    description: "Karva Chauth is a festival where married women fast for the long life and well-being of their husbands.",
    image: "https://images.indianexpress.com/2020/11/karva-chauth-feature.jpg"
  },
  {
    name: "Vasant Panchami",
    date: "February 10, 2024",
    state: "All over India",
    description: "Vasant Panchami marks the arrival of spring and is dedicated to Goddess Saraswati, the deity of knowledge and wisdom.",
    image: "https://images.indianexpress.com/2020/11/karva-chauth-feature.jpg"
  },
  {
    name: "ugadhi",
    date: "march 30, 2025",
    state: "Andhra pradesh",
    description: "Ugadi marks the New Year for the states of Andhra Pradesh, Telangana, and Karnataka, celebrated with special dishes and cultural rituals.",
    image: "https://images.indianexpress.com/2017/03/ugadi_fb_759.jpg?w=414"
  },
  {
    name: "Guru Purnima",
    date: "July 21, 2024",
    state: "All over India",
    description: "Guru Purnima is dedicated to spiritual and academic teachers, celebrated with reverence and prayers by students to honor their gurus.",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEij8QiyQ_Q6CO-WJoXoEnAG3aWlIq-InmrHbcT__BASH5UKNMtf-0BxbjLXxMeEjREW0691-aY2lN_79_rsr4T3UDDIDCwSzyyxaEi-5ucitBSMy0KxrgolKo67nQSoQ6TaSLOUVRpUcB7cJofGivF9gQK8vFHCUc1BRTUJa_akigAE88hrjvpG4uXpNP4/s1024/Guru-purnima.webp"
  }
];

const Festivals = () => {
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
    <>
     <Helmet>
        <title>India Festivals</title>
        <meta
          name="description"
          content="Learn about our vision and mission to bridge cultural gaps and showcase the vibrant heritage of India. Meet our partners and discover our journey."
        />
      </Helmet>
    isLoggedIn ? (
    <Box sx={{ flexGrow: 1, padding: 10,marginTop:'100px',marginLeft:'30px'}} >
      <Grid container spacing={5}>
        {festivals.map((festival, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345, height: '100%' }}>
              <CardMedia
                component="img"
                height="200"
                image={festival.image}
                alt={festival.name}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {festival.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {festival.date} | {festival.state}
                </Typography>
                <Typography variant="body2">
                  {festival.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

    
    </Box>
    ) : (
      // Show message if not logged in
      <Typography variant="h6" color="error" marginTop="20px" textAlign="center">
        Please log in to access this page.
      </Typography>
    )    
    </>
  );
  
};

export default Festivals;
