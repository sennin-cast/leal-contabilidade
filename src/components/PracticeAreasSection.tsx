import React from 'react';
import { Calculator, HeartHandshake, ArrowUpRight } from 'lucide-react';
import { siteConfig, buildWhatsAppUrl } from '../config/siteConfig';
import { useReveal } from '../hooks/useReveal';

export const PracticeAreasSection: React.FC = () => {
  const { ref, isVisible } = useReveal<HTMLElement>();

  const accountingUrl = buildWhatsAppUrl(
    siteConfig.contact.accountingWhatsappNumber,
    'Olá! Gostaria de falar com a equipe de Contabilidade da LN INTEGRA.'
  );

  const psychologyUrl = buildWhatsAppUrl(
    siteConfig.contact.psychologyWhatsappNumber,
    'Olá! Gostaria de falar com a equipe de Psicologia da LN INTEGRA.'
  );

  return (
    <section
      id="atuacao"
      ref={ref}
      className={`py-20 sm:py-28 bg-[#E9E3D9]/55 border-t border-[#E9E3D9] reveal-section ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#C2A36A]" />
              <span className="text-xs uppercase tracking-[0.22em] text-[#A48650] font-semibold">
                Nossas Áreas de Atuação
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-medium text-[#34322F] leading-[1.15]">
              Duas especialidades independentes, unidas pelo mesmo padrão de cuidado.
            </h2>
          </div>
          <p className="text-sm text-[#766044] max-w-sm leading-relaxed">
            Atuação dedicada em cada frente, preservando a autonomia técnica e a identidade
            acolhedora da LN INTEGRA.
          </p>
        </div>

        {/* Architectural Diptych */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border border-[#B7AEA1]/45 rounded-2xl overflow-hidden bg-[#F8F6F0] shadow-soft">
          {/* 01 — CONTABILIDADE */}
          <article
            id="contabilidade"
            className="p-8 sm:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#E9E3D9]"
          >
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-lg border border-[#C2A36A]/55 flex items-center justify-center text-[#A48650]">
                    <Calculator className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#766044] font-semibold block">
                      Núcleo Empresarial
                    </span>
                    <h3 className="font-serif text-3xl text-[#34322F] font-medium">
                      Contabilidade
                    </h3>
                  </div>
                </div>
                <span
                  aria-hidden="true"
                  className="font-serif text-4xl sm:text-5xl text-[#C2A36A]/40 font-light leading-none select-none"
                >
                  01
                </span>
              </div>

              <p className="text-base text-[#766044] leading-relaxed">
                Organização, orientação e suporte contábil para quem busca mais tranquilidade e
                segurança na gestão de suas atividades.
              </p>

              <div className="rounded-xl border border-dashed border-[#B7AEA1]/75 bg-[#E9E3D9]/25 p-5 space-y-2">
                <p className="text-xs uppercase tracking-[0.16em] text-[#766044] font-semibold">
                  Escopo de Serviços Contábeis
                </p>
                <p className="text-sm text-[#766044] leading-relaxed">
                  Espaço dedicado ao detalhamento oficial dos serviços contábeis oferecidos pela
                  LN INTEGRA, a ser preenchido mediante confirmação institucional da equipe.
                </p>
              </div>
            </div>

            <div className="pt-8">
              <a
                href={accountingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 py-3.5 rounded-lg bg-[#34322F] text-[#F8F6F0] text-sm font-medium hover:bg-[#766044] transition-colors"
              >
                <span>Fale com a equipe de Contabilidade</span>
                <ArrowUpRight className="w-4 h-4 text-[#C2A36A] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </article>

          {/* 02 — PSICOLOGIA */}
          <article
            id="psicologia"
            className="p-8 sm:p-12 flex flex-col justify-between bg-[#E9E3D9]/25"
          >
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-lg border border-[#C2A36A]/55 bg-[#F8F6F0] flex items-center justify-center text-[#A48650]">
                    <HeartHandshake className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#766044] font-semibold block">
                      Núcleo Clínico
                    </span>
                    <h3 className="font-serif text-3xl text-[#34322F] font-medium">
                      Psicologia
                    </h3>
                  </div>
                </div>
                <span
                  aria-hidden="true"
                  className="font-serif text-4xl sm:text-5xl text-[#C2A36A]/45 font-light leading-none select-none"
                >
                  02
                </span>
              </div>

              <p className="text-base text-[#766044] leading-relaxed">
                Um espaço de escuta, acolhimento e cuidado, com atenção à individualidade e ao
                bem-estar de cada pessoa.
              </p>

              <div className="rounded-xl border border-dashed border-[#B7AEA1]/75 bg-[#F8F6F0]/75 p-5 space-y-2">
                <p className="text-xs uppercase tracking-[0.16em] text-[#766044] font-semibold">
                  Modalidades de Atendimento
                </p>
                <p className="text-sm text-[#766044] leading-relaxed">
                  Espaço dedicado ao detalhamento das modalidades e formatos de atendimento
                  psicológico, a ser preenchido conforme confirmação da profissional responsável.
                </p>
              </div>
            </div>

            <div className="pt-8">
              <a
                href={psychologyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 py-3.5 rounded-lg border border-[#C2A36A] text-[#34322F] bg-[#F8F6F0] hover:bg-[#C2A36A] hover:text-[#F8F6F0] text-sm font-medium transition-colors"
              >
                <span>Fale com a equipe de Psicologia</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
