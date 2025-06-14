import "../LandingPage/CSS/CertificateCard.css";
import Certificate from "../LandingPage/Images/Certificate_upto.jpg";

const CertificateCard = () => {
  return (
    <div className="certificate-container">
      <div className="certificate-card">
        {/* Certificate Image */}
        <div className="certificate-image">
          <img
            src={Certificate}
            alt="Certificate"
            className="certificate-img"
          />
        </div>
        
        {/* Description */}
        <div className="certificate-description">
          <pre>
            Approved training partner under the <strong>scheme <br />
            for market led fee-based services</strong><br/>
            implemented by NSDC
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
