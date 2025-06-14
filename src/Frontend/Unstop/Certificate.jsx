import React from "react";
import "./CSS/Certificate.css";

const Certificate = () => {
  return (
    <div className="course-certificate-container">
      <img
        src="https://d8it4huxumps7.cloudfront.net/uploads/images/67a47b31e3d42_blank_certificate.png?d=752x500"  // Replace with your actual image link
        alt="Sample Certificate"
        className="course-certificate-image"
      />
      <div className="course-certificate-content">
        <h2>Certification of Completion</h2>
        <p>
          Upgrade your skills and stay current with the industry by <br /> completing these
          professional courses, which also provide <br /> certification upon completion.
        </p>
      </div>
    </div>
  );
};

export default Certificate;
