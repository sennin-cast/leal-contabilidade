import React, { useState } from 'react';
import { 
  Stethoscope, 
  Laptop, 
  ShoppingBag, 
  Scale, 
  Building2, 
  ArrowRight, 
  Check, 
  Sparkles,
  DollarSign
} from 'lucide-react';
import { NICHES_DATA, NicheItem } from '../data/niches';

interface NichesSectionProps {
  onOpenModal: (source?: string) => void;
}

export const NichesSection: React.FC<NichesSectionProps> = ({ onOpenModal }) => {
  const [activeNicheId, setActiveNicheId] = useState<string>(NICHES_DATA[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope': return <Stethoscope className="w-5 h-5" />;
      case 'Laptop': return <Laptop className="w-5 h-5" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5" />;
      case 'Scale': return <Scale className="w-5 h-5" />;
      case 'Building2': return <Building2 className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  const activeNiche = NICHES_DATA.find(n => n.id === activeNicheId) || NICHES_DATA[0];

  return (
    <section id="especialidades" className="py-20 relative bg-brand-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-navy-900 border border-brand-gold-500/30 text-brand-gold-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Segmentação Estratégica de Alta Performance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Especialistas no <span className="gold-gradient-text">Seu Modelo de Negócio</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Cada segmento possui particularidades tributárias que podem gerar milhares de reais em economia ou em multas se mal geridas. Escolha seu nicho:
          </p>
        </div>

        {/* Niche Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {NICHES_DATA.map((niche) => {
            const isActive = niche.id === activeNicheId;
            return (
              <button
                key={niche.id}
                onClick={() => setActiveNicheId(niche.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-brand-gold-400 to-brand-gold-500 text-brand-navy-950 shadow-lg shadow-brand-gold-500/25 scale-105'
                    : 'bg-brand-navy-900 text-slate-300 border border-slate-800 hover:border-brand-gold-500/40 hover:text-white'
                }`}
              >
                {getIcon(niche.iconName)}
                <span>{niche.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Niche Detailed Card */}
        <div className="bg-glass-card rounded-2xl p-6 sm:p-10 border border-brand-gold-500/30 shadow-2xl relative overflow-hidden transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: Explanation & Pain Points */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-gold-500/20 text-brand-gold-300 border border-brand-gold-500/40">
                  {activeNiche.badge}
                </span>
                <span className="text-xs text-slate-400">
                  Estratégia: <strong className="text-brand-gold-400 font-medium">{activeNiche.taxStrategy}</strong>
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {activeNiche.title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {activeNiche.subtitle}
                </p>
              </div>

              {/* Pain Point vs Solution comparison box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-red-950/20 border border-red-900/40 text-xs">
                  <div className="font-bold text-red-400 mb-1">A Dor Frequente:</div>
                  <p className="text-slate-300 leading-relaxed">{activeNiche.painPoint}</p>
                </div>
                <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/40 text-xs">
                  <div className="font-bold text-emerald-400 mb-1">Solução Leal Contábil:</div>
                  <p className="text-slate-300 leading-relaxed">{activeNiche.solution}</p>
                </div>
              </div>

              {/* Concrete deliverables check list */}
              <div className="space-y-2.5">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Vantagens Imediatas com Nossa Assessoria:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-200">
                  {activeNiche.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="p-0.5 rounded-full bg-brand-gold-500/20 text-brand-gold-400 mt-0.5 shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action trigger */}
              <div className="pt-2">
                <button
                  onClick={() => onOpenModal(`Especialidade: ${activeNiche.title}`)}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-brand-navy-950 bg-gradient-to-r from-brand-gold-300 via-brand-gold-400 to-brand-gold-500 hover:from-brand-gold-200 hover:to-brand-gold-400 shadow-md shadow-brand-gold-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span>Falar com Contador Especialista em {activeNiche.title.split(',')[0]}</span>
                  <ArrowRight className="w-4 h-4 text-brand-navy-950" />
                </button>
              </div>

            </div>

            {/* Right Col: Impact & Tax Savings Card */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-7 rounded-2xl bg-brand-navy-900/90 border border-brand-gold-500/30 space-y-5 relative">
                <div className="text-xs font-bold uppercase tracking-wider text-brand-gold-400 flex items-center gap-1.5">
                  <DollarSign className="w-4 h-4 text-emerald-400" />
                  <span>Estimativa de Otimização Legal</span>
                </div>

                <div className="p-4 rounded-xl bg-brand-navy-800 border border-slate-700/60">
                  <div className="text-xs text-slate-400">Resultado Médio Observado</div>
                  <div className="text-xl sm:text-2xl font-bold text-white mt-1">
                    {activeNiche.exampleSaving}
                  </div>
                  <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
                    <Check className="w-3 h-3" /> 100% amparado pela legislação fiscal vigente
                  </div>
                </div>

                <div className="text-xs text-slate-300 space-y-3 leading-relaxed">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="text-slate-400">Atendimento Dedicado:</span>
                    <span className="font-semibold text-white">Equipe Senior</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="text-slate-400">SLA de Dúvidas:</span>
                    <span className="font-semibold text-brand-gold-300">Até 15 minutos</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Emissão de Notas Fiscais:</span>
                    <span className="font-semibold text-white">Assistida ou Integrada</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-brand-gold-500/10 border border-brand-gold-500/20 text-[11px] text-brand-gold-300">
                  💡 Nós realizamos um <strong>estudo prévio sem custo</strong> antes de você assinar qualquer contrato ou migrar.
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
