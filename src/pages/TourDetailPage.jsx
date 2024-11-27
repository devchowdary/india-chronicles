import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Typography,
  Box,
  Card,
  Grid,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Divider,
  CircularProgress,
  Backdrop,
} from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import { Close } from "@mui/icons-material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import dayjs from "dayjs";

import { CheckCircle } from "@mui/icons-material";

// Your existing package options
const packageOptions = [
  {
    label: "Standard Package",
    price: 2000,
    food: "Buffet Breakfast Only",
    room: "Non-AC",
    bed: "Twin Sharing",
    wifi: "No",
    TV: "Yes",
    images: [
      "https://thumbs.dreamstime.com/b/bright-comfortable-hotel-room-warm-hotel-rooms-hotel-s-standard-room-130659492.jpg",
      "https://www.shutterstock.com/image-photo/elegant-comfortable-home-hotel-bedroom-260nw-1269461188.jpg",
    ],
  },
  {
    label: "Deluxe Package",
    price: 3000,
    food: "Buffet Breakfast and Dinner",
    room: "AC",
    bed: "Twin Sharing",
    wifi: "Yes",
    TV: "Yes",
    images: [
      "https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/the-oberoi-new-delhi/room-and-suites/deluxe-room/detail/deluxe-room-1.jpg",
      "https://www.shutterstock.com/image-photo/breakfast-served-stemmed-glasses-colourful-260nw-2508385237.jpg",
    ],
  },
  {
    label: "Premium Package",
    price: 5000,
    food: "All Meals Included",
    room: "AC",
    bed: "Single Sharing",
    wifi: "Yes",
    TV: "Yes",
    images: [
      "https://res.cloudinary.com/simplotel/image/upload/w_500,h_350,h_900,r_0,c_crop,q_80/hotel-daspalla-visakhapatnam/PREMIUM_ROOM_1_l0bxcy.jpg",
      "https://pix10.agoda.net/property/56835881/0/58d3e1405e412a6cec37459c5c4a9b4.jpeg?ce=0&s=414x232",
    ],
  },
];

