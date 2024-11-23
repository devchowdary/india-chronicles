import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Paper,
  Box,
  IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';

// Function to generate random CAPTCHA
const generateCaptcha = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from({ length: 6 }, () =>
    chars.charAt(Math.floor(Math.random() * chars.length))
  ).join('');
};

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '', captchaInput: '' });
  const [message, setMessage] = useState('');
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [showPassword, setShowPassword] = useState(false);

  // Update form input state
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // Generate a new CAPTCHA
  const handleCaptchaClick = () => {
    setCaptcha(generateCaptcha());
    setCredentials({ ...credentials, captchaInput: '' });
  };

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password, captchaInput } = credentials;

    if (!email || !password) {
      setMessage('Please enter both email and password');
      return;
    }

    if (captchaInput !== captcha) {
      setMessage('Invalid CAPTCHA. Please try again.');
      setCaptcha(generateCaptcha());
      setCredentials({ ...credentials, captchaInput: '' });
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/user/login', null, {
        params: {
          usernameOrEmail: email,
          password: password,
        },
      });

      if (response.data.token) {
        // Save login data to localStorage
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('username', response.data.username);
        localStorage.setItem('role', response.data.role);

        // Redirect based on role
        if (response.data.role === 'ADMIN') {
          navigate('/admin-bookings'); // Admin-specific dashboard
        } else {
          navigate('/'); // User-specific homepage
        }

        // Show toast notification after navigation
        toast.success('Login Successful!', { autoClose: 2000 });
      } else {
        setMessage(response.data.error || 'Invalid login credentials');
      }
    } catch (error) {
      toast.error('Login failed, please check your credentials');
    }
  };

  // Toggle password visibility
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta
          name="description"
          content="Login to access your account securely. Provide your email, password, and verify using CAPTCHA."
        />
      </Helmet>

      <Container component="main" maxWidth="xs" sx={{ marginTop: 15 }}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant="h4" align="center" gutterBottom>
            LOGIN
          </Typography>
          <form onSubmit={handleLogin}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="text"
                  variant="outlined"
                  value={credentials.email}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  variant="outlined"
                  value={credentials.password}
                  onChange={handleChange}
                  required
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    my: 2,
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 'bold',
                      backgroundColor: '#f0f0f0',
                      padding: '8px 16px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      userSelect: 'none',
                      mr: 2,
                    }}
                    onClick={handleCaptchaClick}
                  >
                    {captcha}
                  </Typography>
                  <TextField
                    label="Enter CAPTCHA"
                    name="captchaInput"
                    value={credentials.captchaInput}
                    onChange={handleChange}
                    required
                    margin="normal"
                  />
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Button fullWidth variant="contained" color="primary" type="submit">
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>

          {message && (
            <Typography
              variant="body2"
              color="error"
              align="center"
              sx={{ marginTop: 2 }}
            >
              {message}
            </Typography>
          )}

          <Typography variant="body2" align="center" sx={{ marginTop: 2 }}>
            Don't have an account?{' '}
            <Link to="/register" style={{ textDecoration: 'none', color: 'blue' }}>
              Register here
            </Link>
          </Typography>
        </Paper>

        {/* Toast Container */}
        <ToastContainer />
      </Container>
    </>
  );
};

export default Login;
