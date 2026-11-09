import { useState, useEffect } from 'react';
import { Preloader } from './components/Loader/Preloader';
import { CustomCursor } from './components/Cursor/CustomCursor';
import { Navbar } from './components/Navigation/Navbar';
import { Hero } from './components/Hero/Hero';
import { StudioMarquee } from './components/Marquee/StudioMarquee';
import { FeaturedWork } from './components/Work/FeaturedWork';
import { ServicesSection } from './components/Services/ServicesSection';
import { ShowreelSection } from './components/Showreel/ShowreelSection';
import { AboutSection } from './components/About/AboutSection';
import { ProcessSection } from './components/Process/ProcessSection';
import { WhyUsSection } from './components/WhyUs/WhyUsSection';
import { ContactSection } from './components/Contact/ContactSection';
import { Footer } from './components/Footer/Footer';

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  // Track active section on scroll
  useEffect(() => {
    const sections = ['home', 'work', 'services', 'showreel', 'about', 'process', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#080808] text-[#F5F3EF] selection:bg-[#FF5722] selection:text-white">
      {/* Preloader Sequence */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Persistent Liquid Glass Floating Navigation */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Experience Flow */}
      <main>
        {/* 1. Hero Section with Interactive 3D Canvas */}
        <Hero
          onExploreClick={() => handleNavigate('work')}
          onContactClick={() => handleNavigate('contact')}
        />

        {/* 2. Kinetic Studio Marquee */}
        <StudioMarquee />

        {/* 3. Featured Work / Project Showcase */}
        <FeaturedWork />

        {/* 4. Creative Services & Procedural Visualizers */}
        <ServicesSection />

        {/* 5. Immersive Showreel & Theater Experience */}
        <ShowreelSection />

        {/* 6. About Flare Studios & Studio Ethos */}
        <AboutSection />

        {/* 7. 4-Stage Creative Process Timeline */}
        <ProcessSection />

        {/* 8. Why Choose Us / Craftsmanship Principles */}
        <WhyUsSection />

        {/* 9. Interactive Contact & Email Composer */}
        <ContactSection />
      </main>

      {/* 10. Oversized Cinematic Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
