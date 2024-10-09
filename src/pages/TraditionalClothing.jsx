import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Container } from '@mui/material';
import Footer from '../components/Footer';

const clothingData = [
    {
        name: 'Saree',
        description: 'A long piece of cloth draped elegantly, popular among Indian women across all regions.',
        occasion: 'Weddings, Festivals, Formal Events',
        imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2023/3/YV/PP/DD/42056403/1-500x500.jpeg' // Replace with the actual image URL
    },
    {
        name: 'Salwar Kameez',
        description: 'A comfortable and stylish outfit consisting of a tunic and trousers, common in North India.',
        occasion: 'Casual Wear, Daily Wear, Festivals',
        imageUrl: 'https://fabanza.com/media/catalog/product/cache/c26a0736877cb8c5e2d45478f82a04d0/p/u/purple-cotton-silk-readymade-salwar-kameez-fabsl21834.jpg'
    },
    {
        name: 'Lehenga Choli',
        description: 'A heavy embroidered skirt paired with a blouse, often worn during weddings and festivals.',
        occasion: 'Weddings, Festivals',
        imageUrl: 'https://idaho-o.com/wp-content/uploads/2022/11/IMG_1146.jpg'
    },
    {
        name: 'Kurta-Pajama',
        description: 'A long tunic paired with loose trousers, a common men\'s attire for formal and casual occasions.',
        occasion: 'Casual Wear, Formal Events, Religious Ceremonies',
        imageUrl: 'https://www.parivarceremony.com/media/catalog/product/cache/62408a38a401bb86dbe3ed2f017b539f/p/r/prc2034.jpg'
    },
    {
        name: 'Sherwani',
        description: 'A formal men’s outfit often worn at weddings, consisting of a long coat-like garment.',
        occasion: 'Weddings, Formal Events',
        imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2023/5/306423943/RS/QE/XS/33565068/kids-sherwani.jpg'
    },
    {
        name: 'Dhoti',
        description: 'A traditional garment for men, typically wrapped around the waist and legs.',
        occasion: 'Religious Ceremonies, Traditional Events',
        imageUrl: 'https://5.imimg.com/data5/ANDROID/Default/2021/7/QO/VC/JD/5826574/product-jpeg-500x500.jpg'
    },
    {
        name: 'Ghagra Choli',
        description: 'A long skirt paired with a blouse, popular in Gujarat and Rajasthan during festivals.',
        occasion: 'Festivals, Weddings',
        imageUrl: 'https://cygnusfashion.com/cdn/shop/products/photo_2022-05-31_16-17-06.jpg?v=1653999507'
    },
    {
        name: 'Mekhela Chador',
        description: 'A two-piece traditional outfit worn by women in Assam, elegant and graceful.',
        occasion: 'Festivals, Weddings, Formal Events',
        imageUrl: 'https://www.mugasilk.in/wp-content/uploads/2016/11/306857400_5367395463354914_8272218673237804161_n.jpg'
    },
    {
        name: 'Phiran',
        description: 'A loose garment worn by both men and women in Kashmir, especially during winter.',
        occasion: 'Winter, Casual Wear',
        imageUrl: 'https://www.kcsshop.in/wp-content/uploads/2020/03/Phiran5.jpg'
    },
    {
        name: 'Mundu',
        description: 'A garment worn by men in Kerala, draped around the waist, often for religious or cultural events.',
        occasion: 'Religious Ceremonies, Formal Events',
        imageUrl: 'https://www.jiomart.com/images/product/original/rvg9rcq8mx/handlooom-com-handmade-in-india-for-the-world-cotton-white-double-mundu-dhoti-veshti-with-golden-zari-border-for-men-with-handloom-mark-and-1-year-warranty-product-images-rvg9rcq8mx-3-202303090036.jpg?im=Resize=(500,630)'
    }
];


const TraditionalClothing = () => {
    return (
        <Container>
            <Typography variant="h3" component="h1" gutterBottom align="center" marginTop='80px' marginLeft='150px'>
                INDIAN TRADITIONAL WEAR
            </Typography>
            <Grid container spacing={4} marginLeft='60px'>
                {clothingData.map((clothes, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ maxWidth: '350px',height:'500px', margin: 'auto', boxShadow: 3 }}>
                            <CardMedia
                                component="img"
                                height="350"
                                image={clothes.imageUrl}
                                alt={clothes.title}
                            />
                            <CardContent>
                                <Typography variant="h5" component="div" gutterBottom>
                                    {clothes.name}
                                </Typography>
                                <Typography variant="subtitle1" color="text.primary">
                                    {clothes.occasion}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {clothes.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Footer/>
        </Container>
        
    );
};

export default TraditionalClothing;
