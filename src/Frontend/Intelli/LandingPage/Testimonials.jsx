import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { GiStarsStack } from "react-icons/gi";
import "../LandingPage/CSS/Testimonials.css";


const testimonials = [
  {
    id: 1,
    name: "Success Stories",
    image: "https://intellipaat.com/course-image/2017/09/success-stories.jpg",
    link: "https://www.youtube.com/watch?v=tlK1CuYQg3E",
  },
  {
    id: 2,
    name: "Ayush Shah",
    image: "https://intellipaat.com/course-image/2021/10/ayush.png",
    link: "https://example.com/ayush-shah",
  },
  {
    id: 3,
    name: "Gaurav Saboo",
    image: "https://intellipaat.com/course-image/2021/06/Gaurav-Saboo-1.jpg",
    link: "https://example.com/gaurav-saboo",
  },
  {
    id: 4,
    name: "Ravi Patel",
    image: "https://intellipaat.com/course-image/2018/09/Anil-sharma.png",
    link: "https://example.com/ravi-patel",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    if (currentIndex + 3 < testimonials.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevTestimonial = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const displayedTestimonials = testimonials.slice(currentIndex, currentIndex + 3);

  // Calculate the position of the nav-indicator
  const totalSteps = testimonials.length - 3 + 1; // Total steps the indicator can move
  const stepSize = 100 / (totalSteps - 1); // Percentage each step represents
  const indicatorPosition = currentIndex * stepSize;

  return (
    <div className="testimonials-container">
      <h2>What Our Learners Have To Say About Us</h2>

      <div className="testimonial-cards">
        {displayedTestimonials.map((item) => (
          <div key={item.id} className="testimonial-card">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.image} alt={item.name} className="testimonial-img" />
            </a>
            <p>{item.name}</p>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="navigation-container">
        <button className="nav-button" onClick={prevTestimonial} disabled={currentIndex === 0}>
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
          disabled={currentIndex + 3 >= testimonials.length}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;