import React from "react";
import "../LandingPage/CSS/LogosSections.css"; // Import the CSS for styling
import Roorkee from "../LandingPage/Images/Marqu/Roorkee-1.png"; 
import Guwahati from "../LandingPage/Images/Marqu/Drishti.png";
import Essex from "../LandingPage/Images/Marqu/IIM-Sirmaur.png";
import LIVERPOOL from "../LandingPage/Images/Marqu/Jammu-1.png";
import Jaipur from "../LandingPage/Images/Marqu/Microsoft.png";
import TORONTO from "../LandingPage/Images/Marqu/Mit-and-ICSS.png";
import Jammu from "../LandingPage/Images/Marqu/Patna.png";

const LogosSections = () => {
  return (
    <div className="circular-logo-marquee">
      <h2>Programs in Collaboration with worlds top Universities & MNCs</h2>
      <div className="circular-track">
        <img src={Roorkee} alt="IIT Roorkee" />
        <img src={Guwahati} alt="IIT Guwahati" />
        <img src={Essex} alt="University of Essex" />
        <img src={LIVERPOOL} alt="University of Liverpool" />
        <img src={Jaipur} alt="MNIT Jaipur" />
        <img src={TORONTO} alt="University of Toronto" />
        <img src={Jammu} alt="IIT Jammu" />
        <img src={Roorkee} alt="IIT Roorkee" />
        <img src={Guwahati} alt="IIT Guwahati" />
        <img src={Essex} alt="University of Essex" />
        <img src={LIVERPOOL} alt="University of Liverpool" />
        <img src={Jaipur} alt="MNIT Jaipur" />
        <img src={TORONTO} alt="University of Toronto" />
        <img src={Jammu} alt="IIT Jammu" />
      </div>
    </div>
  );
};

export default LogosSections;
