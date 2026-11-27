import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig, buildWhatsAppUrl } from '../config/siteConfig';

const steps = [
  {
    id: 'contato',
    title: 'Primeiro contato direto',
    summary: 'Você escolhe Contabilidade ou Psicologia e fala sem intermediários.',
    detail:
      'Pelo WhatsApp ou pelo formulário aqui da página, sua mensagem vai direto para o profissional responsável pela área selecionada.',
  },
  {
    id: 'escuta',
    title: 'Entendimento da sua necessidade',
    summary: 'Conversa objetiva para mapear o cenário da empresa ou demanda pessoal.',
    detail:
      'Ouvimos o seu momento atual com clareza e sem jargões desnecessários, identificando exatamente o que precisa de atenção.',
  },
  {
    id: 'orientacao',
    title: 'Orientação técnica transparente',
    summary: 'Direcionamento conduzido por quem tem registro ativo no CRC RJ ou CRP RJ.',
    detail:
      'Explicamos os próximos passos com transparência sobre como o acompanhamento funciona na prática.',
  },
  {
    id: 'acompanhamento',
    title: 'Atendimento contínuo ou agendado',
    summary: 'Suporte presencial no Centro de Nova Iguaçu ou sob agendamento.',
    detail:
      'Recebemos você na Rua Otávio Tarquínio, 74 — Sala 201, com ambiente reservado e horário combinado.',
  },
];

export const JourneySection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = steps[activeIndex];

  const whatsappUrl = buildWhatsAppUrl(
    siteConfig.contact.mainWhatsappNumber,
    'Olá! Gostaria de iniciar meu atendimento na LN INTEGRA.'
  );

  return (
    <section
      id="jornada"
      className="py-20 sm:py-28 bg-[#E4DAC9] border-t border-[#C4B69F]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12 space-y-3">
          <h2 className="section-heading">
            Como funciona do primeiro contato ao acompanhamento
          </h2>
          <p className="text-base text-[#3A3128] leading-relaxed">
            Clique em cada etapa para ver como organizamos o atendimento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Step Selector List */}
          <div className="lg:col-span-6 divide-y divide-[#C4B69F] border-y border-[#C4B69F]">
            {steps.map((step, idx) => {
              const isSelected = idx === activeIndex;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-expanded={isSelected}
                  className={`w-full text-left py-5 px-4 transition-colors cursor-pointer flex items-start justify-between gap-4 ${
                    isSelected ? 'bg-[#EDE5D8]' : 'hover:bg-[#EDE5D8]/60'
                  }`}
                >
                  <div className="space-y-1">
                    <h3 className="font-display text-xl font-semibold text-[#181512]">
                      {idx + 1}. {step.title}
                    </h3>
                    <p className="text-sm text-[#3A3128]">{step.summary}</p>
                  </div>
                  <span
                    aria-hidden="true"
                    className={`w-2.5 h-2.5 rounded-full mt-2 flex-shrink-0 transition-colors ${
                      isSelected ? 'bg-[#7A5B22]' : 'bg-[#C4B69F]'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Step Detail Panel */}
          <div
            aria-live="polite"
            className="surface-dark lg:col-span-6 bg-[#1C1814] text-[#F5EFE6] rounded-2xl p-8 sm:p-10 space-y-6 shadow-editorial"
          >
            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[#2E2720] text-[#D4AF6A] border border-[#C6A15B]/35 tabular-nums">
              Etapa {activeIndex + 1} de {steps.length}
            </span>

            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#F5EFE6] leading-snug">
              {current.title}
            </h3>

            <p className="text-base text-[#E4DAC9] leading-relaxed">{current.detail}</p>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#C6A15B] text-[#181512] text-sm font-bold hover:bg-[#D4AF6A] active:scale-[0.98] transition-[background-color,transform] cursor-pointer"
              >
                <span>Começar pelo WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
