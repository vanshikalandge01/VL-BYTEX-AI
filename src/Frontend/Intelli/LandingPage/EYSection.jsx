import React from "react";
import {
  FaChalkboardTeacher,
  FaUserTie,
  FaGlobe,
  FaChartLine,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";
import "../LandingPage/CSS/EYSection.css"; // Import CSS file

export default function TrainingAdvisors() {
  return (
    <div className="training-advisors">
      {/* Header Section */}
      <div className="training-header">
        <div>
          <div>
            <span className="Process">Process Advisors</span>
          </div>

          <div className="flex items-center gap-2">
            {/* <img
              src="src/LandingPage/Images/ey-rating.svg"
              alt="EY Logo"
              className="ey-logo"
            /> */}
          </div>
        </div>
        <p className="training-description">
          85% of the learners achieved their training objectives within 9 months
          of course completion*
        </p>
        <div>
          {/* Navigation Arrows */}
          {/* <div className="arrow-buttons">
            <ArrowButton
              direction="prev"
              onClick={() => console.log("Previous clicked")}
            />
            <ArrowButton
              direction="next"
              onClick={() => console.log("Next clicked")}
            />
          </div> */}

          {/* Footer */}
          {/* <span className="training-footer">
            *Subject to Terms and Conditions
          </span> */}
        </div>
      </div>

      {/* Features Section */}
      <div className="training-features">
        <Feature
          icon={<FaChalkboardTeacher className="feature-icon" />}
          text="World-Class Instructors"
        />
        <Feature
          icon={<FaUserTie className="feature-icon" />}
          text="1:1 with Industry Mentors"
        />
        <Feature
          icon={<FaGlobe className="feature-icon" />}
          text="400+ Global Hiring Partners"
        />
        <Feature
          icon={<FaChartLine className="feature-icon" />}
          text="55% Avg. Salary Hike"
        />
      </div>
    </div>
  );
}

function Feature({ icon, text }) {
  return (
    <div className="feature">
      {icon}
      <p className="feature-text">{text}</p>
    </div>
  );
}

function ArrowButton({ direction, onClick }) {
  return (
    <button className="arrow-button" onClick={onClick}>
      {direction === "prev" ? <FaChevronLeft /> : <FaChevronRight />}
    </button>
  );
}
