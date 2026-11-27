import React from 'react';
import { siteConfig } from '../config/siteConfig';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="sobre"
      className="py-20 sm:py-28 bg-[#E4DAC9] border-t border-[#C4B69F]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Real Office Photo */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden border border-[#C4B69F] shadow-editorial">
              <img
                src="./images/office/recepcao-ampla.jpg"
                alt="Interior acolhedor da LN INTEGRA Contabilidade e Psicologia"
                loading="lazy"
                decoding="async"
                className="w-full h-[360px] sm:h-[450px] object-cover"
              />
            </div>
          </div>

          {/* Right: Narrative */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <h2 className="section-heading">
              Um espaço construído para unir técnica, clareza e acolhimento.
            </h2>

            <div className="space-y-4 text-base text-[#3A3128] leading-relaxed max-w-[65ch]">
              <p>
                A <strong className="font-semibold text-[#181512]">{siteConfig.brand.shortName}</strong>{' '}
                nasceu com o propósito de reunir conhecimento técnico, profissionalismo e
                atendimento humanizado em um ambiente preparado para receber cada pessoa com
                calma e atenção.
              </p>
              <p>
                Com atuação independente nas áreas de Contabilidade e Psicologia, oferecemos
                acompanhamento próximo, pautado pela ética, pelo sigilo e pela organização no dia
                a dia.
              </p>
            </div>

            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-[#C4B69F]">
              <div>
                <h3 className="font-display text-xl font-semibold text-[#181512]">
                  Contabilidade
                </h3>
                <p className="text-sm text-[#3A3128] mt-1.5 leading-relaxed">
                  Organização, orientação e tranquilidade para a gestão das suas atividades.
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-[#181512]">
                  Psicologia
                </h3>
                <p className="text-sm text-[#3A3128] mt-1.5 leading-relaxed">
                  Escuta qualificada, ética profissional e cuidado individualizado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
