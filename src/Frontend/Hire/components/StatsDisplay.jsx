import React from 'react';
import '../CSS/StatsDisplay.css';

const StatsDisplay = () => {
  return (
    <div className="stats-display-container">
      <div className="stats-display-item">
        <p className="stats-display-title">Hiring Partners</p>
        <p className="stats-display-value">2,000+</p>
      </div>
      <div className="stats-display-item">
        <p className="stats-display-title">Careers Made</p>
        <p className="stats-display-value">4,500+</p>
      </div>
      <div className="stats-display-item">
        <p className="stats-display-title">Hours of Learning</p>
        <p className="stats-display-value">1000+</p>
      </div>
      <div className="stats-display-item">
        <p className="stats-display-title">Highest Package</p>
        <p className="stats-display-value">26.6 LPA</p>
      </div>
    </div>
  );
};

export default StatsDisplay;
