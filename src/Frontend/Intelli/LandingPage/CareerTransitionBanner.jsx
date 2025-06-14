import "./CSS/CareerTransitionBanner.css"; // Import the CSS file

const CareerTransitionBanner = () => {
  return (
    <div className="career-banner-container">
      <div className="career-banner">
        <div className="overlay"></div> {/* Gradient Overlay */}
        <div className="banner-content">
          <h2>
            Explore Our <span className="highlight">Free Courses</span>
          </h2>
          <p>
            Upskill Your Tech Skills From Intellipaat Academy’s Free Courses
          </p>
          <button className="cta-button">Intellipaat Academy</button>
        </div>
      </div>
    </div>
  );
};

export default CareerTransitionBanner;