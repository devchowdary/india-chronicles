import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  IconButton,
  Box,
  Snackbar,
  Alert,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import axios from "axios";

const AddHotel = () => {
  const [hotel, setHotel] = useState({
    name: "", // Hotel Name field
    packageType: "", // Standard, Premium, Deluxe
    price: "",
    food: "",
    room: "",
    bed: "",
    wifi: "",
    tv: "",
    images: [""], // Start with one field for image
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  // Package data
  const packages = {
    Standard: {
      price: 2000,
      food: "Meals Only",
      wifi: "No",
    },
    Premium: {
      price: 2500,
      food: "Meals, Breakfast",
      wifi: "Yes",
    },
    Deluxe: {
      price: 4000,
      food: "Meals, Breakfast, Dinner, Drinks",
      wifi: "Yes",
    },
  };

  // Handle changes for specific fields
  const handleFieldChange = (field, value) => {
    setHotel({ ...hotel, [field]: value });
  };

  // Handle package selection
  const handlePackageChange = (value) => {
    setHotel({
      ...hotel,
      packageType: value,
      price: packages[value].price,
      food: packages[value].food,
      wifi: packages[value].wifi,
    });
  };

  const handleImageChange = (index, value) => {
    const updatedImages = [...hotel.images];
    updatedImages[index] = value;
    setHotel({ ...hotel, images: updatedImages });
  };

  const addImageField = () => {
    setHotel({ ...hotel, images: [...hotel.images, ""] });
  };

  const removeImageField = (index) => {
    const updatedImages = [...hotel.images];
    updatedImages.splice(index, 1);
    setHotel({ ...hotel, images: updatedImages });
  };

  const handleSubmit = async () => {
    try {
      // Send the hotel data to the backend
      await axios.post("http://localhost:8080/hotels/add-hotel", hotel);
      setSnackbarMessage("Hotel added successfully!");
      setSnackbarSeverity("success");
      setHotel({
        name: "",
        packageType: "",
        price: "",
        food: "",
        room: "",
        bed: "",
        wifi: "",
        tv: "",
        images: [""],
      });
    } catch (error) {
      setSnackbarMessage("Failed to add hotel. Please try again.");
      setSnackbarSeverity("error");
    }
    setSnackbarOpen(true);
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Add Hotel
      </Typography>

      {/* Form Fields */}
      <TextField
        fullWidth
        margin="normal"
        label="Hotel Name"
        value={hotel.name}
        onChange={(e) => handleFieldChange("name", e.target.value)}
      />

      {/* Package Type Dropdown */}
      <FormControl fullWidth margin="normal">
        <InputLabel>Package</InputLabel>
        <Select
          value={hotel.packageType}
          onChange={(e) => handlePackageChange(e.target.value)}
        >
          <MenuItem value="Standard">Standard</MenuItem>
          <MenuItem value="Premium">Premium</MenuItem>
          <MenuItem value="Deluxe">Deluxe</MenuItem>
        </Select>
      </FormControl>

      <TextField
        fullWidth
        margin="normal"
        label="Price"
        type="number"
        value={hotel.price}
        disabled // Auto-filled based on package
      />
      <TextField
        fullWidth
        margin="normal"
        label="Food"
        value={hotel.food}
        disabled // Auto-filled based on package
      />
      <TextField
        fullWidth
        margin="normal"
        label="Room"
        value={hotel.room}
        onChange={(e) => handleFieldChange("room", e.target.value)}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Beds"
        value={hotel.bed}
        onChange={(e) => handleFieldChange("bed", e.target.value)}
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>WiFi</InputLabel>
        <Select
          value={hotel.wifi}
          disabled // Auto-filled based on package
        >
          <MenuItem value="Yes">Yes</MenuItem>
          <MenuItem value="No">No</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>TV</InputLabel>
        <Select
          value={hotel.tv}
          // disabled // Auto-filled based on package
          onChange={(e) => handleFieldChange("tv", e.target.value)}

        >
          <MenuItem value="Yes">Yes</MenuItem>
          <MenuItem value="No">No</MenuItem>
        </Select>
      </FormControl>

      {/* Dynamic Image Fields */}
      <Typography variant="h6" gutterBottom>
        Images
      </Typography>
      {hotel.images.map((image, index) => (
        <Box key={index} sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <TextField
            fullWidth
            label={`Image URL ${index + 1}`}
            value={image}
            onChange={(e) => handleImageChange(index, e.target.value)}
          />
          <IconButton color="error" onClick={() => removeImageField(index)}>
            &#x2716; {/* Remove button */}
          </IconButton>
        </Box>
      ))}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <IconButton color="primary" onClick={addImageField}>
          <AddCircleIcon fontSize="large" />
        </IconButton>
      </Box>

      {/* Submit Button */}
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSubmit}
      >
        Add Hotel
      </Button>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default AddHotel;
