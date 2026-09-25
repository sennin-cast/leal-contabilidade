import React from 'react';
import { SearchCheck, RefreshCw, Rocket, ArrowRight, ShieldCheck } from 'lucide-react';

interface SwitchAccountantSectionProps {
  onOpenModal: (source?: string) => void;
}

export const SwitchAccountantSection: React.FC<SwitchAccountantSectionProps> = ({ onOpenModal }) => {
  const steps = [
    {
      step: '01',
      title: 'Diagnóstico Gratuito',
      desc: 'Analisamos a situação contábil e fiscal atual da sua empresa sem nenhum custo ou compromisso, identificando riscos e oportunidades de economia imediata.',
      icon: SearchCheck,
      badge: 'Sem Custo'
    },
    {
      step: '02',
      title: 'Migração Guiada & Ética',
      desc: 'Nossa equipe entra em contato com o seu contador anterior de forma ética e profissional, solicitando toda a documentação, livros e acessos. Você não se desgasta.',
      icon: RefreshCw,
      badge: '100% Por Nossa Conta'
    },
    {
      step: '03',
      title: 'Integração & Início',
      desc: 'Conectamos sua empresa à nossa plataforma digital 24/7, alinhamos seu canal direto de WhatsApp com a equipe e aplicamos as primeiras reduções tributárias.',
      icon: Rocket,
      badge: 'Ativação Imediata'
    }
  ];

  return (
    <section id="como-funciona" className="py-20 relative bg-brand-navy-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-navy-900 border border-brand-gold-500/30 text-brand-gold-400 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Processo Ágil & Sem Fricção</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Trocar de Contador é <span className="gold-gradient-text">Simples, Rápido e Seguro</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Você não precisa se preocupar com conversas desconfortáveis ou perda de prazos. Nós assumimos 100% da transição burocrática em 3 passos transparentes.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-brand-gold-500/20 via-brand-gold-500/50 to-brand-gold-500/20 -translate-y-8 -z-0" />

          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-glass-card rounded-2xl p-7 relative z-10 flex flex-col justify-between border border-brand-gold-500/25 hover:border-brand-gold-500/50 hover:shadow-xl hover:shadow-brand-gold-500/10 transition-all group"
              >
                <div>
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-12 h-12 rounded-xl bg-brand-navy-850 border border-brand-gold-500/30 flex items-center justify-center font-serif text-xl font-bold text-brand-gold-400 group-hover:scale-110 transition-transform">
                      {item.step}
                    </span>
                    <span className="text-[11px] font-semibold text-brand-gold-300 bg-brand-gold-500/15 border border-brand-gold-500/30 px-2.5 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <div className="mb-3 flex items-center gap-3">
                    <Icon className="w-5 h-5 text-emerald-400 shrink-0" />
                    <h3 className="text-xl font-bold text-white group-hover:text-brand-gold-300 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-400"></span>
                  <span>Passo {index + 1} de 3 na jornada de transição</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenModal('Migração de Contador')}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-brand-navy-950 bg-gradient-to-r from-brand-gold-300 via-brand-gold-400 to-brand-gold-500 hover:from-brand-gold-200 hover:to-brand-gold-400 shadow-lg shadow-brand-gold-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Quero Migrar Minha Empresa para a Leal</span>
            <ArrowRight className="w-5 h-5 text-brand-navy-950" />
          </button>
          <div className="mt-3 text-xs text-slate-400">
            ✓ Sem fidelidade abusiva &bull; ✓ Diagnóstico prévio sem custo &bull; ✓ Atendimento direto com sócios contadores
          </div>
        </div>

      </div>
    </section>
  );
};
