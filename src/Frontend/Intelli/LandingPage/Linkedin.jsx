import React, { useState } from "react";
import { FaLinkedin, FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../LandingPage/CSS/Linkedin.css";

const linkedin = [
  {
    name: "Nikhil YN",
    role: "Cloud Engineer at Ciber Global",
    rating: 5,
    image: "https://intellipaat.com/course-image/2021/10/Nikhil-Y-N.jpg",
    review:
      "I completed the GCP Course. It helped me change my career path to DevOps and Cloud. Within 6 months, I secured the Associate Cloud Engineer Certificate, which helped me get a job at Qwinix.",
  },
  {
    name: "Rajesh Venaganti",
    role: "Sr. Software Engineer at Wipro",
    rating: 5,
    image: "https://intellipaat.com/course-image/2021/10/Rajesh-Venaganti.jpg",
    review:
      "I was an Associate at Capgemini but due to some issues, I had to drop. Then, I started learning Intellipaat’s Data Science course during the lockdown which helped me build strong foundations and exposure to real-world projects.",
  },
  {
    name: "Chandradip Banerjee",
    role: "Sr. Software Engineer at Accenture",
    rating: 5,
    image:
      "https://intellipaat.com/course-image/2021/10/Chandradip-Banerjee.jpg",
    review:
      "I am a Software Engineer at Accenture. I had good knowledge of SQL server development but wanted to change my career to Data Science. I enrolled in Intellipaat’s Data Science course, and it helped me transition smoothly.",
  },
  {
    name: "Rohit Bhargava",
    role: "Software Developer at TCS",
    rating: 4,
    image: "https://intellipaat.com/course-image/2021/10/Rohit-Bhargava.jpg",
    review:
      "The course gave me a clear understanding of AI. I was able to use the knowledge to develop an AI-based project at my job.",
  },
];

export default function Linkedin() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    if (currentIndex + 3 < linkedin.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevTestimonial = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const displayedTestimonials = linkedin.slice(currentIndex, currentIndex + 3);

  // Calculate the position of the nav-indicator
  const totalSteps = linkedin.length - 3 + 1; // Total steps the indicator can move
  const stepSize = 100 / (totalSteps - 1); // Percentage each step represents
  const indicatorPosition = currentIndex * stepSize;

  return (
    <div className="linkedin-container">
      {/* Testimonials Section */}
      <div className="testimonials-wrapper">
        {displayedTestimonials.map((testimonial, index) => (
          <div key={index} className="linkedin-card">
            <div className="linkedin-header">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="linkedin-image"
              />
              <div className="linkedin-info">
                <h3 className="linkedin-name">{testimonial.name}</h3>
                <p className="linkedin-role">{testimonial.role}</p>
              </div>
              <FaLinkedin className="linkedin-icon" />
            </div>
            <div className="linkedin-rating">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <FaStar key={i} className="star-icon" />
              ))}
            </div>
            <p className="linkedin-review">{testimonial.review}</p>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="navigation-container">
        <button
          className="nav-button"
          onClick={prevTestimonial}
          disabled={currentIndex === 0}
        >
          <FaArrowLeft />
        </button>
        <div className="nav-track">
          <div
            className="nav-indicator"
            style={{ left: `${indicatorPosition}%` }}
          ></div>
        </div>
        <button
          className="nav-button"
          onClick={nextTestimonial}
          disabled={currentIndex + 3 >= linkedin.length}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
