import React from 'react';
import ViewTours from '../Admin/ViewTours';
import UpdateTours from '../Admin/UpdateTours';
import AddTour from '../Admin/AddTour';
import ViewUsers from '../Admin/ViewUsers';
import AdminProfile from '../Admin/AdminProfile';
import ViewQueries from '../Admin/ViewQueries';
import ViewBookings from '../Admin/ViewBookings';
import AdminNavbar from '../Admin/AdminNavbar';
import AddMonuments from '../Admin/AddMonuments';
import AdminDashboard from '../Admin/AdminDashBoard';

const AdminRoutes = [
  { path: '/admin/tours/view', element: <ViewTours /> },
  { path: "/admin/tours/update/:id", element: <UpdateTours /> },
  { path: '/admin/tours/add', element: <AddTour /> },
  { path: '/admin/users/view', element: <ViewUsers /> },
  { path: '/admin/profile', element: <AdminProfile /> },
  { path: '/admin/queries/view', element: <ViewQueries /> },
  { path: '/admin-bookings', element: <ViewBookings /> },
  { path: '/admin-navbar', element: <AdminNavbar/> },
  {path:'/admin/add-monument',element:<AddMonuments/>},
  {path:'/admin-dashboard',element:<AdminDashboard/>}

];

export default AdminRoutes;
