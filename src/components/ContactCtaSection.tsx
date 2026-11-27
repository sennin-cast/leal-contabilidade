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
      className={`py-20 sm:py-24 bg-[#E9E3D9] border-t border-[#B7AEA1]/40 reveal-section ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center space-y-7">
        <div className="inline-flex items-center gap-3">
          <span className="h-px w-8 bg-[#94743E]" />
          <span className="text-xs uppercase tracking-[0.22em] text-[#5C4A33] font-semibold">
            Atendimento Direto
          </span>
          <span className="h-px w-8 bg-[#94743E]" />
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl text-[#34322F] font-medium">
          Vamos conversar?
        </h2>

        <p className="text-base sm:text-lg text-[#5C4A33] max-w-xl mx-auto leading-relaxed">
          Estamos prontos para receber você e entender como podemos ajudar.
        </p>

        {/* Area Selector for WhatsApp Routing */}
        <div
          role="group"
          aria-label="Selecionar área de atendimento"
          className="inline-flex p-1 rounded-lg bg-[#F8F6F0] border border-[#B7AEA1]/50"
        >
          <button
            type="button"
            onClick={() => setSelectedArea('contabilidade')}
            aria-pressed={selectedArea === 'contabilidade'}
            className={`px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
              selectedArea === 'contabilidade'
                ? 'bg-[#34322F] text-[#F8F6F0]'
                : 'text-[#5C4A33] hover:text-[#34322F]'
            }`}
          >
            Contabilidade
          </button>
          <button
            type="button"
            onClick={() => setSelectedArea('psicologia')}
            aria-pressed={selectedArea === 'psicologia'}
            className={`px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
              selectedArea === 'psicologia'
                ? 'bg-[#34322F] text-[#F8F6F0]'
                : 'text-[#5C4A33] hover:text-[#34322F]'
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
            className="btn-primary w-full sm:w-auto"
          >
            <MessageCircle className="w-4 h-4 text-[#C2A36A]" />
            <span>
              Falar pelo WhatsApp (
              {selectedArea === 'contabilidade' ? 'Contabilidade' : 'Psicologia'})
            </span>
          </a>

          <a
            href="#espaco"
            className="btn-secondary w-full sm:w-auto"
          >
            <span>Conhecer nosso espaço</span>
            <ArrowRight className="w-4 h-4 text-[#94743E]" />
          </a>
        </div>
      </div>
    </section>
  );
};
