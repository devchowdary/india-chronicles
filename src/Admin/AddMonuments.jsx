import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container, Paper, Snackbar, Alert } from '@mui/material';
import axios from 'axios';

const AddMonuments = () => {
  const [monumentData, setMonumentData] = useState({
    title: '',
    year: '',
    description: '',
    imageUrl: '',
  });

  const [openSnackbar, setOpenSnackbar] = useState(false); // Snackbar state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMonumentData({ ...monumentData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/monuments/add-monument', monumentData);
      console.log(response.data);
      setOpenSnackbar(true); // Open Snackbar on success
      setMonumentData({ title: '', year: '', description: '', imageUrl: '' }); // Reset form
    } catch (error) {
      console.error('Error adding monument:', error);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false); // Close Snackbar
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ padding: 4, borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom align="center" sx={{ mb: 3 }}>
          Add New Monument
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Title"
            name="title"
            value={monumentData.title}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Year"
            name="year"
            type="number"
            value={monumentData.year}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Description"
            name="description"
            multiline
            rows={4}
            value={monumentData.description}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Image URL"
            name="imageUrl"
            value={monumentData.imageUrl}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            sx={{ mt: 3 }}
          >
            Add Monument
          </Button>
        </Box>
      </Paper>

      {/* Snackbar for success message */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Monument added successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default AddMonuments;
