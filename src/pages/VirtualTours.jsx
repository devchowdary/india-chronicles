import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box, Badge } from '@mui/material';
import Footer from '../components/Footer';

const destinations = [
  {
    title: "Visakhapatnam",
    image: "https://www.holidify.com/images/bgImages/VISAKHAPATNAM.jpg",
    rating: "4.4/5",
    description: "2 out of 44 Places to visit in Andhra Pradesh • 27 Tourist attractions",
    shortDescription: "Visakhapatnam, also commonly known as Vizag, is one of the oldest port cities in the country...",
    bestTime: "September to March",
    location: "Andhra Pradesh, India"
  },
  {
    title: "Araku Valley",
    image: "https://www.holidify.com/images/bgImages/ARAKU-VALLEY.jpg",
    rating: "4.6/5",
    description: "5 out of 44 Places to visit in Andhra Pradesh • 18 Tourist attractions",
    shortDescription: "Araku Valley is a scenic hill station located in the Eastern Ghats...",
    bestTime: "October to February",
    location: "Andhra Pradesh, India"
  },
  {
    title: "Gandikota",
    image: "https://www.holidify.com/images/bgImages/GANDIKOTA.jpg",
    rating: "4.5/5",
    description: "10 out of 44 Places to visit in Andhra Pradesh • 5 Tourist attractions",
    shortDescription: "Gandikota is known for its magnificent gorge, often called the 'Grand Canyon of India'...",
    bestTime: "September to February",
    location: "Andhra Pradesh, India"
  },
  {
      title: "Jaipur",
      image: "https://www.holidify.com/images/bgImages/JAIPUR.jpg",
      rating: "4.5/5",
      description: "2 out of 100 Places to visit in India • 30 Tourist attractions",
      shortDescription: "Jaipur, known as the Pink City, is famous for its vibrant culture and stunning architecture...",
      bestTime: "November to February",
      location: "Rajasthan, India"
  },
  {
      title: "Goa",
      image: "https://www.holidify.com/images/bgImages/GOA.jpg",
      rating: "4.6/5",
      description: "3 out of 100 Places to visit in India • 50 Tourist attractions",
      shortDescription: "Goa is renowned for its beautiful beaches, nightlife, and Portuguese heritage...",
      bestTime: "November to February",
      location: "Goa, India"
  },
  {
      title: "Kerala Backwaters",
      image: "https://www.keralabackwater.com/images/kerala-backwater-img.jpg",
      rating: "4.8/5",
      description: "4 out of 100 Places to visit in India • 25 Tourist attractions",
      shortDescription: "Experience the serene beauty of Kerala's backwaters through houseboat rides...",
      bestTime: "August to March",
      location: "Kerala, India"
  },
  {
      title: "Mysore Palace",
      image: "https://karnatakatourism.org/wp-content/uploads/2020/06/Mysuru-Palace-banner-1920_1100.jpg",
      rating: "4.7/5",
      description: "5 out of 100 Places to visit in India • 10 Tourist attractions",
      shortDescription: "Mysore Palace is a historical palace and the royal residence of the Wadiyar dynasty...",
      bestTime: "October to March",
      location: "Karnataka, India"
  },
  {
      title: "Leh-Ladakh",
      image: "https://shorturl.at/gm9d7",
      rating: "4.9/5",
      description: "6 out of 100 Places to visit in India • 15 Tourist attractions",
      shortDescription: "Leh-Ladakh is famous for its stunning landscapes, adventure sports, and Buddhist monasteries...",
      bestTime: "May to September",
      location: "Ladakh, India"
  },
  {
      title: "Ranthambore National Park",
      image: "https://ranthamborenationalpark-india.com/wp-content/uploads/2023/08/Ranthambore-National-Park.webp",
      rating: "4.5/5",
      description: "7 out of 100 Places to visit in India • 20 Tourist attractions",
      shortDescription: "Ranthambore is known for its tiger reserve and diverse wildlife...",
      bestTime: "October to April",
      location: "Rajasthan, India"
  },
  {
      title: "Andaman and Nicobar Islands",
      image: "https://www.holidify.com/images/bgImages/ANDAMAN.jpg",
      rating: "4.8/5",
      description: "8 out of 100 Places to visit in India • 12 Tourist attractions",
      shortDescription: "These islands offer pristine beaches, coral reefs, and rich marine life...",
      bestTime: "October to May",
      location: "Andaman and Nicobar Islands, India"
  },
  {
      title: "Darjeeling",
      image: "https://www.holidify.com/images/bgImages/DARJEELING.jpg",
      rating: "4.7/5",
      description: "9 out of 100 Places to visit in India • 8 Tourist attractions",
      shortDescription: "Darjeeling is famous for its tea gardens, stunning views of the Himalayas, and the toy train...",
      bestTime: "March to May, September to November",
      location: "West Bengal, India"
  },
  {
      title: "Agra Fort",
      image: "https://images.saymedia-content.com/.image/t_share/MjAzNDMwNzE1ODA1NjcyNzk2/fort-agra-easy-peasy.jpg",
      rating: "4.6/5",
      description: "10 out of 100 Places to visit in India • 6 Tourist attractions",
      shortDescription: "Agra Fort is a UNESCO World Heritage site, showcasing Mughal architecture...",
      bestTime: "October to March",
      location: "Uttar Pradesh, India"
  },
  {
      title: "Hampi",
      image: "https://www.holidify.com/images/bgImages/HAMPI.jpg",
      rating: "4.7/5",
      description: "11 out of 100 Places to visit in India • 10 Tourist attractions",
      shortDescription: "Hampi is known for its ancient ruins, temples, and stunning landscapes...",
      bestTime: "November to February",
      location: "Karnataka, India"
  },
  {
      title: "Jaisalmer",
      image: "https://www.holidify.com/images/bgImages/JAISALMER.jpg",
      rating: "4.6/5",
      description: "12 out of 100 Places to visit in India • 8 Tourist attractions",
      shortDescription: "Jaisalmer, known as the Golden City, is famous for its desert and forts...",
      bestTime: "October to March",
      location: "Rajasthan, India"
  },
  {
      title: "Ajanta and Ellora Caves",
      image: "https://www.onacheaptrip.com/wp-content/uploads/Kailasa-Temple-at-Ellora-Caves-Aurangabad.jpg",
      rating: "4.8/5",
      description: "13 out of 100 Places to visit in India • 8 Tourist attractions",
      shortDescription: "These caves are renowned for their rock-cut sculptures and paintings...",
      bestTime: "October to March",
      location: "Maharashtra, India"
  },
  {
      title: "Rishikesh",
      image: "https://www.holidify.com/images/bgImages/RISHIKESH.jpg",
      rating: "4.7/5",
      description: "14 out of 100 Places to visit in India • 15 Tourist attractions",
      shortDescription: "Rishikesh is known as the Yoga Capital of the World, offering spiritual experiences...",
      bestTime: "September to April",
      location: "Uttarakhand, India"
  },
  {
      title: "Varanasi",
      image: "https://www.travelanddestinations.com/wp-content/uploads/2021/07/Varanasi-waterfront.jpg",
      rating: "4.5/5",
      description: "15 out of 100 Places to visit in India • 25 Tourist attractions",
      shortDescription: "Varanasi is one of the oldest inhabited cities, known for its ghats and spiritual significance...",
      bestTime: "October to March",
      location: "Uttar Pradesh, India"
  },
  {
      title: "Kumarakom",
      image: "https://www.holidify.com/images/bgImages/KUMARAKOM.jpg",
      rating: "4.6/5",
      description: "16 out of 100 Places to visit in India • 12 Tourist attractions",
      shortDescription: "Kumarakom is known for its backwaters and bird sanctuary...",
      bestTime: "November to February",
      location: "Kerala, India"
  },
  {
      title: "Nainital",
      image: "https://www.holidify.com/images/bgImages/NAINITAL.jpg",
      rating: "4.7/5",
      description: "17 out of 100 Places to visit in India • 14 Tourist attractions",
      shortDescription: "Nainital is famous for its picturesque lake and lush green hills...",
      bestTime: "March to June, September to November",
      location: "Uttarakhand, India"
  }
];
const VirtualTours = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      gap={6}  
      marginLeft="0px"
      marginTop="100px"
    >
      {destinations.map((destination, index) => (
        <Card key={index} sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}>
          <CardMedia
            component="img"
            height="200"
            image={destination.image}
            alt={destination.title}
          />
          <CardContent>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography gutterBottom variant="h6" component="div">
                {index + 1}. {destination.title}
              </Typography>
              <Badge
                badgeContent={destination.rating}
                color="success"
                sx={{
                  backgroundColor: '#4caf50',
                  color: 'white',
                  borderRadius: '5px',
                  padding: '5px',
                }}
              />
            </Box>
            <Typography variant="body2" color="textSecondary" >
            <strong>{destination.location}</strong>
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {destination.description}
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
              {destination.shortDescription}
            </Typography>
            <Typography variant="subtitle2" sx={{ mt: 2 }}>
              <strong>Best Time:</strong> {destination.bestTime}
            </Typography>
            <Box display="flex" justifyContent="space-between" mt={2}>
             
              <Button variant="contained" color="error" size="small" style={{marginLeft:"90px"}} >
                Read More
              </Button>
            </Box>
          </CardContent>
        </Card>
        
      ))}
      <Footer/>
    </Box>
    
  );
  
};

export default VirtualTours;
