import HeroSection from '../components/home/HeroSection';
import AboutPreview from '../components/home/AboutPreview';
import SkillsPreview from '../components/home/SkillsPreview';
import TechStackSection from '../components/home/TechStackSection';
import FeaturedProjects from '../components/home/FeaturedProjects';
import ServicesSection from '../components/home/ServicesSection';
import JourneySection from '../components/home/JourneySection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ContactCTA from '../components/home/ContactCTA';
import StatsStrip from '../components/home/StatsStrip';

function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <StatsStrip />
      <SkillsPreview />
      <TechStackSection />
      <FeaturedProjects />
      <ServicesSection />
      <JourneySection />
      <TestimonialsSection />
      <ContactCTA />
    </>
  );
}

export default HomePage;
