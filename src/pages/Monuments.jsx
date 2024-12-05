import React, { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Typography, Grid, Container, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";

const Monuments = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [monuments, setMonuments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsLoggedIn(false);
      navigate("/login");
    } else {
      setIsLoggedIn(true);
      fetchMonuments();
    }
  }, [navigate]);

  const fetchMonuments = async () => {
    try {
      const response = await axios.get("https://indiachronicles-backend.onrender.com/monuments/display-monuments");
      setMonuments(response.data);
    } catch (error) {
      console.error("Error fetching monuments:", error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Monuments of India</title>
        <meta
          name="description"
          content="Explore India's iconic monuments, showcasing historical, cultural, and architectural marvels."
        />
        <meta
          name="keywords"
          content="India monuments, historical landmarks, cultural heritage, architecture"
        />
      </Helmet>

      {isLoggedIn ? (
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Typography variant="h3" align="center" marginTop='20px' gutterBottom>
            Monuments of India
          </Typography>
          <Typography variant="subtitle1" align="center" sx={{ mb: 4, color: "text.secondary" }}>
            Discover the rich history and cultural heritage of India through its magnificent monuments.
          </Typography>
          <Grid container spacing={4}>
            {monuments.map((monument, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    maxWidth: 345,
                    margin: "auto",
                    maxHeight:"400px",
                    minHeight:'400px',
                    boxShadow: 4,
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="240"
                    image={monument.imageUrl}
                    alt={monument.title}
                    sx={{ borderRadius: "4px 4px 0 0" }}
                  />
                  <CardContent sx={{ p: 2 }}>
                    <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
                      {monument.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      {monument.description}
                    </Typography>
                    <Typography variant="subtitle2" color="text.primary" sx={{ mt: 1 }}>
                      <strong>Year:</strong> {monument.year}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      ) : (
        <Typography variant="h6" color="error" align="center" sx={{ mt: 4 }}>
          Please log in to access this page.
        </Typography>
      )}
    </>
  );
};

export default Monuments;
