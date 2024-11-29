import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Container,
  Button,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";

const ViewMonuments = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [monuments, setMonuments] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedMonument, setSelectedMonument] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [updatedMonument, setUpdatedMonument] = useState({
    title: "",
    description: "",
    year: "",
    imageUrl: "",
  });
  const [snackbarMessage, setSnackbarMessage] = useState(""); // Snackbar message
  const [snackbarOpen, setSnackbarOpen] = useState(false); // Snackbar open state
  const [snackbarSeverity, setSnackbarSeverity] = useState("success"); // Snackbar severity (success or error)
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsLoggedIn(false);
      navigate("/login");
    } else {
      setIsLoggedIn(true);
      fetchMonuments();
    }
  }, [navigate]);

  const fetchMonuments = async () => {
    try {
      const response = await axios.get("http://localhost:8080/monuments/display-monuments");
      setMonuments(response.data);
    } catch (error) {
      console.error("Error fetching monuments:", error);
    }
  };

  const handleDelete = async () => {
    try {
      if (selectedMonument) {
        await axios.delete(`http://localhost:8080/monuments/delete/${selectedMonument.id}`);
        setMonuments((prev) => prev.filter((monument) => monument.id !== selectedMonument.id));
        setSnackbarMessage("Monument deleted successfully!"); // Set the success message
        setSnackbarSeverity("success");
        setOpenDialog(false); // Close the dialog after deletion
        setSnackbarOpen(true); // Show Snackbar
      }
    } catch (error) {
      setSnackbarMessage("Error deleting monument."); // Set the error message
      setSnackbarSeverity("error");
      setSnackbarOpen(true); // Show Snackbar
    }
  };

  const handleEdit = (monument) => {
    setEditMode(true);
    setSelectedMonument(monument);
    setUpdatedMonument({
      title: monument.title,
      description: monument.description,
      year: monument.year,
      imageUrl: monument.imageUrl,
    });
  };

  const handleUpdate = async () => {
    try {
      if (selectedMonument) {
        await axios.put(
          `http://localhost:8080/monuments/update/${selectedMonument.id}`,
          updatedMonument
        );
        fetchMonuments(); // Refresh the list after update
        setSnackbarMessage("Monument updated successfully!"); // Set the success message
        setSnackbarSeverity("success");
        setEditMode(false); // Close the update form
        setSelectedMonument(null); // Clear selected monument
        setSnackbarOpen(true); // Show Snackbar
      }
    } catch (error) {
      setSnackbarMessage("Error updating monument."); // Set the error message
      setSnackbarSeverity("error");
      setSnackbarOpen(true); // Show Snackbar
    }
  };

  // Snackbar Close handler
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>Monuments of India</title>
        <meta
          name="description"
          content="Explore India's iconic monuments, showcasing historical, cultural, and architectural marvels."
        />
        <meta
          name="keywords"
          content="India monuments, historical landmarks, cultural heritage, architecture"
        />
      </Helmet>

      {isLoggedIn ? (
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Typography variant="h3" align="center" gutterBottom>
            Monuments of India
          </Typography>
         
          <Grid container spacing={4}>
            {monuments.map((monument) => (
              <Grid item xs={12} sm={6} md={4} key={monument.id}>
                <Card
                  sx={{
                    width: 350, // Set the card width
                    height: 430, // Set the card height
                    margin: "auto",
                    boxShadow: 4,
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="230" // Adjust image height to fit inside the card
                    image={monument.imageUrl}
                    alt={monument.title}
                  />
                  <CardContent sx={{ height: "120px", overflow: "hidden" }}>
                    <Typography variant="h6">{monument.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {monument.description}
                    </Typography>
                    <Typography variant="subtitle2">
                      <strong>Year:</strong> {monument.year}
                    </Typography>
                  </CardContent>
                  <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
                    {/* Replace Edit Icon with "Update" Button */}
                    <Button
                      color="primary"
                      onClick={() => handleEdit(monument)}
                    >
                      Update
                    </Button>
                    <IconButton
                      color="error"
                      onClick={() => {
                        setSelectedMonument(monument);
                        setOpenDialog(true); // Open delete confirmation dialog
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Delete Confirmation Dialog */}
          <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
            <DialogTitle>Delete Monument</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Are you sure you want to delete this monument? This action cannot be undone.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpenDialog(false)} color="primary">
                Cancel
              </Button>
              <Button
                onClick={handleDelete}
                color="error"
              >
                Delete
              </Button>
            </DialogActions>
          </Dialog>

          {/* Update Form (Over the Cards) */}
          {editMode && (
            <Dialog open={editMode} onClose={() => setEditMode(false)} fullWidth>
              <DialogTitle>Update Monument</DialogTitle>
              <DialogContent>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Title"
                  value={updatedMonument.title}
                  onChange={(e) =>
                    setUpdatedMonument({ ...updatedMonument, title: e.target.value })
                  }
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Description"
                  value={updatedMonument.description}
                  onChange={(e) =>
                    setUpdatedMonument({ ...updatedMonument, description: e.target.value })
                  }
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Year"
                  value={updatedMonument.year}
                  onChange={(e) =>
                    setUpdatedMonument({ ...updatedMonument, year: e.target.value })
                  }
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Image URL"
                  value={updatedMonument.imageUrl}
                  onChange={(e) =>
                    setUpdatedMonument({ ...updatedMonument, imageUrl: e.target.value })
                  }
                />
                <Button onClick={handleUpdate} variant="contained" color="primary">
                  Save
                </Button>
              </DialogContent>
            </Dialog>
          )}
        </Container>
      ) : (
        <Typography variant="h6" color="error" align="center" sx={{ mt: 4 }}>
          Please log in to access this page.
        </Typography>
      )}

      {/* Snackbar for showing success or error messages */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }} // Positioning Snackbar at the top center
      >
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: "100%" }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ViewMonuments;
