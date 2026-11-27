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
      className={`py-20 sm:py-28 bg-[#D8CCB8] border-t border-[#C4B69F] reveal-section ${
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
          <p className="text-sm text-[#3A3128] max-w-sm leading-relaxed font-medium">
            Atuação dedicada em cada frente, preservando a autonomia técnica e a identidade
            acolhedora da LN INTEGRA.
          </p>
        </div>

        {/* Architectural Diptych */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border border-[#B5A58C] rounded-2xl overflow-hidden bg-[#EDE5D8] shadow-soft">
          {/* 01 — CONTABILIDADE */}
          <article
            id="contabilidade"
            className="p-8 sm:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#C4B69F]"
          >
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-lg border border-[#7A5B22]/45 bg-[#E4DAC9] flex items-center justify-center text-[#7A5B22]">
                    <Calculator className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#7A5B22] font-bold block">
                      Núcleo Empresarial
                    </span>
                    <h3 className="font-serif text-3xl text-[#1A1714] font-semibold">
                      Contabilidade
                    </h3>
                  </div>
                </div>
                <span
                  aria-hidden="true"
                  className="font-serif text-4xl sm:text-5xl text-[#7A5B22]/35 font-light leading-none select-none"
                >
                  01
                </span>
              </div>

              <p className="text-base text-[#3A3128] leading-relaxed">
                Organização, orientação e suporte contábil para quem busca mais tranquilidade e
                segurança na gestão de suas atividades.
              </p>

              <ul className="space-y-3 pt-2">
                {accountingPillars.map((pillar) => (
                  <li key={pillar} className="flex items-start gap-3 text-sm text-[#1A1714] font-medium">
                    <span className="w-5 h-5 rounded-full bg-[#E4DAC9] border border-[#7A5B22]/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#7A5B22]" />
                    </span>
                    <span>{pillar}</span>
                  </li>
                ))}
              </ul>

              <p className="text-xs text-[#3A3128] pt-3 border-t border-[#C4B69F]/80">
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
                <ArrowUpRight className="w-4 h-4 text-[#C6A15B] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </article>

          {/* 02 — PSICOLOGIA */}
          <article
            id="psicologia"
            className="p-8 sm:p-12 flex flex-col justify-between bg-[#E4DAC9]/75"
          >
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-lg border border-[#7A5B22]/45 bg-[#EDE5D8] flex items-center justify-center text-[#7A5B22]">
                    <HeartHandshake className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#7A5B22] font-bold block">
                      Núcleo Clínico
                    </span>
                    <h3 className="font-serif text-3xl text-[#1A1714] font-semibold">
                      Psicologia
                    </h3>
                  </div>
                </div>
                <span
                  aria-hidden="true"
                  className="font-serif text-4xl sm:text-5xl text-[#7A5B22]/35 font-light leading-none select-none"
                >
                  02
                </span>
              </div>

              <p className="text-base text-[#3A3128] leading-relaxed">
                Um espaço de escuta, acolhimento e cuidado, com atenção à individualidade e ao
                bem-estar de cada pessoa.
              </p>

              <ul className="space-y-3 pt-2">
                {psychologyPillars.map((pillar) => (
                  <li key={pillar} className="flex items-start gap-3 text-sm text-[#1A1714] font-medium">
                    <span className="w-5 h-5 rounded-full bg-[#EDE5D8] border border-[#7A5B22]/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#7A5B22]" />
                    </span>
                    <span>{pillar}</span>
                  </li>
                ))}
              </ul>

              <p className="text-xs text-[#3A3128] pt-3 border-t border-[#C4B69F]">
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
                <ArrowUpRight className="w-4 h-4 text-[#7A5B22] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
