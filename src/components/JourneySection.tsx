import React from 'react';
import { MessageSquare, ClipboardList, Compass, CalendarCheck } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Primeiro contato',
    description:
      'Você escolhe a área desejada (Contabilidade ou Psicologia) e inicia o atendimento pelo WhatsApp ou formulário.',
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'Entendimento da necessidade',
    description:
      'Realizamos uma escuta atenta para compreender o seu momento, contexto empresarial ou demanda individual.',
  },
  {
    number: '03',
    icon: Compass,
    title: 'Orientação especializada',
    description:
      'Apresentamos um direcionamento claro e transparente, conduzido pelo profissional habilitado responsável.',
  },
  {
    number: '04',
    icon: CalendarCheck,
    title: 'Atendimento e acompanhamento',
    description:
      'Seguimos com suporte próximo, presencialmente no Centro de Nova Iguaçu ou sob agendamento.',
  },
];

export const JourneySection: React.FC = () => {
  const { ref, isVisible } = useReveal<HTMLElement>();

  return (
    <section
      id="jornada"
      ref={ref}
      className={`py-20 sm:py-28 bg-[#F8F6F0] border-t border-[#E9E3D9] reveal-section ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl space-y-4">
            <div className="section-eyebrow">
              <span className="section-eyebrow-line" />
              <span className="section-eyebrow-text">Jornada de Atendimento</span>
            </div>
            <h2 className="section-heading">
              Um processo simples, claro e acolhedor desde o primeiro contato.
            </h2>
          </div>
          <p className="text-sm text-[#5C4A33] max-w-sm leading-relaxed">
            Estruturamos cada etapa para reduzir dúvidas e oferecer tranquilidade na sua decisão.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-[#E9E3D9]/30 border border-[#E9E3D9] rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-6 transition-colors duration-200 hover:border-[#C2A36A]/60"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg border border-[#C2A36A]/55 bg-[#F8F6F0] flex items-center justify-center text-[#94743E]">
                    <Icon className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <span
                    aria-hidden="true"
                    className="font-serif text-3xl text-[#C2A36A]/55 font-light"
                  >
                    {step.number}
                  </span>
                </div>

                <div className="space-y-2.5">
                  <h3 className="font-serif text-2xl text-[#34322F] font-medium leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#5C4A33] leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
