import React from 'react';
import './CSS/LearnerBenefits.css'; // Assuming you have a CSS file for styling

const benefits = [
  {
    title: "World Class Pedagogy",
    image: "https://intellipaat.com/course-image/2021/10/learner-pic-1.png", // Replace with actual image URL
    points: [
      "Learn from the World's Best Faculty & Industry Experts",
      "Learn with fun Hands-on Exercises & Assignments",
      "Participate in Hackathons & Group Activities",
    ],
    icons: [
      { img: "src/LandingPage/Images/LearnerBenefits/star.png", label: "4.8/5 Rating" },
      { img: "src/LandingPage/Images/LearnerBenefits/gamified.png", label: "Gamified Learning" },
    ],
  },
  {
    title: "Personalized Guidance with 24*7 Support",
    image: "https://intellipaat.com/course-image/2021/10/learner-pic-2.png", // Replace with actual image URL
    points: [
      "Dedicated Learning Managers",
      "24*7 learning Support",
      "Network with Peers & Interact with Industry Leaders",
    ],
    icons: [
      { img: "src/LandingPage/Images/LearnerBenefits/Support.png", label: "24 x 7 Support" },
      { img: "src/LandingPage/Images/LearnerBenefits/mentorship.png", label: "1:1 Mentorship" },
    ],
  },
  {
    title: "Career Assistance",
    image: "https://intellipaat.com/course-image/2021/10/learner-pic-3.png", // Replace with actual image URL
    points: [
      "Resume Building & Mock Interview Prep",
      "Exclusive access to Intellipaat Job Portal",
      "400+ Hiring Partners",
    ],
    icons: [
      { img: "src/LandingPage/Images/LearnerBenefits/careergrowth.png", label: "85,000 Career Transition" },
      { img: "src/LandingPage/Images/LearnerBenefits/hiringpartner.png", label: "400+ Hiring Partners" },
    ],
  },
];

const LearnerBenefits = () => {
  return (
    <div className="learner-benefits">
      <h2>Learner Benefits</h2>
      <div className="benefit-list">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-container">
            <img src={benefit.image} alt={benefit.title} className="benefit-image" />
            <div className="benefit-details">
              <h3 className="benefit-title">{benefit.title}</h3>
              <ul className="benefit-points">
                {benefit.points.map((point, idx) => (
                  <li key={idx}>
                    <span>●</span> {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="benefit-icons">
              {benefit.icons.map((item, idx) => (
                <div key={idx} className="benefit-icon-box">
                  <img src={item.img} alt={item.label} />
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnerBenefits;