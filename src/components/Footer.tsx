import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { siteConfig, buildWhatsAppUrl } from '../config/siteConfig';
import { BrandMark } from './BrandMark';

export const Footer: React.FC = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    document.body.style.overflow = privacyOpen ? 'hidden' : '';
    if (privacyOpen) {
      closeRef.current?.focus();
    } else if (document.activeElement === closeRef.current) {
      triggerRef.current?.focus();
    }
    if (!privacyOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPrivacyOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [privacyOpen]);

  const mainWhatsappUrl = buildWhatsAppUrl(
    siteConfig.contact.mainWhatsappNumber,
    'Olá! Gostaria de falar com a LN INTEGRA.'
  );

  return (
    <>
      <footer className="surface-dark bg-[#181512] border-t border-[#C6A15B]/25 pt-14 pb-10 text-[#D8CCB8]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#C6A15B]/20">
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3.5">
                <BrandMark className="w-12 h-12 rounded-full flex-shrink-0 shadow-soft" />
                <div>
                  <div
                    translate="no"
                    className="font-display text-xl font-bold tracking-[0.04em] text-[#F5EFE6] leading-none"
                  >
                    <span className="text-[#D4AF6A]">LN</span> INTEGRA
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#D4AF6A] mt-1.5">
                    Contabilidade &amp; Psicologia
                  </div>
                </div>
              </div>
              <p className="text-sm leading-relaxed max-w-sm text-[#D8CCB8]">
                Confiança, organização e atendimento acolhedor no Centro de Nova Iguaçu - RJ.
              </p>
            </div>

            <div className="md:col-span-3 space-y-3">
              <h3 className="font-display text-base font-semibold text-[#F5EFE6]">Navegação</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#inicio" className="hover:text-[#D4AF6A] transition-colors cursor-pointer">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#sobre" className="hover:text-[#D4AF6A] transition-colors cursor-pointer">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#atuacao" className="hover:text-[#D4AF6A] transition-colors cursor-pointer">
                    Áreas de atuação
                  </a>
                </li>
                <li>
                  <a href="#jornada" className="hover:text-[#D4AF6A] transition-colors cursor-pointer">
                    Como funciona
                  </a>
                </li>
                <li>
                  <a href="#espaco" className="hover:text-[#D4AF6A] transition-colors cursor-pointer">
                    Nosso espaço
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-[#D4AF6A] transition-colors cursor-pointer">
                    Dúvidas frequentes
                  </a>
                </li>
                <li>
                  <a href="#contato" className="hover:text-[#D4AF6A] transition-colors cursor-pointer">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-4 space-y-3">
              <h3 className="font-display text-base font-semibold text-[#F5EFE6]">Contato</h3>
              <p className="text-sm leading-relaxed">
                {siteConfig.contact.address.fullFormatted}
              </p>
              <p className="text-sm tabular-nums">
                WhatsApp:{' '}
                <a
                  href={mainWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#F5EFE6] hover:text-[#D4AF6A] underline underline-offset-4 transition-colors cursor-pointer"
                >
                  {siteConfig.contact.mainWhatsappDisplay}
                </a>
              </p>
              <button
                ref={triggerRef}
                type="button"
                onClick={() => setPrivacyOpen(true)}
                className="text-xs text-[#D4AF6A] underline underline-offset-4 hover:text-[#F5EFE6] transition-colors cursor-pointer"
              >
                Política de Privacidade
              </button>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#C4B69F]">
            <p>© {new Date().getFullYear()} LN INTEGRA — Contabilidade e Psicologia. Todos os direitos reservados.</p>
            <p>Nova Iguaçu — Rio de Janeiro</p>
          </div>
        </div>
      </footer>

      {privacyOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Política de Privacidade"
          className="fixed inset-0 z-50 bg-[#181512]/75 backdrop-blur-sm flex items-center justify-center p-4 overscroll-contain"
          onClick={() => setPrivacyOpen(false)}
        >
          <div
            className="modal-enter bg-[#EDE5D8] border border-[#C4B69F] rounded-2xl max-w-lg w-full p-7 space-y-4 shadow-editorial"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#C4B69F] pb-3">
              <h3 className="font-display text-2xl font-semibold text-[#181512]">
                Política de Privacidade
              </h3>
              <button
                ref={closeRef}
                type="button"
                onClick={() => setPrivacyOpen(false)}
                aria-label="Fechar Política de Privacidade"
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-[#3A3128] hover:text-[#181512] hover:bg-[#D8CCB8] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
            <p className="text-sm text-[#3A3128] leading-relaxed">
              A LN INTEGRA — Contabilidade e Psicologia respeita a privacidade de seus visitantes e
              trata quaisquer informações de contato fornecidas exclusivamente para fins de
              atendimento institucional, em conformidade com a Lei Geral de Proteção de Dados (LGPD).
            </p>
          </div>
        </div>
      )}
    </>
  );
};
