import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, MessageCircle } from 'lucide-react';
import { siteConfig, buildWhatsAppUrl } from '../config/siteConfig';

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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const whatsappUrl = buildWhatsAppUrl(
    siteConfig.contact.mainWhatsappNumber,
    'Olá! Tenho uma dúvida sobre o atendimento da LN INTEGRA.'
  );

  return (
    <section
      id="faq"
      className="py-20 sm:py-28 bg-[#D8CCB8] border-t border-[#C4B69F]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Sticky Summary */}
          <div className="lg:col-span-5 space-y-5 lg:sticky lg:top-28">
            <h2 className="section-heading">Dúvidas frequentes</h2>
            <p className="text-base text-[#3A3128] leading-relaxed">
              Respostas rápidas sobre localização, agendamento e atuação da LN INTEGRA em Nova
              Iguaçu.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              <MessageCircle className="w-4 h-4 text-[#C6A15B]" />
              <span>Tirar dúvida no WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 text-[#C6A15B]" />
            </a>
          </div>

          {/* Right Clean Accordion List */}
          <div className="lg:col-span-7 divide-y divide-[#C4B69F] border-y border-[#C4B69F]">
            {faqItems.map((item, idx) => {
              const isOpen = openIndex === idx;
              const panelId = `faq-panel-${idx}`;
              const buttonId = `faq-button-${idx}`;

              return (
                <div key={item.question} className="py-1">
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="w-full py-5 px-2 text-left flex items-center justify-between gap-4 cursor-pointer hover:text-[#7A5B22] transition-colors"
                    >
                      <span className="font-display text-lg sm:text-xl text-[#181512] font-semibold leading-snug">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#7A5B22] flex-shrink-0 transition-transform duration-200 ${
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
                    className="px-2 pb-5 text-sm sm:text-base text-[#3A3128] leading-relaxed"
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
