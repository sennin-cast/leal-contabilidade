import React from 'react';
import { BadgeCheck, MessageCircle } from 'lucide-react';
import { siteConfig, buildWhatsAppUrl } from '../config/siteConfig';
import { useReveal } from '../hooks/useReveal';

export const TeamSection: React.FC = () => {
  const { ref, isVisible } = useReveal<HTMLElement>();

  return (
    <section
      id="profissionais"
      ref={ref}
      className={`py-20 sm:py-28 bg-[#E9E3D9]/40 border-t border-[#E9E3D9] reveal-section ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl space-y-4">
            <div className="section-eyebrow">
              <span className="section-eyebrow-line" />
              <span className="section-eyebrow-text">Equipe Responsável</span>
            </div>
            <h2 className="section-heading">Profissionais dedicados ao seu atendimento.</h2>
          </div>
          <p className="text-sm text-[#5C4A33] max-w-sm leading-relaxed">
            Atendimento direto com os profissionais responsáveis por cada área da LN INTEGRA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {siteConfig.professionals.map((person) => {
            const contactUrl = buildWhatsAppUrl(
              person.whatsappNumber,
              `Olá, ${person.name.split(' ')[0]}! Gostaria de conversar sobre atendimento em ${person.area} na LN INTEGRA.`
            );

            return (
              <article
                key={person.id}
                className="bg-[#F8F6F0] border border-[#E9E3D9] rounded-2xl p-7 flex flex-col justify-between shadow-soft hover:shadow-card-hover hover:border-[#C2A36A]/65 transition-all duration-200"
              >
                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div
                      aria-hidden="true"
                      className="w-16 h-16 rounded-full border border-[#C2A36A]/60 bg-[#E9E3D9]/55 flex items-center justify-center flex-shrink-0"
                    >
                      <span className="font-serif text-xl font-semibold text-[#5C4A33] tracking-wider">
                        {person.initials}
                      </span>
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-[0.18em] text-[#94743E] font-semibold block">
                        {person.area}
                      </span>
                      <h3 className="font-serif text-2xl text-[#34322F] leading-snug">
                        {person.name}
                      </h3>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E9E3D9] space-y-3">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#E9E3D9]/50 border border-[#E9E3D9] text-xs font-semibold text-[#34322F] tracking-wide">
                      <BadgeCheck className="w-3.5 h-3.5 text-[#94743E]" />
                      <span>{person.registryLabel}</span>
                    </div>
                    <p className="text-sm text-[#5C4A33] leading-relaxed">{person.bio}</p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E9E3D9]/80 flex items-center justify-between gap-3">
                  <span className="text-xs font-medium text-[#5C4A33]">
                    {person.whatsappDisplay}
                  </span>
                  <a
                    href={contactUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#34322F] hover:text-[#94743E] transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#94743E]" />
                    <span>Entrar em contato</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-6 text-xs text-[#5C4A33]/90 text-center sm:text-left">
          Registros profissionais transcritos da identificação oficial do escritório. Retratos
          oficiais da equipe em atualização.
        </p>
      </div>
    </section>
  );
};
