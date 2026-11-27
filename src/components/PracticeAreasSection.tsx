import React, { useState } from 'react';
import { ArrowUpRight, Calculator, Check, HeartHandshake } from 'lucide-react';
import { siteConfig, buildWhatsAppUrl } from '../config/siteConfig';

type PracticeKey = 'contabilidade' | 'psicologia';

const areasData: Record<
  PracticeKey,
  {
    title: string;
    subtitle: string;
    description: string;
    pillars: string[];
    topics: { label: string; message: string }[];
    whatsappNumber: string;
    ctaLabel: string;
    note: string;
  }
> = {
  contabilidade: {
    title: 'Contabilidade',
    subtitle: 'Organização, orientação e conformidade para empresas e atividades profissionais.',
    description:
      'Suporte contábil direto com os responsáveis pelo escritório, focado em clareza nas decisões, acompanhamento próximo e tranquilidade fiscal.',
    pillars: [
      'Orientação e suporte contábil para gestão de atividades',
      'Acompanhamento próximo com foco em conformidade e clareza',
      'Atendimento conduzido por contadores com CRC RJ ativo',
    ],
    topics: [
      {
        label: 'Acompanhar minha empresa',
        message: 'Olá! Gostaria de conversar sobre acompanhamento contábil para minha empresa.',
      },
      {
        label: 'Tirar dúvida contábil',
        message: 'Olá! Gostaria de uma orientação inicial com a equipe de Contabilidade.',
      },
      {
        label: 'Agendar visita ao escritório',
        message: 'Olá! Gostaria de agendar uma conversa presencial na área de Contabilidade.',
      },
    ],
    whatsappNumber: siteConfig.contact.accountingWhatsappNumber,
    ctaLabel: 'Falar com a Contabilidade',
    note: 'O escopo detalhado é alinhado diretamente com a equipe contábil conforme a sua necessidade.',
  },
  psicologia: {
    title: 'Psicologia',
    subtitle: 'Escuta qualificada, sigilo e acolhimento em ambiente reservado.',
    description:
      'Atendimento psicológico pautado pela ética profissional e pelo respeito à individualidade, em sala planejada para transmitir serenidade desde a chegada.',
    pillars: [
      'Escuta qualificada com foco no bem-estar de cada pessoa',
      'Acolhimento individualizado em espaço discreto no Centro de Nova Iguaçu',
      'Atuação conduzida por psicóloga registrada no CRP RJ',
    ],
    topics: [
      {
        label: 'Agendar atendimento',
        message: 'Olá! Gostaria de verificar horários e agendar atendimento em Psicologia.',
      },
      {
        label: 'Saber sobre modalidades',
        message: 'Olá! Gostaria de informações sobre as modalidades de atendimento em Psicologia.',
      },
      {
        label: 'Conversa inicial',
        message: 'Olá! Gostaria de conversar sobre atendimento psicológico na LN INTEGRA.',
      },
    ],
    whatsappNumber: siteConfig.contact.psychologyWhatsappNumber,
    ctaLabel: 'Falar com a Psicologia',
    note: 'Disponibilidade e formatos de atendimento confirmados diretamente com a profissional responsável.',
  },
};

export const PracticeAreasSection: React.FC = () => {
  const [active, setActive] = useState<PracticeKey>('contabilidade');
  const current = areasData[active];
  const Icon = active === 'contabilidade' ? Calculator : HeartHandshake;

  const mainUrl = buildWhatsAppUrl(current.whatsappNumber, current.topics[0].message);

  return (
    <section
      id="atuacao"
      className="py-20 sm:py-28 bg-[#D8CCB8] border-t border-[#C4B69F]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <h2 className="section-heading">
              Duas áreas independentes, o mesmo padrão de cuidado.
            </h2>
            <p className="text-base text-[#3A3128] leading-relaxed">
              Selecione a especialidade para ver como atuamos e iniciar o atendimento pelo assunto
              que você precisa.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Selecionar área de atuação"
            className="inline-flex p-1.5 rounded-xl bg-[#EDE5D8] border border-[#C4B69F] self-start lg:self-auto"
          >
            <button
              type="button"
              role="tab"
              aria-selected={active === 'contabilidade'}
              onClick={() => setActive('contabilidade')}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                active === 'contabilidade'
                  ? 'bg-[#1C1814] text-[#F5EFE6]'
                  : 'text-[#3A3128] hover:text-[#181512]'
              }`}
            >
              Contabilidade
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={active === 'psicologia'}
              onClick={() => setActive('psicologia')}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                active === 'psicologia'
                  ? 'bg-[#1C1814] text-[#F5EFE6]'
                  : 'text-[#3A3128] hover:text-[#181512]'
              }`}
            >
              Psicologia
            </button>
          </div>
        </div>

        <div
          role="tabpanel"
          className="rounded-2xl border border-[#B5A58C] bg-[#EDE5D8] p-8 sm:p-12 shadow-soft grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
        >
          {/* Left: Details & Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl border border-[#7A5B22]/45 bg-[#E4DAC9] flex items-center justify-center text-[#7A5B22]">
                <Icon className="w-6 h-6 stroke-[1.75]" />
              </div>
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#181512]">
                  {current.title}
                </h3>
                <p className="text-sm text-[#3A3128]">{current.subtitle}</p>
              </div>
            </div>

            <p className="text-base text-[#3A3128] leading-relaxed max-w-[65ch]">
              {current.description}
            </p>

            <ul className="space-y-3 pt-1">
              {current.pillars.map((pillar) => (
                <li
                  key={pillar}
                  className="flex items-start gap-3 text-sm sm:text-base text-[#181512] font-medium"
                >
                  <span className="w-5 h-5 rounded-full bg-[#E4DAC9] border border-[#7A5B22]/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#7A5B22]" />
                  </span>
                  <span>{pillar}</span>
                </li>
              ))}
            </ul>

            <p className="text-xs text-[#3A3128] pt-3 border-t border-[#C4B69F]">
              {current.note}
            </p>
          </div>

          {/* Right: Direct Action & Topic Starters */}
          <div className="lg:col-span-5 bg-[#E4DAC9] border border-[#C4B69F] rounded-xl p-6 sm:p-7 space-y-5">
            <div className="space-y-1">
              <h4 className="font-display text-xl font-semibold text-[#181512]">
                Inicie pelo assunto desejado
              </h4>
              <p className="text-xs text-[#3A3128]">
                Cada opção abre o WhatsApp com a mensagem já preparada.
              </p>
            </div>

            <div className="space-y-2.5">
              {current.topics.map((topic) => (
                <a
                  key={topic.label}
                  href={buildWhatsAppUrl(current.whatsappNumber, topic.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-[#EDE5D8] border border-[#C4B69F] hover:border-[#7A5B22] text-sm font-medium text-[#181512] transition-colors cursor-pointer"
                >
                  <span>{topic.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#7A5B22] flex-shrink-0" />
                </a>
              ))}
            </div>

            <a
              href={mainUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full"
            >
              <span>{current.ctaLabel}</span>
              <ArrowUpRight className="w-4 h-4 text-[#C6A15B]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
