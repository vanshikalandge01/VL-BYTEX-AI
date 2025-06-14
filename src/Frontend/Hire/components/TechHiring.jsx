import "../CSS/TechHiring.css";

export default function TechHiring() {
    return (
        <div className="tech-hiring-container">
            <div className="tech-hiring-hero">
                <h1>
                    Hire the Best Tech Professionals at <span className="tech-hiring-highlight">Zero Cost</span>
                </h1>
                <p>
                    Newton School students are ready to join your company and help you achieve high-impact goals.
                </p>
                <div className="tech-hiring-cta-section">
                    <button className="tech-hiring-start-hiring">Start Hiring Now</button>
                    <div className="tech-hiring-info">
                        <img src="https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/6708e6a1b50eedefdfab022a_Highcompressed_1555625944.avif" alt="students hired" />
                        <span>4500+ students already hired</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
