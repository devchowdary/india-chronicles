import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Typography, Box, Dialog, DialogTitle, DialogContent, Snackbar, Alert, Button } from "@mui/material";
import { Visibility, Delete, Close } from "@mui/icons-material";
import axios from "axios";

const ViewUsers = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false); // State for delete confirmation dialog
  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const [userIdToDelete, setUserIdToDelete] = useState(null); // State to hold the id of the user to be deleted
  const [userNameToDelete, setUserNameToDelete] = useState(""); // State to hold the username of the user to be deleted

  useEffect(() => {
    axios
      .get("https://indiachronicles-backend.onrender.com/user/all-users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleViewDetails = (id) => {
    axios
      .get(`https://indiachronicles-backend.onrender.com/user/respective-user/${id}`)
      .then((response) => {
        setSelectedUser(response.data);
        setOpen(true);
      })
      .catch((error) => console.error("Error fetching user details:", error));
  };

  const handleDeleteClick = (id, userName) => {
    setUserIdToDelete(id);
    setUserNameToDelete(userName); // Store the username of the user to be deleted
    setDeleteDialogOpen(true); // Open delete confirmation dialog
  };

  const handleDeleteConfirm = () => {
    axios
      .delete(`https://indiachronicles-backend.onrender.com/user/delete/${userIdToDelete}`)
      .then(() => {
        setSuccessMessage(`${userNameToDelete} deleted successfully!`); // Show success message with username
        setDeleteDialogOpen(false); // Close delete confirmation dialog
        setUserIdToDelete(null);
        setUserNameToDelete(""); // Clear username after deletion
        // Refresh the user list
        axios
          .get("https://indiachronicles-backend.onrender.com/user/all-users")
          .then((response) => setUsers(response.data))
          .catch((error) => console.error("Error fetching users:", error));
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
        setDeleteDialogOpen(false); // Close delete confirmation dialog
      });
  };

  const handleDeleteCancel = () => {
    setDeleteDialogOpen(false); // Close delete confirmation dialog without deleting
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedUser(null);
  };

  const handleCloseSnackbar = () => {
    setSuccessMessage(""); // Hide success message
  };

  return (
    <Box>
      {/* Success Snackbar */}
      <Snackbar
        open={successMessage !== ""}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: "100%" }}>
          {successMessage}
        </Alert>
      </Snackbar>

      <Typography variant="h4" marginLeft="35%" gutterBottom>
        REGISTERED USERS
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>ID</strong></TableCell>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Action</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.userName}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleViewDetails(user.id)} color="primary">
                    <Visibility />
                  </IconButton>
                  <IconButton onClick={() => handleDeleteClick(user.id, user.userName)} color="secondary">
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog for User Details */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>
          User Details
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {selectedUser ? (
            <Box>
              <Typography><strong>ID:</strong> {selectedUser.id}</Typography>
              <Typography><strong>Name:</strong> {selectedUser.userName}</Typography>
              <Typography><strong>Email:</strong> {selectedUser.email}</Typography>
              <Typography><strong>Phone:</strong> {selectedUser.phone}</Typography>
              <Typography><strong>Location:</strong> {selectedUser.location}</Typography>
              <Typography><strong>Role:</strong> {selectedUser.role} user</Typography>
            </Box>
          ) : (
            <Typography>Loading...</Typography>
          )}
        </DialogContent>
      </Dialog>

      {/* Confirmation Dialog for Deleting User */}
      <Dialog open={deleteDialogOpen} onClose={handleDeleteCancel}>
        <DialogTitle>Are you sure you want to delete this user?</DialogTitle>
        <DialogContent>
          <Box display="flex" justifyContent="space-between">
            <Button onClick={handleDeleteCancel} variant="outlined" color="primary">
              Cancel
            </Button>
            <Button onClick={handleDeleteConfirm} variant="contained" color="secondary">
              Delete
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default ViewUsers;
