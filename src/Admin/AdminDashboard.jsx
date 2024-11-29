import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Grid, CircularProgress, Box, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PeopleIcon from "@mui/icons-material/People"; // Users icon
import ContactSupportIcon from "@mui/icons-material/ContactSupport"; // Inquiries icon
import FlightIcon from "@mui/icons-material/Flight"; // Tours icon
import EventAvailableIcon from "@mui/icons-material/EventAvailable"; // Bookings icon
import HotelIcon from "@mui/icons-material/Hotel"; // Hotel icon

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [queries, setQueries] = useState([]);
  const [tours, setTours] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [hotels, setHotels] = useState([]); // State for hotels
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [displayedUserCount, setDisplayedUserCount] = useState(0);
  const [displayedQueryCount, setDisplayedQueryCount] = useState(0);
  const [displayedTourCount, setDisplayedTourCount] = useState(0);
  const [displayedBookingCount, setDisplayedBookingCount] = useState(0);
  const [displayedHotelCount, setDisplayedHotelCount] = useState(0); // State for hotel count
  const navigate = useNavigate();

  // Fetch Users
  useEffect(() => {
    axios
      .get("http://localhost:8080/user/all-users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching user data");
        setLoading(false);
      });
  }, []);

  // Fetch Queries
  useEffect(() => {
    axios
      .get("http://localhost:8080/user/contact-inquiries")
      .then((response) => {
        setQueries(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error fetching queries");
        setLoading(false);
      });
  }, []);

  // Fetch Tours
  useEffect(() => {
    axios
      .get("http://localhost:8080/tour-details/gettours")
      .then((response) => {
        setTours(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error fetching tours");
        setLoading(false);
      });
  }, []);

  // Fetch Bookings
  useEffect(() => {
    axios
      .get("http://localhost:8080/tour-details/bookings")
      .then((response) => {
        setBookings(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load bookings. Please try again later.");
        setLoading(false);
      });
  }, []);

  // Fetch Hotels
  useEffect(() => {
    axios
      .get("http://localhost:8080/hotels/display-hotels") // API endpoint for hotels
      .then((response) => {
        setHotels(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error fetching hotels");
        setLoading(false);
      });
  }, []);

  // Animate counts
  useEffect(() => {
    const totalUsers = users.length;
    const totalInquiries = queries.length;
    const totalTours = tours.length;
    const totalBookings = bookings.length;
    const totalHotels = hotels.length;

    animateCount(setDisplayedUserCount, totalUsers);
    animateCount(setDisplayedQueryCount, totalInquiries);
    animateCount(setDisplayedTourCount, totalTours);
    animateCount(setDisplayedBookingCount, totalBookings);
    animateCount(setDisplayedHotelCount, totalHotels); // Animate hotel count
  }, [users, queries, tours, bookings, hotels]);

  const animateCount = (setCount, target) => {
    let current = 0;
    const increment = target / 100;
    const animate = () => {
      if (current < target) {
        current += increment;
        setCount(Math.floor(current));
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };
    animate();
  };

  // Navigation Handlers
  const handleViewUsers = () => {
    navigate("/admin/users/view");
  };

  const handleViewInquiries = () => {
    navigate("/admin/queries/view");
  };

  const handleViewTours = () => {
    navigate("/admin/tours/view");
  };

  const handleViewBookings = () => {
    navigate("/admin-bookings");
  };

  const handleViewHotels = () => {
    navigate("/admin/view-hotels"); // Navigate to hotel management page
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom align="center" color="primary">
        Admin Dashboard
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {/* Users */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              height: 250,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 2,
              boxShadow: 3,
              transition: "transform 0.2s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: 6,
              },
            }}
          >
            <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <PeopleIcon sx={{ fontSize: 50, color: "primary.main" }} />
              <Typography variant="h6" color="textSecondary" gutterBottom>
                Total Registered Users
              </Typography>
              {loading ? (
                <CircularProgress color="primary" />
              ) : error ? (
                <Typography color="error">{error}</Typography>
              ) : (
                <Typography variant="h4" color="primary">
                  {displayedUserCount}
                </Typography>
              )}
              <Box sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleViewUsers}
                  sx={{ width: "100%" }}
                >
                  View Users
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Inquiries */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              height: 250,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 2,
              boxShadow: 3,
              transition: "transform 0.2s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: 6,
              },
            }}
          >
            <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <ContactSupportIcon sx={{ fontSize: 50, color: "primary.main" }} />
              <Typography variant="h6" color="textSecondary" gutterBottom>
                Total Inquiries Received
              </Typography>
              {loading ? (
                <CircularProgress color="primary" />
              ) : error ? (
                <Typography color="error">{error}</Typography>
              ) : (
                <Typography variant="h4" color="primary">
                  {displayedQueryCount}
                </Typography>
              )}
              <Box sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleViewInquiries}
                  sx={{ width: "100%" }}
                >
                  View Inquiries
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Tours */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              height: 250,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 2,
              boxShadow: 3,
              transition: "transform 0.2s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: 6,
              },
            }}
          >
            <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <FlightIcon sx={{ fontSize: 50, color: "primary.main" }} />
              <Typography variant="h6" color="textSecondary" gutterBottom>
                Total Tours Available
              </Typography>
              {loading ? (
                <CircularProgress color="primary" />
              ) : error ? (
                <Typography color="error">{error}</Typography>
              ) : (
                <Typography variant="h4" color="primary">
                  {displayedTourCount}
                </Typography>
              )}
              <Box sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleViewTours}
                  sx={{ width: "100%" }}
                >
                  View Tours
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Bookings */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              height: 250,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 2,
              boxShadow: 3,
              transition: "transform 0.2s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: 6,
              },
            }}
          >
            <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <EventAvailableIcon sx={{ fontSize: 50, color: "primary.main" }} />
              <Typography variant="h6" color="textSecondary" gutterBottom>
                Total Bookings Made
              </Typography>
              {loading ? (
                <CircularProgress color="primary" />
              ) : error ? (
                <Typography color="error">{error}</Typography>
              ) : (
                <Typography variant="h4" color="primary">
                  {displayedBookingCount}
                </Typography>
              )}
              <Box sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleViewBookings}
                  sx={{ width: "100%" }}
                >
                  View Bookings
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Hotels */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              height: 250,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 2,
              boxShadow: 3,
              transition: "transform 0.2s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: 6,
              },
            }}
          >
            <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <HotelIcon sx={{ fontSize: 50, color: "primary.main" }} />
              <Typography variant="h6" color="textSecondary" gutterBottom>
                Total Hotels Available
              </Typography>
              {loading ? (
                <CircularProgress color="primary" />
              ) : error ? (
                <Typography color="error">{error}</Typography>
              ) : (
                <Typography variant="h4" color="primary">
                  {displayedHotelCount}
                </Typography>
              )}
              <Box sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleViewHotels}
                  sx={{ width: "100%" }}
                >
                  View Hotels
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminDashboard;
