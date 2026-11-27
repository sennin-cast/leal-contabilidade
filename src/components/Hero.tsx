import React from 'react';
import { ArrowDownRight, MapPin, MessageCircle, ShieldCheck } from 'lucide-react';
import { siteConfig, buildWhatsAppUrl } from '../config/siteConfig';

export const Hero: React.FC = () => {
  const whatsappUrl = buildWhatsAppUrl(
    siteConfig.contact.mainWhatsappNumber,
    'Olá! Gostaria de falar com a equipe da LN INTEGRA sobre atendimento.'
  );

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] pt-28 pb-16 sm:pt-32 sm:pb-24 flex items-center bg-[#1E1915] text-[#F5EFE6] overflow-hidden"
    >
      {/* Blurred Watermark Background: Professional at Desk */}
      <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="./images/hero-profissional-mesa.jpg"
          alt=""
          className="w-full h-full object-cover object-center scale-105 blur-[3px] opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1612]/95 via-[#1E1915]/85 to-[#221D18]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1612]/90 via-transparent to-[#1A1612]/55" />
      </div>

      {/* Vertical editorial coordinate gutter */}
      <div
        aria-hidden="true"
        className="hidden xl:flex fixed left-5 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-4 pointer-events-none select-none"
      >
        <span className="h-12 w-px bg-[#C6A15B]/70" />
        <span className="vertical-editorial text-[10px] tracking-[0.28em] uppercase text-[#C6A15B] font-semibold">
          LN INTEGRA · NOVA IGUAÇU
        </span>
        <span className="h-12 w-px bg-[#C6A15B]/70" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left Column: High-Contrast Editorial Typography & CTAs */}
          <div className="lg:col-span-6 space-y-7">
            <div className="hero-enter inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#C6A15B]/55 bg-[#2A231D]/85 backdrop-blur-sm">
              <img
                src={siteConfig.brand.logoPath}
                alt="LN INTEGRA"
                className="w-6 h-6 rounded-full object-cover scale-125 border border-[#C6A15B]/60"
              />
              <span className="text-[11px] tracking-[0.2em] uppercase text-[#E4DAC9] font-semibold">
                LN INTEGRA · Nova Iguaçu - RJ
              </span>
            </div>

            <h1 className="hero-enter-delay-1 font-serif text-4xl sm:text-5xl lg:text-[3.75rem] font-medium text-[#F5EFE6] leading-[1.06] tracking-tight">
              Segurança contábil e{' '}
              <span className="italic text-[#D4AF6A] font-normal">
                cuidado humano
              </span>{' '}
              em cada detalhe.
            </h1>

            <p className="hero-enter-delay-2 text-base sm:text-lg text-[#E4DAC9] leading-relaxed max-w-xl font-normal">
              Contabilidade e Psicologia reunidas em um espaço estruturado no Centro de Nova Iguaçu,
              unindo rigor técnico, organização e atendimento acolhedor para empresas e pessoas.
            </p>

            {/* Primary CTAs */}
            <div className="hero-enter-delay-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#C6A15B] text-[#1A1714] text-sm font-bold hover:bg-[#D4AF6A] transition-colors duration-200 shadow-editorial cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#1A1714]" />
                <span>Agendar atendimento</span>
              </a>

              <a
                href="#atuacao"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg border border-[#C6A15B]/65 text-[#F5EFE6] bg-[#2A231D]/75 hover:bg-[#3A3128] text-sm font-semibold transition-colors duration-200 cursor-pointer"
              >
                <span>Conheça nossas áreas</span>
                <ArrowDownRight className="w-4 h-4 text-[#D4AF6A]" />
              </a>
            </div>

            {/* Verified Trust & Location Strip */}
            <div className="hero-enter-delay-2 pt-6 border-t border-[#C6A15B]/25 space-y-2.5 text-xs text-[#D8CCB8]">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="inline-flex items-center gap-1.5 font-medium text-[#F5EFE6]">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF6A] flex-shrink-0" />
                  <span>Rua Otávio Tarquínio, 74 · Sala 201 · Centro, Nova Iguaçu</span>
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF6A] flex-shrink-0" />
                  <span>Registros CRC RJ &amp; CRP RJ</span>
                </span>
                <span aria-hidden="true" className="w-1 h-1 rounded-full bg-[#C6A15B]" />
                <span>Atendimento presencial e sob agendamento</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Office Photograph */}
          <div className="lg:col-span-6">
            <div className="relative max-w-xl mx-auto lg:ml-auto">
              <div className="rounded-2xl overflow-hidden border border-[#C6A15B]/35 shadow-editorial bg-[#2A231D]">
                <img
                  src="./images/office/sala-acolhimento.jpg"
                  alt="Sala de atendimento e acolhimento do escritório LN INTEGRA em Nova Iguaçu"
                  fetchPriority="high"
                  className="w-full h-[380px] sm:h-[460px] object-cover object-center"
                />
                <div className="bg-[#221D18]/95 border-t border-[#C6A15B]/30 px-6 py-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF6A] font-semibold">
                      Sala 201 · Centro, Nova Iguaçu
                    </p>
                    <p className="font-serif text-lg text-[#F5EFE6] mt-0.5 leading-snug">
                      Ambiente preparado para receber você com tranquilidade e discrição.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
