import React from 'react';
import { Award, ShieldCheck, Calendar, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

interface HistoryAuthoritySectionProps {
  onOpenModal: (source?: string) => void;
}

export const HistoryAuthoritySection: React.FC<HistoryAuthoritySectionProps> = ({ onOpenModal }) => {
  return (
    <section id="historia" className="py-20 relative bg-brand-navy-950 overflow-hidden">
      {/* Decorative background light */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-brand-gold-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-navy-900 border border-brand-gold-500/30 text-brand-gold-400 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Nossa Trajetória & Liderança</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Nossa História: <span className="gold-gradient-text">Tradição que Gera Confiança,</span> Inovação que Impulsiona Resultados
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Mais de três décadas e meia construindo bases sólidas e gerando economia real para o empresariado fluminense.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Col: Photo of Lucas Heckert Leal with Luxury Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md">
              
              {/* Outer decorative gold border rings */}
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-gold-500/30 to-brand-cobalt-500/30 rounded-3xl blur-lg opacity-70" />
              
              <div className="relative rounded-2xl overflow-hidden border-2 border-brand-gold-500/40 shadow-2xl shadow-black/80 bg-brand-navy-900">
                <img
                  src="./lucasleal.png"
                  alt="Lucas Heckert Leal - Contador e Diretor Executivo"
                  className="w-full h-auto object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay Badge for Lucas */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-brand-navy-950 via-brand-navy-950/80 to-transparent p-5 pt-12">
                  <div className="text-white font-bold text-lg sm:text-xl">
                    Lucas Heckert Leal
                  </div>
                  <div className="text-brand-gold-400 font-semibold text-xs flex items-center gap-1.5 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Contador & Diretor Executivo &bull; CRC/RJ 119264/O-8</span>
                  </div>
                  <div className="text-[11px] text-slate-300 mt-1">
                    Especialista em Gestão Tributária, Elisão Fiscal e Contabilidade Digital
                  </div>
                </div>
              </div>

              {/* Floating Pill: Founded 1989 */}
              <div className="absolute -top-4 -right-4 p-3.5 rounded-xl bg-brand-navy-900 border border-brand-gold-500/40 shadow-xl flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-brand-gold-500/20 text-brand-gold-400 flex items-center justify-center font-bold text-sm">
                  35+
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Anos de Mercado</div>
                  <div className="text-[10px] text-slate-400">Fundado em 1989</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Col: Timeline & Biographies */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Story Timeline */}
            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-gradient-to-b before:from-brand-gold-500 before:via-brand-gold-500/40 before:to-transparent">
              
              {/* Event 1: 1989 Foundation */}
              <div className="relative pl-9 space-y-2">
                <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-brand-gold-400 ring-4 ring-brand-navy-950 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-navy-950"></span>
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded text-xs font-bold text-brand-gold-400 bg-brand-gold-500/10 border border-brand-gold-500/30">
                    1989 &bull; A Fundação
                  </span>
                  <span className="text-sm font-bold text-white">Ademar Rodrigues Leal (CRC/RJ 062692/O-8)</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  A trajetória da Leal Assessoria Contábil teve início em 1989 com Ademar Rodrigues Leal, profissional obstinado que, com muito suor, retidão e integridade inegociável, fundou o escritório no coração de Nova Iguaçu, tornando-se referência de segurança fiscal e contábil para centenas de empresas da Baixada Fluminense e do Rio de Janeiro.
                </p>
              </div>

              {/* Event 2: 2016 Modernization */}
              <div className="relative pl-9 space-y-2">
                <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-brand-gold-400 ring-4 ring-brand-navy-950 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-navy-950"></span>
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded text-xs font-bold text-brand-gold-400 bg-brand-gold-500/10 border border-brand-gold-500/30">
                    2016 &bull; A Nova Era Consultiva
                  </span>
                  <span className="text-sm font-bold text-white">Lucas Heckert Leal (CRC/RJ 119264/O-8)</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  A continuidade e evolução dessa jornada ganharam um novo capítulo em 2016 com a chegada de seu filho, Lucas Heckert Leal, unindo a solidez de décadas de tradição e respeito conquistado à modernização contábil, processos digitais de alta performance, contabilidade consultiva e visão estratégica voltada ao crescimento e lucro dos clientes.
                </p>
              </div>

              {/* Event 3: Present Day */}
              <div className="relative pl-9 space-y-2">
                <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-emerald-400 ring-4 ring-brand-navy-950 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-navy-950"></span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-0.5 rounded text-xs font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-500/40">
                    Hoje &bull; Referência Regional & Nacional
                  </span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Com sede própria no Centro de Nova Iguaçu e infraestrutura tecnológica de ponta, a Leal atende clientes em todo o território nacional, integrando contabilidade fiscal, departamento pessoal, BPO financeiro e planejamento tributário avançado com padrão fintech.
                </p>
              </div>

            </div>

            {/* Core Values Box */}
            <div className="p-5 rounded-xl bg-brand-navy-900 border border-brand-gold-500/25 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="space-y-1">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold-400" />
                  <span>Ética Inegociável</span>
                </div>
                <p className="text-slate-400">Rigor total às normas do CFC e CRC/RJ.</p>
              </div>
              <div className="space-y-1">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold-400" />
                  <span>Tecnologia Humana</span>
                </div>
                <p className="text-slate-400">Processos ágeis com contato 100% pessoal.</p>
              </div>
              <div className="space-y-1">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold-400" />
                  <span>Foco no Lucro</span>
                </div>
                <p className="text-slate-400">Estratégias de elisão fiscal para sobrar mais caixa.</p>
              </div>
            </div>

            {/* CTA */}
            <div>
              <button
                onClick={() => onOpenModal('História e Autoridade')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-brand-navy-950 bg-gradient-to-r from-brand-gold-300 to-brand-gold-500 hover:brightness-110 shadow-md transition-all"
              >
                <span>Conversar Diretamente com os Contadores Responsáveis</span>
                <ArrowRight className="w-4 h-4 text-brand-navy-950" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
