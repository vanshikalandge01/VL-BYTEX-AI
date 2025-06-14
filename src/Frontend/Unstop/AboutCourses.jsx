import React from "react";
import "./CSS/AboutCourses.css";
import AIBanner from "./AIBanner"; //AI-Banner
import CourseInfo from "./CourseInfo"; //About the CourseInfo
import CareerProspects from "./CareerProspects"; // Import the new component
import Certificate from "./Certificate"; // Certificate
import CourseContent from "./CourseContent"; //CourseContent of Courses
import KeyTakeaways from "./KeyTakeaways"; // Side Bar
import Reviews from "./Reviews"; //Reviews of customer

const AboutCourses = () => {
  return (
    <div>
      <AIBanner />
      <div className="course-app-container">
        <div className="Course-left-section">
          <CourseInfo />
          <CareerProspects /> {/* Placed below CourseInfo */}
          <CourseContent />
          <Certificate />
          <Reviews />
        </div>
        <div className="course-right-section">
          <KeyTakeaways />
        </div>
      </div>
    </div>
  );
};

export default AboutCourses;
