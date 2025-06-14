
import React from "react";
import "./CSS/CareerProspects.css";

const CareerProspects = () => {
  return (
    <div className="career-pro-containers">
      <h2>Career Growth Prospects After The Completion of This Course</h2>
      <p className="subtitle">Cracking Job Interviews and Preliminary assessments</p>

      <div className="prospect-item">
        <span className="career-icon pink">✔</span>
        <p>Understand the core principles, algorithms, and models crucial for success in AI/ML interviews and assessments.</p>
      </div>

      <div className="prospect-item">
        <span className="career-icon yellow">✔</span>
        <p>Develop hands-on skills with projects that translate theory into practice, ensuring readiness for technical assessments and job-specific problem-solving.</p>
      </div>

      <div className="prospect-item">
        <span className="career-icon blue">✔</span>
        <p>Learn effective interview communication, problem-solving tactics, and boost confidence through mock assessments, equipping you for success in AI/ML job interviews.</p>
      </div>
    </div>
  );
};

export default CareerProspects;
