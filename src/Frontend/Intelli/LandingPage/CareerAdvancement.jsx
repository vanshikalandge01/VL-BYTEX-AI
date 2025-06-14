import React, { useState } from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import "../LandingPage/CSS/CareerAdvancement.css";
import Photo1 from "../LandingPage/Images/Photo Career/Photo1.png";
import Photo2 from "../LandingPage/Images/Photo Career/Photo2.png";
import Photo3 from "../LandingPage/Images/Photo Career/Photo3.png";
import Photo4 from "../LandingPage/Images/Photo Career/Photo4.png";

const CareerAdvancement = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const cards = [
    {
      id: 0,
      title: "3,00,000+ Careers Advanced",
      description:
        "Learn how Intellipaat Learners broke the mould and made groundbreaking career advancements!",
      button: "Click to know",
      // background:"linear-gradient(to right, #141e30, #243b55)",
      background:"linear-gradient(135deg, #1E3A8A, #3B82F6)",
    },
    {
      id: 1,
      title: "Got 2 job offers with 400% salary hike",
      description:
        "Learning with Intellipaat provided me the technical confidence to clear the Associate Cloud Engineer Certificate, which helped me land 2 job offers with a 400% hike within just six months of the training.",
      name: "Nikhil YN",
      designation: "Sr. Cloud Engineer at Ciber Global",
      img: Photo1,
      background: "linear-gradient(135deg, #B45309, #F97316)",
    },
    {
      id: 2,
      title: "Non-tech to an IT Associate",
      description:
        "I needed the right skill set to get a job in technical role. Intellipaat helped me achieve that and even arranged interviews with a reputed organization. I received a 60% salary hike.",
      name: "Herin Wilson",
      designation: "IT Associate at XYZ Corp",
      img: Photo2,
      background: "linear-gradient(135deg, #065F46, #10B981)",
    },
    {
      id: 3,
      title: "Fresher Landed in Dream Job",
      description:
        "I started out as a Developer, but was struggling as I had no advanced knowledge. I was glad that Intellipaat helped me through the learning process to gain a stronger foothold.",
      name: "Ayush Shah",
      designation: "Software Engineer at ABC Tech",
      img: Photo3,
      background: "linear-gradient(135deg, #4C1D95, #8B5CF6)",
    },
    {
      id: 4,
      title: "Becoming Financially Independent",
      description:
        "I was struggling to stay afloat financially as I was laid off during the pandemic. Upskilling with Intellipaat added worth to my career and I became financially independent.",
      name: "Somika Simlote",
      designation: "Data Analyst at PQR Analytics",
      img: Photo4,
      background: "linear-gradient(135deg, #1F2937, #4B5563)",
    },
  ];

  return (
    <div className="career-container">
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={`career-card ${activeIndex === index ? "active" : ""}`}
          style={{ background: card.background }}
          onMouseEnter={() => handleMouseEnter(index)}
        >
          <p className="career-title">{card.title}</p>
          {card.id === 0 ? (
            <>
              <p className="career-description">{card.description}</p>
              {activeIndex === index && (
                <div className="button-container">
                  <button className="career-btn">{card.button}</button>
                </div>
              )}
            </>
          ) : (
            <>
              {activeIndex === index && (
                <>
                  <p className="career-description">{card.description}</p>
                </>
              )}
              {card.img && (
                <div className="career-profile">
                  <img src={card.img} alt={card.name} className="career-img" />
                  <div className="career-info">
                    <p className="career-name">{card.name}</p>
                    {activeIndex === index && (
                      <p className="career-designation">{card.designation}</p>
                    )}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default CareerAdvancement;