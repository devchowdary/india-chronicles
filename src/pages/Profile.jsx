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

        fetchProfile(token); 

       
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 3000); 

        return () => clearTimeout(timeout);
    }, [navigate]);

    const handleLogout = () => {
        
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("role");
        navigate("/"); 
    };

    
    const handleSettingsClick = (event) => {
        setMenuAnchor(event.currentTarget); 
    };

    const handleCloseMenu = () => {
        setMenuAnchor(null);
    };

    const handleUpdateProfile = () => {
        handleCloseMenu();
        navigate("/update-profile"); 
    };

    const handleDeleteAccount = async () => {
        const token = localStorage.getItem("token");

        try {
            await axios.delete("http://localhost:8080/user/delete", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setOpenSuccessDialog(true); 
            setTimeout(handleLogout, 2000); 
        } catch (err) {
            console.error("Error deleting account:", err);
            setError("Failed to delete account. Please try again.");
        }
    };

   
    const openDeleteDialog = () => setOpenDialog(true);
    const closeDeleteDialog = () => setOpenDialog(false);

    const confirmDeleteAccount = () => {
        closeDeleteDialog();
        handleDeleteAccount();
    };

    const closeSuccessDialog = () => {
        setOpenSuccessDialog(false);
        navigate("/"); 
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
                
                <Box>
                    
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
