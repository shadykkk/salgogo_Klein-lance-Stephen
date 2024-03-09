import React from 'react';
import './ExerciseScreen.css';

const ExerciseScreen = () => {
  return (
    <div className="workout-homepage">
      <header className="header">
        {/* Your existing header content goes here */}
      </header>
      <main className="main-content">
        <section className="hero-section">
          <h2 className="glowing-text">Achieve Your Fitness Goals</h2>
          <p className="hero-text">Get fit, stay healthy, and reach your fitness goals with our expertly crafted workout plans.</p>
          <button className="cta-button">Start Now</button>
        </section>
        <section className="workout-plans">
          <h2 className="section-title">Popular Workout Plans</h2>
          <div className="plan-card">
            <h3 className="plan-name">Cardio Blast</h3>
            <p className="plan-description">Intense cardio workout to burn fat and improve cardiovascular health.</p>
            <button className="plan-button">View Plan</button>
          </div>
          <div className="plan-card">
            <h3 className="plan-name">Strength Training</h3>
            <p className="plan-description">Build muscle and strength with our effective strength training program.</p>
            <button className="plan-button">View Plan</button>
          </div>
          <div className="plan-card">
            <h3 className="plan-name">Yoga & Meditation</h3>
            <p className="plan-description">Relax your mind and body with our yoga and meditation sessions.</p>
            <button className="plan-button">View Plan</button>
          </div>
          {/* Add more plan cards below */}
          <div className="plan-card">
            <h3 className="plan-name">HIIT Workouts</h3>
            <p className="plan-description">High-intensity interval training for maximum calorie burn.</p>
            <button className="plan-button">View Plan</button>
          </div>
          <div className="plan-card">
            <h3 className="plan-name">Pilates</h3>
            <p className="plan-description">Strengthen your core and improve flexibility with Pilates.</p>
            <button className="plan-button">View Plan</button>
          </div>
          <div className="plan-card">
            <h3 className="plan-name">CrossFit</h3>
            <p className="plan-description">Join the CrossFit community and push your limits.</p>
            <button className="plan-button">View Plan</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ExerciseScreen;
