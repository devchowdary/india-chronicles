import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent, CardMedia, Grid, Typography, Box, Button, Badge, Skeleton } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const ViewTours = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("token");
    if (!token) {
      setIsLoggedIn(false);
      navigate("/login");  // Redirect to login if not logged in
    } else {
      setIsLoggedIn(true);
    }

    // Fetch tours if logged in
    if (isLoggedIn) {
      // Simulate a delay in fetching data
      setTimeout(() => {
        axios
          .get("http://localhost:8080/tour-details/gettours")
          .then((response) => {
            setTours(response.data);
            setLoading(false);
          })
          .catch((error) => {
            setError("Error fetching tours");
            setLoading(false);
          });
      }, 2000); // 2-second delay
    }
  }, [navigate, isLoggedIn]);

  return (
    <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center" alignItems="center" gap={6} marginTop="60px">
      <Typography variant="h2">TOURS</Typography>
      <Grid container spacing={3} marginLeft={'170px'}>
        {loading ? (
          // Display skeletons while loading
          Array.from(new Array(8)).map((_, index) => (
            <Grid item xs={12} sm={6} md={3.5} key={index}>
              <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}>
                <Skeleton variant="rectangular" height={200} />
                <CardContent>
                  <Skeleton variant="text" height={30} width="60%" />
                  <Skeleton variant="text" height={20} width="40%" />
                  <Skeleton variant="rectangular" height={40} width="100%" sx={{ mt: 2 }} />
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : error ? (
          // Show error message if any
          <Typography color="error">{error}</Typography>
        ) : (
          // Display the actual tour cards once data is fetched
          tours.map((tour) => (
            <Grid item xs={12} sm={6} md={3.5} key={tour.id}>
              <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}>
                {tour.images && tour.images.length > 0 && (
                  <CardMedia
                    component="img"
                    height="200"
                    image={tour.images[0]}
                    alt={tour.title}
                  />
                )}
                <CardContent>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography gutterBottom variant="h6" component="div">
                      {tour.title}
                    </Typography>
                    <Badge
                      badgeContent={tour.rating}
                      color="success"
                      sx={{
                        backgroundColor: '#4caf50',
                        color: 'white',
                        borderRadius: '5px',
                        padding: '5px',
                      }}
                    />
                  </Box>
                  <Typography variant="body2" color="textSecondary">
                    <strong>Location:</strong> {tour.location}
                  </Typography>
                  <Box display="flex" justifyContent="center" mt={2}>
                    <Button variant="contained" color="error" size="small" onClick={() => navigate(`/view-tours/${tour.id}`)}>
                      Read More
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default ViewTours;
