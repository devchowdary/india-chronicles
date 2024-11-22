import React,{useState,useEffect} from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const epicsAndMythology = [
    {
      "title": "Mahabharata",
      "author": "Vyasa",
      "description": "The Mahabharata is one of the longest epic poems in history, detailing the Kurukshetra war between the Pandavas and the Kauravas. It explores deep philosophical and moral questions, including the Bhagavad Gita.",
      "image": "https://m.media-amazon.com/images/I/71vSklWff-L._AC_UF1000,1000_QL80_.jpg"
    },
    {
      "title": "Ramayana",
      "author": "Valmiki",
      "description": "The Ramayana recounts the life and journey of Prince Rama, his exile to the forest with his wife Sita, and his battle with the demon king Ravana to rescue her. It is one of the two major Sanskrit epics of ancient Indian literature.",
      "image": "https://rukminim2.flixcart.com/image/850/1000/xif0q/book/u/a/w/the-ramayana-indian-mythology-illustrated-story-for-children-original-imaghhphfhykzyrq.jpeg?q=20&crop=false"
    },
    {
      "title": "Bhagavad Gita",
      "author": "Vyasa",
      "description": "The Bhagavad Gita, a 700-verse Hindu scripture, is part of the Mahabharata. It is a conversation between Prince Arjuna and the god Krishna, addressing the moral and philosophical dilemmas faced by Arjuna in battle.",
      "image": "https://cdn.kobo.com/book-images/bc852c9f-2f5e-46fc-8bd5-92adb413189b/353/569/90/False/bhagavad-gita-as-it-is-1.jpg"
    },
    {
      "title": "Puranas",
      "author": "Various",
      "description": "The Puranas are a genre of ancient Indian texts that cover a wide range of topics, including cosmology, mythology, legends, and religious rituals. Popular Puranas include the Vishnu Purana and Shiva Purana.",
      "image": "https://ivanstories.com/wp-content/uploads/2023/11/PURANAS-By-Sukanya_Siya.webp"
    },
    {
      "title": "Vedas",
      "author": "Various",
      "description": "The Vedas are a collection of ancient texts that form the basis of Hindu religion. The four main Vedas – Rigveda, Samaveda, Yajurveda, and Atharvaveda – contain hymns, prayers, and rituals to be performed.",
      "image": "https://m.media-amazon.com/images/I/81Y+D+tsKML._AC_UF1000,1000_QL80_.jpg"
    },
    {
      "title": "Shiva Purana",
      "author": "Various",
      "description": "The Shiva Purana is a major Purana dedicated to Lord Shiva. It includes stories of his various forms, his family, and his significance in the Hindu pantheon.",
      "image": "https://cdn.exoticindia.com/images/products/original/books/nze503.jpg"
    },
    {
      "title": "Vishnu Purana",
      "author": "Various",
      "description": "The Vishnu Purana is one of the most important Puranas, detailing the ten incarnations of Lord Vishnu and his significance in Hindu mythology.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdUUo7Ux5mFgpbWGpVA13e_3CAaCYTHMwguA&s"
    },
    {
      "title": "Devi Mahatmya",
      "author": "Markandeya",
      "description": "The Devi Mahatmya is a Hindu religious text describing the goddess Durga's victory over the buffalo demon Mahishasura. It forms part of the Markandeya Purana.",
      "image": "https://devimahatmya.com/wp-content/uploads/2022/01/Welcome-Page-Ma-Devi-897x1024.jpg"
    },
    {
      "title": "Upanishads",
      "author": "Various",
      "description": "The Upanishads are a collection of philosophical texts that form the theoretical basis for the Hindu religion. They explore the concepts of Brahman (the ultimate reality) and Atman (the individual soul).",
      "image": "https://cdn.exoticindia.com/images/products/original/books-2019-023/uay767.jpg"
    }
  ];
  
  


const Epics = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    // Check if the user is logged in
    const token = localStorage.getItem("token");
    if (!token) {
      setIsLoggedIn(false);
      navigate("/login");  // Redirect to login if not logged in
    } else {
      setIsLoggedIn(true);
    }
  }, [navigate]);
    return (
      
      isLoggedIn ? (
        <Container>
            <Typography variant="h3" component="h1" gutterBottom align="center" marginTop='80px' marginLeft='10px'>
                  EPICS OF INDIA
            </Typography>
            <Grid container spacing={4} marginLeft='-60px'>
                {epicsAndMythology.map((book, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ maxWidth: '350px',height:'500px', margin: 'auto', boxShadow: 3 }}>
                            <CardMedia
                                component="img"
                                height="350"
                                image={book.image}
                                alt={book.title}
                            />
                            <CardContent>
                                <Typography variant="h5" component="div" gutterBottom>
                                    {book.title}
                                </Typography>
                                <Typography variant="subtitle1" color="text.primary">
                                    {book.author}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {book.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
           
        </Container>
        ) : (
          // Show message if not logged in
          <Typography variant="h6" color="error" marginTop="20px" textAlign="center">
            Please log in to access this page.
          </Typography>
        )
        
    );
};

export default Epics;
