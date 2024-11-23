import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, role }) => {
  const userRole = localStorage.getItem('role'); // Get the user's role

  if (!userRole) {
    return <Navigate to="/login" />; // Redirect to login if not authenticated
  }

  if (role && userRole !== role) {
    return <Navigate to="/" />; // Redirect to home if role doesn't match
  }

  return children;
};

export default PrivateRoute;
