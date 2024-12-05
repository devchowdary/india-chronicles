import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent, CardMedia, Grid, Typography, Box, Button, Badge } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ViewTours = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the list of tours
    axios
      .get("https://indiachronicles-backend.onrender.com/tour-details/gettours")
      .then((response) => {
        setTours(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error fetching tours");
        setLoading(false);
      });
  }, []);

  return (
    <Box marginTop="20px">
      <Typography variant="h2" align="center" gutterBottom>
        TOURS
      </Typography>
      <Grid container spacing={3} marginX="auto">
        {loading ? (
          <Typography variant="h6" align="center">
            Loading...
          </Typography>
        ) : error ? (
          <Typography color="error" variant="h6" align="center">
            {error}
          </Typography>
        ) : (
          tours.map((tour) => (
            <Grid item xs={30} sm={12} md={3.1} key={tour.id} marginLeft={'80px'}>
              <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 10 }}>
                {tour.images && tour.images.length > 0 && (
                  <CardMedia
                    component="img"
                    height="200"
                    image={tour.images[0]}
                    alt={tour.title}
                  />
                )}
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {tour.title}
                  </Typography>
                  <Badge
                    badgeContent={tour.rating}
                    color="primary"
                    sx={{ marginBottom: 2 }}
                  />
                  <Typography variant="body2" color="textSecondary">
                    <strong>Location:</strong> {tour.location}
                  </Typography>
                  <Box display="flex" justifyContent="center" mt={2}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => navigate(`/admin/tours/update/${tour.id}`)}
                    >
                      Update
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
