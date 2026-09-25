import React from 'react';
import { 
  FileText, 
  BookOpen, 
  Users, 
  TrendingUp, 
  LineChart, 
  ArrowRight, 
  CheckCircle2, 
  Layers
} from 'lucide-react';
import { SERVICES_DATA, ServicePillar } from '../data/services';

interface ServicesSectionProps {
  onOpenModal: (source?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenModal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText': return <FileText className="w-6 h-6 text-brand-gold-400" />;
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-brand-gold-400" />;
      case 'Users': return <Users className="w-6 h-6 text-brand-gold-400" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-brand-gold-400" />;
      case 'LineChart': return <LineChart className="w-6 h-6 text-brand-gold-400" />;
      default: return <Layers className="w-6 h-6 text-brand-gold-400" />;
    }
  };

  return (
    <section id="servicos" className="py-20 bg-brand-navy-900/50 relative border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-navy-850 border border-brand-gold-500/30 text-brand-gold-400 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Estrutura Corporativa Completa</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Os 5 Pilares de <span className="gold-gradient-text">Serviços Oficiais</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Soluções completas desenhadas para garantir segurança jurídica, regularidade fiscal e maximização de lucros para empresas de todos os portes.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, index) => {
            const isFeatured = index === 3; // Planejamento Tributário as featured card
            return (
              <div
                key={service.number}
                className={`bg-glass-card rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 relative group hover:border-brand-gold-500/50 hover:shadow-xl hover:shadow-brand-gold-500/10 ${
                  isFeatured ? 'md:col-span-2 lg:col-span-1 border-brand-gold-500/40 bg-gradient-to-b from-brand-navy-800 to-brand-navy-900' : ''
                }`}
              >
                {/* Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-bold text-slate-600 group-hover:text-brand-gold-400/80 transition-colors">
                      {service.number}
                    </span>
                    <div className="p-3 rounded-xl bg-brand-navy-850 border border-brand-gold-500/25 group-hover:scale-110 group-hover:border-brand-gold-400 transition-all">
                      {getIcon(service.iconName)}
                    </div>
                  </div>

                  <div className="mb-3">
                    <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold text-brand-gold-300 bg-brand-gold-500/10 border border-brand-gold-500/20 mb-2">
                      {service.highlight}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-brand-gold-300 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {service.fullDesc}
                  </p>

                  {/* Key Deliverables */}
                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      O que está incluso:
                    </div>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA link */}
                <div className="pt-4 border-t border-slate-800/80">
                  <button
                    onClick={() => onOpenModal(`Serviço: ${service.title}`)}
                    className="w-full py-2.5 px-4 rounded-lg text-xs font-semibold text-slate-200 bg-brand-navy-850 hover:bg-brand-gold-500 hover:text-brand-navy-950 transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Contratar ou Tirar Dúvidas</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Banner for Customized BPO */}
        <div className="mt-12 bg-gradient-to-r from-brand-navy-900 via-brand-navy-850 to-brand-navy-900 rounded-2xl p-6 sm:p-8 border border-brand-gold-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Precisa de BPO Financeiro ou Pacote Personalizado?
            </h4>
            <p className="text-sm text-slate-300 max-w-xl">
              Terceirize contas a pagar, contas a receber, conciliação bancária diária e emissão de notas fiscais com nossa equipe especializada.
            </p>
          </div>
          <button
            onClick={() => onOpenModal('BPO Financeiro')}
            className="shrink-0 px-6 py-3 rounded-xl font-bold text-sm text-brand-navy-950 bg-gradient-to-r from-brand-gold-300 to-brand-gold-500 hover:brightness-110 shadow-md transition-all flex items-center gap-2"
          >
            <span>Consultar Solução BPO</span>
            <ArrowRight className="w-4 h-4 text-brand-navy-950" />
          </button>
        </div>

      </div>
    </section>
  );
};
