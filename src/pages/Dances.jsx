import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Container } from '@mui/material';
import Footer from '../components/Footer';

const dances = [
    
        {
          "danceName": "Bharatanatyam",
          "danceType": "Classical",
          "danceDescription": "Bharatanatyam is one of the oldest classical dance forms from Tamil Nadu. It is characterized by intricate footwork, graceful expressions, and elaborate gestures known as mudras. This dance form is often performed in temples and conveys various stories from Hindu mythology.",
          "danceImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Murugashankari_Leo.jpg/640px-Murugashankari_Leo.jpg"
        },
        {
          "danceName": "Kathak",
          "danceType": "Classical",
          "danceDescription": "Kathak is a classical dance form from Northern India, known for its storytelling aspect. The dancer narrates tales from Hindu epics through rhythmic footwork, spins, and facial expressions, often accompanied by live musicians.",
          "danceImage": "https://i.pinimg.com/originals/34/83/b4/3483b44b640b230e16ce039bf2ec8cc9.jpg"
        },
        {
          "danceName": "Kuchipudi",
          "danceType": "Classical",
          "danceDescription": "Kuchipudi is a classical dance from Andhra Pradesh that combines fast rhythms, storytelling, and expressions. It often includes both dance and drama, with dancers narrating mythological tales.",
          "danceImage": "https://www.hercircle.in/hcm/EngageImage/21C17F6D-A8B8-4E1B-9DB0-5AA991A727B0/D/B82801E8-2C62-4EA8-9B7A-75E6D27DD51F.jpg"
        },
        {
          "danceName": "Odissi",
          "danceType": "Classical",
          "danceDescription": "Odissi is a classical dance from Odisha, known for its graceful movements and sculpturesque poses. This dance form often depicts stories from Hindu mythology, especially related to Lord Krishna.",
          "danceImage": "https://odissishinjannrityalaya.wordpress.com/wp-content/uploads/2020/12/nivedita.jpg"
        },
        {
          "danceName": "Kathakali",
          "danceType": "Classical",
          "danceDescription": "Kathakali is a highly stylized classical Indian dance-drama from Kerala, known for elaborate costumes, makeup, and face masks. It involves storytelling from epics like Mahabharata and Ramayana.",
          "danceImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Kathakali_BNC.jpg/220px-Kathakali_BNC.jpg"
        },
        {
          "danceName": "Manipuri",
          "danceType": "Classical",
          "danceDescription": "Manipuri is a classical dance from Manipur, known for its graceful and gentle movements. It often portrays episodes from the life of Lord Krishna, especially Ras Leela.",
          "danceImage": "https://c8.alamy.com/comp/HBYA08/manipuri-dancer-performing-manipur-rass-dance-on-stage-ajmerrajasthan-HBYA08.jpg"
        },
        {
          "danceName": "Mohiniyattam",
          "danceType": "Classical",
          "danceDescription": "Mohiniyattam is a classical dance from Kerala, performed by women. It is known for its feminine grace and slow, delicate movements. The dance is dedicated to the enchantress Mohini from Hindu mythology.",
          "danceImage": "https://koothambalam.org/wp-content/uploads/2024/03/c96a1ca4-1254-4e8f-b505-6dc7c7ee8ff0.jpg"
        },
        {
          "danceName": "Sattriya",
          "danceType": "Classical",
          "danceDescription": "Sattriya is a classical dance form from Assam, traditionally performed by male monks in monasteries (Satras). It involves storytelling from Hindu epics, focusing on devotion to Lord Krishna.",
          "danceImage": "https://akm-img-a-in.tosshub.com/lingo/styles/medium_crop_simple/public/images/story/202303/thumbnail_2t5a4439.jpg"
        },
        {
          "danceName": "Bhangra",
          "danceType": "Folk",
          "danceDescription": "Bhangra is a vibrant and energetic folk dance from Punjab, traditionally performed during the harvest festival of Baisakhi. It is now a popular dance style worldwide, known for its lively music and energetic movements.",
          "danceImage": "https://www.bhangraoncall.com/img/about.png"
        },
        {
          "danceName": "Garba",
          "danceType": "Folk",
          "danceDescription": "Garba is a folk dance from Gujarat, typically performed during the festival of Navratri. Dancers move in circular patterns, clapping and twirling, to honor the goddess Durga.",
          "danceImage": "https://vadodaravibrantnavratri.com/wp-content/uploads/2024/04/desktop-wallpaper-garba-dance-classes-in-ahmedabad-garba-dance-thumbnail.jpg"
        },
        {
          "danceName": "Ghoomar",
          "danceType": "Folk",
          "danceDescription": "Ghoomar is a traditional folk dance of Rajasthan, performed by women in swirling costumes. It is typically performed during festivals and celebrations, with the dancers moving gracefully in circles.",
          "danceImage": "https://live.staticflickr.com/7652/16666529058_14bb1185d4_b.jpg"
        },
        {
          "danceName": "Lavani",
          "danceType": "Folk",
          "danceDescription": "Lavani is a folk dance from Maharashtra, known for its powerful rhythm and fast-paced movements. It combines traditional song and dance, often performed by women wearing nine-yard sarees.",
          "danceImage": "https://mazamaharashtrablog.files.wordpress.com/2017/08/lavani.jpg"
        },
        {
          "danceName": "Dandiya Raas",
          "danceType": "Folk",
          "danceDescription": "Dandiya Raas is a traditional folk dance from Gujarat, performed during Navratri. The dancers use sticks (dandiyas) to create rhythmic beats as they dance in pairs or groups.",
          "danceImage": "https://i.pinimg.com/736x/af/fe/ad/affead117e8908f9c8e9e779e634cd26.jpg"
        },
        {
          "danceName": "Chhau",
          "danceType": "Folk",
          "danceDescription": "Chhau is a semi-classical dance from West Bengal, Jharkhand, and Odisha. It involves a blend of martial arts, folk traditions, and storytelling, with dancers often wearing masks and performing in vibrant costumes.",
          "danceImage": "https://mapacademy.io/wp-content/uploads/2023/04/Chhau-6l.jpg"
        },
        {
          "danceName": "Yakshagana",
          "danceType": "Folk",
          "danceDescription": "Yakshagana is a traditional theater form of Karnataka that combines dance, music, and dialogue. Performers wear elaborate costumes and makeup, and the performances are based on mythological stories.",
          "danceImage": "https://karnatakatourism.org/wp-content/uploads/2020/05/Yakshagana-2.jpg"
        },
        {
          "danceName": "Bihu",
          "danceType": "Folk",
          "danceDescription": "Bihu is a folk dance from Assam, performed during the Bihu festival that marks the Assamese New Year. It is characterized by fast rhythms and energetic movements, performed to the tune of traditional Bihu songs.",
          "danceImage": "https://stagebuzz.in/wp-content/uploads/2021/03/1.png"
        },
        {
          "danceName": "Kalbelia",
          "danceType": "Folk",
          "danceDescription": "Kalbelia is a traditional folk dance of the Kalbelia nomadic community from Rajasthan. It is performed by women in black swirling skirts, mimicking the movements of serpents, as the men play traditional instruments.",
          "danceImage": "https://3.bp.blogspot.com/-1H6EJvINMmQ/VSVfW2ikLjI/AAAAAAAAF-k/zetEgpm1dMo/s1600/Kalbelia%2BDance%2BPerformance.jpg"
        },
        {
          "danceName": "kolatam",
          "danceType": "Folk",
          "danceDescription": "Raut Nacha is a traditional folk dance of Chhattisgarh, performed by the Yadav community. It celebrates the victory of good over evil, and the dancers move in rhythm with the beats of drums and cymbals.",
          "danceImage": "https://i.pinimg.com/474x/c2/b9/2d/c2b92d416628ee3b6ec639bf9abea297.jpg"
        }
      
      
];


const Dances = () => {
    return (
        <Container>
            <Typography variant="h3" component="h1" gutterBottom align="center" marginTop='80px' marginLeft='150px'>
                CLASSICAL DANCES IN INDIA
            </Typography>
            <Grid container spacing={4} marginLeft='60px'>
                {dances.map((dance, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ maxWidth: '350px',height:'500px', margin: 'auto', boxShadow: 3 }}>
                            <CardMedia
                                component="img"
                                height="350"
                                image={dance.danceImage}
                                alt={dance.danceName}
                            />
                            <CardContent>
                                <Typography variant="h5" component="div" gutterBottom>
                                    {dance.danceName}
                                </Typography>
                                <Typography variant="subtitle1" color="text.primary">
                                    {dance.danceType}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {dance.danceDescription}
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

export default Dances;
