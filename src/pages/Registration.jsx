import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import {
    Container,
    Grid,
    TextField,
    Button,
    Typography,
    Paper,
    Box
} from '@mui/material';
import { MoonLoader } from 'react-spinners';

const Registration = () => {
    const navigate = useNavigate();
  
    const [user, setUser] = useState({
        userName: '',
        email: '',
        phone: '',
        location: '',
        password: '',
    });
  
    const [otp, setOtp] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [timer, setTimer] = useState(120); 

  
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    
    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post('https://indiachronicles-backend.onrender.com/user/register', user);
            setIsOtpSent(true);
            setMessage(`OTP sent to ${user.email}`);
            startCountdown(); 
        } catch (error) {
            setMessage('Error sending OTP');
        } finally {
            setLoading(false);
        }
    };

   
    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        setLoading(true); 
        try {
            const response = await axios.post('https://indiachronicles-backend.onrender.com/user/verify-otp', null, {
                params: { email: user.email, otp },
            });
            if (response.status === 200) {
                navigate('/login'); 
            }
        } catch (error) {
            setMessage('Invalid OTP, please try again');
        } finally {
            setLoading(false); 
        }
    };

    const startCountdown = () => {
        const countdownInterval = setInterval(() => {
            setTimer((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(countdownInterval); 
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000); 
    };

    useEffect(() => {
        if (!isOtpSent) {
            setTimer(120);
        }
    }, [isOtpSent]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <Container component="main" maxWidth="xs" sx={{ marginTop: 20 }}>
            <Paper elevation={3} sx={{ padding: 5, position: 'relative' }}>
                {loading && (
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
                            zIndex: 10,
                        }}
                    >
                        <MoonLoader color="#36D7B7" size={50} />
                    </Box>
                )}
                <Typography variant="h5" align="center" gutterBottom>
                    REGISTER
                </Typography>
                <form onSubmit={isOtpSent ? handleVerifyOtp : handleRegister}>
                    <Grid container spacing={2}>
                        {!isOtpSent ? (
                            <>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Username"
                                        name="userName"
                                        variant="outlined"
                                        value={user.userName}
                                        onChange={handleChange}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Email"
                                        name="email"
                                        type="email"
                                        variant="outlined"
                                        value={user.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Phone"
                                        name="phone"
                                        type="tel"
                                        variant="outlined"
                                        value={user.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Location"
                                        name="location"
                                        variant="outlined"
                                        value={user.location}
                                        onChange={handleChange}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Password"
                                        name="password"
                                        type="password"
                                        variant="outlined"
                                        value={user.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                    >
                                        Register
                                    </Button>
                                </Grid>
                            </>
                        ) : (
                            <>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Enter OTP"
                                        variant="outlined"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                    >
                                        Verify OTP
                                    </Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body2" color="textSecondary" align="center" sx={{ marginTop: 2 }}>
                                        OTP expires in: {formatTime(timer)}
                                    </Typography>
                                </Grid>
                            </>
                        )}
                    </Grid>
                    {message && (
                        <Typography variant="body2" color="error" align="center" sx={{ marginTop: 2 }}>
                            {message}
                        </Typography>
                    )}
                </form>
                <Typography variant="body2" align="center" sx={{ marginTop: 2 }}>
                    Already have an account?{' '}
                    <Link to="/login" style={{ textDecoration: 'none', color: 'blue' }}>
                        Login here
                    </Link>
                </Typography>
            </Paper>
        </Container>
    );
};

export default Registration;
