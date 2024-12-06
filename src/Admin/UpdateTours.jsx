import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Container, Box, Snackbar, Alert, Grid, IconButton } from "@mui/material";
import { AddCircle } from "@mui/icons-material";

const UpdateTours = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [tourData, setTourData] = useState({
    title: "",
    description: "",
    location: "",
    rating: "",
    bestTime: "",
    images: [], // Initialize as an empty array
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // Fetch the existing data for the tour
    axios
      .get(`https://indiachronicles-backend.onrender.com/tour-details/respective-tour/${id}`)
      .then((response) => {
        setTourData(response.data);
      })
      .catch(() => {
        setError("Failed to fetch tour details");
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTourData({ ...tourData, [name]: value });
  };

  // Handle image input changes
  const handleImageChange = (index, value) => {
    const updatedImages = [...tourData.images];
    updatedImages[index] = value;
    setTourData({ ...tourData, images: updatedImages });
  };

  // Add new image input field
  const addImageField = () => {
    setTourData({
      ...tourData,
      images: [...tourData.images, ""], // Add a new empty field
    });
  };

  // Remove image input field
  const removeImageField = (index) => {
    const updatedImages = tourData.images.filter((_, i) => i !== index);
    setTourData({ ...tourData, images: updatedImages });
  };

  const handleUpdate = () => {
    axios
      .put(`https://indiachronicles-backend.onrender.com/tour-details/update/${id}`, tourData)
      .then(() => {
        setSuccess(true); // Show success message
      })
      .catch(() => {
        setError("Failed to update the tour");
      });
  };

  const handleCloseSnackbar = () => {
    setSuccess(false);
    navigate("/admin/tours/view"); // Navigate after closing the success message
  };

  return (
    <Container>
      <Box
        sx={{
          maxWidth: "600px", // Restrict width
          margin: "auto",
          padding: "20px",
          backgroundColor: "#f5f5f5", // Subtle background color
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Box shadow for professional look
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Update Tour
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        <Box component="form" display="flex" flexDirection="column" gap={2}>
          <TextField
            name="title"
            label="Title"
            value={tourData.title}
            onChange={handleChange}
            fullWidth
            size="small"
          />
          <TextField
            name="description"
            label="Description"
            value={tourData.description}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            size="small"
          />
          <TextField
            name="location"
            label="Location"
            value={tourData.location}
            onChange={handleChange}
            fullWidth
            size="small"
          />
          <TextField
            name="rating"
            label="Rating"
            value={tourData.rating}
            onChange={handleChange}
            fullWidth
            type="number"
            inputProps={{ min: 0, max: 5, step: 0.1 }}
            size="small"
          />
          <TextField
            name="bestTime"
            label="Best Time"
            value={tourData.bestTime}
            onChange={handleChange}
            fullWidth
            size="small"
          />
          <Typography variant="body1">Images</Typography>
          {tourData.images.map((image, index) => (
            <Grid container spacing={2} key={index}>
              <Grid item xs={10}>
                <TextField
                  fullWidth
                  label={`Image URL ${index + 1}`}
                  name={`image-${index}`}
                  value={image}
                  onChange={(e) => handleImageChange(index, e.target.value)}
                  required
                  size="small"
                />
              </Grid>
              <Grid item xs={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <IconButton onClick={() => removeImageField(index)}>X</IconButton>
              </Grid>
            </Grid>
          ))}
          <Button
            startIcon={<AddCircle />}
            variant="outlined"
            color="primary"
            onClick={addImageField}
            sx={{ mt: 2 }}
          >
            Add Another Image
          </Button>
          <Button variant="contained" color="primary" onClick={handleUpdate} sx={{ mt: 3 }}>
            Update Tour
          </Button>
        </Box>
      </Box>

      {/* Snackbar for Success Message */}
      <Snackbar
        open={success}
        autoHideDuration={3000} // Automatically close after 3 seconds
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: "100%" }}>
          Tour updated successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default UpdateTours;
