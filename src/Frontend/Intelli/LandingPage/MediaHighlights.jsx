import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
import "../LandingPage/CSS/MediaHighlights.css";

const mediaItems = [
  {
    logo: "https://intellipaat.com/course-image/2021/10/The-economic-times.jpg",
    title: "Digital marketing ruling the current upskilling market: Survey",
  },
  {
    logo: "https://intellipaat.com/course-image/2021/10/the-indian-express.jpg",
    title:
      "IIT-Roorkee to offer advance certificate program in cloud computing and...",
  },
  {
    logo: "https://intellipaat.com/course-image/2021/10/financial-express.jpg",
    title:
      "Upward Trajectory: 200% rise in enrolment in upskilling and reskilling...",
  },
  {
    logo: "https://intellipaat.com/course-image/2021/10/ANI.jpg",
    title:
      "Intellipaat partners with IIT Guwahati’s E&ICT Academy to boost professional...",
  },
  {
    logo: "https://intellipaat.com/course-image/2021/10/the-tribune.jpg",
    title: "5 courses that will help you upskill",
  },
];

const MediaHighlights = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex + 4 < mediaItems.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const visibleItems = mediaItems.slice(currentIndex, currentIndex + 4);

  return (
    <div className="media-container">
      <h2 className="media-title">Media Highlights</h2>
      <div className="media-wrapper">
        {/* Left Arrow - Only visible when there are items to the left */}
        {currentIndex > 0 && (
          <button className="media-arrow media-arrow-left" onClick={handlePrev}>
            &lt;
          </button>
        )}

        <div className="media-row">
          {visibleItems.map((item, index) => (
            <div key={index} className="media-card">
              <div className="logo-container">
                <img src={item.logo} alt="Media Logo" className="media-logo" />
              </div>
              <p className="media-text">{item.title}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow - Only visible when there are items to the right */}
        {currentIndex + 4 < mediaItems.length && (
          <button
            className="media-arrow media-arrow-right"
            onClick={handleNext}
          >
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default MediaHighlights;
