import React, { useEffect, useState } from 'react';
import { ArrowUpRight, MessageCircle, X } from 'lucide-react';
import { siteConfig, buildWhatsAppUrl } from '../config/siteConfig';

export const WhatsAppFloatingButton: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const accountingUrl = buildWhatsAppUrl(
    siteConfig.contact.accountingWhatsappNumber,
    'Olá! Gostaria de falar com a equipe de Contabilidade da LN INTEGRA.'
  );
  const psychologyUrl = buildWhatsAppUrl(
    siteConfig.contact.psychologyWhatsappNumber,
    'Olá! Gostaria de falar com a equipe de Psicologia da LN INTEGRA.'
  );

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {open && (
        <div
          role="dialog"
          aria-label="Atendimento rápido via WhatsApp"
          className="w-72 rounded-2xl bg-[#EDE5D8] border border-[#7A5B22]/60 shadow-editorial p-4 space-y-3"
        >
          <div className="flex items-center justify-between border-b border-[#C4B69F] pb-2.5">
            <div>
              <p className="font-serif text-lg font-semibold text-[#1A1714] leading-none">
                Atendimento WhatsApp
              </p>
              <p className="text-[11px] text-[#3A3128] mt-1">Escolha a área desejada</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar opções de WhatsApp"
              className="p-1 rounded-md text-[#3A3128] hover:text-[#1A1714] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            <a
              href={accountingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl border border-[#C4B69F] hover:border-[#7A5B22] bg-[#E4DAC9] transition-colors cursor-pointer"
            >
              <div>
                <p className="text-xs font-bold text-[#1A1714]">Contabilidade</p>
                <p className="text-[11px] text-[#3A3128]">(21) 97974-1307</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#7A5B22]" />
            </a>

            <a
              href={psychologyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl border border-[#C4B69F] hover:border-[#7A5B22] bg-[#E4DAC9] transition-colors cursor-pointer"
            >
              <div>
                <p className="text-xs font-bold text-[#1A1714]">Psicologia</p>
                <p className="text-[11px] text-[#3A3128]">(21) 97427-1660</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#7A5B22]" />
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? 'Fechar WhatsApp' : 'Abrir atendimento via WhatsApp'}
        aria-expanded={open}
        className="group inline-flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#221D18] text-[#F5EFE6] border border-[#C6A15B]/75 shadow-editorial hover:bg-[#3A3128] transition-colors duration-200 cursor-pointer"
      >
        <MessageCircle className="w-4 h-4 text-[#D4AF6A]" />
        <span className="text-xs font-semibold tracking-wide hidden sm:inline">WhatsApp</span>
      </button>
    </div>
  );
};
