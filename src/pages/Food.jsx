import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Container } from '@mui/material';

const foodData = [
    {
        title: 'Biryani',
        state: 'Hyderabad, Telangana',
        description: 'A rich, fragrant rice dish cooked with spices, saffron, and either chicken, mutton, or vegetables.',
        imageUrl: 'https://example.com/biryani-image.jpg' // Replace with actual image URL
    },
    {
        title: 'Masala Dosa',
        state: 'Karnataka',
        description: 'A crispy fermented rice and lentil crepe filled with a spiced potato mixture.',
        imageUrl: 'https://example.com/masala-dosa-image.jpg'
    },
    {
        title: 'Rogan Josh',
        state: 'Jammu & Kashmir',
        description: 'A hearty, aromatic lamb curry cooked in yogurt and a blend of Kashmiri spices.',
        imageUrl: 'https://example.com/rogan-josh-image.jpg'
    },
    {
        title: 'Butter Chicken',
        state: 'Punjab',
        description: 'Succulent chicken cooked in a creamy, tomato-based sauce with butter and spices.',
        imageUrl: 'https://example.com/butter-chicken-image.jpg'
    },
    {
        title: 'Dhokla',
        state: 'Gujarat',
        description: 'A savory steamed cake made from fermented chickpea batter, served with chutney.',
        imageUrl: 'https://example.com/dhokla-image.jpg'
    },
    {
        title: 'Pav Bhaji',
        state: 'Maharashtra',
        description: 'A street food favorite consisting of spicy mashed vegetables served with buttery, toasted bread rolls.',
        imageUrl: 'https://example.com/pav-bhaji-image.jpg'
    },
    {
        title: 'Fish Curry',
        state: 'West Bengal',
        description: 'A tangy and spicy curry made with freshwater fish cooked with mustard seeds and spices.',
        imageUrl: 'https://example.com/fish-curry-image.jpg'
    },
    {
        title: 'Vada Pav',
        state: 'Maharashtra',
        description: 'A spicy potato fritter placed inside a bun and served with chutney and fried green chilies.',
        imageUrl: 'https://example.com/vada-pav-image.jpg'
    },
    {
        title: 'Sambar',
        state: 'Tamil Nadu',
        description: 'A lentil-based stew made with tamarind, vegetables, and a blend of spices.',
        imageUrl: 'https://example.com/sambar-image.jpg'
    },
    {
        title: 'Sarson Ka Saag & Makki Ki Roti',
        state: 'Punjab',
        description: 'A dish made from mustard greens, spinach, and spices, served with flatbread made from cornmeal.',
        imageUrl: 'https://example.com/sarson-saag-image.jpg'
    },
    {
        title: 'Thalipeeth',
        state: 'Maharashtra',
        description: 'A multigrain pancake made from roasted grains, legumes, and spices.',
        imageUrl: 'https://example.com/thalipeeth-image.jpg'
    },
    {
        title: 'Litti Chokha',
        state: 'Bihar',
        description: 'A dough ball made of whole wheat flour stuffed with roasted gram flour and spices.',
        imageUrl: 'https://example.com/litti-chokha-image.jpg'
    },
    {
        title: 'Puttu & Kadala Curry',
        state: 'Kerala',
        description: 'Puttu is a steamed cylindrical rice cake served with spicy black chickpea curry.',
        imageUrl: 'https://example.com/puttu-image.jpg'
    },
    {
        title: 'Chole Bhature',
        state: 'Delhi',
        description: 'A combination of spicy chickpea curry and deep-fried fluffy bread.',
        imageUrl: 'https://example.com/chole-bhature-image.jpg'
    },
    {
        title: 'Bebinca',
        state: 'Goa',
        description: 'A multi-layered Goan dessert made from eggs, coconut milk, and sugar.',
        imageUrl: 'https://example.com/bebinca-image.jpg'
    },
    {
        title: 'Dal Baati Churma',
        state: 'Rajasthan',
        description: 'Dal is a spicy lentil stew, Baati is a baked wheat ball, and Churma is a sweet crumbled mixture.',
        imageUrl: 'https://example.com/dal-baati-churma-image.jpg'
    },
    {
        title: 'Aloo Posto',
        state: 'West Bengal',
        description: 'A traditional Bengali dish made of potatoes cooked in poppy seed paste.',
        imageUrl: 'https://example.com/aloo-posto-image.jpg'
    },
    {
        title: 'Dum Aloo',
        state: 'Kashmir',
        description: 'Baby potatoes slow-cooked in a spicy tomato and yogurt-based gravy.',
        imageUrl: 'https://example.com/dum-aloo-image.jpg'
    },
    {
        title: 'Appam with Stew',
        state: 'Kerala',
        description: 'Appam is a soft rice pancake, served with a coconut-based stew.',
        imageUrl: 'https://example.com/appam-image.jpg'
    }
];

const Food = () => {
    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom align="center">
                Famous Foods in India
            </Typography>
            <Grid container spacing={4}>
                {foodData.map((food, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ maxWidth: 345, margin: 'auto', boxShadow: 3 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={food.imageUrl}
                                alt={food.title}
                            />
                            <CardContent>
                                <Typography variant="h5" component="div" gutterBottom>
                                    {food.title}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary">
                                    {food.state}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {food.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Food;
