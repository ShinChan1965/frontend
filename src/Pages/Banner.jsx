// Banner.js
import React from 'react';

function Banner() {
  const bannerStyle = {
    backgroundImage: 'url("https://source.unsplash.com/1600x400/?nature")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '300px',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    padding: '20px',
  };

  return (
    <div style={bannerStyle}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Welcome to My Site</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
        Explore the beauty of nature with us.
      </p>
      <button
        style={{
          padding: '10px 20px',
          backgroundColor: '#ffffff',
          color: '#333',
          border: 'none',
          borderRadius: '5px',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        Learn More
      </button>
    </div>
  );
}

export default Banner;
