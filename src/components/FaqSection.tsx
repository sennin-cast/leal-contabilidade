import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle, ArrowRight } from 'lucide-react';
import { FAQ_DATA } from '../data/faq';

interface FaqSectionProps {
  onOpenModal: (source?: string) => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenModal }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 relative bg-brand-navy-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-navy-900 border border-brand-gold-500/30 text-brand-gold-400 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Perguntas Frequentes & Transparência</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Tire Suas Dúvidas Sobre <span className="gold-gradient-text">Nossos Serviços</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Respostas claras e diretas para as principais dúvidas de quem busca uma contabilidade moderna e segura.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? 'bg-brand-navy-900/90 border-brand-gold-500/40 shadow-lg shadow-black/40'
                    : 'bg-brand-navy-900/40 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-bold text-white text-base sm:text-lg">
                    {item.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-brand-navy-800 text-brand-gold-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-brand-gold-500/20' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-800/80 animate-in fade-in duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra question prompt */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-brand-navy-900/80 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-white">Ficou com alguma dúvida específica da sua empresa?</h4>
            <p className="text-xs text-slate-400">Nossa equipe tributária responde em minutos no WhatsApp.</p>
          </div>
          <button
            onClick={() => onOpenModal('Dúvida FAQ')}
            className="shrink-0 px-5 py-2.5 rounded-xl text-xs font-bold text-brand-navy-950 bg-gradient-to-r from-brand-gold-300 to-brand-gold-500 hover:brightness-110 flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar com um Especialista Agora</span>
          </button>
        </div>

      </div>
    </section>
  );
};
