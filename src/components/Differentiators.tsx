import React from 'react';
import { Clock, Smartphone, ShieldCheck, Award, CheckCircle, Cpu } from 'lucide-react';
import { PARTNERS_DATA } from '../data/testimonials';

interface DifferentiatorsProps {
  onOpenModal: (source?: string) => void;
}

export const Differentiators: React.FC<DifferentiatorsProps> = ({ onOpenModal }) => {
  const diffs = [
    {
      title: 'Atendimento Humanizado em até 15 min',
      desc: 'Nada de robôs confusos ou filas infinitas de ticket. Você tem canal direto no WhatsApp com contadores seniores prontos para resolver suas demandas com agilidade.',
      icon: Clock,
      badge: 'SLA Prioritário'
    },
    {
      title: 'Plataforma Digital 24/7 na Palma da Mão',
      desc: 'Emita notas fiscais, acesse guias de impostos, certidões negativas e relatórios contábeis pelo celular ou computador quando quiser, de onde estiver.',
      icon: Smartphone,
      badge: '100% Cloud'
    },
    {
      title: 'Segurança Máxima & LGPD Nível Bancário',
      desc: 'Proteção total dos dados fiscais, bancários e trabalhistas da sua empresa, com backups criptografados diários e estrita conformidade com a Lei nº 13.709/2018.',
      icon: ShieldCheck,
      badge: 'Criptografia Ponta a Ponta'
    },
    {
      title: 'Garantia Contratual Contra Multas',
      desc: 'Assumimos compromisso formal em contrato: todas as suas obrigações acessórias e guias são apuradas e transmitidas rigorosamente no prazo, com garantia de ressarcimento.',
      icon: Award,
      badge: 'Tranquilidade Total'
    }
  ];

  return (
    <section className="py-20 relative bg-brand-navy-900/40 border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-navy-850 border border-brand-gold-500/30 text-brand-gold-400 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Tecnologia & Experiência do Cliente</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Por Que Mais de <span className="gold-gradient-text">Centenas de Empresas</span> Confiam na Leal
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Unimos a robustez de mais de 35 anos de história com as mais modernas ferramentas digitais de contabilidade do mercado mundial.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {diffs.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-glass-card rounded-2xl p-6 flex flex-col justify-between border border-brand-gold-500/20 hover:border-brand-gold-500/50 hover:shadow-xl hover:shadow-brand-gold-500/10 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-brand-navy-850 border border-brand-gold-500/30 text-brand-gold-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-brand-gold-300 bg-brand-gold-500/10 border border-brand-gold-500/25 px-2.5 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-brand-gold-300 transition-colors mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Padrão de Qualidade Leal</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Ecosystem & Partners Badges */}
        <div className="p-7 rounded-2xl bg-brand-navy-950/90 border border-slate-800">
          <div className="text-center mb-6">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Integração Total com os Principais ERPs e Softwares de Gestão
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {PARTNERS_DATA.map((partner) => (
              <div
                key={partner.name}
                className="p-3.5 rounded-xl bg-brand-navy-900 border border-slate-800/80 text-center hover:border-brand-gold-500/40 transition-colors"
              >
                <div className="font-bold text-white text-sm">{partner.name}</div>
                <div className="text-[10px] text-brand-gold-400 font-semibold mt-0.5">{partner.badge}</div>
                <div className="text-[9px] text-slate-400 mt-1">{partner.description}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
