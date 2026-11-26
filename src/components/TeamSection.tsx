import React from 'react';
import { MessageCircle } from 'lucide-react';
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
        <div className="max-w-2xl mb-14 space-y-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#C2A36A]" />
            <span className="text-xs uppercase tracking-[0.22em] text-[#A48650] font-semibold">
              Equipe Responsável
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-medium text-[#34322F] leading-[1.15]">
            Profissionais dedicados ao seu atendimento.
          </h2>
          <p className="text-sm text-[#766044] leading-relaxed">
            Espaço reservado para retratos oficiais da equipe. Registros profissionais
            transcritos da identificação do escritório, sujeitos à confirmação final antes da
            publicação.
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
                className="bg-[#F8F6F0] border border-[#E9E3D9] rounded-2xl p-7 flex flex-col justify-between transition-colors hover:border-[#C2A36A]/65"
              >
                <div className="space-y-5">
                  {/* Portrait Placeholder (No fictitious photos) */}
                  <div className="flex items-center gap-4">
                    <div
                      aria-label={`Espaço para foto profissional de ${person.name}`}
                      className="w-16 h-16 rounded-full border border-[#C2A36A]/55 bg-[#E9E3D9]/55 flex items-center justify-center flex-shrink-0"
                    >
                      <span className="font-serif text-xl font-semibold text-[#766044] tracking-wider">
                        {person.initials}
                      </span>
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-[0.18em] text-[#A48650] font-semibold block">
                        {person.area}
                      </span>
                      <h3 className="font-serif text-2xl text-[#34322F] leading-snug">
                        {person.name}
                      </h3>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#E9E3D9] space-y-2">
                    <p className="text-xs font-semibold text-[#34322F] tracking-wide">
                      {person.registryLabel}
                    </p>
                    <p className="text-sm text-[#766044] leading-relaxed">{person.bio}</p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E9E3D9]/70 flex items-center justify-between gap-3">
                  <span className="text-xs text-[#766044]">{person.whatsappDisplay}</span>
                  <a
                    href={contactUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#34322F] hover:text-[#A48650] transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#C2A36A]" />
                    <span>Entrar em contato</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
