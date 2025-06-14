import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import logo from "./assets/logocom.png"; // Ensure the logo is in /assets/

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="para-footer">
      {/* Footer Top */}
      <div className="para-footer-top">
        <img
          src={logo}
          alt="Paradox Logo"
          className="para-footer-logo"
        />
        {/* <button className="back-to-top" onClick={scrollToTop}>
          ↑ Back to top
        </button> */}
        <button className="para-back-to-top" onClick={scrollToTop}>
          {/* <span className="arrow">↑</span> */}
          {/* Back to top<p></p> */}
          <pre>↑ Back to top</pre>
        </button>
        <button className="para-demo-button">Demo</button>
      </div>

      {/* Horizontal Line */}
      {/* <div className="footer-divider"></div> */}

      {/* Footer Bottom */}
      <div className="para-footer-bottom">
        {/* Social Media Icons */}
        <div className="para-social-icons">
          <img src="https://cdn.prod.website-files.com/611dc730a416cbf8f5934ebc/64126f075b99c4f5aab00dab_paradox-footer-social-icon-facebook.svg"  alt="Facebook" />
          <img src="https://cdn.prod.website-files.com/611dc730a416cbf8f5934ebc/64126f0942cb31c589c22860_paradox-footer-social-icon-linkedin.svg" alt="LinkedIn" />
          <img src="https://cdn.prod.website-files.com/611dc730a416cbf8f5934ebc/64126f09e41c11248013ae40_paradox-footer-social-icon-instagram.svg" alt="Instagram" />
          <img src="https://cdn.prod.website-files.com/611dc730a416cbf8f5934ebc/6679e49a842bc8bcbf250fa3_paradox-footer-social-icon-x.svg" alt="X" />
          <img src="https://cdn.prod.website-files.com/611dc730a416cbf8f5934ebc/64126f09def53d14874c68dc_paradox-footer-social-icon-vimeo.svg" alt="Vimeo" />
        </div>

        {/* Footer Links */}
        <div className="para-footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>

        {/* Copyright & Cookie Settings */}
        <div className="para-footer-info">
          <p>© 2025 Copyright Paradox, Inc. All rights reserved.</p>
          {/* <a href="#" className="cookie-settings"src="./src/assets/privacyoptions.svg" alt="Vimeo" >Cookie Settings 
          </a> */}
          <a href="#" className="para-cookie-settings">
            {/* <img src="/assets/cookie-icon.png" alt="Cookie Icon" className="cookie-icon" /> */}
            Cookie Settings
            <a href="#" className="cookie-settings">
              <img
                src="./assets/logocom.png"
                alt="Cookie Icon"
                className="cookie-icon"
              />
            </a>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
