import React, { useState } from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { siteConfig, buildWhatsAppUrl } from '../config/siteConfig';
import { useReveal } from '../hooks/useReveal';

type AreaOption = 'contabilidade' | 'psicologia';

export const ContactCtaSection: React.FC = () => {
  const { ref, isVisible } = useReveal<HTMLElement>();
  const [selectedArea, setSelectedArea] = useState<AreaOption>('contabilidade');

  const whatsappUrl =
    selectedArea === 'contabilidade'
      ? buildWhatsAppUrl(
          siteConfig.contact.accountingWhatsappNumber,
          'Olá! Gostaria de atendimento na área de Contabilidade da LN INTEGRA.'
        )
      : buildWhatsAppUrl(
          siteConfig.contact.psychologyWhatsappNumber,
          'Olá! Gostaria de atendimento na área de Psicologia da LN INTEGRA.'
        );

  return (
    <section
      ref={ref}
      className={`py-20 sm:py-24 bg-[#221D18] text-[#F5EFE6] border-t border-[#C6A15B]/25 reveal-section ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center space-y-7">
        <div className="inline-flex items-center gap-3">
          <span className="h-px w-8 bg-[#C6A15B]" />
          <span className="text-xs uppercase tracking-[0.22em] text-[#D4AF6A] font-semibold">
            Atendimento Direto
          </span>
          <span className="h-px w-8 bg-[#C6A15B]" />
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl text-[#F5EFE6] font-medium">
          Vamos conversar?
        </h2>

        <p className="text-base sm:text-lg text-[#E4DAC9] max-w-xl mx-auto leading-relaxed">
          Estamos prontos para receber você e entender como podemos ajudar.
        </p>

        {/* Area Selector for WhatsApp Routing */}
        <div
          role="group"
          aria-label="Selecionar área de atendimento"
          className="inline-flex p-1 rounded-lg bg-[#2E2720] border border-[#C6A15B]/35"
        >
          <button
            type="button"
            onClick={() => setSelectedArea('contabilidade')}
            aria-pressed={selectedArea === 'contabilidade'}
            className={`px-4 py-2 rounded-md text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
              selectedArea === 'contabilidade'
                ? 'bg-[#C6A15B] text-[#1A1714]'
                : 'text-[#E4DAC9] hover:text-[#F5EFE6]'
            }`}
          >
            Contabilidade
          </button>
          <button
            type="button"
            onClick={() => setSelectedArea('psicologia')}
            aria-pressed={selectedArea === 'psicologia'}
            className={`px-4 py-2 rounded-md text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
              selectedArea === 'psicologia'
                ? 'bg-[#C6A15B] text-[#1A1714]'
                : 'text-[#E4DAC9] hover:text-[#F5EFE6]'
            }`}
          >
            Psicologia
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#C6A15B] text-[#1A1714] text-sm font-bold hover:bg-[#D4AF6A] transition-colors cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#1A1714]" />
            <span>
              Falar pelo WhatsApp (
              {selectedArea === 'contabilidade' ? 'Contabilidade' : 'Psicologia'})
            </span>
          </a>

          <a
            href="#espaco"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg border border-[#C6A15B]/60 text-[#F5EFE6] bg-[#2E2720] hover:bg-[#3A3128] text-sm font-semibold transition-colors cursor-pointer"
          >
            <span>Conhecer nosso espaço</span>
            <ArrowRight className="w-4 h-4 text-[#D4AF6A]" />
          </a>
        </div>
      </div>
    </section>
  );
};
