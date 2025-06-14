import { useState } from "react";
import "./AboutMain.css";
import CourseInfo from "./CourseInfo";
import CareerGrowth from "./CareerGrowth";
import CourseContent from "./CourseContent";
import Certificate from "./Certificate";
import Reviews from "./Reviews";
import Banner from "./Banner";
import RightSideSection from "./RightSideSection";
import Footer from 'D:/React Uptoskill File/BytexAI/src/common/Footer'
import Navbar from 'D:/React Uptoskill File/BytexAI/src/common/Navbar'

function AboutMain() {
  return (
    <>
      <Navbar />
      <div className="hero">
        <div className="side-char">
          <Banner />
          <div className="parent-container">
            <div className="main-content">
              <CourseInfo />
              <CareerGrowth />
              <CourseContent />
              <Certificate />
              <Reviews />
            </div>
            <div className="right-section">
              <RightSideSection />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutMain;
