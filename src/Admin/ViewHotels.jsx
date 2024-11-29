import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Alert,
} from "@mui/material";
import axios from "axios";

const ViewHotels = () => {
  const [hotels, setHotels] = useState([]); // To store all hotels from the database
  const [selectedHotel, setSelectedHotel] = useState(null); // To store the selected hotel
  const [openUpdateDialog, setOpenUpdateDialog] = useState(false); // To control the update dialog visibility
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false); // To control the delete dialog visibility
  const [deleteSuccess, setDeleteSuccess] = useState(false); // To show success message after delete
  const [hotelToDelete, setHotelToDelete] = useState(null); // To store hotel to delete
  const [updatedHotel, setUpdatedHotel] = useState({}); // To store updated hotel data
  const [additionalImages, setAdditionalImages] = useState([]); // To store additional image URLs

  // Fetch hotels from the backend on component mount
  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get("http://localhost:8080/hotels/display-hotels");
        setHotels(response.data);
        if (response.data.length > 0) {
          setSelectedHotel(response.data[0]); // Default to the first hotel
        }
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    };

    fetchHotels();
  }, []);

  // Handle hotel selection from the dropdown
  const handleHotelChange = (hotelId) => {
    const hotel = hotels.find((h) => h.id === hotelId);
    setSelectedHotel(hotel);
  };

  // Handle opening update dialog with current hotel data
  const handleOpenUpdateDialog = () => {
    setUpdatedHotel({ ...selectedHotel });
    setAdditionalImages([]); // Reset additional images when opening the dialog
    setOpenUpdateDialog(true);
  };

  // Handle hotel update
  const handleUpdateHotel = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8080/hotels/update-hotel/${selectedHotel.id}`,
        { ...updatedHotel, images: [...updatedHotel.images, ...additionalImages] }
      );
      setSelectedHotel(response.data);
      setOpenUpdateDialog(false);
    } catch (error) {
      console.error("Error updating hotel:", error);
    }
  };

  // Handle opening delete confirmation dialog
  const handleOpenDeleteDialog = (hotel) => {
    setHotelToDelete(hotel);
    setOpenDeleteDialog(true);
  };

  // Handle hotel deletion
  const handleDeleteHotel = async () => {
    try {
      await axios.delete(`http://localhost:8080/hotels/delete-hotel/${hotelToDelete.id}`);
      setHotels(hotels.filter((hotel) => hotel.id !== hotelToDelete.id));
      setDeleteSuccess(true);
      setOpenDeleteDialog(false);
    } catch (error) {
      console.error("Error deleting hotel:", error);
    }
  };

  // Handle adding a new text field for image URL
  const handleAddImageField = () => {
    setAdditionalImages([...additionalImages, ""]); // Add a new empty string for the new image URL input
  };

  // Handle change in the additional image URLs
  const handleImageChange = (index, value) => {
    const updatedImages = [...additionalImages];
    updatedImages[index] = value;
    setAdditionalImages(updatedImages);
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Hotel Details
      </Typography>

      {/* Dropdown to select a hotel */}
      <FormControl fullWidth margin="normal">
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

      {/* Hotel Details Card */}
      {selectedHotel && (
        <Card sx={{ mt: 4 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {selectedHotel.name}
            </Typography>
            <Box>
              <Typography variant="body1">
                <strong>Package:</strong> {selectedHotel.packageType}
              </Typography>
              <Typography variant="body1">
                <strong>Price:</strong> ₹{selectedHotel.price}
              </Typography>
              <Typography variant="body1">
                <strong>Food:</strong> {selectedHotel.food}
              </Typography>
              <Typography variant="body1">
                <strong>Room:</strong> {selectedHotel.room}
              </Typography>
              <Typography variant="body1">
                <strong>Beds:</strong> {selectedHotel.bed}
              </Typography>
              <Typography variant="body1">
                <strong>WiFi:</strong> {selectedHotel.wifi}
              </Typography>
              <Typography variant="body1">
                <strong>TV:</strong> {selectedHotel.tv}
              </Typography>
            </Box>
            {/* Display Images */}
            <Typography variant="body1" sx={{ mt: 2 }}>
              <strong>Images:</strong>
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", mt: 1 }}>
              {selectedHotel.images && selectedHotel.images.map((image, index) => (
                <Box key={index} sx={{ mr: 2, mb: 2 }}>
                  <img
                    src={image}
                    alt={`Hotel ${selectedHotel.name} ${index + 1}`}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      borderRadius: "4px",
                    }}
                  />
                </Box>
              ))}
            </Box>
            <Box sx={{ mt: 3 }}>
              <Button
                variant="contained"
                color="primary"
                sx={{ mr: 2 }}
                onClick={handleOpenUpdateDialog}
              >
                Update
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={() => handleOpenDeleteDialog(selectedHotel)}
              >
                Delete
              </Button>
            </Box>
          </CardContent>
        </Card>
      )}

      {/* Success message after delete */}
      {deleteSuccess && (
        <Alert sx={{ mt: 2 }} severity="success">
          Hotel deleted successfully!
        </Alert>
      )}

      {/* Update Hotel Dialog */}
      <Dialog open={openUpdateDialog} onClose={() => setOpenUpdateDialog(false)}>
        <DialogTitle>Update Hotel</DialogTitle>
        <DialogContent>
          <TextField
            label="Hotel Name"
            fullWidth
            value={updatedHotel.name}
            onChange={(e) => setUpdatedHotel({ ...updatedHotel, name: e.target.value })}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Package Type"
            fullWidth
            value={updatedHotel.packageType}
            onChange={(e) => setUpdatedHotel({ ...updatedHotel, packageType: e.target.value })}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Price"
            fullWidth
            type="number"
            value={updatedHotel.price}
            onChange={(e) => setUpdatedHotel({ ...updatedHotel, price: e.target.value })}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Food"
            fullWidth
            value={updatedHotel.food}
            onChange={(e) => setUpdatedHotel({ ...updatedHotel, food: e.target.value })}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Room"
            fullWidth
            value={updatedHotel.room}
            onChange={(e) => setUpdatedHotel({ ...updatedHotel, room: e.target.value })}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Beds"
            fullWidth
            value={updatedHotel.bed}
            onChange={(e) => setUpdatedHotel({ ...updatedHotel, bed: e.target.value })}
            sx={{ mb: 2 }}
          />
          <TextField
            label="WiFi"
            fullWidth
            value={updatedHotel.wifi}
            onChange={(e) => setUpdatedHotel({ ...updatedHotel, wifi: e.target.value })}
            sx={{ mb: 2 }}
          />
          <TextField
            label="TV"
            fullWidth
            value={updatedHotel.tv}
            onChange={(e) => setUpdatedHotel({ ...updatedHotel, tv: e.target.value })}
            sx={{ mb: 2 }}
          />
          {/* Images input */}
          <TextField
            label="Images (comma separated URLs)"
            fullWidth
            value={updatedHotel.images?.join(", ")}
            onChange={(e) =>
              setUpdatedHotel({
                ...updatedHotel,
                images: e.target.value.split(",").map((url) => url.trim()),
              })
            }
            sx={{ mb: 2 }}
          />

          {/* Additional Image Fields */}
          {additionalImages.map((image, index) => (
            <TextField
              key={index}
              label={`Additional Image URL ${index + 1}`}
              fullWidth
              value={image}
              onChange={(e) => handleImageChange(index, e.target.value)}
              sx={{ mb: 2 }}
            />
          ))}
          <Button onClick={handleAddImageField} variant="outlined" sx={{ mt: 2 }}>
            Add More Image URLs
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenUpdateDialog(false)}>Cancel</Button>
          <Button onClick={handleUpdateHotel}>Save</Button>
        </DialogActions>
      </Dialog>

      {/* Delete Hotel Confirmation Dialog */}
      <Dialog open={openDeleteDialog} onClose={() => setOpenDeleteDialog(false)}>
        <DialogTitle>Are you sure you want to delete this hotel?</DialogTitle>
        <DialogActions>
          <Button onClick={() => setOpenDeleteDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteHotel} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ViewHotels;
