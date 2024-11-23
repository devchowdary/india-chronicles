import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Typography, Container, Box, Dialog, DialogTitle, DialogContent, CircularProgress } from '@mui/material';
import { Visibility } from '@mui/icons-material';
import axios from 'axios';

const ViewQueries = () => {
    const [queries, setQueries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [selectedQuery, setSelectedQuery] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);

    useEffect(() => {
        // Fetch queries from the backend
        axios.get("http://localhost:8080/user/contact-inquiries")  // Updated endpoint for getting all queries
            .then((response) => {
                setQueries(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError('Error fetching queries');
                setLoading(false);
            });
    }, []);

    const handleViewDetails = (id) => {
        // Find the selected query based on id
        const query = queries.find(query => query.id === id);
        setSelectedQuery(query);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setSelectedQuery(null);
    };

    if (loading) {
        return (
            <Container>
                <Typography variant="h3" marginLeft='35%' gutterBottom>
                    View Queries
                </Typography>
                <Box display="flex" justifyContent="center" alignItems="center" height="60vh">
                    <CircularProgress />
                </Box>
            </Container>
        );
    }

    if (error) {
        return (
            <Container>
                <Typography variant="h3" marginLeft='35%' gutterBottom>
                    View Queries
                </Typography>
                <Typography variant="body1" color="error">
                    {error}
                </Typography>
            </Container>
        );
    }

    return (
        <Container>
            <Typography variant="h3" marginLeft='35%' gutterBottom>
                VIEW QUERIES
            </Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>ID</strong></TableCell>
                            <TableCell><strong>Name</strong></TableCell>
                            <TableCell><strong>Location</strong></TableCell>
                            <TableCell><strong>Action</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {queries.map((query) => (
                            <TableRow key={query.id}>
                                <TableCell>{query.id}</TableCell>
                                <TableCell>{query.name}</TableCell>
                                <TableCell>{query.location}</TableCell>
                                <TableCell>
                                    <IconButton onClick={() => handleViewDetails(query.id)} color="primary">
                                        <Visibility />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Dialog for full query details */}
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>Contact Inquiry Details</DialogTitle>
                <DialogContent>
                    {selectedQuery ? (
                        <Box>
                            <Typography><strong>ID:</strong> {selectedQuery.id}</Typography>
                            <Typography><strong>Name:</strong> {selectedQuery.name}</Typography>
                            <Typography><strong>Email:</strong> {selectedQuery.email}</Typography>
                            <Typography><strong>Phone:</strong> {selectedQuery.phone}</Typography>
                            <Typography><strong>Location:</strong> {selectedQuery.location}</Typography>
                            <Typography><strong>Subject:</strong> {selectedQuery.subject}</Typography>
                            <Typography><strong>Message:</strong> {selectedQuery.message}</Typography>
                        </Box>
                    ) : (
                        <Typography>Loading...</Typography>
                    )}
                </DialogContent>
            </Dialog>
        </Container>
    );
};

export default ViewQueries;
