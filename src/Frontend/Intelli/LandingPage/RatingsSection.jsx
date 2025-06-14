import React from "react";
import "../LandingPage/CSS/RatingsSection.css";
import trustpilotLogo from "../LandingPage/Images/RatingsSection/Trustpilot.jpg";
import Sitejabberlogo from "../LandingPage/Images/RatingsSection/sitejabber.jpg";
import MouthShutlogo from "../LandingPage/Images/RatingsSection/mouthshut-1.png";

const RatingCard = ({ rating, stars, source, logo }) => {
  return (
    <div className="rating-card">
      <div className="rating-badge">
        <span className="rating-score">{rating}</span>
        <span className="rating-stars">★ ★ ★ ★ ★</span>
      </div>
      <img src={logo} alt={source} className="rating-logo" />
    </div>
  );
};

const RatingsSection = () => {
  return (
    <div className="ratings-section">
      <h2 className="ratings-heading">
        YOUR SUCCESS STORY IS NEXT<br />
      </h2>
      <div className="ratings-container">
        <RatingCard rating="4.7" source="Trustpilot" logo={trustpilotLogo} />
        <RatingCard rating="4.7" source="Sitejabber" logo={Sitejabberlogo} />
        <RatingCard rating="4.5" source="MouthShut" logo={MouthShutlogo} />
      </div>
    </div>
  );
};

export default RatingsSection;
