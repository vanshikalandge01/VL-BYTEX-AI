import React from "react";
import "./CSS/CourseInfo.css";

const CourseInfo = () => {
  return (
    <div className="course-info-container">
      <h2>About the Course</h2>
      <p>
        In this course you will learn from basics to advance of Machine Learning and Artificial Intelligence with hands-on 
        experience. At the end you will be making a bunch of projects which you will be able to add into your resume.
      </p>
      <ul>
        <li>Helps you to get a deep dive into the Python basics and data structures.</li>
        <li>Boost your resume with in-demand skills and advanced tools like pandas, Scikit-learn, Keras, and TensorFlow.</li>
        <li>You will gain a clear understanding of Regression, Classification, various Machine Learning algorithms, Neural Networks, and Deep Learning.</li>
        <li>Hands-on projects like Real-time face mask detection and much more.</li>
        <li>Impress interviewers by showcasing strong technical and practical skills.</li>
        <li>Get a rewarding career in ML and AI with essential skills and project experiences.</li>
      </ul>
    </div>
  );
};

export default CourseInfo;
