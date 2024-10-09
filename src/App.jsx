import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
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


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Home />} />
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
      </Routes>
    </Router>
  );
};

export default App;
