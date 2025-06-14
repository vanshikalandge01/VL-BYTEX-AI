import "./CSS/HeroSection.css";
import { Link, useNavigate } from "react-router-dom";
function HeroSection() {
  const navigate = useNavigate();
  const handleCourses = () => {
    navigate("courses");
  };
  return (
    <section className="main-hero">
      <div className="hero-content">
        <h1>
          Accelerate Your Career Growth & <br />
          <span className="hero-highlight">Upskill Yourself</span>
          <hr/>
        </h1>
        <p className="subheading">
          World-Class Certification & Degree Programs
        </p>
        {/* <Link to="/Frontend/HirePage.jsx"><button className="hero-button">Explore Courses</button></Link> */}
       <button className="hero-button" onClick={handleCourses}>Explore Courses</button>
      </div>
      <div className="hero-image"></div>
    </section>
  );
}

export default HeroSection;