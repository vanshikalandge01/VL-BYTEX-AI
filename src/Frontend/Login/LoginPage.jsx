import React from "react";
import "./LoginPage.css";
import logo from "./logocom-removebg.png";

function LoginPage({ onSignUp }) {
  console.log(onSignUp,"********************************")
  return (
    <div className="login-form-container">
      {/* <h1 className="brand-title">BytexAI</h1> */}
      <img src={logo} alt="Logo" className="company-logo" />
      <h2 className="form-title">Sign in</h2>
      <p className="welcome-text">Welcome back! Please sign in to continue.</p>
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
      <input
        type="email"
        className="input-field"
        placeholder="Enter your email address"
      />
      <input
        type="password"
        className="input-field"
        placeholder="Enter your password"
      />

      <button className="submit-btn">Continue</button>
      <p className="signup-text">
        Don't have an account?{" "}
        <span onClick={(e)=>{
          e.preventDefault();
          onSignUp();
        }} className="signup-link">

          Sign up
        </span>
      </p>
    </div>
  );
}

export default LoginPage;
