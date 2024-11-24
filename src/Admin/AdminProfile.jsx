import React from "react";
import { Card, CardContent, Typography, Avatar, Container, Box } from "@mui/material";
import profileImage from "../images/teamImages/devendra.jpg"; // Replace with the actual path to your image file

const AdminProfile = () => {
    return (
        <Container>
            <Typography variant="h3" gutterBottom align="center">
                Admin Profile
            </Typography>
            <Box display="flex" justifyContent="center" mt={4}>
                <Card
                    style={{
                        maxWidth: 400,
                        padding: "20px",
                        borderRadius: "15px",
                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                        background: "linear-gradient(to bottom, #f7f7f7, #eaeaea)"
                    }}
                >
                    <Box display="flex" justifyContent="center" mb={2}>
                        <Avatar
                            alt="Dev Chowdary"
                            src={profileImage} // Use your imported image here
                            style={{
                                width: 100,
                                height: 100,
                                border: "3px solid #1976d2",
                                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)"
                            }}
                        />
                    </Box>
                    <CardContent>
                        <Typography
                            variant="h5"
                            align="center"
                            gutterBottom
                            style={{
                                fontWeight: "bold",
                                color: "#1976d2"
                            }}
                        >
                            Dev Chowdary
                        </Typography>
                        <Typography
                            variant="body1"
                            color="textSecondary"
                            align="center"
                            gutterBottom
                        >
                            Admin Role: Super Admin
                        </Typography>
                        <Box mt={2}>
                            <Typography variant="body2" style={{ marginBottom: "8px" }}>
                                <strong>Email:</strong> devchowdary@gmail.com
                            </Typography>
                            <Typography variant="body2" style={{ marginBottom: "8px" }}>
                                <strong>Phone:</strong> +91-9701772245
                            </Typography>
                            <Typography variant="body2" style={{ marginBottom: "8px" }}>
                                <strong>Joined:</strong> November 23, 2004
                            </Typography>
                            <Typography variant="body2">
                                <strong>Location:</strong> Vijayawada, India
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
};

export default AdminProfile;
