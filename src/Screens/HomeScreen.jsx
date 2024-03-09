import React from 'react';
import './HomeScreen.css'; // Import your CSS file

const HomeScreen = () => {
  const handleSubscribe = (membershipType) => {
    // Implement subscription logic based on the membership type
    console.log(`Subscribing to ${membershipType} membership...`);
  };

  return (
    <div className="home-container">
      <div className="subscription-box free-box">
        <h2>FREE</h2>
        <p>To kickstart your fitness journey, our Free membership offers access to a wide range of beginner-friendly workout routines, basic progress tracking tools, and access to our supportive community forums.</p>
        <button onClick={() => handleSubscribe('Free')}>Subscribe</button>
      </div>
      <div className="subscription-box elite-box">
        <h2>ELITE</h2>
        <p>With our Elite membership, gain access to premium features like personalized training sessions with certified personal trainers, exclusive workout routines, advanced progress tracking tools, and priority customer support.</p>
        <button onClick={() => handleSubscribe('Elite')}>Subscribe</button>
      </div>
    </div>
  );
};

export default HomeScreen;