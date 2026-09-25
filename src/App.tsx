import React, { useState } from 'react';
import { Topbar } from './components/Topbar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { NichesSection } from './components/NichesSection';
import { ServicesSection } from './components/ServicesSection';
import { SwitchAccountantSection } from './components/SwitchAccountantSection';
import { TaxCalculator } from './components/TaxCalculator';
import { Differentiators } from './components/Differentiators';
import { HistoryAuthoritySection } from './components/HistoryAuthoritySection';
import { SocialProofSection } from './components/SocialProofSection';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { LeadModal } from './components/LeadModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

export const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContext, setModalContext] = useState<string>('Geral');

  const handleOpenModal = (context: string = 'Geral') => {
    setModalContext(context);
    setModalOpen(true);
  };

  const scrollToCalculator = () => {
    const el = document.getElementById('calculadora');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-navy-950 text-slate-100 font-sans selection:bg-brand-gold-500/30 selection:text-brand-gold-300">
      {/* 1. Topbar with regulatory compliance and contact */}
      <Topbar />

      {/* 2. Sticky Glassmorphic Navbar */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 3. Hero Section Above the Fold */}
        <Hero
          onOpenModal={handleOpenModal}
          onScrollToCalculator={scrollToCalculator}
        />

        {/* 4. Specialized Niches Grid */}
        <NichesSection onOpenModal={handleOpenModal} />

        {/* 5. The 5 Official Service Pillars (Bento Grid) */}
        <ServicesSection onOpenModal={handleOpenModal} />

        {/* 6. Switching Accountant is Easy (3 Steps) */}
        <SwitchAccountantSection onOpenModal={handleOpenModal} />

        {/* 7. Interactive Tax Savings Calculator (Lead Magnet) */}
        <TaxCalculator onOpenModal={handleOpenModal} />

        {/* 8. Tech Differentiators & ERP Partners */}
        <Differentiators onOpenModal={handleOpenModal} />

        {/* 9. History & Authority Section (Ademar & Lucas Leal) */}
        <HistoryAuthoritySection onOpenModal={handleOpenModal} />

        {/* 10. Social Proof, Stats & Client Reviews */}
        <SocialProofSection onOpenModal={handleOpenModal} />

        {/* 11. Google Maps & Office Location */}
        <LocationSection />

        {/* 12. FAQ Antiobjections Accordion */}
        <FaqSection onOpenModal={handleOpenModal} />
      </main>

      {/* 13. Institutional Footer with Esdras Dantas credits */}
      <Footer />

      {/* 14. Global 2-Step Lead Qualification Modal */}
      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        sourceContext={modalContext}
      />

      {/* 15. Fixed Floating WhatsApp Call-to-Action */}
      <WhatsAppFloatingButton />
    </div>
  );
};

export default App;
