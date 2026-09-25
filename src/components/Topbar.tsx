import React from 'react';
import { ShieldCheck, PhoneCall, Clock, MapPin } from 'lucide-react';

export const Topbar: React.FC = () => {
  return (
    <div className="bg-brand-navy-950 border-b border-brand-gold-500/20 text-xs text-slate-300 py-2 px-4 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left: Regulatory compliance & CRC */}
        <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
          <div className="inline-flex items-center gap-1.5 text-brand-gold-400 font-semibold bg-brand-navy-850 px-2.5 py-0.5 rounded-full border border-brand-gold-500/30">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-gold-400" />
            <span>CRC/RJ 062692/O-8 &bull; CRC/RJ 119264/O-8</span>
          </div>
          <span className="hidden sm:inline text-slate-500">|</span>
          <span className="text-slate-400 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-brand-gold-400" />
            Nova Iguaçu - RJ &bull; Atendimento Regional & Nacional
          </span>
        </div>

        {/* Right: Response time & direct WhatsApp call */}
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <Clock className="w-3 h-3" />
            Atendimento em até 15 min
          </span>
          <span className="hidden sm:inline text-slate-600">|</span>
          <a
            href="https://wa.me/55219964476004?text=Ol%C3%A1!%20Gostaria%20de%20um%20diagn%C3%B3stico%20cont%C3%A1bil%20para%20minha%20empresa."
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-200 hover:text-brand-gold-400 flex items-center gap-1.5 font-semibold transition-colors"
          >
            <PhoneCall className="w-3 h-3 text-brand-gold-400" />
            <span>(21) 99644-76004</span>
          </a>
        </div>
      </div>
    </div>
  );
};
