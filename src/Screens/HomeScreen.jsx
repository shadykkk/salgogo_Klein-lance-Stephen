import React from 'react';
import './HomeScreen.css'; // Import your CSS file

const HomeScreen = () => {
  return (
    <div className="home-container">
      <div className="subscription-box free-box">
        <h2>FREE</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button>Subscribe</button>
      </div>
      <div className="subscription-box elite-box">
        <h2>ELITE</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default HomeScreen;
