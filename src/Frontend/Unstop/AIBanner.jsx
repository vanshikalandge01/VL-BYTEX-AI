import { FaStar, FaClock } from "react-icons/fa";
import "./CSS/AIBanner.css";
import Video from "./VideoAI.mp4";

const AIBanner = () => {
  return (
    <div className="AI-banner-container">
      <div className="AI-banner-content">
        <div className="AI-banner-text">
          <p className="AI-breadcrumb">Courses &gt; AI/ML</p>
          <h2 className="AI-subheading">Software Tools</h2>
          <h1 className="AI-heading">AI/ML</h1>
          <div className="AI-banner-info">
            <FaStar className="AI-star-icon" />
            <span>4.6</span>
            <FaClock />
            <span>17h 14m total length</span>
            <span className="AI-learners">👥 ~66,350+ Enrolled Learners</span>
          </div>
        </div>
        <div className="AI-banner-video">
          <video src={Video} autoPlay loop muted className="AI-video-element"></video>
          <button className="AI-play-button">
            {/* <span className="AI-play-icon">▶</span> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIBanner;