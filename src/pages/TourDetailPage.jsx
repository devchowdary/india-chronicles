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
import { Close } from "@mui/icons-material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import dayjs from "dayjs";

const TourDetailPage = () => {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bookingInProgress, setBookingInProgress] = useState(false); // Loader state
  const [error, setError] = useState(null);

  const [selectedHotel, setSelectedHotel] = useState(null); // To store selected hotel details dynamically
  const [hotels, setHotels] = useState([]); // To store all hotels from the backend

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

  const username = localStorage.getItem("username") || "";

  // Fetch hotels from the backend
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://indiachronicles-backend.onrender.com/hotels/display-hotels")
      .then((response) => {
        setHotels(response.data);
        if (response.data.length > 0) {
          setSelectedHotel(response.data[0]); // Default to the first hotel
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Error fetching hotel details");
        setLoading(false);
      });
  }, []);

  // Recalculate the total price, GST, and total amount whenever selectedHotel, members, or days change
  useEffect(() => {
    if (selectedHotel && members && days > 0) {
      const calculatedTotalBill = selectedHotel.price * members * days;
      setTotalBill(calculatedTotalBill);

      // Calculate GST and Total Amount
      const calculatedGst = (calculatedTotalBill * 11) / 100; // 11% GST
      setGst(calculatedGst);

      const calculatedTotalAmount = calculatedTotalBill + calculatedGst;
      setTotalAmount(calculatedTotalAmount);
    }
  }, [selectedHotel, members, days]);

  const handleHotelChange = (hotelId) => {
    const hotel = hotels.find((h) => h.id === hotelId);
    setSelectedHotel(hotel);
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
    if (!email || !members || !checkIn || !checkOut) {
      alert("Please fill all fields");
      return;
    }

    setBookingInProgress(true); // Show loader

    const bookingData = {
      name: username,
      email,
      packageType: selectedHotel.packageType, // Dynamically use the selected hotel's package type
      hotelName: selectedHotel.name, // Add hotel name
      members,
      checkIn,
      checkOut,
      duration: days, // Send duration to the backend
      totalBill,
      gst,
      totalAmount, // Send total amount to the backend (optional)
    };

    axios
      .post(`https://indiachronicles-backend.onrender.com/tour-details/book-tour`, bookingData)
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
              {selectedHotel?.name?.toLocaleUpperCase()}
            </Typography>
          <FormControl fullWidth sx={{ marginTop: 2 }}>
              <InputLabel>Select Hotel</InputLabel>
              <Select
                value={selectedHotel?.id || ""}
                onChange={(e) => handleHotelChange(e.target.value)}
              >
                {hotels.map((hotel) => (
                  <MenuItem key={hotel.id} value={hotel.id}>
                    {hotel.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
           
            <Divider sx={{ marginY: 2 }} />
            <Typography variant="h6" gutterBottom>
              <b>Price:</b> ₹{selectedHotel?.price}
            </Typography>
            <Typography variant="h6" gutterBottom>
              <b>Food:</b> {selectedHotel?.food}
            </Typography>
            <Typography variant="h6" gutterBottom>
              <b>Room:</b> {selectedHotel?.room}
            </Typography>
            <Typography variant="h6" gutterBottom>
              <b>Bed:</b> {selectedHotel?.bed}
            </Typography>
            <Typography variant="h6" gutterBottom>
              <b>Wi-Fi:</b> {selectedHotel?.wifi}
            </Typography>
            <Typography variant="h6" gutterBottom>
              <b>TV:</b> {selectedHotel?.tv}
            </Typography>

            <TextField
              label="Your Name"
              value={username}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              sx={{ marginY: 2 }}
              disabled
            />
            <TextField
              label="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              sx={{ marginY: 2 }}
            />
           

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

            <Typography variant="h6" gutterBottom>
              <b>Total Bill: </b>₹{totalBill}
            </Typography>
            <Typography variant="h6" gutterBottom>
              <b>GST (11%): </b>₹{gst}
            </Typography>
            <Typography variant="h5" gutterBottom>
              <b>Total Amount: </b>₹{totalAmount}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleBooking}
              fullWidth
            >
              Confirm Booking
            </Button>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={6} marginTop={'20%'}>
            <Carousel>
              {selectedHotel?.images?.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`tour-image-${index}`}
                    style={{ maxHeight: "500px", objectFit: "cover" }}
                  />
                </div>
              ))}
            </Carousel>
          </Grid>
        </Grid>
      </Card>

      {/* Booking Confirmation Dialog */}
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Booking Successful</DialogTitle>
        <DialogContent>
          <Typography variant="h6" align="center" color="primary">
            Your booking has been confirmed! We will send you an email shortly.
          </Typography>
          <Box display="flex" justifyContent="center" marginTop={2}>
            <IconButton onClick={handleCloseDialog}>
              <Close />
            </IconButton>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default TourDetailPage;
