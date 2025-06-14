import React, { useState } from "react";
import Select from "react-select";
import "../CSS/ContactForm.css"; // Import the CSS file

const ContactFormSection = () => {
  const [selectedDataRoles, setSelectedDataRoles] = useState([]);
  const [selectedSoftwareRoles, setSelectedSoftwareRoles] = useState([]);
  const [showOtherInput, setShowOtherInput] = useState(false);

  // Dropdown options
  const dataRoles = [
    { value: "gen-ai", label: "Gen AI" },
    { value: "marketing", label: "Marketing" },
    { value: "management", label: "Management" },
    { value: "data", label: "Data" },
    { value: "design", label: "Design" },
    { value: "internships", label: "Internships" },
    { value: "web-development", label: "Web Development" },
    { value: "digital-marketing", label: "Digital Marketing" },
    { value: "application-development", label: "Application Development" },
    { value: "entrepreneurship", label: "Entrepreneurship" },
  ];

  const softwareRoles = [
    { value: "full-stack", label: "Full Stack Developer" },
    { value: "frontend", label: "Frontend Developer" },
    { value: "others", label: "Others" },
  ];

  return (
    <div className="contact-form-container">
      <h2 className="contact-form-title">CONTACT US</h2>
      <h1 className="contact-form-heading">Connect with our Top Tech Talent</h1>
      <div className="contact-form-nav">
        <span>Data Scientists</span>
        <span>Data Analyst</span>
        <span>Full Stack Developer</span>
        <span>Software Engineer</span>
      </div>
      <div className="contact-form-content">
        <h3 className="contact-form-section-title">YOUR DETAILS</h3>
        <form>
          <div className="contact-form-input-group">
            <label>
              Name <span className="star-label">*</span>
            </label>
            <input type="text" placeholder="Enter your name" required />
          </div>

          <div className="contact-form-input-group">
            <label>
              Company Name <span className="star-label">*</span>
            </label>
            <input type="text" placeholder="Enter your company name" required />
          </div>

          <div className="contact-form-input-group">
            <label>
              Phone Number <span className="star-label">*</span>
            </label>
            <div className="contact-form-phone-input">
              <span className="contact-form-country-code">+91</span>
              <input
                type="tel"
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>

          <div className="contact-form-input-group">
            <label>
              Email ID <span className="star-label">*</span>
            </label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="contact-form-requirements">
            <h3 className="contact-form-section-subtitle">REQUIREMENTS</h3>

            {/* Data Roles Dropdown */}
            <label className="contact-form-dropdown-label">Data Roles</label>
            <Select
              options={dataRoles}
              isMulti
              value={selectedDataRoles}
              onChange={setSelectedDataRoles}
              placeholder="Select Data Roles..."
              styles={customStyles}
            />

            {/* Software Roles Dropdown */}
            <label className="contact-form-dropdown-label">
              Software Development Roles
            </label>
            <Select
              options={softwareRoles}
              isMulti
              value={selectedSoftwareRoles}
              onChange={setSelectedSoftwareRoles}
              placeholder="Select Software Roles..."
              styles={customStyles}
            />

            {/* Show input field when "Others" is selected */}
            {selectedSoftwareRoles.some((role) => role.value === "others") && (
              <input
                type="text"
                placeholder="Please specify your requirement..."
                className="contact-form-other-input"
                onChange={(e) => setShowOtherInput(e.target.value)}
              />
            )}
          </div>

          <button type="submit" className="contact-form-submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

// Custom Styles for Select
const customStyles = {
  control: (provided) => ({
    ...provided,
    borderRadius: "5px",
    border: "1px solid #00bf63",
    boxShadow: "none",
    "&:hover": { borderColor: "#00bf63" },
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "#00bf63",
    color: "white",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: "white",
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: "white",
    "&:hover": { backgroundColor: "#008c47", color: "white" },
  }),
};

export default ContactFormSection;
