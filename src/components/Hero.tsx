import React from 'react';
import { ArrowDownRight, MapPin, MessageCircle } from 'lucide-react';
import { siteConfig, buildWhatsAppUrl } from '../config/siteConfig';

export const Hero: React.FC = () => {
  const whatsappUrl = buildWhatsAppUrl(
    siteConfig.contact.mainWhatsappNumber,
    'Olá! Gostaria de saber mais sobre os serviços da LN INTEGRA.'
  );

  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-28 pb-16 sm:pt-32 sm:pb-24 flex items-center bg-[#F8F6F0] overflow-hidden"
    >
      {/* Editorial architectural backdrop */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[46%] h-full bg-[#E9E3D9]/50 -z-0 hidden lg:block"
      />

      {/* Vertical editorial coordinate gutter (Differentiation Anchor) */}
      <div
        aria-hidden="true"
        className="hidden xl:flex fixed left-5 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-4 pointer-events-none select-none"
      >
        <span className="h-12 w-px bg-[#C2A36A]/60" />
        <span className="vertical-editorial text-[10px] tracking-[0.28em] uppercase text-[#766044]/80 font-medium">
          LN INTEGRA · NOVA IGUAÇU
        </span>
        <span className="h-12 w-px bg-[#C2A36A]/60" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left Column: Editorial Typography & CTAs */}
          <div className="lg:col-span-6 space-y-8">
            <div className="hero-enter inline-flex items-center gap-3.5 px-4 py-2 rounded-full border border-[#C2A36A]/50 bg-[#F8F6F0]">
              <img
                src={siteConfig.brand.logoPath}
                alt="LN INTEGRA"
                className="w-7 h-7 rounded-full object-cover scale-125 border border-[#C2A36A]/50"
              />
              <span className="text-[11px] tracking-[0.22em] uppercase text-[#766044] font-semibold">
                LN INTEGRA • Contabilidade e Psicologia
              </span>
            </div>

            <h1 className="hero-enter-delay-1 font-serif text-4xl sm:text-5xl lg:text-[3.85rem] font-medium text-[#34322F] leading-[1.05] tracking-tight">
              Excelência profissional.{' '}
              <span className="italic text-[#A48650] font-normal block sm:inline">
                Cuidado em cada detalhe.
              </span>
            </h1>

            <p className="hero-enter-delay-2 text-base sm:text-lg text-[#766044] leading-relaxed max-w-xl font-normal">
              {siteConfig.brand.description}
            </p>

            {/* Primary CTAs */}
            <div className="hero-enter-delay-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
              <a
                href="#atuacao"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-[#34322F] text-[#F8F6F0] text-sm font-medium hover:bg-[#766044] transition-all duration-300 shadow-soft"
              >
                <span>Conheça nossos serviços</span>
                <ArrowDownRight className="w-4 h-4 text-[#C2A36A] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg border border-[#C2A36A] text-[#34322F] bg-[#F8F6F0] hover:bg-[#E9E3D9]/70 text-sm font-medium transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 text-[#A48650]" />
                <span>Entre em contato</span>
              </a>
            </div>

            {/* Architectural Location Strip */}
            <div className="hero-enter-delay-2 pt-6 border-t border-[#E9E3D9] flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#766044]">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#A48650]" />
                <span>Rua Otávio Tarquínio, 74 · Sala 201 · Centro, Nova Iguaçu</span>
              </span>
              <span className="w-1 h-1 rounded-full bg-[#C2A36A] hidden sm:inline-block" />
              <span>Atendimento presencial e sob agendamento</span>
            </div>
          </div>

          {/* Right Column: Asymmetric Overlapping Architectural Frame */}
          <div className="lg:col-span-6">
            <div className="relative max-w-xl mx-auto lg:ml-auto">
              {/* Primary Real Office Photo */}
              <div className="rounded-2xl overflow-hidden border border-[#E9E3D9] shadow-editorial bg-[#E9E3D9]">
                <img
                  src="./images/office/recepcao-logo.jpg"
                  alt="Recepção do escritório LN INTEGRA com identidade visual em dourado"
                  className="w-full h-[400px] sm:h-[490px] object-cover object-center"
                />
              </div>

              {/* Overlapping Secondary Architectural Detail (Desktop) */}
              <div className="hidden sm:block absolute -top-6 -right-6 w-36 h-44 rounded-xl overflow-hidden border-2 border-[#F8F6F0] shadow-editorial bg-[#E9E3D9]">
                <img
                  src="./images/office/balcao-marmore.jpg"
                  alt="Detalhe da mesa de atendimento em mármore"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Editorial Caption */}
              <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-left-6 bg-[#F8F6F0]/95 backdrop-blur-sm border border-[#C2A36A]/55 rounded-xl px-5 py-4 shadow-soft max-w-xs">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#A48650] font-semibold">
                  Sala 201 · Nova Iguaçu
                </p>
                <p className="font-serif text-lg text-[#34322F] mt-1 leading-snug">
                  Ambiente preparado para receber você com tranquilidade e discrição.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
