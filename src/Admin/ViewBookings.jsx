import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
  Paper,
  Button,
  Skeleton,
  Divider,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import axios from "axios";
import { Visibility, Close } from "@mui/icons-material"; // Import the icons

const ViewBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedBooking, setExpandedBooking] = useState(null);

  useEffect(() => {
    // Fetch bookings data from the backend
    axios
      .get("http://localhost:8080/tour-details/bookings")
      .then((response) => {
        console.log("Bookings Data:", response.data); // Log the response
        setBookings(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching bookings:", error);
        setError("Failed to load bookings. Please try again later.");
        setLoading(false);
      });
  }, []);

  // Calculations for totals
  const totalMembers = bookings.reduce((acc, booking) => acc + booking.members, 0);
  const totalBookings = bookings.length;
  const totalAmount = bookings.reduce((acc, booking) => acc + (booking.totalAmount || 0), 0);

  if (loading) {
    return (
      <Box marginTop={4} padding={2}>
        <Skeleton variant="rectangular" height={50} width="50%" />
        <Box marginTop={2}>
          <Skeleton variant="rectangular" height={400} />
        </Box>
      </Box>
    );
  }

  if (error) {
    return (
      <Box marginTop={4} textAlign="center">
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  // Handle expanding a booking to show details
  const handleViewClick = (bookingId) => {
    if (expandedBooking === bookingId) {
      setExpandedBooking(null); // Collapse if the same booking is clicked again
    } else {
      setExpandedBooking(bookingId); // Expand the selected booking
    }
  };

  // Handle closing the booking details card
  const handleCloseClick = () => {
    setExpandedBooking(null); // Close the expanded card
  };

  return (
    <Box marginTop={1} padding={2}>
      <Typography variant="h4" align="center" gutterBottom>
        Bookings Overview
      </Typography>

      {/* Bookings Table */}
      <TableContainer component={Paper} sx={{ maxWidth: "90%", margin: "0 auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>ID</strong></TableCell>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Duration</strong></TableCell>
              <TableCell><strong>Total Bill (₹)</strong></TableCell>
              <TableCell><strong>Action</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell>{booking.id}</TableCell>
                  <TableCell>{booking.name}</TableCell>
                  <TableCell>{booking.duration} days</TableCell>
                  <TableCell>₹{booking.totalBill}</TableCell>
                  <TableCell>
                    <Button
                    style={{borderColor:'white'}}
                      variant="outlined"
                      
                      color="primary"
                      startIcon={<Visibility />} // Use View Icon
                      onClick={() => handleViewClick(booking.id)}
                    >
                      
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  <Typography>No bookings found.</Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Divider for separating the table and the summary */}
      <Divider sx={{ margin: "24px 0" }} />

      {/* Display Total Calculations */}
      <Box sx={{ marginTop: 2, display: 'flex', justifyContent: 'space-between', padding: 2 }}>
        <Typography variant="h6">
          <strong>Total Bookings:</strong> {totalBookings}
        </Typography>
        <Typography variant="h6">
          <strong>Total Members:</strong> {totalMembers}
        </Typography>
        <Typography variant="h6">
          <strong>Total Amount (₹):</strong> ₹{totalAmount}
        </Typography>
      </Box>

      {/* Display Booking Details in Card if the booking is expanded */}
      {expandedBooking && (
        <Box marginTop={4} display="flex" justifyContent="center">
          {bookings
            .filter((booking) => booking.id === expandedBooking)
            .map((booking) => (
              <Card sx={{ width: "80%", boxShadow: 3, position: 'relative' }} key={booking.id}>
                {/* Close icon positioned at the top right corner */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    cursor: "pointer",
                  }}
                  onClick={handleCloseClick}
                >
                  <Close />
                </Box>
                <CardContent>
                  <Typography variant="h5" marginLeft={'40%'} sx={{ fontWeight: 600 }}>
                    Booking Details
                  </Typography>
                  {/* Table for displaying booking details */}
                  <Table sx={{ marginTop: 2 }}>
                    <TableBody>
                      <TableRow>
                        <TableCell><strong>Customer Name:</strong></TableCell>
                        <TableCell>{booking.name}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><strong>Email:</strong></TableCell>
                        <TableCell>{booking.email}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><strong>Package Type:</strong></TableCell>
                        <TableCell>{booking.packageType}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><strong>Members:</strong></TableCell>
                        <TableCell>{booking.members}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><strong>Check-In:</strong></TableCell>
                        <TableCell>{booking.checkIn}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><strong>Check-Out:</strong></TableCell>
                        <TableCell>{booking.checkOut}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><strong>Duration:</strong></TableCell>
                        <TableCell>{booking.duration} days</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><strong>Total Bill (₹):</strong></TableCell>
                        <TableCell>₹{booking.totalBill}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><strong>GST (₹):</strong></TableCell>
                        <TableCell>₹{booking.gst}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><strong>Total Amount (₹):</strong></TableCell>
                        <TableCell>₹{booking.totalAmount}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            ))}
        </Box>
      )}
    </Box>
  );
};

export default ViewBookings;
