import React from "react";
import "../CSS//HiringPartners.css";

const companyLogos = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/66b2df0b02c2d809de1d3fe9_Frame-1.avif",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/66b2df0a819948e45180f9d6_Frame-3.avif",
  "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/66b2df0bf1e0ae180db48fa1_Frame-4.avif",
  "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/66b2df0bf0f503224b96376d_Frame-5.avif",
  "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/66b2df0be84f15e44d9e75bf_Frame-6.avif",
  "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/66b2e14856723c31a3f37d21_paytm.svg",
  "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/66b2e1489a0557fcd862d561_uber.svg",
  "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/66b2e148b1ccd037452e61f6_salesforce.svg",
  "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/66b2e1d802c2d809de1ec43c_flipkart.avif",
  "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/66b2e1d86e362dd649c2c911_Frame.avif",
  "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/66b2e1d89a0557fcd86344f0_Frame-1.avif",
  "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/66b2e1d9df9ed25fc882efeb_Frame-3.avif",
  "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/66b2e1d85e3feca9b3b0f06e_Frame-5.avif",
  "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/66b2e1da02c2d809de1ec50b_Frame-4.avif",
  "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
  "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/66b2e1da6d477dfc4cc59094_Frame-8.avif",
  "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/66b2e1da323e091750829be2_Frame-7.avif",
];

const HiringPartners = () => {
  return (
    <div className="hiring-partners-section">
      <button className="hiring-partners-button">Start Hiring Now</button>
      <p className="hiring-partners-trusted-text">
        Trusted by more than 100+ hiring partners
      </p>
      <div className="hiring-partners-logos-wrapper">
        <div className="hiring-partners-logos-container">
          {companyLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Company Logo"
              className="hiring-partners-logo"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HiringPartners;
