import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TalkToExpertPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState(""); // Default to logged-in username
  const [email, setEmail] = useState(""); // Default to logged-in email
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Fetch logged-in user details on component load
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");

    if (storedUsername) {
      setName(storedUsername); // Automatically set username in the form
    }
    
  }, []);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const contactData = { name, email, phone, location, subject, message };

    try {
      const response = await axios.post("http://localhost:8080/user/contact-expert", contactData);
      setLoading(false);
      toast.success("Your query has been submitted successfully!");
      setErrorMessage("");
      // Reset the form after successful submission
      setPhone("");
      setLocation("");
      setMessage("");
      setSubject("");
    } catch (error) {
      setLoading(false);
      setErrorMessage("There was an error submitting your query. Please try again.");
      toast.error("Error submitting query!");
    }
  };

  return (
    <Box padding={4} maxWidth="800px" margin="0 auto" marginTop="80px" bgcolor={"white"}>
      <Typography variant="h4" textAlign="center" gutterBottom color="black">
        Talk to a Travel Expert
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ boxShadow: 4, padding: 3, borderRadius: 2 }}>
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        {/* Name field is pre-filled with username */}
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ marginBottom: 2 }}
          disabled // Make it read-only
        />
        {/* Email field is pre-filled with email */}
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ marginBottom: 2 }}
          // disabled // Make it read-only
        />
        <TextField
          label="Phone"
          variant="outlined"
          type="tel"
          fullWidth
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Location"
          variant="outlined"
          fullWidth
          required
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <FormControl fullWidth required sx={{ marginBottom: 2 }}>
          <InputLabel>Subject</InputLabel>
          <Select value={subject} onChange={(e) => setSubject(e.target.value)} label="Subject">
            <MenuItem value="Tour Package Inquiry">Tour Package Inquiry</MenuItem>
            <MenuItem value="Destination Recommendation">Destination Recommendation</MenuItem>
            <MenuItem value="Travel Tips">Travel Tips</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Your Message"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          sx={{ padding: "12px 0", fontSize: "16px", fontWeight: 600 }}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </Box>
      <Box mt={6} textAlign="center">
        <Button
          variant="outlined"
          color="primary"
          onClick={() => navigate(-1)}
          sx={{ padding: "12px 30px", fontSize: "16px", fontWeight: 600, textTransform: "none" }}
        >
          Back to Tours
        </Button>
      </Box>
      <ToastContainer />
    </Box>
  );
};

export default TalkToExpertPage;
