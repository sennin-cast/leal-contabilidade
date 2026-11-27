import React from 'react';
import { Calculator, HeartHandshake, ArrowUpRight, Check } from 'lucide-react';
import { siteConfig, buildWhatsAppUrl } from '../config/siteConfig';
import { useReveal } from '../hooks/useReveal';

const accountingPillars = [
  'Organização e suporte contábil para a gestão de atividades',
  'Acompanhamento próximo com foco em clareza e conformidade',
  'Orientação técnica conduzida por profissionais com CRC ativo',
];

const psychologyPillars = [
  'Escuta qualificada com foco no bem-estar de cada pessoa',
  'Acolhimento individualizado em ambiente discreto e sereno',
  'Atuação pautada pela ética e sigilo profissional (CRP ativo)',
];

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
            <div className="section-eyebrow">
              <span className="section-eyebrow-line" />
              <span className="section-eyebrow-text">Nossas Áreas de Atuação</span>
            </div>
            <h2 className="section-heading">
              Duas especialidades independentes, unidas pelo mesmo padrão de cuidado.
            </h2>
          </div>
          <p className="text-sm text-[#5C4A33] max-w-sm leading-relaxed">
            Atuação dedicada em cada frente, preservando a autonomia técnica e a identidade
            acolhedora da LN INTEGRA.
          </p>
        </div>

        {/* Architectural Diptych */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border border-[#B7AEA1]/50 rounded-2xl overflow-hidden bg-[#F8F6F0] shadow-soft">
          {/* 01 — CONTABILIDADE */}
          <article
            id="contabilidade"
            className="p-8 sm:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#E9E3D9]"
          >
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-lg border border-[#C2A36A]/60 bg-[#E9E3D9]/25 flex items-center justify-center text-[#94743E]">
                    <Calculator className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#5C4A33] font-semibold block">
                      Núcleo Empresarial
                    </span>
                    <h3 className="font-serif text-3xl text-[#34322F] font-medium">
                      Contabilidade
                    </h3>
                  </div>
                </div>
                <span
                  aria-hidden="true"
                  className="font-serif text-4xl sm:text-5xl text-[#C2A36A]/45 font-light leading-none select-none"
                >
                  01
                </span>
              </div>

              <p className="text-base text-[#5C4A33] leading-relaxed">
                Organização, orientação e suporte contábil para quem busca mais tranquilidade e
                segurança na gestão de suas atividades.
              </p>

              <ul className="space-y-3 pt-2">
                {accountingPillars.map((pillar) => (
                  <li key={pillar} className="flex items-start gap-3 text-sm text-[#34322F]">
                    <span className="w-5 h-5 rounded-full bg-[#E9E3D9]/70 border border-[#C2A36A]/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#94743E]" />
                    </span>
                    <span>{pillar}</span>
                  </li>
                ))}
              </ul>

              <p className="text-xs text-[#5C4A33] pt-2 border-t border-[#E9E3D9]/80">
                Consulte diretamente a equipe contábil para alinhar o escopo ideal para a sua
                demanda.
              </p>
            </div>

            <div className="pt-8">
              <a
                href={accountingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group w-full sm:w-auto"
              >
                <span>Falar com a equipe de Contabilidade</span>
                <ArrowUpRight className="w-4 h-4 text-[#C2A36A] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
                  <div className="w-11 h-11 rounded-lg border border-[#C2A36A]/60 bg-[#F8F6F0] flex items-center justify-center text-[#94743E]">
                    <HeartHandshake className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#5C4A33] font-semibold block">
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

              <p className="text-base text-[#5C4A33] leading-relaxed">
                Um espaço de escuta, acolhimento e cuidado, com atenção à individualidade e ao
                bem-estar de cada pessoa.
              </p>

              <ul className="space-y-3 pt-2">
                {psychologyPillars.map((pillar) => (
                  <li key={pillar} className="flex items-start gap-3 text-sm text-[#34322F]">
                    <span className="w-5 h-5 rounded-full bg-[#F8F6F0] border border-[#C2A36A]/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#94743E]" />
                    </span>
                    <span>{pillar}</span>
                  </li>
                ))}
              </ul>

              <p className="text-xs text-[#5C4A33] pt-2 border-t border-[#E9E3D9]">
                Modalidades e horários de atendimento confirmados diretamente com a profissional
                responsável.
              </p>
            </div>

            <div className="pt-8">
              <a
                href={psychologyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary group w-full sm:w-auto"
              >
                <span>Falar com a equipe de Psicologia</span>
                <ArrowUpRight className="w-4 h-4 text-[#94743E] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
