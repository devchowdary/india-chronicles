import React,{useState,useEffect} from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const topMonumentsInIndia = [
    {
      title: "2019 Badminton World Championships - PV Sindhu",
      year: 2019,
      description: "PV Sindhu became the first Indian to win a gold medal at the Badminton World Championships in 2019, cementing her status as one of India's top athletes.",
      image: "https://youthincmag.com/wp-content/uploads/2019/08/PV-Sindhu-Times-Now.jpg"
    },
    {
      title: "2011 Cricket World Cup",
      year: 2011,
      description: "India won its second Cricket World Cup under the captaincy of MS Dhoni, defeating Sri Lanka in the final at Wankhede Stadium, Mumbai. This was India’s first World Cup win on home soil.",
      image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202404/indian-players-celebrate-after-winning-the-2011-odi-world-cup-reuters-020134996-3x4.jpg?VersionId=_lyn7VFWUersQd1uBlJhlgEzUXp1zic6"
    },
    {
      title: "2021 Tokyo Olympics - Neeraj Chopra",
      year: 2021,
      description: "Neeraj Chopra won India’s first-ever gold medal in athletics, in the javelin throw event at the Tokyo 2021 Olympics, making history for Indian sports.",
      image: "https://images.news18.com/ibnlive/uploads/2021/08/1628408970_neeraj-chopra-india-javelin-history-afp.jpg"
    },
    {
      title: "India Gate",
      location: "Delhi",
      description: "India Gate is a war memorial built to honor Indian soldiers who died during World War I. It stands at 42 meters in height in the heart of Delhi.",
      image: "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/27/5c47137b8b32bdc3702a6c0b4b2359e9_1000x1000.jpg"
    },
    {
      title: "Hawa Mahal",
      location: "Jaipur, Rajasthan",
      description: "Hawa Mahal, also known as the 'Palace of Winds,' is a pink sandstone palace built in 1799 that allowed royal women to observe street festivals while remaining unseen.",
      image: "https://www.palacesonwheels.com/wp-content/uploads/2013/11/HawaMahal-Jaipur-1024x659.jpg"
    },
    {
      title: "Gateway of India",
      location: "Mumbai, Maharashtra",
      description: "The Gateway of India is an iconic monument built in 1924 to commemorate the visit of King George V and Queen Mary to India.",
      image: "https://boundlessexplorism.com/wp-content/uploads/2023/09/Gateway.jpg"
    },
    {
      title: "Charminar",
      location: "Hyderabad, Telangana",
      description: "The Charminar is a historic mosque built in 1591 and a global icon of Hyderabad. It is renowned for its four grand minarets.",
      image: "https://explorehyderabad.in/wp-content/uploads/2024/06/Charminar_Hyderabad.jpg"
    },
    {
      title: "Ajanta Caves",
      location: "Aurangabad, Maharashtra",
      description: "The Ajanta Caves are rock-cut Buddhist cave monuments dating from the 2nd century BCE, known for their exquisite paintings and sculptures.",
      image: "https://static.toiimg.com/thumb/msid-102582207,width-748,height-499,resizemode=4,imgsize-190114/.jpg"
    },
    {
      title: "Ellora Caves",
      location: "Aurangabad, Maharashtra",
      description: "The Ellora Caves are rock-cut temples and monasteries representing three religions: Hinduism, Buddhism, and Jainism. The Kailasa temple is the most famous among them.",
      image: "https://media.istockphoto.com/id/531012475/photo/ellora-caves-maharashtra-india.jpg?s=612x612&w=0&k=20&c=Xb2rQVrLTA0cFdr_WquuHnACAaMsZlSUG4U56mGC_eA="
    },
    {
      title: "Sun Temple",
      location: "Konark, Odisha",
      description: "The Sun Temple in Konark is an architectural marvel built in the 13th century. It is shaped like a massive chariot with intricately carved stone wheels and horses.",
      image: "https://assets.cntraveller.in/photos/65a4ca16f4f38543f111ce6d/1:1/w_3457,h_3457,c_limit/1444924249"
    },
    {
      title: "Victoria Memorial",
      location: "Kolkata, West Bengal",
      description: "The Victoria Memorial is a large marble building dedicated to Queen Victoria. It is one of the most iconic landmarks in Kolkata.",
      image: "https://cdn.pixabay.com/photo/2021/08/21/16/57/victoria-memorial-6563224_1280.jpg"
    },
    {
      title: "Sanchi Stupa",
      location: "Sanchi, Madhya Pradesh",
      description: "The Sanchi Stupa is a Buddhist complex famous for its Great Stupa, a UNESCO World Heritage Site dating back to the 3rd century BCE.",
      image: "https://www.ravenouslegs.com/uploads/4/2/3/4/42340821/img-2365-orig_orig.jpg"
    },
    {
      title: "Mysore Palace",
      location: "Mysore, Karnataka",
      description: "Mysore Palace is one of the largest palaces in India and a fine example of Indo-Saracenic architecture. It is illuminated every Sunday evening with thousands of lights.",
      image: "https://www.fabhotels.com/blog/wp-content/uploads/2019/05/Mysore-palace_600.jpg"
    },
    {
      title: "Golconda Fort",
      location: "Hyderabad, Telangana",
      description: "Golconda Fort is a ruined fort complex with a rich history, known for its acoustic architecture. It was the capital of the medieval Golconda Sultanate.",
      image: "https://subrata.net.in/wp-content/uploads/2021/06/img_20210608_190656-edited.jpg"
    },
    {
      title: "Rashtrapati Bhavan",
      location: "Delhi",
      description: "The Rashtrapati Bhavan is the official residence of the President of India. It is an architectural blend of Indian and European styles.",
      image: "https://bsmedia.business-standard.com/_media/bs/img/hp/misc/2022-07/26/full/1658838861-5508.jpg?im=FeatureCrop,size=(826,465)"
    },
    {
      title: "Vivekananda Rock Memorial",
      location: "Kanyakumari, Tamil Nadu",
      description: "The Vivekananda Rock Memorial is a beautiful monument built in 1970 in honor of Swami Vivekananda, located on a small island at the southern tip of India.",
      image: "https://www.localguidesconnect.com/t5/image/serverpage/image-id/659260i70BBA6C8B719CC4F/image-size/large?v=v2&px=999"
    },
    {
      title: "Eden Gardens",
      location: "Kolkata, West Bengal",
      description: "Eden Gardens is one of the most iconic cricket stadiums in the world and the largest in India by seating capacity, known for hosting legendary cricket matches.",
      image: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1200,q_50/lsci/db/PICTURES/CMS/370100/370122.jpg"
    },
    {
      title: "Wankhede Stadium",
      location: "Mumbai, Maharashtra",
      description: "Wankhede Stadium is a famous cricket stadium in Mumbai that hosted the 2011 Cricket World Cup final where India won the trophy.",
      image: "https://www.crictotal.com/grounds/gifs/00097.jpg"
    },
    {
      title: "Jawaharlal Nehru Stadium",
      location: "Delhi",
      description: "Jawaharlal Nehru Stadium is a multi-purpose sports stadium used for football and athletics, and was a prominent venue during the 2010 Commonwealth Games.",
      image: "https://i0.wp.com/www.re-thinkingthefuture.com/wp-content/uploads/2023/12/8.-Jawaharlal-Nehru-Stadium-Cover.jpg?w=999"
    },
    {
      title: "Chhatrapati Shivaji Terminus",
      location: "Mumbai, Maharashtra",
      description: "Chhatrapati Shivaji Terminus is a historic railway station and a UNESCO World Heritage Site. It is an architectural marvel of Victorian Gothic Revival style.",
      image: "https://www.theleela.com/prod/content/assets/styles/tl_1920_735/public/aio-banner/dekstop/CSMT-railway-station_0.jpg.webp?VersionId=AtTdhx0dv8BJqCzk_VVPtTmg9d2AHMWs&itok=JIHHBbWm"
    },
    {
      title: "Dhyana Budda Statue",
      location: "Amaravathi",
      description: "The Amaravathi Gautam Buddha Statue is a towering 125-foot statue located in Andhra Pradesh, symbolizing peace and the teachings of Buddhism.",
      image: "https://static.wanderon.in/wp-content/uploads/2024/02/8439e28d-743c-4d46-bfb8-1d2b4bed6e99.jpg"
    }
  ];
  
  


const Monuments = () => {
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
        <>
        <Container>
            <Typography variant="h3" component="h1" gutterBottom align="center" marginTop='80px' marginLeft='150px'>
                  MONUMENTS OF INDIA
            </Typography>
            <Grid container spacing={4} marginLeft='-10px'>
                {topMonumentsInIndia.map((monument, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ maxWidth: '350px',height:'500px', margin: 'auto', boxShadow: 3 }}>
                            <CardMedia
                                component="img"
                                height="330"
                                image={monument.image}
                                alt={monument.title}
                            />
                            <CardContent>
                                <Typography variant="h5" component="div" gutterBottom>
                                    {monument.title}
                                </Typography>
                                <Typography variant="subtitle1" color="text.primary">
                                    {monument.location}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {monument.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
        
    
      
        </>
        ) : (
          // Show message if not logged in
          <Typography variant="h6" color="error" marginTop="20px" textAlign="center">
            Please log in to access this page.
          </Typography>
        )
    );
};

export default Monuments;
