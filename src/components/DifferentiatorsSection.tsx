import React from 'react';
import { Compass, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const pillars = [
  {
    icon: HeartHandshake,
    title: 'Atendimento humanizado',
    description:
      'Escuta atenta e comunicação clara, respeitando o momento e a necessidade de cada cliente ou paciente.',
  },
  {
    icon: ShieldCheck,
    title: 'Profissionalismo e ética',
    description:
      'Atuação pautada pelo rigor técnico, sigilo e responsabilidade em cada orientação prestada.',
  },
  {
    icon: Sparkles,
    title: 'Ambiente acolhedor',
    description:
      'Estrutura física planejada em tons neutros para transmitir serenidade, conforto e bem-estar.',
  },
  {
    icon: Compass,
    title: 'Integração de saberes',
    description:
      'Contabilidade e Psicologia sob a mesma marca institucional, com identidade coesa e serviços bem definidos.',
  },
];

export const DifferentiatorsSection: React.FC = () => {
  const { ref, isVisible } = useReveal<HTMLElement>();

  return (
    <section
      id="diferenciais"
      ref={ref}
      className={`py-20 sm:py-28 bg-[#F8F6F0] border-t border-[#E9E3D9] reveal-section ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-14 space-y-4">
          <div className="section-eyebrow">
            <span className="section-eyebrow-line" />
            <span className="section-eyebrow-text">Nossos Pilares</span>
          </div>
          <h2 className="section-heading">
            Mais do que serviços, relações construídas com confiança.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="pt-6 border-t border-[#C2A36A]/55 space-y-4 transition-colors duration-200 hover:border-[#94743E]"
              >
                <div className="w-10 h-10 rounded-lg border border-[#E9E3D9] bg-[#E9E3D9]/40 flex items-center justify-center text-[#94743E]">
                  <Icon className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-2xl text-[#34322F] font-medium">
                  {item.title}
                </h3>
                <p className="text-sm text-[#5C4A33] leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
