import React from 'react';
import { 
  ArrowRight, 
  Calculator, 
  ShieldCheck, 
  Star, 
  Lock, 
  Zap, 
  TrendingDown, 
  CheckCircle2, 
  Award 
} from 'lucide-react';

interface HeroProps {
  onOpenModal: (source?: string) => void;
  onScrollToCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal, onScrollToCalculator }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-20 md:pt-16 md:pb-28">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-brand-cobalt-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-emerald-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Persuasive Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy-900 border border-brand-gold-500/40 shadow-sm shadow-brand-gold-500/20">
              <span className="w-2 h-2 rounded-full bg-brand-gold-400 animate-ping" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-brand-gold-300">
                Contabilidade Estratégica & Consultiva para o Seu Negócio
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              Pague <span className="gold-gradient-text underline decoration-brand-gold-500/40 decoration-wavy underline-offset-8">menos impostos</span> dentro da lei e tenha total controle financeiro.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Cuidamos de toda a burocracia fiscal, contábil e de folha de pagamento com tecnologia de ponta e <strong className="text-white font-semibold">atendimento humanizado em até 15 minutos</strong>. Economize tempo e dinheiro para focar no que realmente importa: crescer o seu negócio.
            </p>

            {/* CTA Dual Button Group */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => onOpenModal('Hero Primary CTA')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-brand-navy-950 bg-gradient-to-r from-brand-gold-300 via-brand-gold-400 to-brand-gold-500 hover:from-brand-gold-200 hover:to-brand-gold-400 shadow-lg shadow-brand-gold-500/30 hover:shadow-xl hover:shadow-brand-gold-500/45 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-3"
              >
                <span>Quero Reduzir Meus Impostos</span>
                <ArrowRight className="w-5 h-5 text-brand-navy-950" />
              </button>

              <button
                onClick={onScrollToCalculator}
                className="w-full sm:w-auto px-7 py-4 rounded-xl text-base font-semibold text-slate-200 bg-brand-navy-850/80 hover:bg-brand-navy-800 border border-slate-700/80 hover:border-brand-gold-500/50 shadow-md transition-all duration-200 flex items-center justify-center gap-2.5 group"
              >
                <Calculator className="w-5 h-5 text-brand-gold-400 group-hover:scale-110 transition-transform" />
                <span>Calcular Minha Economia</span>
              </button>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-brand-navy-850 border border-brand-gold-500/20 text-brand-gold-400 shrink-0">
                  <Star className="w-4 h-4 fill-brand-gold-400 text-brand-gold-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Nota 4.9 ★★★★★</div>
                  <div className="text-[11px] text-slate-400">Avaliações no Google</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-brand-navy-850 border border-brand-gold-500/20 text-brand-gold-400 shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Desde 1989</div>
                  <div className="text-[11px] text-slate-400">+35 Anos de Tradição</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-brand-navy-850 border border-brand-gold-500/20 text-brand-gold-400 shrink-0">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">CRC Ativo RJ</div>
                  <div className="text-[11px] text-slate-400">062692/O & 119264/O</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-brand-navy-850 border border-brand-gold-500/20 text-brand-gold-400 shrink-0">
                  <Lock className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">100% Digital</div>
                  <div className="text-[11px] text-slate-400">Conformidade LGPD</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Luxury Interactive Bento Preview */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative card frame with luxury gold border */}
              <div className="bg-glass-card rounded-2xl p-6 sm:p-7 shadow-2xl relative overflow-hidden border border-brand-gold-500/30">
                <div className="absolute top-0 right-0 w-44 h-44 bg-brand-gold-500/10 rounded-full blur-2xl pointer-events-none" />

                {/* Header inside card */}
                <div className="flex items-center justify-between pb-5 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg overflow-hidden border border-brand-gold-500/50">
                      <img src="./Logo.jpg" alt="Leal" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-brand-gold-400">Diagnóstico Fiscal</div>
                      <div className="text-sm font-semibold text-white">Leal Assessoria Contábil</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/70 border border-emerald-500/40 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Zap className="w-3 h-3" /> Online
                  </span>
                </div>

                {/* Key Metric Highlights */}
                <div className="py-5 space-y-4">
                  <div className="p-4 rounded-xl bg-brand-navy-900/90 border border-brand-gold-500/20 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-400 flex items-center gap-1">
                        <TrendingDown className="w-3.5 h-3.5 text-emerald-400" />
                        Economia Média Tributária
                      </div>
                      <div className="text-2xl font-bold text-white mt-0.5">
                        -32% <span className="text-xs font-normal text-slate-400">em impostos</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs px-2.5 py-1 rounded bg-emerald-900/50 text-emerald-300 font-semibold border border-emerald-500/30">
                        100% Legal
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-brand-navy-900/70 border border-slate-700/50">
                      <div className="text-slate-400">Tempo de Resposta</div>
                      <div className="text-base font-bold text-brand-gold-300 mt-1">Até 15 min</div>
                      <div className="text-[10px] text-slate-500">Canal direto WhatsApp</div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-brand-navy-900/70 border border-slate-700/50">
                      <div className="text-slate-400">Risco de Multas</div>
                      <div className="text-base font-bold text-emerald-400 mt-1">Zero Multas</div>
                      <div className="text-[10px] text-slate-500">Garantia em contrato</div>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs text-slate-300 pt-1">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-gold-400 shrink-0" />
                      <span>Enquadramento tributário preventivo (Simples vs Presumido)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-gold-400 shrink-0" />
                      <span>Estratégia personalizada de Fator R e pró-labore</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-gold-400 shrink-0" />
                      <span>Transição do antigo contador 100% conduzida por nós</span>
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-2">
                  <button
                    onClick={() => onOpenModal('Hero Card CTA')}
                    className="w-full py-3 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-brand-cobalt-600 to-brand-cobalt-500 hover:from-brand-cobalt-500 hover:to-brand-cobalt-400 shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>Solicitar Estudo Gratuito de Redução</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Floating review card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 p-3.5 rounded-xl bg-brand-navy-900 border border-brand-gold-500/40 shadow-xl shadow-black/60 hidden sm:flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-gold-500/20 text-brand-gold-400 flex items-center justify-center font-bold">
                  ★
                </div>
                <div className="text-xs">
                  <div className="font-bold text-white">Excelente no Google (4.9/5)</div>
                  <div className="text-slate-400">Referência na Baixada e RJ</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
