import React,{useState,useEffect} from 'react';
import { Card, CardContent, Typography, Box, Button, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


const traditions = [
 
  {
    title: "Religious Customs",
    description: "Explore the diverse religious practices and customs that form the fabric of Indian society.",
    imageUrl: "https://www.holidify.com/blog/wp-content/uploads/2015/07/sacredCow.jpg",
    link: "/religious-customs" // Define the route path
  },
  {
    title: "Festivals of India",
    description: "Learn about the festivals celebrated across the country, each with its own unique traditions.",
    imageUrl: "https://www.holidify.com/blog/wp-content/uploads/2015/07/13896645072_c994520879_k.jpg",
    link: "/festivals" // Define the route path
  },
  {
    title: "Cuisine & Food",
    description: "Savor the flavors of Indian cuisine, known for its variety and rich history.",
    imageUrl: "https://www.holidify.com/blog/wp-content/uploads/2015/07/Indian-Thali.jpeg",
    link: "/cuisine" // Define the route path
  },
  {
    title: "Traditional Clothing",
    description: "Dive into the traditional attire of different regions in India, showcasing diversity.",
    imageUrl: "https://www.bewakoof.com/blog/wp-content/uploads/2023/04/image-104.png",
    link: "/traditional-clothing" // Define the route path
  },
  {
    title: "Dances of India",
    description: "Appreciate the various classical and folk dances that narrate stories and celebrate culture.",
    imageUrl: "https://www.holidify.com/images/cmsuploads/compressed/2263141278_21320385d4_o_20191004140006.jpg",
    link: "/dances" // Define the route path
  },
  {
    title: "Epics & Mythology",
    description: "Explore the ancient epics and myths that have shaped Indian literature and belief systems.",
    imageUrl: "https://www.holidify.com/images/cmsuploads/compressed/Kurukshetra_20191004141424.jpg",
    link: "/epics-mythology" // Define the route path
  },
  {
    title: "Martial Arts",
    description: "Discover India's martial arts, which combine physical strength and spiritual discipline.",
    imageUrl: "https://www.holidify.com/images/cmsuploads/compressed/Kalaripayattu_20191004142223.jpg",
    link: "/martial-arts" // Define the route path
  },
  {
    title: "Languages",
    description: "Learn about the multitude of languages spoken across India and their cultural significance.",
    imageUrl: "https://www.holidify.com/images/cmsuploads/compressed/Word_cloud_of_Indian_languages_and_scripts_20191004142933.png",
    link: "/languages" // Define the route path
  }
];

const Traditions = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
    <div style={{ marginTop: '80px' }}>
      <h1 style={{ marginLeft: '450px' }}>INDIAN TRADITIONS</h1>
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        gap={6}
        marginTop="20px"
      >
        {traditions.map((tradition, index) => (
          <Card key={index} sx={{ width: 350, height: 450, boxShadow: 3, borderRadius: 2 }}>
            <CardMedia
              component="img"
              height="260"
              image={tradition.imageUrl}
              alt={tradition.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {tradition.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {tradition.description}
              </Typography>
              <Box display="flex" justifyContent="center" mt={2} marginTop='35px'>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={() => navigate(tradition.link)} // Redirect to the corresponding page
                >
                  VIEW
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
      
    </div>
    ) : (
      // Show message if not logged in
      <Typography variant="h6" color="error" marginTop="20px" textAlign="center">
        Please log in to access this page.
      </Typography>
    )
  );
};

export default Traditions;
