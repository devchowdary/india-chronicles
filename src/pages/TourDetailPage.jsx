import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Typography, Box, Card, CardMedia, CardContent, Grid, Button, Select, MenuItem, FormControl, InputLabel, Skeleton } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const TourDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const packageOptions = [
    { 
      label: 'Standard Package', 
      price: 25000, 
      food: 'Buffet Breakfast Only', 
      room: 'Non-AC', 
      bed: 'Twin Sharing', 
      wifi: 'No', 
      days: 3,
      TV: 'Yes',
      images: [
        'https://thumbs.dreamstime.com/b/bright-comfortable-hotel-room-warm-hotel-rooms-hotel-s-standard-room-130659492.jpg',
        'https://www.shutterstock.com/image-photo/elegant-comfortable-home-hotel-bedroom-260nw-1269461188.jpg', 
        'https://www.shutterstock.com/image-photo/fivestar-hotel-resort-foods-decoration-260nw-2345050419.jpg', 
        'https://lirp.cdn-website.com/bec07775/dms3rep/multi/opt/MSRS_Standart-Room-Garden-View-1-640w.jpg', 
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/e0/3d/5e/junior-family-room.jpg?w=700&h=-1&s=1'
      ]
    },
    { 
      label: 'Deluxe Package', 
      price: 35000,
      food: 'Buffet Breakfast and Dinner', 
      room: 'AC', 
      bed: 'Twin Sharing', 
      wifi: 'Yes', 
      days: 5,
      TV: 'Yes',
      images: [
        'https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/the-oberoi-new-delhi/room-and-suites/deluxe-room/detail/deluxe-room-1.jpg',
        'https://www.shutterstock.com/image-photo/breakfast-served-stemmed-glasses-colourful-260nw-2508385237.jpg',
        'https://www.westgatehotel.com/wp-content/uploads/2024/05/WG-deluxe-scaled.jpg',
        'https://www.sandiegohotelsweb.com/data/Pics/OriginalPhoto/4544/454445/454445853/pic-the-westgate-hotel-san-diego-87.JPEG',
        'https://images.squarespace-cdn.com/content/v1/58939a42d2b857c51ea91c0d/1563818489361-3HKVFQ3SZ7P4B5EYPFF9/westgate+hotel+le+fontainebleau+room+sunday+brunch+bloody+mary+obsessed+2.jpg'
      ]
    },
    { 
      label: 'Premium Package', 
      price: 50000,
      food: 'All Meals Included', 
      room: 'AC', 
      bed: 'Single Sharing', 
      wifi: 'Yes', 
      days: 7,
      TV: 'Yes',
      images: [
        'https://res.cloudinary.com/simplotel/image/upload/x_0,y_0,w_1600,h_900,r_0,c_crop,q_80,fl_progressive/w_500,f_auto,c_fit/hotel-daspalla-visakhapatnam/PREMIUM_ROOM_1_l0bxcy', 
        'https://pix10.agoda.net/property/56835881/0/58d3e1405e412a6cec37459c5c4a9b4a.jpeg?ce=0&s=414x232', 
        'https://content.r9cdn.net/rimg/himg/33/2d/51/expediav2-315706-3230508206-308859.jpg?width=500&height=350&xhint=540&yhint=333&crop=true', 
        'https://imgcld.yatra.com/ytimages/image/upload/t_hotel_srplist/v2587214931/Hotel/Visakhapatnam/00000654/153515847_sgDQXV.jpg', 
        'https://media.istockphoto.com/id/1014760770/photo/glasses-with-red-wine-and-snacks.jpg?s=170667a&w=0&k=20&c=4_vqvWY-35omCVnAUi-35hr1UgTmyUjw1c2AvJCVm0E='
      ]
    },
  ];

  const [selectedPackage, setSelectedPackage] = useState(packageOptions[0]);
  const [members, setMembers] = useState(1);
  const [totalBill, setTotalBill] = useState(selectedPackage.price);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios.get(`http://localhost:8080/tour-details/respective-tour/${id}`)
        .then(response => {
          setTour(response.data);
          setLoading(false);
        })
        .catch(() => {
          setError("Error fetching tour details");
          setLoading(false);
        });
    }, 2000); // Simulated delay
  }, [id]);

  useEffect(() => {
    setTotalBill(selectedPackage.price * members);
  }, [selectedPackage, members]);

  const handlePackageChange = (event) => {
    const selectedOption = packageOptions.find(option => option.label === event.target.value);
    setSelectedPackage(selectedOption);
  };

  const handleMemberChange = (event) => {
    setMembers(event.target.value);
  };

  const handleBooking = () => {
    axios.post(`http://localhost:8080/tour-details/book-tour`, { packageType: selectedPackage.label, members, totalBill })
      .then(response => {
        toast.success("Booking Successful", { position: "top-right", autoClose: 3000 });
      })
      .catch(error => {
        toast.error("Error in booking", { position: "top-right", autoClose: 3000 });
      });
  };

  if (loading) {
    return (
      <Box padding={4} maxWidth="900px" margin="0 auto" marginTop="80px">
        <Skeleton variant="rectangular" width="100%" height={400} sx={{ borderRadius: 2 }} />
        <Box mt={3}>
          <Skeleton variant="text" height={40} width="60%" />
          <Skeleton variant="text" height={20} width="40%" />
          <Skeleton variant="text" height={20} width="80%" />
          <Skeleton variant="rectangular" width="100%" height={200} sx={{ borderRadius: 2, mt: 2 }} />
        </Box>
      </Box>
    );
  }

  if (error) return <Typography variant="h6" color="error" align="center">{error}</Typography>;

  return (
    <Box padding={4} maxWidth="900px" margin="0 auto" marginTop="80px">
      <Card sx={{ boxShadow: 4, borderRadius: 2, padding: 2, marginTop: 4 }}>
        <Typography variant="h2" textAlign="center" gutterBottom fontStyle={'unset'}>
          {tour.title.toUpperCase()}
        </Typography>
        <Grid container spacing={4} >
          <Grid item xs={12} md={5}>
            <Carousel showThumbs={false} showStatus={false} infiniteLoop>
              {(selectedPackage.images.length > 0 ? selectedPackage.images : ['https://via.placeholder.com/300']).map((image, index) => (
                <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px',marginTop:'100px' }}>
                  <CardMedia
                    component="img"
                    height="300px"
                    image={image}
                    alt={`${tour.title} Image ${index + 1}`}
                    sx={{ borderRadius: 2, objectFit: 'cover' }}
                  />
                </div>
              ))}
            </Carousel>
          </Grid>
          <Grid item xs={12} md={7}>
            <CardContent>
              <Typography variant="h6" sx={{ color: '#212121' }}>
                <b>Location:</b> {tour.location}
              </Typography>
              <Typography variant="h6" sx={{  color: '#212121', marginTop: 1 }}>
                <b>Room Type:</b> {selectedPackage.room}
              </Typography>
              <Typography variant="h6" sx={{  color: '#212121', marginTop: 1 }}>
                <b>Food:</b> {selectedPackage.food}
              </Typography>
              <Typography variant="h6" sx={{  color: '#212121', marginTop: 1 }}>
                <b>Wi-Fi:</b> {selectedPackage.wifi}
              </Typography>
              <Typography variant="h6" sx={{  color: '#212121', marginTop: 1 }}>
               <b> TV:</b> {selectedPackage.TV}
              </Typography>
              <Typography variant="h6" sx={{  color: '#212121', marginTop: 1 }}>
                <b>Duration:</b> {selectedPackage.days} Days
              </Typography>
              <FormControl fullWidth sx={{ marginTop: 3 }}>
                <InputLabel>Package</InputLabel>
                <Select value={selectedPackage.label} onChange={handlePackageChange}>
                  {packageOptions.map((option, index) => (
                    <MenuItem key={index} value={option.label}>{option.label}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth sx={{ marginTop: 3 }}>
                <InputLabel>Members</InputLabel>
                <Select value={members} onChange={handleMemberChange}>
                  {[1, 2, 3, 4, 5].map((count) => (
                    <MenuItem key={count} value={count}>{count}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Typography variant="h5" color="primary" sx={{ marginTop: 3 }}>
                Total Bill: ₹ {totalBill}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: 3 }}
                onClick={handleBooking}
              >
                Book Now
              </Button>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
      <ToastContainer />
    </Box>
  );
};

export default TourDetailPage;
