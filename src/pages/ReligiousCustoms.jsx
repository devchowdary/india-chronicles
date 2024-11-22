import React,{useState,useEffect} from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const customsData = [
    {
        title: 'Hinduism',
        customs: [
            'Puja (Worship): Daily rituals performed in homes or temples with offerings and prayers.',
            'Fasting: Hindus fast on occasions like Ekadashi and Navratri.',
            'Yajna (Sacred Fire Ritual): A fire ritual for life events such as weddings.',
            'Pilgrimages: Visiting holy places like Varanasi and Rishikesh.',
            'Festival Celebrations: Key festivals include Diwali, Holi, and Navratri.'
        ],
        imageUrl: 'https://t4.ftcdn.net/jpg/02/65/79/51/360_F_265795179_8QIaynrdGtvvshYnICRKrB8vcEUtuxct.jpg'
    },
    {
        title: 'Islam',
        customs: [
            'Namaz (Prayer): Muslims pray five times a day facing Mecca.',
            'Ramadan and Fasting: Observing fasts from dawn to dusk during Ramadan.',
            'Zakat (Charity): Donating a portion of wealth to the needy.',
            'Hajj (Pilgrimage): The pilgrimage to Mecca is a must for those who can afford it.',
            'Eid Celebrations: Eid al-Fitr and Eid al-Adha are celebrated with prayers and feasts.'
        ],
        imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/023/817/597/small_2x/beautiful-islamic-mosque-landscape-crescent-moon-background-illustration-photo.jpg'
    },
    {
        title: 'Christianity',
        customs: [
            'Mass and Prayers: Christians attend regular church services, especially on Sundays.',
            'Sacraments: Rituals such as Baptism and Eucharist are central.',
            'Fasting and Lent: Many observe fasting during Lent.',
            'Christmas and Easter: Celebrated with church services and gift exchanges.'
        ],
        imageUrl: 'https://assets.editorial.aetnd.com/uploads/2017/10/christianity-gettyimages-121153575.jpg'
    },
    {
        title: 'Sikhism',
        customs: [
            'Langar (Community Kitchen): Free meals served in Gurdwaras.',
            'Amrit Sanchar: Sikh baptism ceremony.',
            'Kirtan (Singing Hymns): Hymns from Guru Granth Sahib are sung.',
            'Gurpurab Celebrations: Celebrating the birthdays of Sikh Gurus.'
        ],
        imageUrl: 'https://www.theschoolrun.com/sites/theschoolrun.com/files/sikhism.jpg'
    },
    {
        title: 'Buddhism',
        customs: [
            'Meditation and Mindfulness: Meditation is central to spiritual practice.',
            'Vesak Festival: Celebrating Buddha’s birth and enlightenment.',
            'Monastic Traditions: Monks lead lives of renunciation and devotion.',
            'Pilgrimage Sites: Bodh Gaya and Sarnath are significant pilgrimage sites.'
        ],
        imageUrl: 'https://cbx-prod.b-cdn.net/COLOURBOX38461340.jpg?width=800&height=800&quality=70'
    },
    {
        title: 'Jainism',
        customs: [
            'Ahimsa (Non-Violence): Strict adherence to non-violence in all actions.',
            'Paryushana: A festival of fasting and reflection.',
            'Samayika (Meditation): Regular meditation for spiritual purity.',
            'Pilgrimage: Visiting holy places like Palitana and Mount Shatrunjaya.'
        ],
        imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_Vus5ZaoITUjq_rf72oefULlffSQoX-HQSXxqqfdAzXyXNmevUhnq1mO6_hgV-QQxJWPhbjIqno6x6U6e3SasdUcB6CmjdbxTRivtQU6oFMHrc1KMmtcQrTrvynFsiOllFktrSavxJTH0/s1600/Jainism_Apologetics.png'
    },
    {
        title: 'Zoroastrianism (Parsis)',
        customs: [
            'Fire Worship: Fire is revered as a symbol of purity.',
            'Navjote Ceremony: The initiation of children into the Zoroastrian faith.',
            'Nowruz: Celebrating the Persian New Year with prayers and gatherings.'
        ],
        imageUrl: 'https://www.learnreligions.com/thmb/jkUZax4_V6cf_R8xANFGNK4CMu8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/symbol-of-zoroastrianism--faravahar--symbol-for-god-ahura-mazda--yazd--iran-967926812-5b84691f46e0fb0050bc30a3.jpg'
    },
    {
        title: 'Judaism',
        customs: [
            'Shabbat (Sabbath): A day of rest from Friday evening to Saturday evening.',
            'Rosh Hashanah and Yom Kippur: Jewish New Year and Day of Atonement.',
            'Passover (Pesach): Commemorating the liberation from slavery in Egypt.'
        ],
        imageUrl: 'https://media.rabbisacks.org/20210706224023/videoblocks-israel-flag-backlit-at-beautiful-sunrise-loop-slow-motion-4k_rxvoffswz_thumbnail-full06.jpg'
    },
    {
        title: 'Tribal and Indigenous Customs',
        customs: [
            'Nature Worship: Indigenous tribes worship natural elements like trees and rivers.',
            'Totemism: Some tribes venerate specific animals or plants.',
            'Traditional Festivals: Celebrations like Bihu.'
        ],
        imageUrl: 'https://www.travelseewrite.com/wp-content/uploads/2024/08/Tribes-of-Madhya-Pradesh-India-1.jpg'
    }
];

const ReligiousCustoms = () => {
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
            <Typography variant="h2" component="h1" gutterBottom align="center" marginTop='80px' marginLeft='20px'>
                Religious Customs in India
            </Typography>
            <Grid container spacing={4} marginTop='20px' marginLeft='-50px'> 
                {customsData.map((religion, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ width: 350, height: 450, margin: 'auto', boxShadow: 3 }}>
                            <CardMedia
                                component="img"
                                height="250"
                                image={religion.imageUrl}
                                alt={religion.title}
                            />
                            <CardContent>
                                <Typography variant="h5" component="div" gutterBottom>
                                    {religion.title}
                                </Typography>
                                {religion.customs.map((custom, idx) => (
                                    <Box key={idx} sx={{ marginBottom: 1 }}>
                                        <Typography variant="body2" color="text.secondary">
                                            {custom}
                                        </Typography>
                                    </Box>
                                ))}
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

export default ReligiousCustoms;
