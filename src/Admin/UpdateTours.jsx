import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Container, Box } from "@mui/material";

const UpdateTours = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [tourData, setTourData] = useState({
    title: "",
    description: "",
    location: "",
    rating: "",
    bestTime: "",
    images: [],
  });

  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the existing data for the tour
    axios
      .get(`http://localhost:8080/tour-details/respective-tour/${id}`)
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

  const handleUpdate = () => {
    axios
      .put(`http://localhost:8080/tour-details/update/${id}`, tourData)
      .then(() => {
        alert("Tour updated successfully!");
        navigate("/admin/tours/view");
      })
      .catch(() => {
        alert("Failed to update the tour");
      });
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
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
        />
        <TextField
          name="description"
          label="Description"
          value={tourData.description}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name="location"
          label="Location"
          value={tourData.location}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name="rating"
          label="Rating"
          value={tourData.rating}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name="bestTime"
          label="Best Time"
          value={tourData.bestTime}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name="images"
          label="Images (comma-separated URLs)"
          value={tourData.images.join(",")}
          onChange={(e) =>
            handleChange({
              target: { name: "images", value: e.target.value.split(",") },
            })
          }
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleUpdate}>
          Update Tour
        </Button>
      </Box>
    </Container>
  );
};

export default UpdateTours;
