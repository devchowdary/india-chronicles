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
    setTimeout(() => { // Simulate a slight delay
      axios.get(`http://localhost:8080/tour-details/respective-tour/${id}`)
        .then(response => {
          setTour(response.data);
          setLoading(false);
        })
        .catch(() => {
          setError("Error fetching tour details");
          setLoading(false);
        });
    }, 1500); // 1.5-second delay for skeleton loading effect
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
        <Card sx={{ boxShadow: 5, borderRadius: 2, padding: 2, marginBottom: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              {loading ? (
                <Skeleton variant="rectangular" height={200} />
              ) : (
                <CardMedia
                  component="img"
                  height="200"
                  image={tour.images && tour.images.length > 0 ? tour.images[0] : fallbackImage}
                  alt={tour.title}
                  sx={{ borderRadius: 2, objectFit: 'cover' }}
                  onError={(e) => e.target.src = fallbackImage}
                />
              )}
            </Grid>

            <Grid item xs={12} md={5}>
              {loading ? (
                <>
                  <Skeleton width="80%" height={30} />
                  <Skeleton width="40%" height={30} />
                  <Skeleton width="60%" height={20} />
                  <Skeleton width="70%" height={20} />
                </>
              ) : (
                <>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>{tour.title}</Typography>
                  <Rating value={4.5} precision={0.5} readOnly />
                  <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>{tour.reviews || 16} Reviews</Typography>
                  <Typography variant="subtitle2" color="primary" sx={{ mt: 1 }}>All Inclusive</Typography>
                  <Typography variant="body2" color="textSecondary">Days: {tour.days || 5} | Destinations: {tour.destinations || '1 Country 3 Cities'} | Departures: {tour.departures || '8 Dates from 2 Cities'}</Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}><strong>Tour Highlights:</strong> {tour.highlights || 'Expert tour manager all throughout the tour. All meals included.'}</Typography>
                </>
              )}
            </Grid>

            <Grid item xs={12} md={3} textAlign="center" marginTop={'30px'}>
              {loading ? (
                <>
                  <Skeleton width="60%" height={30} />
                  <Skeleton width="80%" height={40} sx={{ mt: 1 }} />
                  <Skeleton width="80%" height={40} sx={{ mt: 1 }} />
                </>
              ) : (
                <>
                  <Typography variant="h6" color="textPrimary">Starts from <strong>₹{tour.price || '25,000'}</strong></Typography>
                  <Typography variant="body2" color="textSecondary">per person on twin sharing</Typography>
                  <Button variant="contained" color="primary" sx={{ mt: 2, width: '100%' }} href={`/tour-detail/${tour.id}`}>View Tour Details</Button>
                  <Button variant="text" color="primary" sx={{ mt: 1, width: '100%', fontWeight: 'bold' }} onClick={handleTalkToExpert}>Talk to a Travel Expert</Button>
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
