import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Typography,
  Container,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  CircularProgress,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { Visibility, Close, Reply } from "@mui/icons-material";
import axios from "axios";

const ViewQueries = () => {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [replyMode, setReplyMode] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [sending, setSending] = useState(false); // For email sending spinner
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  useEffect(() => {
    axios
      .get("https://indiachronicles-backend.onrender.com/user/contact-inquiries")
      .then((response) => {
        setQueries(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error fetching queries");
        setLoading(false);
      });
  }, []);

  const handleViewDetails = (id) => {
    const query = queries.find((query) => query.id === id);
    setSelectedQuery(query);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedQuery(null);
    setReplyMode(false);
    setReplyText("");
  };

  const handleReply = (id) => {
    const query = queries.find((query) => query.id === id);
    setSelectedQuery(query);
    setReplyMode(true);
  };

  const handleSendReply = () => {
    if (!replyText.trim()) {
      setSnackbar({ open: true, message: "Reply text cannot be empty", severity: "warning" });
      return;
    }

    setSending(true); // Show loading spinner
    axios
      .post("https://indiachronicles-backend.onrender.com/user/send-reply", {
        email: selectedQuery.email,
        reply: replyText,
      })
      .then(() => {
        setSnackbar({ open: true, message: "Reply sent successfully!", severity: "success" });
        handleCloseDialog();
      })
      .catch(() => {
        setSnackbar({ open: true, message: "Failed to send the reply", severity: "error" });
      })
      .finally(() => {
        setSending(false); // Hide loading spinner
      });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  if (loading) {
    return (
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
           Queries
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
        <Typography variant="h3" align="center" gutterBottom>
           Queries
        </Typography>
        <Typography variant="body1" color="error">
          {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
         QUERIES
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>ID</strong></TableCell>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Location</strong></TableCell>
              <TableCell><strong>Action</strong></TableCell>
              <TableCell><strong>Respond</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {queries.map((query) => (
              <TableRow key={query.id}>
                <TableCell>{query.id}</TableCell>
                <TableCell>{query.name.toUpperCase()}</TableCell>
                <TableCell>{query.location.toUpperCase()}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleViewDetails(query.id)} color="primary">
                    <Visibility />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => handleReply(query.id)} color="secondary">
                    <Reply />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog for full query details or reply */}
      <Dialog open={openDialog || replyMode} onClose={handleCloseDialog} fullWidth maxWidth="sm">
        <DialogTitle>
          {replyMode ? "Send Reply" : "Contact Inquiry Details"}
          <IconButton
            aria-label="close"
            onClick={handleCloseDialog}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {replyMode ? (
            <Box>
              <Typography><strong>To:</strong> {selectedQuery?.email}</Typography>
              <TextField
                label="Your Reply"
                multiline
                rows={4}
                fullWidth
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                sx={{ marginY: 2 }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleSendReply}
                disabled={sending}
                startIcon={sending && <CircularProgress size={20} />}
              >
                {sending ? "Sending..." : "Send"}
              </Button>
            </Box>
          ) : (
            selectedQuery && (
              <Box>
                <Typography><strong>ID:</strong> {selectedQuery.id}</Typography>
                <Typography><strong>Name:</strong> {selectedQuery.name.toUpperCase()}</Typography>
                <Typography><strong>Email:</strong> {selectedQuery.email}</Typography>
                <Typography><strong>Phone:</strong> {selectedQuery.phone}</Typography>
                <Typography><strong>Location:</strong> {selectedQuery.location}</Typography>
                <Typography><strong>Subject:</strong> {selectedQuery.subject}</Typography>
                <Typography><strong>Message:</strong> {selectedQuery.message}</Typography>
              </Box>
            )
          )}
        </DialogContent>
      </Dialog>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }} // Top-center alignment
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: "100%" }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ViewQueries;
