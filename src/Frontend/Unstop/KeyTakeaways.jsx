import React from "react";
import "./CSS/KeyTakeaways.css";
import {
  FaCrown,
  FaHeart,
  FaShareAlt,
  FaBook,
  FaClipboardCheck,
  FaCertificate,
  FaUserTie,
  FaClock,
  FaHandsHelping,
  FaBookReader,
  FaQuestionCircle,
  FaLightbulb,
} from "react-icons/fa";

const KeyTakeaways = () => {
  const takeaways = [
    { icon: <FaBook />, text: "Learn from Industry Leaders", link: "#" },
    {
      icon: <FaClipboardCheck />,
      text: "Industry aligned Projects",
      link: "#",
    },
    { icon: <FaBookReader />, text: "Featured listing of Resume", link: "#" },
    { icon: <FaCertificate />, text: "Certification", link: "#" },
    { icon: <FaUserTie />, text: "Personalised Career Coaching", link: "#" },
    {
      icon: <FaClock />,
      text: "Duration of the Course - 30 hours | 6 weeks",
      link: "#",
    },
    {
      icon: <FaHandsHelping />,
      text: "Practical Hands-On Exercises and Assignments",
      link: "#",
    },
    { icon: <FaBookReader />, text: "Case Study-Based Learning", link: "#" },
    { icon: <FaQuestionCircle />, text: "Doubt-Clearing Support", link: "#" },
    { icon: <FaLightbulb />, text: "Unique Industry-Led Content", link: "#" },
    {
      icon: <FaCertificate />,
      text: "Industry Recognised Certificate",
      link: "#",
    },
  ];

  return (
    <div className="key-takeaways-container">
      {/* Top Section */}
      <div className="key-top-section">
        <div className="key-icons">
          <a href="#" className="heart-icon">
            <FaHeart />
          </a>
          <a href="#" className="share-icon">
            <FaShareAlt />
          </a>
        </div>
        <a href="#" className="buy-button">
          <FaCrown className="crown-icon" /> Buy Now
        </a>
      </div>

      {/* Horizontal Line Below Go Pro Button */}
      <hr className="separator" />

      {/* Key Takeaways Title */}
      <h3 className="takeaways-title">Key Takeaways</h3>

      {/* Key Takeaways List */}
      <ul className="takeaways-list">
        {takeaways.map((item, index) => (
          <li key={index} className="takeaway-item">
            <a href={item.link} className="takeaway-link">
              <span className="key-icon">{item.icon}</span>
              <span className="key-text">{item.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KeyTakeaways;
