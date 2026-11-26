import React from 'react';
import { ArrowDownRight, MessageCircle } from 'lucide-react';
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
      {/* Subtle editorial background accent */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-1/2 h-full bg-[#E9E3D9]/45 -z-0 hidden lg:block"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Editorial Copy */}
          <div className="lg:col-span-6 space-y-8">
            {/* Official Logo Seal */}
            <div className="inline-flex items-center gap-3.5 px-4 py-2 rounded-full border border-[#C2A36A]/45 bg-[#F8F6F0]">
              <img
                src={siteConfig.brand.logoPath}
                alt="LN INTEGRA"
                className="w-7 h-7 rounded-full object-cover scale-125 border border-[#C2A36A]/50"
              />
              <span className="text-xs tracking-[0.2em] uppercase text-[#766044] font-semibold">
                LN INTEGRA • Contabilidade e Psicologia
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.65rem] font-medium text-[#34322F] leading-[1.08] tracking-tight">
              Excelência profissional.{' '}
              <span className="italic text-[#A48650] font-normal">
                Cuidado em cada detalhe.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#766044] leading-relaxed max-w-xl font-normal">
              {siteConfig.brand.description}
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#atuacao"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-[#34322F] text-[#F8F6F0] text-sm font-medium hover:bg-[#766044] transition-all duration-300 shadow-soft"
              >
                <span>Conheça nossos serviços</span>
                <ArrowDownRight className="w-4 h-4 text-[#C2A36A]" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg border border-[#C2A36A] text-[#34322F] bg-[#F8F6F0] hover:bg-[#E9E3D9]/60 text-sm font-medium transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 text-[#A48650]" />
                <span>Entre em contato</span>
              </a>
            </div>

            {/* Subtle Location Line */}
            <div className="pt-6 border-t border-[#E9E3D9] flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#766044]">
              <span>Centro, Nova Iguaçu — RJ</span>
              <span className="w-1 h-1 rounded-full bg-[#C2A36A]" />
              <span>Atendimento presencial e sob agendamento</span>
            </div>
          </div>

          {/* Right Column: Real Office Photography */}
          <div className="lg:col-span-6">
            <div className="relative max-w-xl mx-auto lg:ml-auto">
              <div className="rounded-2xl overflow-hidden border border-[#E9E3D9] shadow-editorial bg-[#E9E3D9]">
                <img
                  src="./images/office/recepcao-logo.jpg"
                  alt="Recepção do escritório LN INTEGRA com identidade visual em dourado"
                  className="w-full h-[420px] sm:h-[500px] object-cover object-center"
                />
              </div>

              {/* Minimal Floating Caption */}
              <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-left-6 bg-[#F8F6F0]/95 backdrop-blur-sm border border-[#C2A36A]/45 rounded-xl px-5 py-4 shadow-soft max-w-xs">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#A48650] font-semibold">
                  Nosso Espaço
                </p>
                <p className="font-serif text-lg text-[#34322F] mt-0.5 leading-snug">
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
