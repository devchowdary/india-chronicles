import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
  IconButton,
} from '@mui/material';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AddCircle } from '@mui/icons-material';

const AddTourForm = () => {
  const [tourDetails, setTourDetails] = useState({
    title: '',
    description: '',
    location: '',
    rating: '',
    bestTime: '',
    images: [''], // Initialize with one empty field for image URL
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTourDetails({ ...tourDetails, [name]: value });
  };

  // Handle image input changes
  const handleImageChange = (index, value) => {
    const updatedImages = [...tourDetails.images];
    updatedImages[index] = value;
    setTourDetails({ ...tourDetails, images: updatedImages });
  };

  // Add new image input field
  const addImageField = () => {
    setTourDetails({
      ...tourDetails,
      images: [...tourDetails.images, ''], // Add a new empty field
    });
  };

  // Remove image input field
  const removeImageField = (index) => {
    const updatedImages = tourDetails.images.filter((_, i) => i !== index);
    setTourDetails({ ...tourDetails, images: updatedImages });
  };

  // Submit form data to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/tour-details/create', tourDetails);
      toast.success('Tour added successfully!', { position: 'top-center', autoClose: 2000 });
      console.log('Response:', response.data);
      setTourDetails({
        title: '',
        description: '',
        location: '',
        rating: '',
        bestTime: '',
        images: [''],
      }); // Reset form
    } catch (error) {
      toast.error('Failed to add tour. Please try again.', { position: 'top-center', autoClose: 2000 });
      console.error('Error:', error);
    }
  };

  return (
    <Container component="main" maxWidth="sm" sx={{ marginTop: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Add a New Tour
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={tourDetails.title}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              name="description"
              value={tourDetails.description}
              onChange={handleChange}
              multiline
              rows={4}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Location"
              name="location"
              value={tourDetails.location}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Rating"
              name="rating"
              value={tourDetails.rating}
              onChange={handleChange}
              type="number"
              inputProps={{ min: 0, max: 5, step: 0.1 }}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Best Time to Visit"
              name="bestTime"
              value={tourDetails.bestTime}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">Images</Typography>
            {tourDetails.images.map((image, index) => (
              <Grid container spacing={2} key={index}>
                <Grid item xs={10}>
                  <TextField
                    fullWidth
                    label={`Image URL ${index + 1}`}
                    name={`image-${index}`}
                    value={image}
                    onChange={(e) => handleImageChange(index, e.target.value)}
                    required
                  />
                </Grid>
                <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <IconButton onClick={() => removeImageField(index)}>
                    X
                  </IconButton>
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
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
        >
          Submit
        </Button>
      </Box>
      <ToastContainer />
    </Container>
  );
};

export default AddTourForm;
