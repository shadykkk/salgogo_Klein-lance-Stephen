import React from 'react';
import './Tracker.css';

const TrackerScreen = () => {
    // Mock fitness data
    const dailySteps = 8000;
    const distance = 5.6;
    const caloriesBurned = 350;
    const activeMinutes = 60;

    return (
        <div className="dashboard-container">
            <h2>Dashboard(Wala pa po mahanap na mock data na analytics for front end. Kailangan ng google analytics(backend)</h2>
            <div className="metrics">
                <div className="metric">
                    <h3>Daily Steps</h3>
                    <p>{dailySteps}</p>
                </div>
                <div className="metric">
                    <h3>Distance (km)</h3>
                    <p>{distance}</p>
                </div>
                <div className="metric">
                    <h3>Calories Burned</h3>
                    <p>{caloriesBurned}</p>
                </div>
                <div className="metric">
                    <h3>Active Minutes</h3>
                    <p>{activeMinutes}</p>
                </div>
            </div>
        </div>
    );
};

export default TrackerScreen;
