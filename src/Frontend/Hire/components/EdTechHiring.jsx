import "../CSS/EdTechHiring.css";
import A from "../assets/A.jpg";
import B from "../assets/B.jpg";
import C from "../assets/C.jpg";
import D from "../assets/D.jpg";

const EdTechFeatureCard = ({ image, title, description, highlight, customClass }) => {
  return (
    <div className={`edtech-feature-card ${customClass}`}>
      <img src={image} alt={title} className="edtech-card-image" />
      <h3 className="edtech-title">{title}</h3>
      <p className="edtech-description">
        {description.split(highlight).map((part, index) => (
          <span key={index}>
            {part}
            {index !== description.split(highlight).length - 1 && (
              <span className="edtech-highlight">{highlight}</span>
            )}
          </span>
        ))}
      </p>
    </div>
  );
};

export default function EdTechHiringSection() {
  return (
    <div className="edtech-hiring-section">
      <div className="edtech-grid-container">
        <div className="edtech-header">
          <h2 className="edtech-section-subtitle">WHY TRUST US</h2>
          <h1 className="edtech-section-title">Setting the standard in <br />EdTech Hiring</h1>
        </div>
        <div className="edtech-card-left">
          <EdTechFeatureCard
            image={A}
            title="Industry relevant curriculum"
            description="Ever evolving curriculum for data science and software development roles with robust evaluations"
            highlight="data science and software development roles"
            customClass="edtech-large-card"
          />
          <EdTechFeatureCard
            image={B}
            title="Handpicked top 10% students"
            description="Elite talent, rigorously screened and expertly trained for immediate impact in tech roles."
            highlight="top 10% students"
            customClass="edtech-small-card edtech-top-right"
          />
        </div>
        <div className="edtech-card-right">
          <EdTechFeatureCard
            image={C}
            title="Industry experts from top companies"
            description="Industry experts from top companies to aid student learning, mentorship and evaluation."
            highlight="Industry experts"
            customClass="edtech-small-card edtech-bottom-left"
          />
          <EdTechFeatureCard
            image={D}
            title="1200+ hours of training"
            description="Aimed to develop both technical and soft skills"
            highlight="technical and soft skills"
            customClass="edtech-small-card edtech-bottom-right"
          />
        </div>
      </div>
    </div>
  );
}
