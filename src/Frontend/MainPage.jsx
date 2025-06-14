// import NavigationBar from "../LandingPage/common/NavigationBar";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import HeroSection from "./Intelli/LandingPage/HeroSection";
import EYSection from "./Intelli/LandingPage/EYSection";
import LogosSection from "./Intelli/LandingPage/LogosSections";
import ExplorePrograms from "./Intelli/LandingPage/ExplorePrograms";
import RatingsSection from "./Intelli/LandingPage/RatingsSection";
import CareerAdvancement from "./Intelli/LandingPage/CareerAdvancement";
import TransitionSection from "./Intelli/LandingPage/TransitionSection";
import LearnerBenefits from "./Intelli/LandingPage/LearnerBenefits";
import EnterpriseTraining from "./Intelli/LandingPage/EnterpriseTraining";
import CareerTransitionBanner from "./Intelli/LandingPage/CareerTransitionBanner";
import Testimonials from "./Intelli/LandingPage/Testimonials";
import MediaHighlights from "./Intelli/LandingPage/MediaHighlights";
import Linkedin from "./Intelli/LandingPage/Linkedin";
import CertificateCard from "./Intelli/LandingPage/CertificateCard";
import "./Intelli/LandingPage/CSS/MainPage.css";

function MainPage() {
  return (
    <>
      <Navbar />
      <div className="Main">
        <HeroSection />
        <br />
        <EYSection />
        <LogosSection />
        <div className="content">
          <ExplorePrograms />
          <RatingsSection />
          <CareerAdvancement />
          <TransitionSection />
          <LearnerBenefits />
          <EnterpriseTraining />
          <CareerTransitionBanner />
          <Testimonials />
          <Linkedin />
          <CertificateCard />
          <MediaHighlights />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default MainPage;
