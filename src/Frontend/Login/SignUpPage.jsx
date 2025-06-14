import React from "react";
import "./SignUpPage.css";
import logo from "./logocom-removebg.png";


function SignUpPage({ onBack }) {
  return (
    <div className="signup-form-container">
      {/* <h1 className="brand-title">BytexAI</h1> */}
      <img src={logo} alt="Logo" className="company-logo" />
      <h2 className="form-title">Create your account</h2>
      <p className="welcome-text">
        Welcome! Please fill in the details to get started.
      </p>
      <div className="social-buttons">
        <button className="social-btn linkedin">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            alt="LinkedIn"
            className="icon"
          />{" "}
          LinkedIn
        </button>
        <button className="social-btn google">
          <img
            src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
            alt="Google"
            className="icon"
          />{" "}
          Google
        </button>
      </div>
      <p className="or-text">or</p>
      <div className="input-row">
        <input type="text" className="input-field" placeholder="First name" />
        <input type="text" className="input-field" placeholder="Last name" />
      </div>
      <input
        type="email"
        className="input-field"
        placeholder="Enter your email address"
      />
      <input
        type="tel"
        className="input-field"
        placeholder="+91 Enter your phone number (Optional)"
      />
      <input
        type="password"
        className="input-field"
        placeholder="Enter your password"
      />
      <button className="submit-btn">Continue</button>
      <p className="signin-text">
        Already have an account?{" "}
        <span onClick={onBack} className="signin-link">
          Sign in
        </span>
      </p>
    </div>
  );
}

export default SignUpPage;
