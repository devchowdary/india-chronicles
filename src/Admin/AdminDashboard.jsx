import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Grid, CircularProgress, Box, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [queries, setQueries] = useState([]);
  const [tours, setTours] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [displayedUserCount, setDisplayedUserCount] = useState(0);
  const [displayedQueryCount, setDisplayedQueryCount] = useState(0);
  const [displayedTourCount, setDisplayedTourCount] = useState(0);
  const [displayedBookingCount, setDisplayedBookingCount] = useState(0);
  const navigate = useNavigate();

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

  useEffect(() => {
    axios
      .get("http://localhost:8080/tour-details/bookings")
      .then((response) => {
        setBookings(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to load bookings. Please try again later.");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const totalUsers = users.length;
    const totalInquiries = queries.length;
    const totalTours = tours.length;
    const totalBookings = bookings.length;

    animateCount(setDisplayedUserCount, totalUsers);
    animateCount(setDisplayedQueryCount, totalInquiries);
    animateCount(setDisplayedTourCount, totalTours);
    animateCount(setDisplayedBookingCount, totalBookings);
  }, [users, queries, tours, bookings]);

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

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom align="center" color="primary">
        Admin Dashboard
      </Typography>
      <Grid container spacing={3} justifyContent="center">
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
      </Grid>
    </Box>
  );
};

export default AdminDashboard;
