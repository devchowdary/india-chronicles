import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Box } from "@mui/material";
import axios from "axios";

const ViewBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch the bookings from the backend
    axios.get("http://localhost:8080/tour-details/bookings")
      .then(response => setBookings(response.data))
      .catch(error => console.error("Error fetching bookings:", error));
  }, []);

  return (
    <Box>
      <Typography variant="h3" marginLeft={'40%'} gutterBottom> BOOKINGS</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>ID</strong></TableCell>
              <TableCell><strong>Members</strong></TableCell>
              <TableCell><strong>Package Type</strong></TableCell>
              <TableCell><strong>Total Bill</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.map(booking => (
              <TableRow key={booking.id}>
                <TableCell>{booking.id}</TableCell>
                <TableCell>{booking.members}</TableCell>
                <TableCell>{booking.packageType}</TableCell>
                <TableCell>{booking.totalBill}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ViewBookings;
