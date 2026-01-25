import AboutSection from "./components/AboutSection.jsx";
import { ContactSection } from "./components/Contact.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Navbar from "./components/Navbar.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import { SkillsSection } from "./components/SkillsSction.jsx";

function App() {
  return (
    <>
      <HeroSection />
      <div className="min-h-screen relative overflow-auto">
        <Navbar />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </>
  );
}

export default App;
