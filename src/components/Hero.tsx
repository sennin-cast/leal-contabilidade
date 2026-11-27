import React, { useState } from 'react';
import { ArrowDownRight, MapPin, MessageCircle, ShieldCheck } from 'lucide-react';
import { siteConfig, buildWhatsAppUrl } from '../config/siteConfig';

type HeroArea = 'contabilidade' | 'psicologia';

export const Hero: React.FC = () => {
  const [area, setArea] = useState<HeroArea>('contabilidade');

  const whatsappUrl =
    area === 'contabilidade'
      ? buildWhatsAppUrl(
          siteConfig.contact.accountingWhatsappNumber,
          'Olá! Gostaria de falar com a equipe de Contabilidade da LN INTEGRA.'
        )
      : buildWhatsAppUrl(
          siteConfig.contact.psychologyWhatsappNumber,
          'Olá! Gostaria de falar com a equipe de Psicologia da LN INTEGRA.'
        );

  return (
    <section
      id="inicio"
      className="surface-dark relative min-h-[88vh] sm:min-h-[92vh] pt-32 pb-16 sm:pt-36 sm:pb-24 flex items-center bg-[#1C1814] text-[#F5EFE6] overflow-hidden"
    >
      {/* Full-bleed Corporate Office Background with Subtle Blur & Espresso Scrim */}
      <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="./images/hero-escritorio.jpg"
          alt=""
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-[62%_center] sm:object-center scale-105 blur-[2.5px] opacity-55"
        />
        <div className="absolute inset-0 bg-[#181512]/45 sm:bg-[#181512]/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#181512]/95 via-[#181512]/80 to-[#181512]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#181512]/90 via-transparent to-[#181512]/60" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full relative z-10">
        <div className="max-w-3xl space-y-7">
          <h1 className="hero-enter font-display text-4xl sm:text-5xl lg:text-[4.15rem] font-semibold text-[#F5EFE6] leading-[1.04] tracking-[-0.03em]">
            Contabilidade e Psicologia com{' '}
            <span className="text-[#D4AF6A]">clareza, presença</span> e cuidado real.
          </h1>

          <p className="hero-enter-delay-1 text-base sm:text-lg lg:text-[1.125rem] text-[#E4DAC9] leading-relaxed max-w-[56ch]">
            No Centro de Nova Iguaçu, reunimos orientação contábil segura para empresas e
            acolhimento psicológico individualizado no mesmo endereço — com autonomia técnica
            e atendimento direto.
          </p>

          {/* Interactive Area Switcher + Primary Actions */}
          <div className="hero-enter-delay-2 space-y-4 pt-1">
            <div
              role="group"
              aria-label="Escolha a área para atendimento imediato"
              className="inline-flex p-1 rounded-xl bg-[#181512]/75 backdrop-blur-md border border-[#C6A15B]/35 shadow-soft"
            >
              <button
                type="button"
                onClick={() => setArea('contabilidade')}
                aria-pressed={area === 'contabilidade'}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold active:scale-[0.98] transition-[background-color,color,transform] cursor-pointer ${
                  area === 'contabilidade'
                    ? 'bg-[#C6A15B] text-[#181512] shadow-sm'
                    : 'text-[#E4DAC9] hover:text-[#F5EFE6]'
                }`}
              >
                Contabilidade
              </button>
              <button
                type="button"
                onClick={() => setArea('psicologia')}
                aria-pressed={area === 'psicologia'}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold active:scale-[0.98] transition-[background-color,color,transform] cursor-pointer ${
                  area === 'psicologia'
                    ? 'bg-[#C6A15B] text-[#181512] shadow-sm'
                    : 'text-[#E4DAC9] hover:text-[#F5EFE6]'
                }`}
              >
                Psicologia
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#C6A15B] text-[#181512] text-sm font-bold hover:bg-[#D4AF6A] active:scale-[0.98] transition-[background-color,transform] duration-200 shadow-editorial cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#181512]" aria-hidden="true" />
                <span>
                  Falar com {area === 'contabilidade' ? 'Contabilidade' : 'Psicologia'}
                </span>
              </a>

              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl border border-[#C6A15B]/55 text-[#F5EFE6] bg-[#181512]/70 backdrop-blur-md hover:bg-[#2A241E]/90 active:scale-[0.98] text-sm font-semibold transition-[background-color,border-color,transform] duration-200 cursor-pointer"
              >
                <span>Enviar mensagem</span>
                <ArrowDownRight className="w-4 h-4 text-[#D4AF6A]" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Verified Trust & Location Strip */}
          <div className="hero-enter-delay-2 pt-6 border-t border-[#C6A15B]/25 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs sm:text-[13px] text-[#E4DAC9]">
            <span className="inline-flex items-center gap-1.5 font-medium text-[#F5EFE6]">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF6A] flex-shrink-0" aria-hidden="true" />
              <span>Rua Otávio Tarquínio, 74 · Sala 201 · Centro, Nova Iguaçu</span>
            </span>
            <span className="inline-flex items-center gap-1.5 tabular-nums">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF6A] flex-shrink-0" aria-hidden="true" />
              <span>CRC RJ &amp; CRP RJ ativos</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
