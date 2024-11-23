import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Language data
const languagesInIndia = [
  {
    "name": "Telugu",
    "location": "Andhra Pradesh, Telangana",
    "description": "Telugu is a Dravidian language primarily spoken in the states of Andhra Pradesh and Telangana. It has a rich literary tradition and is known for its classical poetry.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYuQfz2tXY0Nc4kLYX_zdAMoSSs5FW_wuqdQ&s"
  },
  {
    "name": "Hindi",
    "location": "North India, Central India",
    "description": "Hindi is the most widely spoken language in India and is one of the official languages of the country. It is spoken in states like Uttar Pradesh, Bihar, Madhya Pradesh, and Rajasthan.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDn2UBzXPM3xZzqXaTs2ux481NY3WJz2mTTw&s"
  },
  {
    "name": "Bengali",
    "location": "West Bengal, Tripura, Assam",
    "description": "Bengali is the second most spoken language in India and is primarily spoken in the state of West Bengal and parts of Tripura and Assam. It is also the official language of Bangladesh.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK0cv2o90toVGAgnP0Qnkp1wbVEe4Qm73Lgg&s"
  },
  {
    "name": "Tamil",
    "location": "Tamil Nadu, Puducherry",
    "description": "Tamil is one of the oldest classical languages in the world. It is spoken predominantly in Tamil Nadu and the union territory of Puducherry. It has a rich cultural and literary history.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8VJrrMANpUfDm-D1tjBi0tTA_FiMSNLw07fYCde2bslqOyALYFPPFfLlQeLOu08T3CYE&usqp=CAU"
  },
  {
    "name": "Marathi",
    "location": "Maharashtra",
    "description": "Marathi is the official language of the state of Maharashtra. It is an Indo-Aryan language with a vast body of literature, including poetry, prose, and religious texts.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRNkzyMw0VLcvf_03_Apai--S1sFT_U7WRmQ&s"
  },
  {
    "name": "Gujarati",
    "location": "Gujarat",
    "description": "Gujarati is the official language of Gujarat. It is an Indo-Aryan language and is spoken by the Gujarati community, both in India and abroad. The language has a rich literary tradition.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/74/GujaratiScriptsDIP.png"
  },
  {
    "name": "Punjabi",
    "location": "Punjab",
    "description": "Punjabi is the official language of Punjab and is widely spoken in the Punjab region of India and Pakistan. It is the language of Sikh religious scriptures and has a robust literary culture.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOb6eFOhSnOzgDiUqQQRwRmGUgF3TpzCIPdQ&s"
  },
  {
    "name": "Kannada",
    "location": "Karnataka",
    "description": "Kannada is the official language of Karnataka. It is a Dravidian language with a history dating back to ancient India, and it has a significant body of classical and modern literature.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/1f/Shukla_Kannada.svg"
  },
  {
    "name": "Malayalam",
    "location": "Kerala",
    "description": "Malayalam is the official language of Kerala and the Lakshadweep islands. It belongs to the Dravidian family of languages and is known for its rich literary tradition and cultural significance.",
    "image": "https://sites.manchester.ac.uk/mlm-datatool/wp-content/uploads/sites/10/2018/04/malayalam.png"
  },
  {
    "name": "Odia",
    "location": "Odisha",
    "description": "Odia is the official language of Odisha. It is an Indo-Aryan language with a long literary history and is known for its classical works of poetry, prose, and drama.",
    "image": "https://www.filose.com/wp-content/uploads/2023/09/odia-calligraphy-2.png"
  }
];

const Languages = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in
    const token = localStorage.getItem("token");
    if (!token) {
      setIsLoggedIn(false);
      navigate("/login"); // Redirect to login if not logged in
    } else {
      setIsLoggedIn(true);
    }
  }, [navigate]);

  return (
    <>
      {/* React Helmet for dynamic metadata */}
      <Helmet>
        <title>Languages in India </title>
        <meta
          name="description"
          content="Explore the diverse languages of India, their regions, and cultural significance. Learn about Telugu, Hindi, Bengali, Tamil, and more."
        />
      </Helmet>

      {isLoggedIn ? (
        <Container>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            align="center"
            marginTop="80px"
          >
            LANGUAGES IN INDIA
          </Typography>
          <Grid container spacing={4}>
            {languagesInIndia.map((lang, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    maxWidth: "350px",
                    height: "400px",
                    margin: "auto",
                    boxShadow: 3,
                  }}
                >
                  <CardMedia
                    component="img"
                    height="250"
                    image={lang.image}
                    alt={lang.name}
                  />
                  <CardContent>
                    <Typography variant="h5" component="div" gutterBottom>
                      {lang.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.primary">
                      {lang.location}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {lang.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      ) : (
        // Show message if not logged in
        <Typography
          variant="h6"
          color="error"
          marginTop="20px"
          textAlign="center"
        >
          Please log in to access this page.
        </Typography>
      )}
    </>
  );
};

export default Languages;
