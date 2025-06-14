import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import Logo from "../common/logocom.png";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  const [dropdown, setDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    setDropdown(null);
  };

  const handleLoginClick = () => {
    navigate("login");
  };
  const handleDemoClick = () => {
    navigate("demo");
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="logo">
          <img src={Logo} alt="Paradox Logo" className="logo-image" href="#" />
        </div>

        <ul className="nav-links">
          <li
            onMouseEnter={() => handleMouseEnter("Product")}
            onMouseLeave={handleMouseLeave}
            className="dropdown-container"
          >
            Product{" "}
            <MdKeyboardArrowDown
              className={`dropdown-icon ${
                dropdown === "Product" ? "rotate" : ""
              }`}
            />
            {dropdown === "Product" && (
              <div className="dropdown-menu product-section">
                <div className="categoryy">
                  <h4>Solutions</h4>
                  <a href="#">Conversational Career Sites</a>
                  <p>24/7, dynamic experiences for every candidate.</p>
                  <a href="#">Conversational CRM</a>
                  <p>Find, pipeline, and organize qualified talent.</p>
                  <a href="#">Conversational ATS</a>
                  <p>
                    Mobile-first automation for frontline workers and managers.
                  </p>
                </div>

                <div className="categoryy">
                  <h4>Products</h4>
                  <a href="#">Conversational CX</a>
                  <p>Two-way texting and chat to engage faster at scale.</p>
                  <a href="#">Conversational Apply</a>
                  <p>Automated screening and text/chat to apply.</p>
                  <a href="#">Conversational Events</a>
                  <p>
                    Automated event management and comms to do more with less.
                  </p>
                </div>

                <div className="how-we-help">
                  <h4>How We Help</h4>
                  <a href="#">Text Recruiting</a>
                  <a href="#">Recorded Video Interviews</a>
                  <a href="#">Onboarding</a>
                </div>
              </div>
            )}
          </li>

          <li
            onMouseEnter={() => handleMouseEnter("Use Case")}
            onMouseLeave={handleMouseLeave}
            className="dropdown-container"
          >
            Use Case{" "}
            <MdKeyboardArrowDown
              className={`dropdown-icon ${
                dropdown === "Use Case" ? "rotate" : ""
              }`}
            />
            {dropdown === "Use Case" && (
              <div className="dropdown-menu usecase-dropdown">
                <div className="dropdown-column">
                  <h4>By Industry</h4>
                  <p>Retail</p>
                  <p>Restaurant</p>
                  <p>Healthcare</p>
                  <p>Logistics/Trucking</p>
                  <p>Manufacturing</p>
                  <p>Financial Services</p>
                  <p>Hospitality</p>
                </div>
                <div className="dropdown-column">
                  <h4>By Experience</h4>
                  <p>Candidates</p>
                  <p>Recruiters</p>
                  <p>Hiring Managers</p>
                  <p>Franchise Hiring</p>
                </div>
                <div className="dropdown-column news-section">
                  <h4>What's New</h4>
                  <div className="news-card">
                    <img
                      src="https://cdn.prod.website-files.com/611dc730a416cb30f7934ee0/67a3c942f78ecec6385eb02c_Press_Thumbnail_Image_CNBC.png"
                      alt="CNBC Logo"
                      className="news-logo"
                    />
                    <p>
                      Chipotle CEO talks AI hiring transformation on CNBC's Mad
                      Money.
                    </p>
                    <a href="#">Read the press release →</a>
                  </div>
                </div>
              </div>
            )}
          </li>

          <li
            onMouseEnter={() => handleMouseEnter("Partners")}
            onMouseLeave={handleMouseLeave}
            className="dropdown-container"
          >
            Partners{" "}
            <MdKeyboardArrowDown
              className={`dropdown-icon ${
                dropdown === "Partners" ? "rotate" : ""
              }`}
            />
            {dropdown === "Partners" && (
              <div className="dropdown-menus partners-dropdown">
                <div className="dropdown-column">
                  <h4>Partners</h4>
                  <div className="dropdown-item">
                    <h5>Paradox for Workday</h5>
                    <p>
                      Candidate communication directly through SMS on Workday.
                    </p>
                  </div>
                  <div className="dropdown-item">
                    <h5>Paradox for SAP SuccessFactors</h5>
                    <p>Automate manual hiring tasks with SAP SuccessFactors.</p>
                  </div>
                  <div className="dropdown-item">
                    <h5>Paradox for Indeed</h5>
                    <p>Convert more qualified candidates with Indeed Apply.</p>
                  </div>
                  <div className="dropdown-item">
                    <h5>All Partners & Integrations</h5>
                    <p>See all current Paradox partners and integrations.</p>
                  </div>
                </div>
              </div>
            )}
          </li>
          <li
            onMouseEnter={() => handleMouseEnter("Our Clients")}
            onMouseLeave={handleMouseLeave}
            className="dropdown-container"
          >
            Our Clients{" "}
            <MdKeyboardArrowDown
              className={`dropdown-icon ${
                dropdown === "Our Clients" ? "rotate" : ""
              }`}
            />
            {dropdown === "Our Clients" && (
              <div className="dropdown-menu clients-section">
                <div className="header-with-logo">
                  <h2>Featured Client Stories</h2>
                </div>
                <div className="clients-grid">
                  <div className="category">
                    <h4>Restaurant</h4>
                    <div className="client-item">
                      <img
                        src="https://cdn.prod.website-files.com/611dc730a416cbf8f5934ebc/66020e062487658687e9b130_mcdonalds-list-logo.png"
                        alt="McDonald's Logo"
                        className="client-logo-img"
                      />
                      <p>McDonald’s</p>
                    </div>
                  </div>

                  <div className="category">
                    <h4>Retail</h4>
                    <div className="client-item">
                      <img
                        src="https://cdn.prod.website-files.com/611dc730a416cbf8f5934ebc/66020e073aec28be45d687d1_lids-list-logo.png"
                        alt="Lids Logo"
                        className="client-logo-img"
                      />
                      <p>Lids</p>
                    </div>
                  </div>

                  <div className="category">
                    <h4>Healthcare</h4>
                    <div className="client-item">
                      <img
                        src="https://cdn.prod.website-files.com/611dc730a416cbf8f5934ebc/66020e06a2e93e206dd1e22f_pfizer-list-logo.png"
                        alt="Pfizer Logo"
                        className="client-logo-img"
                      />
                      <p>Pfizer</p>
                    </div>
                  </div>

                  <div className="category">
                    <h4>Manufacturing</h4>
                    <div className="client-item">
                      <img
                        src="https://cdn.prod.website-files.com/611dc730a416cbf8f5934ebc/66020e0744da24aabedb9de8_gm-list-logo.png"
                        alt="General Motors Logo"
                        className="client-logo-img"
                      />
                      <p>General Motors</p>
                    </div>
                    <div className="client-item">
                      <img
                        src="https://cdn.prod.website-files.com/611dc730a416cbf8f5934ebc/66020e065d90ccaee4728ba2_nestle-list-logo.png"
                        alt="Nestlé Logo"
                        className="client-logo-img"
                      />
                      <p>Nestlé</p>
                    </div>
                  </div>

                  <div className="category">
                    <h4>Services</h4>
                    <div className="client-item">
                      <img
                        src="https://cdn.prod.website-files.com/611dc730a416cbf8f5934ebc/66020e07b280f05b2e48f81d_compass-group-list-logo.webp"
                        alt="Compass Group Logo"
                        className="client-logo-img"
                      />
                      <p>Compass Group</p>
                    </div>
                    <div className="client-item">
                      <img
                        src="https://cdn.prod.website-files.com/611dc730a416cbf8f5934ebc/66020e06e448465f858f5bd5_sodexo-list-logo.png"
                        alt="Sodexo Logo"
                        className="client-logo-img"
                      />
                      <p>Sodexo</p>
                    </div>
                  </div>

                  <div className="category">
                    <h4>Financial</h4>
                    <div className="client-item">
                      <img
                        src="https://cdn.prod.website-files.com/611dc730a416cbf8f5934ebc/66020e065a4d19701acd41d1_dfcu-financial-list-logo.png"
                        alt="DFCU Financial Logo"
                        className="client-logo-img"
                      />
                      <p>DFCU Financial</p>
                    </div>
                    <div className="client-item">
                      <img
                        src="https://cdn.prod.website-files.com/611dc730a416cbf8f5934ebc/66020e071f626c596fb55f2c_uob-list-logo.png"
                        alt="UOB Logo"
                        className="client-logo-img"
                      />
                      <p>UOB</p>
                    </div>
                  </div>
                </div>
                <p className="browse-clients">
                  Browse the list of the 1,000+ clients we serve globally →
                </p>
              </div>
            )}
          </li>
          <li
            onMouseEnter={() => handleMouseEnter("Why Paradox")}
            onMouseLeave={handleMouseLeave}
            className="dropdown-container"
          >
            Why BytexAI{" "}
            <MdKeyboardArrowDown
              className={`dropdown-icon ${
                dropdown === "Why Paradox" ? "rotate" : ""
              }`}
            />
            {dropdown === "Why Paradox" && (
              <div className="dropdown-menu why-paradox-dropdown">
                <div className="why-paradox-content">
                  <div className="why-paradox-column">
                    <h4 className="why-paradox-title">Why BytexAI</h4>
                    <p className="our-story-title">Our Story</p>
                    <p className="our-story-description">
                      Creating the future since day one.
                    </p>
                  </div>
                  <div className="client-testimonial">
                    <h4>From Our Clients</h4>
                    <p className="testimonial-text">
                      “Speed and experience are critical. Paradox checks both
                      boxes — providing a fast, frictionless hiring experience
                      that works.”
                    </p>
                    <p className="client-name">Regis Corporation</p>
                    <a href="#" className="case-study-link">
                      Read the case study →
                    </a>
                  </div>
                </div>
              </div>
            )}
          </li>
          <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="dropdown-container"
          >
            Insights{" "}
            <MdKeyboardArrowDown
              className={`dropdown-icon ${dropdown ? "rotate" : ""}`}
            />
            {dropdown && (
              <div className="dropdown-menu insights-dropdown">
                <div className="dropdown-column">
                  <h4 className="learn-heading">Learn</h4>
                  <p>
                    <strong>Blog</strong>
                    <br /> Up to date insights on conversational hiring.
                  </p>
                  <p>
                    <strong>Client Stories</strong>
                    <br /> Innovative organizations with innovation solutions.
                  </p>
                  <p>
                    <strong>Resource Center</strong>
                    <br /> Visionary content for every industry.
                  </p>
                  <p>
                    <strong>FAQ</strong>
                    <br /> What’s on your mind?
                  </p>
                </div>
                <div className="dropdown-column">
                  <h4 className="connect-heading">Connect</h4>
                  <p>
                    <strong>Upcoming Events</strong>
                    <br /> Meet with Paradox all around the world.
                  </p>
                  <p>
                    <strong>Contact Us</strong>
                    <br /> Get in touch with us.
                  </p>
                  <p>
                    <strong>Help Center</strong>
                    <br /> Clients and users can get help here.
                  </p>
                </div>
              </div>
            )}
          </li>
        </ul>

        <div className="actions">
          <FaSearch className="search-icon" />
          <button onClick={handleDemoClick} className="Nav-Demo-Button">
            Demo
          </button>
          <button onClick={handleLoginClick} className="Nav-login">
            Login
          </button>
        </div>
      </nav>
    </div>
  );
}
