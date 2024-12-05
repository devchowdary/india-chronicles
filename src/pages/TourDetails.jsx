import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Typography, Box, Card, CardMedia, CardContent, Grid, Button, Rating, Skeleton } from '@mui/material';

const TourDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      axios.get(`https://indiachronicles-backend.onrender.com/tour-details/respective-tour/${id}`)
        .then(response => {
          setTour(response.data);
          setLoading(false);
        })
        .catch(() => {
          setError("Error fetching tour details");
          setLoading(false);
        });
    }, 1500); // Simulate a 1.5-second delay for skeleton loading effect
  }, [id]);

  const fallbackImage = 'https://via.placeholder.com/300';

  const handleTalkToExpert = () => {
    navigate('/expert-contact');
  };

  return (
    <Box padding={4} maxWidth="1200px" margin="0 auto" marginTop={'80px'}>
      <Typography variant="h2" textAlign={'center'} gutterBottom>
        {loading ? <Skeleton width="40%" /> : tour.title.toUpperCase()}
      </Typography>

      <Card sx={{ boxShadow: 5, borderRadius: 2, marginBottom: 4 }}>
        {loading ? (
          <Skeleton variant="rectangular" height={600} />
        ) : (
          <CardMedia
            component="img"
            height="600"
            image={tour.images && tour.images.length > 0 ? tour.images[2] : fallbackImage}
            alt={tour.title}
            onError={(e) => e.target.src = fallbackImage}
            sx={{ borderRadius: 2, objectFit: 'cover', marginBottom: 3 }}
          />
        )}
      </Card>

      <Card sx={{ boxShadow: 2, borderRadius: 2, marginBottom: 4 }}>
        <CardContent>
          {loading ? (
            <Skeleton width="60%" />
          ) : (
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#212121' }}>
              Location: {tour.location}
            </Typography>
          )}
        </CardContent>
      </Card>

      <Card sx={{ boxShadow: 2, borderRadius: 2, marginBottom: 4 }}>
        <CardContent>
          {loading ? (
            <>
              <Skeleton height={30} />
              <Skeleton height={30} />
              <Skeleton height={30} width="80%" />
            </>
          ) : (
            <Typography variant="body1" sx={{ lineHeight: 1.8, color: '#555' }}>
              {tour.description}
            </Typography>
          )}
        </CardContent>
      </Card>

      <Card sx={{ boxShadow: 2, borderRadius: 2, marginBottom: 4 }}>
        <CardContent>
          {loading ? (
            <Skeleton width="40%" />
          ) : (
            <Typography variant="body2" color="textSecondary" sx={{ fontStyle: 'italic' }}>
              <strong>Best Time to Visit:</strong> {tour.bestTime}
            </Typography>
          )}
        </CardContent>
      </Card>

      <Box mt={6}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#212121' }}>
          {loading ? <Skeleton width="30%" /> : "More Images"}
        </Typography>
        <Grid container spacing={3}>
          {loading ? (
            Array.from(new Array(3)).map((_, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Skeleton variant="rectangular" height={250} />
              </Grid>
            ))
          ) : (
            tour.images && tour.images.slice(1).map((image, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ boxShadow: 2, borderRadius: 2 }}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={image || fallbackImage}
                    alt={`${tour.title} Image ${index + 2}`}
                    sx={{ borderRadius: 2, objectFit: 'cover', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}
                    onError={(e) => e.target.src = fallbackImage}
                  />
                </Card>
              </Grid>
            ))
          )}
        </Grid>
      </Box>

      <Box mt={6}>
        {/* Removed the rest of the card content except for the two options */}
        <Card sx={{ boxShadow: 5, borderRadius: 2, padding: 2, marginBottom: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3} textAlign="center" marginTop={'30px'}>
              {loading ? (
                <>
                  <Skeleton width="60%" height={30} />
                  <Skeleton width="80%" height={40} sx={{ mt: 1 }} />
                  <Skeleton width="80%" height={40} sx={{ mt: 1 }} />
                </>
              ) : (
                <>
                  {/* Display only the two buttons */}
                  <Button variant="contained" color="primary" sx={{ mt: 2, width: '100%' }} href={`/tour-detail/${tour.id}`}>
                    View Tour Details
                  </Button>
                  <Button variant="text" color="primary" sx={{ mt: 1, width: '100%', fontWeight: 'bold' }} onClick={handleTalkToExpert}>
                    Talk to a Travel Expert
                  </Button>
                </>
              )}
            </Grid>
          </Grid>
        </Card>
      </Box>

      <Box mt={6} textAlign="center">
        <Button variant="contained" color="primary" href="/view-tours" sx={{ padding: '12px 30px', fontSize: '16px', fontWeight: 600, textTransform: 'none', boxShadow: 3, '&:hover': { backgroundColor: 'primary', color: 'white', boxShadow: 6 } }}>
          Back to Tours
        </Button>
      </Box>
    </Box>
  );
};

export default TourDetails;
