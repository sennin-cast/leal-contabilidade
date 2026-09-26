import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, TrendingDown, Sparkles, CheckCircle2, MessageCircle } from 'lucide-react';

interface TaxCalculatorProps {
  onOpenModal: (source?: string) => void;
}

export const TaxCalculator: React.FC<TaxCalculatorProps> = ({ onOpenModal }) => {
  const [revenue, setRevenue] = useState<number>(35000);
  const [segment, setSegment] = useState<string>('ti');
  const [currentRegime, setCurrentRegime] = useState<string>('simples');
  const [userName, setUserName] = useState<string>('');
  const [userPhone, setUserPhone] = useState<string>('');

  // Segment rates definitions
  const segmentConfig = useMemo(() => {
    switch (segment) {
      case 'saude':
        return {
          name: 'Médicos & Saúde',
          pfRate: 0.275,
          standardRate: 0.155, // Anexo V ou Lucro Presumido sem equiparação
          optimizedRate: 0.06, // Equiparação ou Fator R Anexo III
          strategy: 'Equiparação Hospitalar + Fator R'
        };
      case 'ti':
        return {
          name: 'TI, Devs & Startups',
          pfRate: 0.275,
          standardRate: 0.155, // Anexo V
          optimizedRate: 0.06, // Anexo III com pró-labore 28%
          strategy: 'Fator R (Anexo III 6%)'
        };
      case 'ecommerce':
        return {
          name: 'E-commerce & Dropshipping',
          pfRate: 0.275,
          standardRate: 0.11, // Sem segregação ou ICMS bitributado
          optimizedRate: 0.04, // Anexo I com segregação e monofásicos
          strategy: 'Segregação de Receitas + Isenções'
        };
      case 'advocacia':
        return {
          name: 'Advogados & Consultores',
          pfRate: 0.275,
          standardRate: 0.15,
          optimizedRate: 0.045, // Sociedade Unipessoal Anexo IV
          strategy: 'Sociedade Unipessoal (4,5%)'
        };
      default:
        return {
          name: 'Comércio & Outros Serviços',
          pfRate: 0.275,
          standardRate: 0.13,
          optimizedRate: 0.065,
          strategy: 'Revisão de Regime + Monofásicos'
        };
    }
  }, [segment]);

  // Tax calculation
  const calculations = useMemo(() => {
    let currentRate = segmentConfig.standardRate;
    if (currentRegime === 'pf') {
      currentRate = segmentConfig.pfRate;
    } else if (currentRegime === 'presumido') {
      currentRate = 0.1633;
    }

    const currentTax = revenue * currentRate;
    const optimizedTax = revenue * segmentConfig.optimizedRate;
    const monthlySaving = Math.max(0, currentTax - optimizedTax);
    const annualSaving = monthlySaving * 12;

    return {
      currentTax,
      optimizedTax,
      monthlySaving,
      annualSaving,
      currentPercent: (currentRate * 100).toFixed(1),
      optimizedPercent: (segmentConfig.optimizedRate * 100).toFixed(1),
    };
  }, [revenue, segmentConfig, currentRegime]);

  // Phone mask helper
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 11) val = val.slice(0, 11);
    if (val.length > 6) {
      val = `(${val.slice(0, 2)}) ${val.slice(2, 7)}-${val.slice(7)}`;
    } else if (val.length > 2) {
      val = `(${val.slice(0, 2)}) ${val.slice(2)}`;
    } else if (val.length > 0) {
      val = `(${val}`;
    }
    setUserPhone(val);
  };

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedRevenue = revenue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const formattedMonthly = calculations.monthlySaving.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const formattedAnnual = calculations.annualSaving.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    const message = encodeURIComponent(
      `Olá, Leal Assessoria Contábil! Vim pelo Simulador Tributário do site.\n\n` +
      `👤 Nome: ${userName || 'Empresário'}\n` +
      `📱 WhatsApp: ${userPhone || 'Não informado'}\n` +
      `💼 Segmento: ${segmentConfig.name}\n` +
      `💰 Faturamento Mensal: ${formattedRevenue}\n` +
      `📊 Economia Estimada: ${formattedMonthly}/mês (${formattedAnnual}/ano)\n\n` +
      `Gostaria de agendar o Diagnóstico Tributário Gratuito para confirmar essa redução!`
    );

    window.open(`https://wa.me/5521979741307?text=${message}`, '_blank');
  };

  return (
    <section id="calculadora" className="py-20 relative bg-brand-navy-950">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-brand-gold-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-navy-900 border border-brand-gold-500/30 text-brand-gold-400 text-xs font-semibold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Ferramenta Interativa de Economia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Simulador de <span className="gold-gradient-text">Economia Tributária Legal</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Descubra em segundos quanto a sua empresa pode deixar de pagar em impostos ao adotar o planejamento fiscal preventivo da Leal Contábil.
          </p>
        </div>

        {/* Interactive Calculator Body */}
        <div className="bg-glass-card rounded-3xl p-6 sm:p-10 border border-brand-gold-500/35 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Col: Controls & Inputs */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* 1. Revenue Slider */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-bold text-white uppercase tracking-wider">
                    1. Faturamento Mensal Estimado:
                  </label>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-brand-gold-300">
                    {revenue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })}
                  </span>
                </div>
                <input
                  type="range"
                  min={5000}
                  max={250000}
                  step={5000}
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  className="w-full h-3 bg-brand-navy-800 rounded-lg appearance-none cursor-pointer accent-brand-gold-400"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-2 font-medium">
                  <span>R$ 5.000/mês</span>
                  <span>R$ 100.000/mês</span>
                  <span>R$ 250.000+/mês</span>
                </div>
              </div>

              {/* 2. Segment Selection */}
              <div>
                <label className="block text-sm font-bold text-white uppercase tracking-wider mb-3">
                  2. Segmento de Atuação da Empresa:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: 'ti', label: 'TI & Startups' },
                    { id: 'saude', label: 'Médicos & Clínicas' },
                    { id: 'ecommerce', label: 'E-commerce / Vendas' },
                    { id: 'advocacia', label: 'Advocacia / Engenharia' },
                    { id: 'outros', label: 'Comércio / PMEs' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSegment(item.id)}
                      className={`p-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                        segment === item.id
                          ? 'bg-brand-gold-500/20 border-brand-gold-400 text-white shadow-sm shadow-brand-gold-500/30'
                          : 'bg-brand-navy-900 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Current Regime */}
              <div>
                <label className="block text-sm font-bold text-white uppercase tracking-wider mb-3">
                  3. Regime Tributário Atual:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-medium">
                  {[
                    { id: 'simples', label: 'Simples Nacional' },
                    { id: 'presumido', label: 'Lucro Presumido' },
                    { id: 'pf', label: 'Pessoa Física / Carnê' },
                    { id: 'nao-sei', label: 'Não Sei Informar' },
                  ].map((regime) => (
                    <button
                      key={regime.id}
                      type="button"
                      onClick={() => setCurrentRegime(regime.id)}
                      className={`py-2.5 px-3 rounded-lg border transition-all ${
                        currentRegime === regime.id
                          ? 'bg-brand-navy-800 border-brand-gold-400 text-brand-gold-300 font-bold'
                          : 'bg-brand-navy-900/60 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {regime.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Strategy summary note */}
              <div className="p-4 rounded-xl bg-brand-navy-900 border border-brand-gold-500/20 text-xs text-slate-300 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-brand-gold-400 shrink-0" />
                <div>
                  <strong className="text-white">Estratégia Recomendada pela Leal:</strong> {segmentConfig.strategy}.
                  Permite reduzir alíquota efetiva de <span className="text-red-400 font-bold">{calculations.currentPercent}%</span> para aproximadamente <span className="text-emerald-400 font-bold">{calculations.optimizedPercent}%</span>.
                </div>
              </div>

            </div>

            {/* Right Col: Live Results Card & WhatsApp Lead Magnet */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              
              {/* Savings Results Badge */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-brand-navy-900 to-brand-navy-850 border border-brand-gold-500/40 shadow-xl space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-brand-gold-400 flex items-center justify-between">
                  <span>Projeção de Economia Legal</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                    Elisão Fiscal
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-xs text-slate-400">Economia Mensal Estimada:</div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-serif">
                    {calculations.monthlySaving.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    <span className="text-xs font-normal text-slate-400"> /mês</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-brand-navy-950/80 border border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Economia Anual Projetada:</span>
                  <span className="font-bold text-white text-sm">
                    {calculations.annualSaving.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-400 pt-1">
                  <div>
                    Imposto Atual Estimado: <strong className="text-slate-200 block text-xs">{calculations.currentTax.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
                  </div>
                  <div>
                    Imposto Otimizado Leal: <strong className="text-emerald-400 block text-xs">{calculations.optimizedTax.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
                  </div>
                </div>
              </div>

              {/* Form to forward to WhatsApp */}
              <form onSubmit={handleSendToWhatsApp} className="space-y-3 p-5 rounded-2xl bg-brand-navy-900/90 border border-slate-800">
                <div className="text-xs font-bold text-white uppercase tracking-wider">
                  Receber Diagnóstico Detalhado no WhatsApp:
                </div>

                <div>
                  <input
                    type="text"
                    required
                    placeholder="Seu Nome ou da Empresa"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-brand-navy-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-gold-400"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    required
                    placeholder="Seu WhatsApp com DDD: (21) 99999-9999"
                    value={userPhone}
                    onChange={handlePhoneChange}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-brand-navy-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-gold-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-bold text-xs sm:text-sm text-brand-navy-950 bg-gradient-to-r from-brand-gold-300 via-brand-gold-400 to-brand-gold-500 hover:brightness-110 shadow-lg shadow-brand-gold-500/25 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-brand-navy-950" />
                  <span>Confirmar e Enviar Diagnóstico via WhatsApp</span>
                </button>

                <div className="text-[10px] text-slate-400 text-center flex items-center justify-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>Sem compromisso &bull; Seus dados estão seguros (LGPD)</span>
                </div>
              </form>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
