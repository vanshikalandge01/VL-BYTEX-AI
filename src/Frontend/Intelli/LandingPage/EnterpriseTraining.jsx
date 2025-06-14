import {
  FaLaptopCode,
  FaUsers,
  FaChartBar,
  FaUserGraduate,
} from "react-icons/fa";
import "../LandingPage/CSS/EnterpriseTraining.css";
import SupportingEnterprises from "../LandingPage/Images/SupportingEnterprises.png";

const EnterpriseTraining = () => {
  return (
    <div>
      <h2>Enterprise Training Solutions</h2>
      <div className="enterprise-training">
        <div className="sidebar">
          <h3>Curriculum tailored to your <br /> organizations need</h3>
          <ul>
            <li>
              <FaLaptopCode className="icon" /> Customized Learning Solutions
            </li>
            <li>
              <FaUsers className="icon" /> Learn from Subject Matter Experts
            </li>
            <li>
              <FaChartBar className="icon" /> Enterprise Reporting
            </li>
            <li>
              <FaUserGraduate className="icon" /> Job-Ready employees
              post-training
            </li>
          </ul>
          <button className="demo-button-ET">Request A Free Demo</button>
        </div>
        <div className="main-content">
          <h4>Supporting Enterprises Around the Globe</h4>
          <div className="logo-grid">
            <img src={SupportingEnterprises} alt="Societe Generale" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseTraining;
