  import React, { useState, useEffect } from 'react';
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import Navbar from './components/Navbar';
  import Explore from './pages/Explore';
  import VirtualTours from './pages/VirtualTours';
  import Traditions from './pages/Traditions';
  import HomePage from './components/HomePage';

  import TajMahal from './pages/TajMahal';
  import QutubMinar from './pages/QutubMinar';
  import RedFort from './pages/RedFort';
  import AndhraPradesh from './pages/states/AndhraPradesh';
  import UttarPradesh from './pages/states/UttarPradesh';
  import Telangana from './pages/states/Telangana';
  import HimachalPradesh from './pages/states/HimachalPradesh';
  import Jammu from './pages/states/Jammu';
  import Karnataka from './pages/states/Karnataka';
  import Kerala from './pages/states/Kerala';
  import Maharashtra from './pages/states/Maharastra';
  import Punjab from './pages/states/Punjab';
  import Rajasthan from './pages/states/Rajasthan';
  import TamilNadu from './pages/states/TamilNadu';
  import Team from './components/Team';
  import Festivals from './pages/Festivals';
  import Cuisine from './pages/Cuisine';
  import Languages from './pages/Languages';
  import ReligiousCustoms from './pages/ReligiousCustoms';
  import TraditionalClothing from './pages/TraditionalClothing';
  import Dances from './pages/Dances';
  import Epics from './pages/Epics';
  import MartialArts from './pages/MartialArts';
  import About from './pages/About';
  import Contact from './pages/Contact';
  import Monuments from './pages/Monuments';
  import Registration from './pages/Registration';
  import Login from './pages/Login';
  import ViewTours from './pages/ViewTours';
  import TourDetails from './pages/TourDetails';
  import Footer from './components/Footer';
  import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
  import TermsAndServicesPage from './pages/TermsAndServicesPage';
  import LoadingScreen from './components/LoadingScreen';
  import TourDetailPage from './pages/TourDetailPage';
import TalkToExpertPage from './pages/TalkToExpertPage';
import Profile from './pages/Profile';
import SessionManager from './components/SessionManager';
import UpdateProfile from './pages/UpdateProfile';

  const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const hasSeenLoadingScreen = localStorage.getItem('hasSeenLoadingScreen');
  
      // Show loading screen for 5 seconds, regardless of whether the user has seen it before
      const timer = setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem('hasSeenLoadingScreen', 'true');
      }, 4000); // Display for 5 seconds
  
      // If the user has already seen it, set the loading state to false immediately.
      if (hasSeenLoadingScreen) {
        setIsLoading(false);
      }
  
      return () => clearTimeout(timer); // Clean up the timer
    }, []);
  
    if (isLoading) {
      return <LoadingScreen />; // Show loading screen if loading state is true
    }
   
    return (
      <Router>
        <Navbar />
        <SessionManager/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/tours" element={<VirtualTours />} />
          <Route path="/traditions" element={<Traditions />} />
          <Route path="/tajMahal" element={<TajMahal />} />
          <Route path="/qutubMinar" element={<QutubMinar />} />
          <Route path="/redFort" element={<RedFort />} />
          <Route path="/andhrapradesh" element={<AndhraPradesh/>}/>
          <Route path="/uttarpradesh" element={<UttarPradesh/>} />
          <Route path="/telangana" element={<Telangana/>} />
          <Route path="/himachal" element={<HimachalPradesh/>} />
          <Route path="/jammu" element={<Jammu/>} />
          <Route path='/karnataka' element={<Karnataka/>} />
          <Route path='/kerala' element={<Kerala/>} />
          <Route path='/maharastra' element={<Maharashtra/>} />
          <Route path='/punjab' element={<Punjab/>} />
          <Route path='/rajasthan' element={<Rajasthan/>} />
          <Route path='/tamilnadu'element={<TamilNadu/>}/>
          <Route path= '/team' element={<Team/>} />
          <Route path='/festivals' element={<Festivals/>} />
          <Route path='/cuisine' element={<Cuisine/>} />
          <Route path='/languages' element={<Languages/>} />
          <Route path='/religious-customs' element={<ReligiousCustoms/>} />
          <Route path='/traditional-clothing' element={<TraditionalClothing/>}/>
          <Route path='/dances' element={<Dances/>}/>
          <Route path='/epics-mythology' element={<Epics/>} />
          <Route path='/martial-arts' element={<MartialArts/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/monuments' element={<Monuments/>} />
          <Route path='/register' element={<Registration/>}  />
          <Route path='/login' element={<Login/>} />
          <Route path='/privacy-policy' element={<PrivacyPolicyPage/>}/>
          <Route path='/terms-of-service' element={<TermsAndServicesPage/>} />

          <Route path='/view-tours' element={<ViewTours/>} />

          <Route path='/view-tours/:id' element={<TourDetails/>} />

          <Route path='/tour-detail/:id' element={<TourDetailPage/>} />
          <Route path='/expert-contact' element={<TalkToExpertPage/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/update-profile' element={<UpdateProfile/>} />
          
        </Routes>
        <Footer/>
      </Router>
    );
  };

  export default App;
