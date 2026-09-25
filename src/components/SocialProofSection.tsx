import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, TrendingUp } from 'lucide-react';
import { TESTIMONIALS_DATA, STATS_DATA } from '../data/testimonials';

interface SocialProofSectionProps {
  onOpenModal: (source?: string) => void;
}

export const SocialProofSection: React.FC<SocialProofSectionProps> = ({ onOpenModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section id="depoimentos" className="py-20 relative bg-brand-navy-900/60 border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Big Numbers / Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {STATS_DATA.map((stat, i) => (
            <div
              key={i}
              className="bg-glass-card rounded-2xl p-6 text-center border border-brand-gold-500/25 hover:border-brand-gold-500/50 transition-colors"
            >
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-gold-300">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-white mt-2">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-navy-850 border border-brand-gold-500/30 text-brand-gold-400 text-xs font-semibold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-brand-gold-400 text-brand-gold-400" />
            <span>Resultados Reais & Reputação Comprovada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            O Que Dizem os <span className="gold-gradient-text">Empresários Atendidos</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Histórias de sucesso de quem transformou a contabilidade de um custo burocrático em uma alavanca de economia e tranquilidade.
          </p>
        </div>

        {/* Featured Testimonial Carousel Box */}
        <div className="max-w-4xl mx-auto bg-glass-card rounded-3xl p-8 sm:p-12 border border-brand-gold-500/35 shadow-2xl relative">
          
          <Quote className="w-12 h-12 text-brand-gold-500/25 absolute top-6 right-8 pointer-events-none" />

          <div className="space-y-6">
            
            {/* Rating Stars & Saving badge */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-gold-400 text-brand-gold-400" />
                ))}
                <span className="ml-2 text-xs font-bold text-slate-300">5.0 / 5.0 no Google</span>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-950/70 text-emerald-400 border border-emerald-500/40 flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5" />
                {current.highlightSaving}
              </span>
            </div>

            {/* Comment Body */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-200 italic leading-relaxed font-light">
              "{current.comment}"
            </p>

            {/* Author details */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-white text-base sm:text-lg">{current.name}</h4>
                <div className="text-xs text-brand-gold-400 font-medium">
                  {current.role} &bull; <span className="text-slate-300">{current.company}</span>
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  {current.segment} &bull; {current.location}
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  aria-label="Depoimento anterior"
                  className="p-2.5 rounded-full bg-brand-navy-850 border border-slate-700 hover:border-brand-gold-400 text-slate-300 hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs text-slate-400 font-medium px-2">
                  {currentIndex + 1} de {TESTIMONIALS_DATA.length}
                </span>
                <button
                  onClick={nextTestimonial}
                  aria-label="Próximo depoimento"
                  className="p-2.5 rounded-full bg-brand-navy-850 border border-slate-700 hover:border-brand-gold-400 text-slate-300 hover:text-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Small Google Badge Footer */}
        <div className="mt-8 text-center flex items-center justify-center gap-2 text-xs text-slate-400">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Avaliações reais de clientes com empresas ativas em Nova Iguaçu e RJ</span>
        </div>

      </div>
    </section>
  );
};
