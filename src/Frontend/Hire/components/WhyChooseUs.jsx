import React from "react";
import "../CSS/WhyChooseUs.css";
import "bootstrap/dist/css/bootstrap.min.css";

const WhyChooseUs = () => {
  return (
    <div className="container text-center why-choose-us">
      <h4 className="section-title-who">WHY CHOOSE US</h4>
      <h2 className="main-title-who">
        Highly efficient <span className="highlight">Data Science & Software Development Professionals</span>
      </h2>
      <div className="row g-4 justify-content-center">
        <div className="col-md-4 col-lg-8">
          <div className="feature-card-who blue">
            <span className="feature-number-who">1</span>
            <p className="feature-title">HIRE SKILLED PROFESSIONALS AT</p>
            <p className="feature-desc">Zero Cost</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className="feature-card orange">
            <span className="feature-number">2</span>
            <p className="feature-title">BASED ON YOUR REQUIREMENTS</p>
            <p className="feature-desc">3x Hiring Speed</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className="feature-card purple">
            <span className="feature-number">3</span>
            <p className="feature-title">MEET REQUIREMENTS PAN INDIA WITH</p>
            <p className="feature-desc">Diverse Candidates</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className="feature-card green">
            <span className="feature-number">4</span>
            <p className="feature-title">CATER YOUR REQUIREMENTS</p>
            <p className="feature-desc">Dedicated Relationship Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;