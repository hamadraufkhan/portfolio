import Layout from "./components/layout/Layout";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ServicesSection from "./sections/ServicesSection";
import SkillsSection from "./sections/SkillsSection";
import EducationSection from "./sections/EducationSection";
import ExperienceSection from "./sections/ExperienceSection";
import PortfolioSection from "./sections/PortfolioSection";
import ContactSection from "./sections/ContactSection";

export default function App() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SkillsSection />
      <EducationSection />
      <ExperienceSection />
      <PortfolioSection />
      <ContactSection />
    </Layout>
  );
}