const TourDetailPage = () => {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bookingInProgress, setBookingInProgress] = useState(false); // Loader state
  const [error, setError] = useState(null);

  const [selectedPackage, setSelectedPackage] = useState(packageOptions[0]); // Default: Standard Package
  const [members, setMembers] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [days, setDays] = useState(0);
  const [totalBill, setTotalBill] = useState(0);
  const [gst, setGst] = useState(0); // GST amount
  const [totalAmount, setTotalAmount] = useState(0); // Total amount with GST
  const [dialogOpen, setDialogOpen] = useState(false);
  const [name, setName] = useState(""); // Name field
  const [email, setEmail] = useState(""); // Email field

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8080/tour-details/respective-tour/${id}`)
      .then((response) => {
        setTour(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error fetching tour details");
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    const calculatedTotalBill = selectedPackage.price * members * days;
    setTotalBill(calculatedTotalBill);

    // Calculate GST and Total Amount
    const calculatedGst = (calculatedTotalBill * 11) / 100;
    setGst(calculatedGst);

    const calculatedTotalAmount = calculatedTotalBill + calculatedGst;
    setTotalAmount(calculatedTotalAmount);
  }, [selectedPackage, members, days]);

  const handlePackageChange = (event) => {
    const selectedOption = packageOptions.find((option) => option.label === event.target.value);
    setSelectedPackage(selectedOption);
  };

  const handleMemberChange = (event) => {
    setMembers(event.target.value);
  };

  const handleDateChange = (checkInDate, checkOutDate) => {
    if (checkInDate && checkOutDate) {
      const diffDays = dayjs(checkOutDate).diff(dayjs(checkInDate), "day");
      setDays(diffDays > 0 ? diffDays : 1); // Calculate days
    }
  };

  const handleBooking = () => {
    if (!name || !email || !members || !checkIn || !checkOut) {
      alert("Please fill all fields");
      return;
    }

    setBookingInProgress(true); // Show loader

    const bookingData = {
      name,
      email,
      packageType: selectedPackage.label,
      members,
      checkIn,
      checkOut,
      duration: days, // Send duration to the backend
      totalBill,
      gst,
      totalAmount, // Send total amount to the backend (optional)
    };

    axios
      .post(`http://localhost:8080/tour-details/book-tour`, bookingData)
      .then(() => {
        setBookingInProgress(false); // Hide loader
        setDialogOpen(true);
        resetForm();
      })
      .catch(() => {
        setBookingInProgress(false); // Hide loader on error
        setError("Error in booking");
      });
  };

  const resetForm = () => {
    setSelectedPackage(packageOptions[0]);
    setMembers("");
    setCheckIn("");
    setCheckOut("");
    setDays(0);
    setTotalBill(0);
    setGst(0);
    setTotalAmount(0);
    setName(""); // Reset name
    setEmail(""); // Reset email
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  if (loading) {
    return (
      <Typography variant="h6" textAlign="center" color="primary" marginTop={4}>
        Loading Tour Details...
      </Typography>
    );
  }

  if (error)
    return (
      <Typography variant="h6" color="error" align="center">
        {error}
      </Typography>
    );

  return (
    <Box padding={4} maxWidth="1000px" margin="0 auto" marginTop="80px">
      {/* Backdrop for Loader */}
      <Backdrop
        open={bookingInProgress}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          color: "#fff",
        }}
      >
        <Box textAlign="center">
          <CircularProgress color="inherit" />
          <Typography variant="h6" marginTop={2}>
            Booking in progress. Please wait...
          </Typography>
        </Box>
      </Backdrop>

      <Card sx={{ boxShadow: 4, borderRadius: 2, padding: 3 }}>
        <Grid container spacing={4}>
          {/* Left Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              {selectedPackage.label.toLocaleUpperCase()}
            </Typography>
            <Divider sx={{ marginY: 2 }} />
            <Typography variant="h6" gutterBottom>
              <b>Price:</b> ₹{selectedPackage.price}
            </Typography>
            <Typography variant="h6" gutterBottom>
              <b>Food:</b> {selectedPackage.food}
            </Typography>
            <Typography variant="h6" gutterBottom>
              <b>Room:</b> {selectedPackage.room}
            </Typography>
            <Typography variant="h6" gutterBottom>
              <b>Bed:</b> {selectedPackage.bed}
            </Typography>
            <Typography variant="h6" gutterBottom>
              <b>Wi-Fi:</b> {selectedPackage.wifi}
            </Typography>
            <Typography variant="h6" gutterBottom>
              <b>TV:</b> {selectedPackage.TV}
            </Typography>

            <TextField
              label="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              sx={{ marginY: 2 }}
            />
            <TextField
              label="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              sx={{ marginY: 2 }}
            />
            <FormControl fullWidth sx={{ marginTop: 2 }}>
              <InputLabel>Package</InputLabel>
              <Select value={selectedPackage.label} onChange={handlePackageChange}>
                {packageOptions.map((option, index) => (
                  <MenuItem key={index} value={option.label}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="Number of Members"
              value={members}
              onChange={handleMemberChange}
              fullWidth
              type="number"
              sx={{ marginY: 2 }}
            />
            <TextField
              label="Check-In Date"
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              fullWidth
              sx={{ marginY: 2 }}
            />
            <TextField
              label="Check-Out Date"
              type="date"
              value={checkOut}
              onChange={(e) => {
                setCheckOut(e.target.value);
                handleDateChange(checkIn, e.target.value);
              }}
              fullWidth
              sx={{ marginY: 2 }}
            />

            {/* Price Calculation Display */}
           
           

            <Typography variant="h6" sx={{ marginTop: 2 }}>
              <b>Total Bill:</b> ₹{totalBill}
            </Typography>
            <Typography variant="h6">
              <b>GST (11%):</b> ₹{gst}
            </Typography>
            <Typography variant="h6">
              <b>Total Amount (With GST):</b> ₹{totalAmount}
            </Typography>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleBooking}
              disabled={!members || !checkIn || !checkOut || !name || !email}
              sx={{ marginTop: 2 }}
            >
              Book Tour
            </Button>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={6} marginTop={'200px'}>
            <Carousel>
              {selectedPackage.images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </Carousel>
          </Grid>
        </Grid>
      </Card>

      {/* Booking Confirmation Dialog */}
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
  <DialogTitle>
    <Box display="flex" alignItems="center">
      <CheckCircle sx={{ color: "success.main", marginRight: 1 }} />
      Booking Confirmed
      <IconButton
        edge="end"
        color="inherit"
        onClick={handleCloseDialog}
        aria-label="close"
        sx={{ position: "absolute", right: 8, top: 8 }}
      >
        <Close />
      </IconButton>
    </Box>
  </DialogTitle>
  <DialogContent>
    <Typography variant="body1" color="success.main" paragraph>
      Congratulations! Your tour has been successfully booked.
    </Typography>
    <Typography variant="body2" color="text.secondary" paragraph>
      We have sent the booking details to the provided email address.
    </Typography>
   
  </DialogContent>
</Dialog>
    </Box>
  );
};

export default TourDetailPage;
