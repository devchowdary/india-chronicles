import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
    Avatar,
    Card,
    CardContent,
    CardActions,
    Typography,
    Button,
    Box,
    IconButton,
    Menu,
    MenuItem,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Skeleton,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState("");
    const [menuAnchor, setMenuAnchor] = useState(null); // Anchor element for menu
    const [openDialog, setOpenDialog] = useState(false); // State for confirmation dialog
    const [openSuccessDialog, setOpenSuccessDialog] = useState(false); // State for success dialog
    const [loading, setLoading] = useState(true); // State to manage loading state
    const navigate = useNavigate();

    // Function to fetch the profile
    const fetchProfile = async (token) => {
        try {
            const response = await axios.get("http://localhost:8080/user/profile", {
                headers: {
                    Authorization: `Bearer ${token}`, // Send the token with request
                },
            });

            setProfile(response.data);
            setLoading(false); // Stop the loading after data is fetched
        } catch (err) {
            console.error("Error fetching profile:", err);
            if (err.response?.status === 403) { // Token expired
                setError("Your session has expired. Please log in again.");
                setTimeout(() => navigate("/"), 3000);
            } else {
                setError("An error occurred. Please try again later.");
            }
            setLoading(false); // Stop the loading even on error
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            setError("Please log in before accessing the profile page.");
            setTimeout(() => navigate("/login"), 3000);
            return;
        }

        fetchProfile(token); // Fetch profile with the current token

        // Simulate a loading time of 3 seconds
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 3000); // Stop loading after 3 seconds

        return () => clearTimeout(timeout); // Clean up timeout on unmount
    }, [navigate]);

    const handleLogout = () => {
        // Clear user data from localStorage
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        navigate("/"); // Redirect to login page
    };

    // Handlers for the Settings dropdown menu
    const handleSettingsClick = (event) => {
        setMenuAnchor(event.currentTarget); // Open menu
    };

    const handleCloseMenu = () => {
        setMenuAnchor(null); // Close menu
    };

    const handleUpdateProfile = () => {
        handleCloseMenu();
        navigate("/update-profile"); // Navigate to Update Profile page
    };

    const handleDeleteAccount = async () => {
        const token = localStorage.getItem("token");

        try {
            await axios.delete("http://localhost:8080/user/delete", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setOpenSuccessDialog(true); // Show success dialog
            setTimeout(handleLogout, 2000); // Log out after a short delay
        } catch (err) {
            console.error("Error deleting account:", err);
            setError("Failed to delete account. Please try again.");
        }
    };

    // Handlers for dialog
    const openDeleteDialog = () => setOpenDialog(true);
    const closeDeleteDialog = () => setOpenDialog(false);

    const confirmDeleteAccount = () => {
        closeDeleteDialog();
        handleDeleteAccount(); // Proceed with deletion
    };

    // Handlers for success dialog
    const closeSuccessDialog = () => {
        setOpenSuccessDialog(false); // Close success dialog
        navigate("/"); // Redirect to login page
    };

    return (
        <Box
            sx={{
                maxWidth: 400,
                margin: "auto",
                padding: "20px",
                textAlign: "center",
                marginTop: "50px",
            }}
        >
            <Typography variant="h4" component="h1" gutterBottom>
                Profile
            </Typography>
            {error ? (
                <Typography color="error">{error}</Typography>
            ) : loading ? (
                // Skeleton loader displayed for 3 seconds
                <Box>
                    {/* Skeleton Loader */}
                    <Skeleton variant="circle" width={56} height={56} sx={{ margin: "auto", marginBottom: 2 }} />
                    <Skeleton variant="text" width="80%" sx={{ margin: "auto", marginBottom: 1 }} />
                    <Skeleton variant="text" width="60%" sx={{ margin: "auto", marginBottom: 1 }} />
                    <Skeleton variant="text" width="60%" sx={{ margin: "auto", marginBottom: 1 }} />
                    <Skeleton variant="text" width="50%" sx={{ margin: "auto" }} />
                </Box>
            ) : profile ? (
                <Card sx={{ maxWidth: 345, margin: "auto", padding: "20px" }}>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        marginBottom={2}
                        sx={{ position: "relative" }}
                    >
                        {/* Profile Icon Centered */}
                        <Avatar
                            sx={{
                                bgcolor: "primary.main",
                                width: 56,
                                height: 56,
                                margin: "auto",
                            }}
                        >
                            <AccountCircleIcon fontSize="large" />
                        </Avatar>
                        {/* Settings Icon on the Right */}
                        <IconButton
                            color="primary"
                            aria-label="settings"
                            sx={{ position: "absolute", right: 0 }}
                            onClick={handleSettingsClick}
                        >
                            <SettingsIcon />
                        </IconButton>
                        <Menu
                            anchorEl={menuAnchor}
                            open={Boolean(menuAnchor)}
                            onClose={handleCloseMenu}
                        >
                            <MenuItem onClick={handleUpdateProfile}>
                                Update Profile
                            </MenuItem>
                            <MenuItem onClick={openDeleteDialog}>
                                Delete Account
                            </MenuItem>
                        </Menu>
                    </Box>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {profile.userName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <strong>Email:</strong> {profile.email}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <strong>Phone:</strong> {profile.phone}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <strong>Location:</strong> {profile.location}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "center" }}>
                        <Button
                            size="small"
                            color="primary"
                            variant="contained"
                            onClick={handleLogout}
                        >
                            Logout
                        </Button>
                    </CardActions>
                </Card>
            ) : (
                <Typography>Loading profile...</Typography>
            )}

            {/* Delete Confirmation Dialog */}
            <Dialog
                open={openDialog}
                onClose={closeDeleteDialog}
                aria-labelledby="delete-dialog-title"
                aria-describedby="delete-dialog-description"
            >
                <DialogTitle id="delete-dialog-title">Confirm Deletion</DialogTitle>
                <DialogContent>
                    <DialogContentText id="delete-dialog-description">
                        Are you sure you want to delete your account? This action cannot be undone.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeDeleteDialog} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={confirmDeleteAccount} color="primary" autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Success Confirmation Dialog */}
            <Dialog
                open={openSuccessDialog}
                onClose={closeSuccessDialog}
                aria-labelledby="success-dialog-title"
                aria-describedby="success-dialog-description"
            >
                <DialogTitle id="success-dialog-title">Account Deleted</DialogTitle>
                <DialogContent>
                    <DialogContentText id="success-dialog-description">
                        Your account has been deleted successfully. You will be logged out shortly.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeSuccessDialog} color="primary" autoFocus>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default Profile;
