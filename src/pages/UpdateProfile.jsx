import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
    Box,
    TextField,
    Button,
    Typography,
} from "@mui/material";

const UpdateProfile = () => {
    const [profile, setProfile] = useState({
        userName: "",
        email: "",
        phone: "",
        location: "",
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            setError("Please log in to update your profile.");
            setTimeout(() => navigate("/login"), 3000);
            return;
        }

        // Fetch the user's current profile details
        axios
            .get("https://indiachronicles-backend.onrender.com/user/profile", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => setProfile(response.data))
            .catch((err) => {
                console.error("Error fetching profile:", err);
                setError("Unable to load profile.");
            });
    }, [navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prev) => ({ ...prev, [name]: value }));
    };

    const handleUpdate = async () => {
        const token = localStorage.getItem("token");

        try {
            await axios.put(
                "https://indiachronicles-backend.onrender.com/user/update",
                profile,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setSuccess("Profile updated successfully!");
            setTimeout(() => navigate("/profile"), 3000);
        } catch (err) {
            console.error("Error updating profile:", err);
            setError("Failed to update profile. Please try again.");
        }
    };

    return (
        <Box sx={{ maxWidth: 400, margin: "auto", padding: "20px" }}>
            <Typography variant="h4" gutterBottom>
                Update Profile
            </Typography>
            {error && <Typography color="error">{error}</Typography>}
            {success && <Typography color="success">{success}</Typography>}
            <TextField
                fullWidth
                label="Username"
                name="userName"
                value={profile.userName}
                onChange={handleChange}
                margin="normal"
            />
            <TextField
                fullWidth
                label="Email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                margin="normal"
                disabled // Email is usually immutable
            />
            <TextField
                fullWidth
                label="Phone"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                margin="normal"
            />
            <TextField
                fullWidth
                label="Location"
                name="location"
                value={profile.location}
                onChange={handleChange}
                margin="normal"
            />
            <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleUpdate}
            >
                Update
            </Button>
        </Box>
    );
};

export default UpdateProfile;
