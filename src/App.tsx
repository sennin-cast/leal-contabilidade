import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { PracticeAreasSection } from './components/PracticeAreasSection';
import { SpaceGallerySection } from './components/SpaceGallerySection';
import { TeamSection } from './components/TeamSection';
import { DifferentiatorsSection } from './components/DifferentiatorsSection';
import { ContactCtaSection } from './components/ContactCtaSection';
import { ContactLocationSection } from './components/ContactLocationSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F6F0] text-[#34322F] font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <PracticeAreasSection />
        <SpaceGallerySection />
        <TeamSection />
        <DifferentiatorsSection />
        <ContactCtaSection />
        <ContactLocationSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
