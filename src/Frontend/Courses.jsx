import { useState } from "react";
// import AboutMain from '../Frontend/Courses/AboutPage/AboutMain'
import AboutCourses from "../Frontend/Unstop/AboutCourses";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Demo from "../Frontend/Demo";

function Courses() {
  return (
    <>
      <Navbar />
      {/* <AboutMain/> */}
      <AboutCourses />
      <Footer />
    </>
  );
}

export default Courses;
