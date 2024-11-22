// LoadingScreen.js
import React from 'react';

const LoadingScreen = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column', // Stack elements vertically
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#000', // Adjust background color as needed
      color: '#fff', // Text color for better contrast on dark background
    }}>
      <h1 style={{ marginBottom: '20px', textAlign: 'center' }}>INDIAN HERITAGE AND MONUMENTS</h1>
      <img 
        src="https://cityvillagenews.com/wp-content/uploads/2023/09/MONUMENTS-IN-INDIA-01.png" 
        alt="Loading" 
        style={{ width: '80%', maxWidth: '500px', borderRadius: '50px' }} 
      />
    </div>
  );
};

export default LoadingScreen;
