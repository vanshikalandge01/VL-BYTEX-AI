import Navbar from "../common/Navbar";
import TechHiring from "../Frontend/Hire/components/TechHiring";
import StatsDisplay from "../Frontend/Hire/components/StatsDisplay";
import Alumni from "../Frontend/Hire/components/Alumni";
import HiringPartners from "../Frontend/Hire/components/HiringPartners";
import WhyChooseUs from "../Frontend/Hire/components/WhyChooseUs";
import EdTechHiring from "../Frontend/Hire/components/EdTechHiring";
import SuccessStories from "../Frontend/Hire/components/SuccessStories";
import ContactForm from "../Frontend/Hire/components/ContactForm";
import Footer from "../common/Footer";

function HirePage() {
  return (
    <>
      <Navbar />
      <br />
      <TechHiring />
      <StatsDisplay />
      <Alumni />
      <HiringPartners />
      <WhyChooseUs />
      <EdTechHiring />
      <SuccessStories />
      <div className="contact">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}

export default HirePage;
