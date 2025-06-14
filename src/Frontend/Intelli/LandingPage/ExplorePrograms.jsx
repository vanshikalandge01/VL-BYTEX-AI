import React from "react";
import "./CSS/ExplorePrograms.css";
import { useNavigate } from "react-router-dom";

const programs = [
  {
    title: "Post Graduate Diploma in Management (Online)",
    duration: "24 Months · Online",
    image:
      "https://images.shiksha.com/mediadata/images/articles/1667958816phppdd5y9.jpeg",
    description: "ONLINE MBA EQUIVALENT",
    link: "https://your-program-link.com",
  },
  {
    title: "Executive Post Graduate Certification in Data Science",
    duration: "24 Months · Online",
    image:
      "https://intellipaat.com/course-image/2024/08/iHUB-IIT-Roorkee-Main-Image.png",
    description: "ONLINE MBA EQUIVALENT",
    link: "https://your-program-link.com",
  },
  {
    title: "Executive Post Graduate in Cloud Computing and DevOps",

    duration: "24 Months · Online",
    image: "https://intellipaat.com/course-image/2023/05/IIM-Ranchi-1.png",
    description: "ONLINE MBA EQUIVALENT",
    link: "https://your-program-link.com",
  },
];

const Sidebar = () => {
  const categories = [
    "Gen AI",
    "Marketing",
    "Management",
    "Data",
    "Design",
    "Internships",
    "Web Development",
    "Digital Marketing",
    "Application Development",
    "Entrepreneurship",
  ];
  return (
    <div className="sidebar-EP">
      <p className="section-overline">Find your ideal </p>
      <h2 className="sidebar-title">Programs from world’s best universities</h2>
      <ul className="sidebar-list">
        {categories.map((category, index) => (
          <li key={index} className="sidebar-item">
            {category} <span className="arrow">&gt;</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ProgramCard = ({ program }) => {
  const navigate = useNavigate();
  const handleProgram = () => {
    navigate("explore-program");
  };

  return (
    <div className="program-card">
      <img src={program.image} alt={program.title} className="program-image" />
      <div className="program-content">
        <h3 className="program-title">{program.title}</h3>
        <p className="program-duration">{program.duration}</p>
        <div className="program-box">{program.description}</div>
        <br />
        <button onClick={handleProgram} className="view-button">
          View Program
        </button>
      </div>
    </div>
  );
};

const Programs = () => {
  return (
    <div className="programs-section">
      <div className="main-heading">
        <h1>Explore The Programs</h1>
        <hr />
      </div>
      <div className="app-container">
        <Sidebar />
        <div className="programs-grid">
          {programs.map((program, index) => (
            <ProgramCard key={index} program={program} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
