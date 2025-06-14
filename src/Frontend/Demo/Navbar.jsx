import React from "react";
import "./Navbar.css";
import logo from "./assets/logocom.png"; // Ensure this image exists

const Navbar = () => {
  return (
    <nav className="para-navbar">
      <img src={logo} alt="Paradox Logo" className="para-logo" />
    </nav>
  );
};

export default Navbar;
