import AboutSection from "./components/AboutSection.jsx";
import { ContactSection } from "./components/Contact.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Navbar from "./components/Navbar.jsx";
import PremiumNavbar from "./components/Navbar.jsx";
import PremiumNav from "./components/Navbar.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import { SkillsSection } from "./components/SkillsSction.jsx";

function App() {
  return (
    <div className="min-h-screen relative overflow-auto">
      <Navbar />
      {/* hero Section */}
      <div className="relative mb-7 md:mb-37">
        <HeroSection />
        <svg
          className="absolute  opacity-10 bottom-[-10] w-full"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#155dfc"
            fillOpacity="1"
            d="M0,256L40,245.3C80,235,160,213,240,197.3C320,181,400,171,480,160C560,149,640,139,720,144C800,149,880,171,960,170.7C1040,171,1120,149,1200,128C1280,107,1360,85,1400,74.7L1440,64L1440,0L0,0Z"
          ></path>
        </svg>
      </div>
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default App;
