import React,{useState,useEffect} from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const foodData = [
    {
        title: 'Biryani',
        state: 'Hyderabad, Telangana',
        description: 'A rich, fragrant rice dish cooked with spices, saffron, and either chicken, mutton, or vegetables.',
        imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg' // Replace with actual image URL
    },
    {
        title: 'Masala Dosa',
        state: 'Karnataka',
        description: 'A crispy fermented rice and lentil crepe filled with a spiced potato mixture.',
        imageUrl: 'https://revi.b-cdn.net/wp-content/uploads/2017/03/masala-dosa-2.jpg'
    },
    {
        title: 'Rogan Josh',
        state: 'Jammu & Kashmir',
        description: 'A hearty, aromatic lamb curry cooked in yogurt and a blend of Kashmiri spices.',
        imageUrl: 'https://i.ytimg.com/vi/cXjTFJOpkDk/sddefault.jpg'
    },
    {
        title: 'Butter Chicken',
        state: 'Punjab',
        description: 'Succulent chicken cooked in a creamy, tomato-based sauce with butter and spices.',
        imageUrl: 'https://foodess.com/wp-content/uploads/2022/10/Foodess-Best-Butter-Chicken-1-2.jpg'
    },
    {
        title: 'Dhokla',
        state: 'Gujarat',
        description: 'A savory steamed cake made from fermented chickpea batter, served with chutney.',
        imageUrl: 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Smitha-Kalluraya/Rasawala_Dhokla_.jpg'
    },
    {
        title: 'Pav Bhaji',
        state: 'Maharashtra',
        description: 'A street food favorite consisting of spicy mashed vegetables served with buttery, toasted bread rolls.',
        imageUrl: 'https://www.cookshideout.com/wp-content/uploads/2015/05/Instant-Pot-Pav-Bhaji_FI.jpg'
    },
    {
        title: 'Fish Curry',
        state: 'West Bengal',
        description: 'A tangy and spicy curry made with freshwater fish cooked with mustard seeds and spices.',
        imageUrl: 'https://kitchenmai.com/wp-content/uploads/2021/07/pomfret_curry_blog-e1632911977972.jpg'
    },
    {
        title: 'Vada Pav',
        state: 'Maharashtra',
        description: 'A spicy potato fritter placed inside a bun and served with chutney and fried green chilies.',
        imageUrl: 'https://cookingfromheart.com/wp-content/uploads/2020/06/Vada-Pav-2.jpg'
    },
    {
        title: 'Idly Sambar',
        state: 'Tamil Nadu',
        description: 'A lentil-based stew made with tamarind, vegetables, and a blend of spices.',
        imageUrl: 'https://shwetainthekitchen.com/wp-content/uploads/2022/01/Idli-Sambar.jpg'
    },
    {
        title: 'Sarson Ka Saag & Makki Ki Roti',
        state: 'Punjab',
        description: 'A dish made from mustard greens, spinach, and spices, served with flatbread made from cornmeal.',
        imageUrl: 'https://images.onlymyhealth.com/imported/images/2019/November/15_Nov_2019/big_sarsokasaag.jpg'
    },
    {
        title: 'Thalipeeth',
        state: 'Maharashtra',
        description: 'A multigrain pancake made from roasted grains, legumes, and spices.',
        imageUrl: 'https://naturallynidhi.com/wp-content/uploads/2024/04/Sabudana-Millet-Thalipeeth-1.jpg'
    },
    {
        title: 'Litti Chokha',
        state: 'Bihar',
        description: 'A dough ball made of whole wheat flour stuffed with roasted gram flour and spices.',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0551/8009/9722/files/1_c484de06-a195-4424-b1df-f9765b395329_480x480.png?v=1716790989'
    },
    {
        title: 'Puttu & Kadala Curry',
        state: 'Kerala',
        description: 'Puttu is a steamed cylindrical rice cake served with spicy black chickpea curry.',
        imageUrl: 'https://thetraditionalbawarchi.wordpress.com/wp-content/uploads/2021/04/puttu-and-curry-1.jpeg'
    },
    {
        title: 'Chole Bhature',
        state: 'Delhi',
        description: 'A combination of spicy chickpea curry and deep-fried fluffy bread.',
        imageUrl: 'https://images.herzindagi.info/image/2020/Oct/chole-bhature-for-health-tips.jpg'
    },
    {
        title: 'Bebinca',
        state: 'Goa',
        description: 'A multi-layered Goan dessert made from eggs, coconut milk, and sugar.',
        imageUrl: 'https://xantilicious.com/wp-content/uploads/2018/10/63BA6FE3-EAEF-4D3A-B700-059950428CC3.jpeg'
    },
    {
        title: 'Dal Baati Churma',
        state: 'Rajasthan',
        description: 'Dal is a spicy lentil stew, Baati is a baked wheat ball, and Churma is a sweet crumbled mixture.',
        imageUrl: 'https://naturallynidhi.com/wp-content/uploads/2018/04/dal_baati_1.jpg'
    },
    {
        title: 'Aloo Posto',
        state: 'West Bengal',
        description: 'A traditional Bengali dish made of potatoes cooked in poppy seed paste.',
        imageUrl: 'https://www.whiskaffair.com/wp-content/uploads/2020/06/Bengali-Aloo-Posto-2-3.jpg'
    },
    {
        title: 'Dum Aloo',
        state: 'Kashmir',
        description: 'Baby potatoes slow-cooked in a spicy tomato and yogurt-based gravy.',
        imageUrl: 'https://www.whiskaffair.com/wp-content/uploads/2020/06/Bengali-Aloo-Posto-2-3.jpg'
    },
    {
        title: 'pootharekulu',
        state: 'Atreyapuram',
        description: 'Pootharekulu is a traditional Andhra sweet made from thin layers of rice starch, ghee, and sugar or jaggery, resembling delicate paper.',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0651/8895/4328/files/Sugar_Kaju_Badam_Pista_Putharekulu_2_1a60fb50-c984-4e87-9752-e4da94109dd1_480x480.png?v=1688530072'
    },
    {
        title: 'garelru',
        state: 'Anantapur',
        description: ' Garelu are crispy, deep-fried lentil doughnuts made from urad dal, popular during festivals in Andhra Pradesh.',
        imageUrl: 'https://shorturl.at/A7tPI'
    },
    {
        title: 'ariselu',
        state: 'East Godavari',
        description: 'Ariselu are traditional sweet rice cakes made with jaggery and rice flour, commonly prepared during Sankranti in Andhra Pradesh.',
        imageUrl: 'https://shorturl.at/ZLIf3'
    }
];


const Cuisine = () => 
    {
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
            <Typography variant="h3" component="h1" gutterBottom align="center" marginTop='80px' marginLeft='0px'>
                Famous Foods in India.
            </Typography>
            <Grid container spacing={4} marginLeft='-50px'>
                {foodData.map((food, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ maxWidth: '350px',height:'450px', margin: 'auto', boxShadow: 3 }}>
                            <CardMedia
                                component="img"
                                height="300"
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
        ) : (
            // Show message if not logged in
            <Typography variant="h6" color="error" marginTop="20px" textAlign="center">
              Please log in to access this page.
            </Typography>
          )
        
    );
};

export default Cuisine;
