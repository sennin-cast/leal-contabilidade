import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: 'Como funciona a integração entre Contabilidade e Psicologia na LN INTEGRA?',
    answer:
      'A LN INTEGRA reúne profissionais de Contabilidade e Psicologia em um mesmo endereço institucional no Centro de Nova Iguaçu. Cada área atua com total independência técnica, sigilo e autonomia profissional, compartilhando o mesmo padrão de acolhimento e organização.',
  },
  {
    question: 'Onde fica o escritório e como funciona o atendimento presencial?',
    answer:
      'Estamos localizados na Rua Otávio Tarquínio, 74 — Sala 201, Centro, Nova Iguaçu - RJ. Os atendimentos presenciais são realizados mediante agendamento prévio pelo WhatsApp ou formulário de contato.',
  },
  {
    question: 'Como entro em contato diretamente com a equipe de Contabilidade?',
    answer:
      'Você pode falar diretamente pelo WhatsApp (21) 97974-1307 ou (21) 97497-7021, ou selecionar a opção "Contabilidade" no formulário de contato desta página para enviar sua mensagem já direcionada.',
  },
  {
    question: 'Como agendar atendimento na área de Psicologia?',
    answer:
      'Para informações sobre disponibilidade, modalidades e agendamento em Psicologia, entre em contato diretamente pelo WhatsApp (21) 97427-1660 ou selecione "Psicologia" nos canais de atendimento do site.',
  },
  {
    question: 'Os atendimentos são conduzidos por profissionais habilitados?',
    answer:
      'Sim. A equipe é composta por contadores registrados no CRC RJ (Nilson Machado Eherhardt Santos — CRC RJ 124838-O1 e Lucas Heckert Leal — CRC RJ 119264-O8) e psicóloga registrada no CRP RJ (Larissa Moura Rodrigues — CRP RJ 05/66262).',
  },
];

export const FaqSection: React.FC = () => {
  const { ref, isVisible } = useReveal<HTMLElement>();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      ref={ref}
      className={`py-20 sm:py-28 bg-[#E9E3D9]/40 border-t border-[#E9E3D9] reveal-section ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-8 bg-[#C2A36A]" />
            <span className="section-eyebrow-text">Dúvidas Frequentes</span>
            <span className="h-px w-8 bg-[#C2A36A]" />
          </div>
          <h2 className="section-heading">Perguntas comuns sobre nosso atendimento</h2>
          <p className="text-sm sm:text-base text-[#5C4A33] leading-relaxed">
            Informações essenciais sobre localização, agendamento e atuação da LN INTEGRA.
          </p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            const panelId = `faq-panel-${idx}`;
            const buttonId = `faq-button-${idx}`;

            return (
              <div
                key={item.question}
                className="bg-[#F8F6F0] border border-[#E9E3D9] rounded-xl overflow-hidden transition-colors hover:border-[#C2A36A]/60"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-serif text-xl sm:text-[1.35rem] text-[#34322F] font-medium leading-snug">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#94743E] flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="px-6 pb-5 pt-0 text-sm text-[#5C4A33] leading-relaxed border-t border-[#E9E3D9]/60"
                >
                  <p className="pt-4">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
