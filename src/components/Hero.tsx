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
      className="relative min-h-[92vh] pt-28 pb-16 sm:pt-32 sm:pb-24 flex items-center bg-[#F8F6F0] overflow-hidden"
    >
      {/* Editorial architectural backdrop */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[46%] h-full bg-[#E9E3D9]/55 -z-0 hidden lg:block"
      />

      {/* Vertical editorial coordinate gutter */}
      <div
        aria-hidden="true"
        className="hidden xl:flex fixed left-5 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-4 pointer-events-none select-none"
      >
        <span className="h-12 w-px bg-[#C2A36A]/60" />
        <span className="vertical-editorial text-[10px] tracking-[0.28em] uppercase text-[#5C4A33]/85 font-medium">
          LN INTEGRA · NOVA IGUAÇU
        </span>
        <span className="h-12 w-px bg-[#C2A36A]/60" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left Column: Editorial Typography & CTAs */}
          <div className="lg:col-span-6 space-y-7">
            <div className="hero-enter inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#C2A36A]/55 bg-[#F8F6F0] shadow-soft">
              <img
                src={siteConfig.brand.logoPath}
                alt="LN INTEGRA"
                className="w-6 h-6 rounded-full object-cover scale-125 border border-[#C2A36A]/50"
              />
              <span className="text-[11px] tracking-[0.2em] uppercase text-[#5C4A33] font-semibold">
                LN INTEGRA · Nova Iguaçu - RJ
              </span>
            </div>

            <h1 className="hero-enter-delay-1 font-serif text-4xl sm:text-5xl lg:text-[3.75rem] font-medium text-[#34322F] leading-[1.06] tracking-tight">
              Segurança contábil e{' '}
              <span className="italic text-[#94743E] font-normal">
                cuidado humano
              </span>{' '}
              em cada detalhe.
            </h1>

            <p className="hero-enter-delay-2 text-base sm:text-lg text-[#5C4A33] leading-relaxed max-w-xl font-normal">
              Contabilidade e Psicologia reunidas em um espaço estruturado no Centro de Nova Iguaçu,
              unindo rigor técnico, organização e atendimento acolhedor para empresas e pessoas.
            </p>

            {/* Primary CTAs */}
            <div className="hero-enter-delay-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                <MessageCircle className="w-4 h-4 text-[#C2A36A]" />
                <span>Agendar atendimento</span>
              </a>

              <a
                href="#atuacao"
                className="btn-secondary group"
              >
                <span>Conheça nossas áreas</span>
                <ArrowDownRight className="w-4 h-4 text-[#94743E] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
            </div>

            {/* Verified Trust & Location Strip */}
            <div className="hero-enter-delay-2 pt-6 border-t border-[#E9E3D9] space-y-2.5 text-xs text-[#5C4A33]">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="inline-flex items-center gap-1.5 font-medium text-[#34322F]">
                  <MapPin className="w-3.5 h-3.5 text-[#94743E] flex-shrink-0" />
                  <span>Rua Otávio Tarquínio, 74 · Sala 201 · Centro, Nova Iguaçu</span>
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#94743E] flex-shrink-0" />
                  <span>Registros CRC RJ &amp; CRP RJ</span>
                </span>
                <span aria-hidden="true" className="w-1 h-1 rounded-full bg-[#C2A36A]" />
                <span>Atendimento presencial e sob agendamento</span>
              </div>
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
                  fetchPriority="high"
                  className="w-full h-[380px] sm:h-[480px] object-cover object-center"
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
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#94743E] font-semibold">
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
