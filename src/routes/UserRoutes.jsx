import React from 'react';
import { Route } from 'react-router-dom';

// Import your page components
import HomePage from '../components/HomePage';
import Explore from '../pages/Explore';
import VirtualTours from '../pages/VirtualTours';
import Traditions from '../pages/Traditions';
import TajMahal from '../pages/TajMahal';
import QutubMinar from '../pages/QutubMinar';
import RedFort from '../pages/RedFort';
import AndhraPradesh from '../pages/states/AndhraPradesh';
import UttarPradesh from '../pages/states/UttarPradesh';
import Telangana from '../pages/states/Telangana';
import HimachalPradesh from '../pages/states/HimachalPradesh';
import Jammu from '../pages/states/Jammu';
import Karnataka from '../pages/states/Karnataka';
import Kerala from '../pages/states/Kerala';
import Maharashtra from '../pages/states/Maharastra';
import Punjab from '../pages/states/Punjab';
import Rajasthan from '../pages/states/Rajasthan';
import TamilNadu from '../pages/states/TamilNadu';
import Team from '../components/Team';
import Festivals from '../pages/Festivals';
import Cuisine from '../pages/Cuisine';
import Languages from '../pages/Languages';
import ReligiousCustoms from '../pages/ReligiousCustoms';
import TraditionalClothing from '../pages/TraditionalClothing';
import Dances from '../pages/Dances';
import Epics from '../pages/Epics';
import MartialArts from '../pages/MartialArts';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Monuments from '../pages/Monuments';
import Registration from '../pages/Registration';
import Login from '../pages/Login';
import ViewTours from '../pages/ViewTours';
import TourDetails from '../pages/TourDetails';
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage';
import TermsAndServicesPage from '../pages/TermsAndServicesPage';
import TourDetailPage from '../pages/TourDetailPage';
import TalkToExpertPage from '../pages/TalkToExpertPage';
import Profile from '../pages/Profile';
import UpdateProfile from '../pages/UpdateProfile';

const UserRoutes = [
  { path: '/', element: <HomePage /> },
  { path: '/explore', element: <Explore /> },
  { path: '/tours', element: <VirtualTours /> },
  { path: '/traditions', element: <Traditions /> },
  { path: '/tajMahal', element: <TajMahal /> },
  { path: '/qutubMinar', element: <QutubMinar /> },
  { path: '/redFort', element: <RedFort /> },
  { path: '/andhrapradesh', element: <AndhraPradesh /> },
  { path: '/uttarpradesh', element: <UttarPradesh /> },
  { path: '/telangana', element: <Telangana /> },
  { path: '/himachal', element: <HimachalPradesh /> },
  { path: '/jammu', element: <Jammu /> },
  { path: '/karnataka', element: <Karnataka /> },
  { path: '/kerala', element: <Kerala /> },
  { path: '/maharastra', element: <Maharashtra /> },
  { path: '/punjab', element: <Punjab /> },
  { path: '/rajasthan', element: <Rajasthan /> },
  { path: '/tamilnadu', element: <TamilNadu /> },
  { path: '/team', element: <Team /> },
  { path: '/festivals', element: <Festivals /> },
  { path: '/cuisine', element: <Cuisine /> },
  { path: '/languages', element: <Languages /> },
  { path: '/religious-customs', element: <ReligiousCustoms /> },
  { path: '/traditional-clothing', element: <TraditionalClothing /> },
  { path: '/dances', element: <Dances /> },
  { path: '/epics-mythology', element: <Epics /> },
  { path: '/martial-arts', element: <MartialArts /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
  { path: '/monuments', element: <Monuments /> },
  { path: '/register', element: <Registration /> },
  { path: '/login', element: <Login /> },
  { path: '/privacy-policy', element: <PrivacyPolicyPage /> },
  { path: '/terms-of-service', element: <TermsAndServicesPage /> },
  { path: '/view-tours', element: <ViewTours /> },
  { path: '/view-tours/:id', element: <TourDetails /> },
  { path: '/tour-detail/:id', element: <TourDetailPage /> },
  { path: '/expert-contact', element: <TalkToExpertPage /> },
  { path: '/profile', element: <Profile /> },
  { path: '/update-profile', element: <UpdateProfile /> },
];

export default UserRoutes;
