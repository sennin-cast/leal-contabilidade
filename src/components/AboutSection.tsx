import React from 'react';
import { useReveal } from '../hooks/useReveal';

export const AboutSection: React.FC = () => {
  const { ref, isVisible } = useReveal<HTMLElement>();

  return (
    <section
      id="sobre"
      ref={ref}
      className={`py-20 sm:py-28 bg-[#F8F6F0] border-t border-[#E9E3D9] reveal-section ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Real Office Photo */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-[#E9E3D9] shadow-editorial">
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
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#C2A36A]" />
              <span className="text-xs uppercase tracking-[0.22em] text-[#A48650] font-semibold">
                Sobre a LN INTEGRA
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-medium text-[#34322F] leading-[1.15]">
              Um conceito de atendimento que integra pessoas e negócios.
            </h2>

            <div className="space-y-4 text-base text-[#766044] leading-relaxed">
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

            <div className="pt-4 grid grid-cols-2 gap-6 border-t border-[#E9E3D9]">
              <div>
                <p className="font-serif text-2xl text-[#34322F]">Contabilidade</p>
                <p className="text-xs text-[#766044] mt-1">
                  Organização e segurança para decisões tranquilas.
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl text-[#34322F]">Psicologia</p>
                <p className="text-xs text-[#766044] mt-1">
                  Escuta qualificada, acolhimento e cuidado humano.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
