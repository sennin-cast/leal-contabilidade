import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { PracticeAreasSection } from './components/PracticeAreasSection';
import { JourneySection } from './components/JourneySection';
import { SpaceGallerySection } from './components/SpaceGallerySection';
import { TeamSection } from './components/TeamSection';
import { FaqSection } from './components/FaqSection';
import { ContactCtaSection } from './components/ContactCtaSection';
import { ContactLocationSection } from './components/ContactLocationSection';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#E4DAC9] text-[#181512] font-sans">
      <Header />
      <main id="main-content" className="flex-grow">
        <Hero />
        <AboutSection />
        <PracticeAreasSection />
        <JourneySection />
        <SpaceGallerySection />
        <TeamSection />
        <FaqSection />
        <ContactCtaSection />
        <ContactLocationSection />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default App;
