import React from "react";
import "./DemoRequest.css";

const DemoRequest = () => {
  return (
    <div className="para-container">
      {/* Left Section - Form */}
      <div className="para-form-section">
        <h3>Request a demo</h3>
        <form>
          <input type="email" placeholder="Business Email*" required />
          <input type="tel" placeholder="Phone Number" />
          <input type="text" placeholder="First Name*" required />
          <input type="text" placeholder="Last Name*" required />
          <input type="text" placeholder="Job Title*" required />
          <input type="text" placeholder="Company Name*" required />
          <input type="number" placeholder="Estimated Number of Employees*" required />
          <select required>
            <option value="">Country*</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
          <p className="para-privacy-text">
            By submitting this form, you agree to the use of your personal data as set out in Paradox’s <a href="#">Privacy Policy</a>.
          </p>
          <button type="submit" className="para-button">Submit</button>
        </form>
        <p className="para-response-time">We’ll reach out to you within one business day to schedule your demo.</p>
      </div>

      {/* Right Section - Information */}
      <div className="para-info-section">
        <h2>Your path to faster, simpler hiring is about to begin...</h2>
        <ul>
        <h3>Learn how you can achieve:</h3>
          <li>✅ <strong>82%</strong> decrease in time to hire</li>
          <li>🔽 <strong>93%</strong> candidate conversion on conversations</li>
          <li>💰 <strong>50%</strong> decrease in job advertising spend</li>
        </ul>
        <h3>We integrate with the systems you use today:</h3>
        <div className="para-logos">
          <img src="https://cdn.prod.website-files.com/611dc730a416cbf8f5934ebc/64b5965c51c69ed5ca992f5c_workday-logo.svg" alt="Workday" />
          <img src="https://cdn.prod.website-files.com/611dc730a416cbf8f5934ebc/64b59cc0639217119ca32295_sap-successfactors.svg" alt="SAP SuccessFactors" />
          <img src="https://cdn.prod.website-files.com/611dc730a416cbf8f5934ebc/612031f8c3735683bfbddb25_paradox-text-apply-logo-adp.svg" alt="ADP" />
          <img src="https://cdn.prod.website-files.com/611dc730a416cbf8f5934ebc/6123cb5b2159da4c059dd71e_paradox-olivia-professional-logo-ukg.svg" alt="UKG" />
        </div>
      </div>
    </div>
  );
};

export default DemoRequest;
