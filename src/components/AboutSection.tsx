import React from 'react';
import { useReveal } from '../hooks/useReveal';

export const AboutSection: React.FC = () => {
  const { ref, isVisible } = useReveal<HTMLElement>();

  return (
    <section
      id="sobre"
      ref={ref}
      className={`py-20 sm:py-28 bg-[#E4DAC9] border-t border-[#C4B69F] reveal-section ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Real Office Photo */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-[#C4B69F] shadow-editorial">
              <img
                src="./images/office/recepcao-ampla.jpg"
                alt="Interior acolhedor da LN INTEGRA Contabilidade e Psicologia"
                loading="lazy"
                className="w-full h-[380px] sm:h-[460px] object-cover"
              />
            </div>
          </div>

          {/* Right: Institutional Copy */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="section-eyebrow">
              <span className="section-eyebrow-line" />
              <span className="section-eyebrow-text">Sobre a LN INTEGRA</span>
            </div>

            <h2 className="section-heading">
              Um conceito de atendimento que integra pessoas e negócios.
            </h2>

            <div className="space-y-4 text-base text-[#3A3128] leading-relaxed">
              <p>
                A INTEGRA nasceu com o propósito de reunir conhecimento técnico, profissionalismo
                e atendimento humanizado em um ambiente acolhedor e cuidadosamente preparado para
                receber cada pessoa.
              </p>
              <p>
                Com atuação nas áreas de Contabilidade e Psicologia, buscamos oferecer
                experiências profissionais pautadas pela confiança, ética e atenção
                individualizada.
              </p>
            </div>

            <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-[#C4B69F]">
              <div className="space-y-1.5">
                <p className="font-serif text-2xl font-semibold text-[#1A1714]">Contabilidade</p>
                <p className="text-sm text-[#3A3128] leading-relaxed">
                  Organização, clareza e segurança para decisões tranquilas na gestão das suas
                  atividades.
                </p>
              </div>
              <div className="space-y-1.5">
                <p className="font-serif text-2xl font-semibold text-[#1A1714]">Psicologia</p>
                <p className="text-sm text-[#3A3128] leading-relaxed">
                  Escuta qualificada, acolhimento individualizado e cuidado humano com ética
                  profissional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
