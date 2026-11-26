import React, { useState } from 'react';
import { X } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const Footer: React.FC = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <>
      <footer className="bg-[#E9E3D9]/55 border-t border-[#E9E3D9] pt-14 pb-10 text-[#766044]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#B7AEA1]/40">
            {/* Brand */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full overflow-hidden border border-[#C2A36A]/60 bg-[#F8F6F0]">
                  <img
                    src={siteConfig.brand.logoPath}
                    alt="Logo LN INTEGRA"
                    className="w-full h-full object-cover scale-125"
                  />
                </div>
                <div>
                  <div className="font-serif text-xl font-semibold tracking-[0.14em] text-[#34322F]">
                    LN INTEGRA
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#766044]">
                    Contabilidade e Psicologia
                  </div>
                </div>
              </div>
              <p className="text-sm leading-relaxed max-w-sm">
                LN INTEGRA — Contabilidade e Psicologia. Confiança, profissionalismo e acolhimento.
              </p>
            </div>

            {/* Navigation */}
            <div className="md:col-span-3 space-y-3">
              <h3 className="font-serif text-lg text-[#34322F]">Navegação</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#inicio" className="hover:text-[#A48650] transition-colors">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#sobre" className="hover:text-[#A48650] transition-colors">
                    Sobre nós
                  </a>
                </li>
                <li>
                  <a href="#contabilidade" className="hover:text-[#A48650] transition-colors">
                    Contabilidade
                  </a>
                </li>
                <li>
                  <a href="#psicologia" className="hover:text-[#A48650] transition-colors">
                    Psicologia
                  </a>
                </li>
                <li>
                  <a href="#espaco" className="hover:text-[#A48650] transition-colors">
                    Nosso espaço
                  </a>
                </li>
                <li>
                  <a href="#contato" className="hover:text-[#A48650] transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Contacts */}
            <div className="md:col-span-4 space-y-3">
              <h3 className="font-serif text-lg text-[#34322F]">Contato</h3>
              <p className="text-sm leading-relaxed">
                {siteConfig.contact.address.fullFormatted}
              </p>
              <p className="text-sm">WhatsApp: {siteConfig.contact.mainWhatsappDisplay}</p>
              <button
                type="button"
                onClick={() => setPrivacyOpen(true)}
                className="text-xs underline underline-offset-4 hover:text-[#34322F] transition-colors"
              >
                Política de Privacidade
              </button>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <p>© {new Date().getFullYear()} LN INTEGRA — Contabilidade e Psicologia. Todos os direitos reservados.</p>
            <p className="text-[#766044]">Nova Iguaçu — Rio de Janeiro</p>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {privacyOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Política de Privacidade"
          className="fixed inset-0 z-50 bg-[#34322F]/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setPrivacyOpen(false)}
        >
          <div
            className="bg-[#F8F6F0] border border-[#E9E3D9] rounded-2xl max-w-lg w-full p-7 space-y-4 shadow-editorial"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#E9E3D9] pb-3">
              <h3 className="font-serif text-2xl text-[#34322F]">Política de Privacidade</h3>
              <button
                type="button"
                onClick={() => setPrivacyOpen(false)}
                aria-label="Fechar Política de Privacidade"
                className="p-1.5 rounded-lg text-[#766044] hover:text-[#34322F]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-[#766044] leading-relaxed">
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
