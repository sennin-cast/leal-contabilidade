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
      className={`py-20 sm:py-28 bg-[#E9E3D9]/50 border-t border-[#E9E3D9] reveal-section ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-4">
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

        {/* Two Independent Complementary Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* CONTABILIDADE */}
          <article
            id="contabilidade"
            className="bg-[#F8F6F0] border border-[#E9E3D9] rounded-2xl p-8 sm:p-10 flex flex-col justify-between transition-colors hover:border-[#C2A36A]/60"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-6 border-b border-[#E9E3D9]">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-lg border border-[#C2A36A]/50 flex items-center justify-center text-[#A48650]">
                    <Calculator className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#766044] font-semibold block">
                      Área 01
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#34322F] font-medium">
                      Contabilidade
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-base text-[#766044] leading-relaxed">
                Organização, orientação e suporte contábil para quem busca mais tranquilidade e
                segurança na gestão de suas atividades.
              </p>

              {/* Reserved structured space for confirmed services */}
              <div className="rounded-xl border border-dashed border-[#B7AEA1]/70 bg-[#E9E3D9]/25 p-5 space-y-2">
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
                className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 py-3.5 rounded-lg bg-[#34322F] text-[#F8F6F0] text-sm font-medium hover:bg-[#766044] transition-colors"
              >
                <span>Fale com a equipe de Contabilidade</span>
                <ArrowUpRight className="w-4 h-4 text-[#C2A36A]" />
              </a>
            </div>
          </article>

          {/* PSICOLOGIA */}
          <article
            id="psicologia"
            className="bg-[#F8F6F0] border border-[#E9E3D9] rounded-2xl p-8 sm:p-10 flex flex-col justify-between transition-colors hover:border-[#C2A36A]/60"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-6 border-b border-[#E9E3D9]">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-lg border border-[#C2A36A]/50 flex items-center justify-center text-[#A48650]">
                    <HeartHandshake className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#766044] font-semibold block">
                      Área 02
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#34322F] font-medium">
                      Psicologia
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-base text-[#766044] leading-relaxed">
                Um espaço de escuta, acolhimento e cuidado, com atenção à individualidade e ao
                bem-estar de cada pessoa.
              </p>

              {/* Reserved structured space for confirmed modalities */}
              <div className="rounded-xl border border-dashed border-[#B7AEA1]/70 bg-[#E9E3D9]/25 p-5 space-y-2">
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
                className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 py-3.5 rounded-lg border border-[#C2A36A] text-[#34322F] bg-[#F8F6F0] hover:bg-[#C2A36A] hover:text-[#F8F6F0] text-sm font-medium transition-colors"
              >
                <span>Fale com a equipe de Psicologia</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
