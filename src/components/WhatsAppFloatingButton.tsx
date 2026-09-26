import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="mb-3 p-3 bg-brand-navy-900 border border-brand-gold-500/40 rounded-2xl shadow-2xl text-xs max-w-[230px] relative animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Fechar balão"
            className="absolute -top-1.5 -left-1.5 w-5 h-5 bg-brand-navy-800 text-slate-400 hover:text-white rounded-full flex items-center justify-center border border-slate-700 text-[10px]"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex items-center gap-1.5 font-bold text-white mb-0.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Plantão Tributário Online</span>
          </div>
          <p className="text-slate-300 text-[11px] leading-tight">
            Tire suas dúvidas fiscais agora com um contador em até 15 min!
          </p>
        </div>
      )}

      {/* Pulsing circular button */}
      <a
        href="https://wa.me/5521979741307?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20contador%20da%20Leal%20Assessoria%20Cont%C3%A1bil."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp oficial da Leal Contábil"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-40 animate-ping pointer-events-none"></span>
        <MessageCircle className="w-8 h-8 fill-white text-emerald-500" />
      </a>
    </div>
  );
};
