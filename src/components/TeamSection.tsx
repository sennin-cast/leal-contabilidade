import React from 'react';
import { ArrowUpRight, BadgeCheck, MessageCircle } from 'lucide-react';
import { siteConfig, buildWhatsAppUrl } from '../config/siteConfig';

export const TeamSection: React.FC = () => {
  return (
    <section
      id="profissionais"
      className="py-20 sm:py-28 bg-[#E4DAC9] border-t border-[#C4B69F]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <h2 className="section-heading">Quem atende você na LN INTEGRA</h2>
            <p className="text-base text-[#3A3128] leading-relaxed">
              Contato direto com os profissionais habilitados responsáveis por cada frente.
            </p>
          </div>
        </div>

        {/* Editorial Horizontal Roster (No repetitive icon-card grid) */}
        <div className="divide-y divide-[#C4B69F] border-y border-[#C4B69F]">
          {siteConfig.professionals.map((person) => {
            const contactUrl = buildWhatsAppUrl(
              person.whatsappNumber,
              `Olá, ${person.name.split(' ')[0]}! Gostaria de conversar sobre atendimento em ${person.area} na LN INTEGRA.`
            );

            return (
              <article
                key={person.id}
                className="py-7 sm:py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center hover:bg-[#EDE5D8]/60 px-3 sm:px-5 rounded-xl transition-colors"
              >
                <div className="lg:col-span-4 flex items-center gap-4">
                  <div
                    aria-hidden="true"
                    className="w-14 h-14 rounded-full border border-[#7A5B22]/60 bg-[#EDE5D8] flex items-center justify-center flex-shrink-0"
                  >
                    <span className="font-display text-lg font-bold text-[#181512]">
                      {person.initials}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#7A5B22] block">
                      {person.area}
                    </span>
                    <h3 className="font-display text-2xl font-semibold text-[#181512] leading-snug">
                      {person.name}
                    </h3>
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#EDE5D8] border border-[#C4B69F] text-xs font-semibold text-[#181512] tabular-nums">
                    <BadgeCheck className="w-3.5 h-3.5 text-[#7A5B22]" />
                    <span>{person.registryLabel}</span>
                  </div>
                  <p className="text-sm text-[#3A3128] leading-relaxed">{person.bio}</p>
                </div>

                <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end justify-between gap-2">
                  <span className="text-sm font-semibold text-[#181512] tabular-nums">
                    {person.whatsappDisplay}
                  </span>
                  <a
                    href={contactUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1C1814] text-[#F5EFE6] text-xs font-semibold hover:bg-[#3A3128] transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#D4AF6A]" />
                    <span>Conversar no WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF6A]" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-5 text-xs text-[#3A3128]">
          Registros profissionais transcritos da identificação oficial do escritório.
        </p>
      </div>
    </section>
  );
};
