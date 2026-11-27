import React, { useState } from 'react';
import { ArrowUpRight, MessageCircle, X } from 'lucide-react';
import { siteConfig, buildWhatsAppUrl } from '../config/siteConfig';

export const WhatsAppFloatingButton: React.FC = () => {
  const [open, setOpen] = useState(false);

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
          className="w-72 rounded-2xl bg-[#F8F6F0] border border-[#C2A36A]/60 shadow-editorial p-4 space-y-3"
        >
          <div className="flex items-center justify-between border-b border-[#E9E3D9] pb-2.5">
            <div>
              <p className="font-serif text-lg text-[#34322F] leading-none">
                Atendimento WhatsApp
              </p>
              <p className="text-[11px] text-[#766044] mt-1">Escolha a área desejada</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar opções de WhatsApp"
              className="p-1 rounded-md text-[#766044] hover:text-[#34322F]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            <a
              href={accountingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl border border-[#E9E3D9] hover:border-[#C2A36A] bg-[#E9E3D9]/30 transition-colors"
            >
              <div>
                <p className="text-xs font-semibold text-[#34322F]">Contabilidade</p>
                <p className="text-[11px] text-[#766044]">(21) 97974-1307</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#A48650]" />
            </a>

            <a
              href={psychologyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl border border-[#E9E3D9] hover:border-[#C2A36A] bg-[#E9E3D9]/30 transition-colors"
            >
              <div>
                <p className="text-xs font-semibold text-[#34322F]">Psicologia</p>
                <p className="text-[11px] text-[#766044]">(21) 97427-1660</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#A48650]" />
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? 'Fechar WhatsApp' : 'Abrir atendimento via WhatsApp'}
        aria-expanded={open}
        className="group inline-flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#34322F] text-[#F8F6F0] border border-[#C2A36A]/70 shadow-editorial hover:bg-[#766044] transition-all duration-300"
      >
        <MessageCircle className="w-4 h-4 text-[#C2A36A]" />
        <span className="text-xs font-medium tracking-wide hidden sm:inline">WhatsApp</span>
      </button>
    </div>
  );
};
