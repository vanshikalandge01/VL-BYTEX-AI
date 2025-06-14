import React from "react";
import "../CSS/Alumni.css";

const alumniData = [
  { name: "Akshhat Srivastava", company: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", image: "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/670f68ffc99a0d5b01f7f546_Highcompressed_1454580968.avif" },
  { name: "Bharat Anand Sarvi", company: "Zepto", logo: "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/6708fecdb539ef60c5f12b17_zepto.avif", image: "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/670f68ffc76c40e6156b6259_Highcompressed_1081229570.avif" },
  { name: "Ravneet Singh", company: "IndiGo", logo: "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/6708fecd4ccb294a1df78444_indigo.avif", image: "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/6708fec0b38b4a1730e1b1ea_Ravneet%20Singh%20-%20Indigo.avif" },
  { name: "Gowtham M", company: "Tiger Analytics", logo: "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/6708fecdb7068db795aa41b4_tiger%20analytivs.avif", image: "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/6708fec064961fd37e8cd1d3_Gowtham%20M%20-%20Tiger%20Analytics.avif" },
  { name: "Shubham Rane", company: "Cure.fit", logo: "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/6708fecdd0021b031213b3a1_cure%20fit.avif", image: "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/6708fec0c5f74befbcaed60e_Shubham%20Rane%20-%20Cure.fit.avif" },
  { name: "Suruchi Singh", company: "Publicis Sapient", logo: "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/6708fecdb6b92fa3b12818ec_publicis%20sapient.avif", image: "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/6708fec0b468f36c440cd5f3_Suruchi%20Singh%20-%20Publicis%20Sapient.avif" },
];

const Alumni = () => {
  return (
    <div className="alumni-section-container">
      <h2 className="alumni-section-title">Meet Our Alumni</h2>
      <div className="alumni-section-grid">
        {alumniData.map((alumni, index) => (
          <div key={index} className="alumni-section-card">
            <div className="alumni-section-card-top">
              <img src={alumni.image} alt={alumni.name} className="alumni-section-image" />
            </div>
            <div className="alumni-section-card-bottom">
              <h3 className="alumni-section-name">{alumni.name}</h3>
              <img src={alumni.logo} alt={alumni.company} className="alumni-section-logo" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alumni;
