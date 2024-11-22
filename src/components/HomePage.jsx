import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import tajmahal from "../images/taj-mahal.jpg";
import qutabminar from "../images/qutab-minar.jpg";
import redfort from "../images/red-fort.jpg";
import Navbar from './Navbar';
import background from '../images/background1.jpg';

const HomePage = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [username, setUsername] = useState(null);

    useEffect(() => {
        const handleStorageChange = () => {
            const storedUsername = localStorage.getItem("username");
            setUsername(storedUsername);
        };

        // Listen for changes to localStorage
        window.addEventListener("storage", handleStorageChange);

        // Set initial username
        handleStorageChange();

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);

    const featuredContent = [
        {
            title: 'Taj Mahal',
            description: 'An iconic symbol of India, known for its stunning white marble architecture.',
            location: "Agra",
            image: tajmahal,
            link: "/tajMahal"
        },
        {
            title: 'Qutub Minar',
            description: 'A historical minaret and victory tower in Delhi, renowned for its intricate carvings.',
            location: "Delhi",
            image: qutabminar,
            link: "/qutubMinar"
        },
        {
            title: 'Red Fort',
            description: 'A majestic fortification in Delhi, reflecting Mughal architecture and history.',
            location: "Delhi",
            image: redfort,
            link: "/redFort"
        }
    ];

    const filteredContent = featuredContent.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <Navbar onSearch={(query) => setSearchQuery(query)} />

            <header style={{
                position: 'relative',
                background: `url(${background}) no-repeat center center`,
                backgroundSize: 'cover',
                color: '#fff',
                padding: '80px 20px',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center',
                width: '100vw',
                boxSizing: 'border-box',
                overflow: 'hidden',
                backgroundAttachment: 'fixed'
            }}>
                <Container maxWidth="md" style={{ position: 'relative', zIndex: 1 }}>
                    {username ? (
                        <Typography variant="h5" component="p" gutterBottom style={{
                            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.4)',
                            fontSize: '2.3rem',
                            lineHeight: '1.4',
                            marginBottom: '20px',
                            color: 'black'
                        }}>
                            WELCOME, {username.toUpperCase()}!
                        </Typography>
                    ) : null}
                    <Typography variant="h2" component="h1" gutterBottom style={{
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
                        fontWeight: 700,
                        fontSize: '3rem',
                        lineHeight: '1.1',
                        color: 'black'
                    }}>
                        Explore the Rich Heritage of India
                    </Typography>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={() => navigate('/explore')}
                        size="large"
                        sx={{
                            mt: 3,
                            background: 'linear-gradient(45deg, #FF5722 30%, #F44336 90%)',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'scale(1.05)',
                                boxShadow: '0 8px 12px rgba(0, 0, 0, 0.5)',
                                background: 'linear-gradient(45deg, #F44336 30%, #FF5722 90%)',
                            },
                        }}
                    >
                        Explore by State
                    </Button>
                </Container>
            </header>

            <section style={{ padding: '40px 20px' }}>
                <Container maxWidth="lg">
                    <Typography variant="h4" component="h2" gutterBottom>
                        Iconic Landmarks and Timeless Treasures
                    </Typography>
                    <Grid container spacing={4}>
                        {filteredContent.map((item, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card
                                    onClick={() => navigate(item.link)}
                                    sx={{
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                        '&:hover': {
                                            transform: 'scale(1.03)',
                                            boxShadow: '0 6px 10px rgba(0, 0, 0, 0.4)',
                                            cursor: 'pointer'
                                        },
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        alt={item.title}
                                        height="200"
                                        image={item.image}
                                    />
                                    <CardContent>
                                        <Typography variant="h6" component="h3" gutterBottom>
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            {item.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </section>
        </div>
    );
};

export default HomePage;
