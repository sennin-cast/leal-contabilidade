import React, { useState } from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { siteConfig, buildWhatsAppUrl } from '../config/siteConfig';

type AreaOption = 'contabilidade' | 'psicologia';

export const ContactCtaSection: React.FC = () => {
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
    <section className="py-20 sm:py-24 bg-[#1C1814] text-[#F5EFE6] border-t border-[#C6A15B]/25">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center space-y-7">
        <h2 className="font-display text-4xl sm:text-5xl text-[#F5EFE6] font-semibold tracking-tight">
          Pronto para conversar com a nossa equipe?
        </h2>

        <p className="text-base sm:text-lg text-[#E4DAC9] max-w-xl mx-auto leading-relaxed">
          Escolha a área desejada e fale diretamente pelo WhatsApp, sem espera nem triagem
          automática.
        </p>

        <div
          role="group"
          aria-label="Selecionar área de atendimento"
          className="inline-flex p-1 rounded-xl bg-[#2A241E] border border-[#C6A15B]/35"
        >
          <button
            type="button"
            onClick={() => setSelectedArea('contabilidade')}
            aria-pressed={selectedArea === 'contabilidade'}
            className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
              selectedArea === 'contabilidade'
                ? 'bg-[#C6A15B] text-[#181512]'
                : 'text-[#E4DAC9] hover:text-[#F5EFE6]'
            }`}
          >
            Contabilidade
          </button>
          <button
            type="button"
            onClick={() => setSelectedArea('psicologia')}
            aria-pressed={selectedArea === 'psicologia'}
            className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
              selectedArea === 'psicologia'
                ? 'bg-[#C6A15B] text-[#181512]'
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
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#C6A15B] text-[#181512] text-sm font-bold hover:bg-[#D4AF6A] transition-colors cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#181512]" />
            <span>
              Falar no WhatsApp (
              {selectedArea === 'contabilidade' ? 'Contabilidade' : 'Psicologia'})
            </span>
          </a>

          <a
            href="#contato"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl border border-[#C6A15B]/60 text-[#F5EFE6] bg-[#2A241E] hover:bg-[#3A3128] text-sm font-semibold transition-colors cursor-pointer"
          >
            <span>Preencher formulário</span>
            <ArrowRight className="w-4 h-4 text-[#D4AF6A]" />
          </a>
        </div>
      </div>
    </section>
  );
};
