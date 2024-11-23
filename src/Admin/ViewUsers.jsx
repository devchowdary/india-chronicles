import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Typography, Box, Dialog, DialogTitle, DialogContent } from "@mui/material";
import { Visibility } from "@mui/icons-material";
import axios from "axios";

const ViewUsers = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8080/user/all-users")
      .then(response => setUsers(response.data))
      .catch(error => console.error("Error fetching users:", error));
  }, []);

  const handleViewDetails = (id) => {
    axios.get(`http://localhost:8080/user/respective-user/${id}`)
      .then(response => {
        setSelectedUser(response.data);
        setOpen(true);
      })
      .catch(error => console.error("Error fetching user details:", error));
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedUser(null);
  };

  return (
    <Box>
      <Typography variant="h4" marginLeft={'35%'} gutterBottom>REGISTERED USERS</Typography>
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
            {users.map(user => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.userName}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleViewDetails(user.id)} color="primary">
                    <Visibility />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog for User Details */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>User Details</DialogTitle>
        <DialogContent>
          {selectedUser ? (
            <Box>
              <Typography><strong>ID:</strong> {selectedUser.id}</Typography>
              <Typography><strong>Name:</strong> {selectedUser.userName}</Typography>
              <Typography><strong>Email:</strong> {selectedUser.email}</Typography>
              <Typography><strong>Phone:</strong> {selectedUser.phone}</Typography>
              <Typography><strong>Location:</strong> {selectedUser.location}</Typography>
              <Typography><strong>Role:</strong> {selectedUser.role}</Typography>
            </Box>
          ) : (
            <Typography>Loading...</Typography>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default ViewUsers;
