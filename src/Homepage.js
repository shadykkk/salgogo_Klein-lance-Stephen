// Homepage.js
import React, { useState } from 'react';
import { NavbarContainer, NavbarList, NavbarListItem } from './NavbarStyles';
import './App.css';
import './homepage.css';

function Homepage() {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

  const handleNavbarToggle = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };

  // Add or remove 'collapsed' class based on isNavbarCollapsed state
  React.useEffect(() => {
    const navbarLinks = document.querySelector('.navbar-links');
    if (navbarLinks) {
      if (isNavbarCollapsed) {
        navbarLinks.classList.add('collapsed');
      } else {
        navbarLinks.classList.remove('collapsed');
      }
    }
  }, [isNavbarCollapsed]);

  return (
    <div className="stephen">
      <header style={{ backgroundColor: '#87CEEB', color: '#fff', padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <button className="navbar-toggle-button" onClick={handleNavbarToggle}>
            ☰ {/* Unicode character for three horizontal lines */}
          </button>
        </div>
        <NavbarContainer isNavbarCollapsed={isNavbarCollapsed}>
          <NavbarList className="navbar-links">
            <NavbarListItem>HOMEbea</NavbarListItem>
            <NavbarListItem>SUBSCRIPTION</NavbarListItem>
            <NavbarListItem>EXERCISES</NavbarListItem>
            <NavbarListItem>FITNESS TRACKER</NavbarListItem>
          </NavbarList>
        </NavbarContainer>
        <div>
          <button className="sign-in-button">Sign In</button>
          <button className="login-button">Login</button>
        </div>
      </header>
      <main style={{ backgroundColor: '#ffffff', maxWidth: '800px', margin: '20px auto', padding: '20px' }}>
        <h1>Welcome to FitFusion Elite</h1>
        <p>Your premier destination for a personalized fitness experience.</p>
        <p>Try FitFusion Elite for free and get up to 3 Months or Exercise Fitness Tracker to track your progress.</p>
        <h2>Last Workout</h2>
        <p>Barbell Bench Press: 2 sets of 20 pounds</p>
        <p>Barbell Shoulder Press: 2 sets of 20 pounds</p>
        <p>Dumbbell Rear Del Ri: 2 sets of 20 pounds</p>
      </main>
    </div>
  );
}

export default Homepage;

/* INPUTTED BY KLEIN MIYUKI AND STEPHEN ARVY SANTOS */