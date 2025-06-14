import { FaDownload } from "react-icons/fa";
import "./CSS/TransitionSection.css";

const TransitionSection = () => {
  return (
    <div className="career-transition-container">
      <div className="overlay"></div>
      <div className="text-content">
        <p>
          <span className="highlight">75%</span> of our learners achieve career transition <br />within <b>6 months</b> of the program
        </p>
        <button className="download-button">
          <FaDownload className="icon-Download" /> Download Transition Handbook
        </button>
      </div>
    </div>
  );
};

export default TransitionSection;