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
      className="relative min-h-[92vh] pt-28 pb-16 sm:pt-32 sm:pb-24 flex items-center bg-[#1C1814] text-[#F5EFE6] overflow-hidden"
    >
      {/* Blurred Watermark Background: Professional at Desk */}
      <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="./images/hero-profissional-mesa.jpg"
          alt=""
          className="w-full h-full object-cover object-center scale-105 blur-[3px] opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#181512]/95 via-[#1C1814]/85 to-[#1C1814]/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#181512]/90 via-transparent to-[#181512]/50" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="hero-enter font-display text-4xl sm:text-5xl lg:text-[3.85rem] font-semibold text-[#F5EFE6] leading-[1.04] tracking-[-0.03em]">
              Contabilidade e Psicologia com{' '}
              <span className="text-[#D4AF6A]">clareza, presença</span> e cuidado real.
            </h1>

            <p className="hero-enter-delay-1 text-base sm:text-lg text-[#E4DAC9] leading-relaxed max-w-[58ch]">
              No Centro de Nova Iguaçu, reunimos orientação contábil segura para empresas e
              acolhimento psicológico individualizado no mesmo endereço — com autonomia técnica
              e atendimento direto.
            </p>

            {/* Interactive Area Switcher + Primary Action */}
            <div className="hero-enter-delay-2 space-y-4 pt-2">
              <div
                role="group"
                aria-label="Escolha a área para atendimento imediato"
                className="inline-flex p-1 rounded-xl bg-[#2A241E] border border-[#C6A15B]/35"
              >
                <button
                  type="button"
                  onClick={() => setArea('contabilidade')}
                  aria-pressed={area === 'contabilidade'}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                    area === 'contabilidade'
                      ? 'bg-[#C6A15B] text-[#181512]'
                      : 'text-[#E4DAC9] hover:text-[#F5EFE6]'
                  }`}
                >
                  Contabilidade
                </button>
                <button
                  type="button"
                  onClick={() => setArea('psicologia')}
                  aria-pressed={area === 'psicologia'}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                    area === 'psicologia'
                      ? 'bg-[#C6A15B] text-[#181512]'
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
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#C6A15B] text-[#181512] text-sm font-bold hover:bg-[#D4AF6A] transition-colors duration-200 shadow-editorial cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#181512]" />
                  <span>
                    Falar com {area === 'contabilidade' ? 'Contabilidade' : 'Psicologia'}
                  </span>
                </a>

                <a
                  href="#contato"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl border border-[#C6A15B]/60 text-[#F5EFE6] bg-[#2A241E]/75 hover:bg-[#3A3128] text-sm font-semibold transition-colors duration-200 cursor-pointer"
                >
                  <span>Enviar mensagem</span>
                  <ArrowDownRight className="w-4 h-4 text-[#D4AF6A]" />
                </a>
              </div>
            </div>

            {/* Verified Trust & Location Strip */}
            <div className="hero-enter-delay-2 pt-5 border-t border-[#C6A15B]/25 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#D8CCB8]">
              <span className="inline-flex items-center gap-1.5 font-medium text-[#F5EFE6]">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF6A] flex-shrink-0" />
                <span>Rua Otávio Tarquínio, 74 · Sala 201 · Centro, Nova Iguaçu</span>
              </span>
              <span className="inline-flex items-center gap-1.5 tabular-nums">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF6A] flex-shrink-0" />
                <span>CRC RJ &amp; CRP RJ ativos</span>
              </span>
            </div>
          </div>

          {/* Right Column: Clean Office Photograph */}
          <div className="lg:col-span-6">
            <div className="relative max-w-xl mx-auto lg:ml-auto rounded-2xl overflow-hidden border border-[#C6A15B]/35 shadow-editorial bg-[#26201A]">
              <img
                src="./images/office/sala-acolhimento.jpg"
                alt="Sala de atendimento e acolhimento do escritório LN INTEGRA em Nova Iguaçu"
                fetchPriority="high"
                className="w-full h-[360px] sm:h-[450px] object-cover object-center"
              />
              <div className="bg-[#1C1814]/95 border-t border-[#C6A15B]/30 px-6 py-4 flex items-center justify-between gap-4">
                <p className="text-sm text-[#E4DAC9] leading-snug">
                  <span className="font-semibold text-[#F5EFE6]">Sala 201 · Nova Iguaçu — </span>
                  Ambiente preparado para atendimento presencial com discrição e conforto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
