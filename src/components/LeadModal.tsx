import React, { useState } from 'react';
import { X, MessageCircle, ShieldCheck, ArrowRight, CheckCircle2, Lock } from 'lucide-react';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  sourceContext?: string;
}

export const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose, sourceContext }) => {
  const [step, setStep] = useState<number>(1);
  const [goal, setGoal] = useState<string>('Reduzir Impostos / Elisão Fiscal');
  const [revenueRange, setRevenueRange] = useState<string>('R$ 20.000 a R$ 50.000/mês');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [cnpj, setCnpj] = useState<string>('');
  const [segment, setSegment] = useState<string>('');

  if (!isOpen) return null;

  // Phone mask
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
    setPhone(val);
  };

  // CNPJ mask
  const handleCnpjChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 14) val = val.slice(0, 14);
    if (val.length > 12) {
      val = `${val.slice(0, 2)}.${val.slice(2, 5)}.${val.slice(5, 8)}/${val.slice(8, 12)}-${val.slice(12)}`;
    } else if (val.length > 8) {
      val = `${val.slice(0, 2)}.${val.slice(2, 5)}.${val.slice(5, 8)}/${val.slice(8)}`;
    } else if (val.length > 5) {
      val = `${val.slice(0, 2)}.${val.slice(2, 5)}.${val.slice(5)}`;
    } else if (val.length > 2) {
      val = `${val.slice(0, 2)}.${val.slice(2)}`;
    }
    setCnpj(val);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Olá, Leal Assessoria Contábil! Gostaria de um Diagnóstico Especializado.\n\n` +
      `📌 Objetivo Principal: ${goal}\n` +
      `👤 Nome / Responsável: ${name}\n` +
      `📱 WhatsApp: ${phone}\n` +
      `💼 Segmento: ${segment || 'Não informado'}\n` +
      `💰 Faixa de Faturamento: ${revenueRange}\n` +
      (cnpj ? `🏢 CNPJ: ${cnpj}\n` : '') +
      (sourceContext ? `📍 Origem: ${sourceContext}\n` : '') +
      `\nAguardo o retorno de um contador especialista em até 15 minutos!`
    );

    window.open(`https://wa.me/55219964476004?text=${message}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-brand-navy-900 border border-brand-gold-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/80 overflow-hidden">
        
        {/* Glow ambient */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-brand-gold-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Fechar modal"
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-brand-navy-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-gold-400 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Diagnóstico Tributário Gratuito</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Fale com um Contador Especialista
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            {step === 1 ? 'Passo 1 de 2: Conte-nos sobre a sua necessidade.' : 'Passo 2 de 2: Para onde devemos enviar o diagnóstico?'}
          </p>
        </div>

        {/* Form Body */}
        {step === 1 ? (
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Qual é o objetivo principal da sua empresa?
              </label>
              <div className="space-y-2 text-xs">
                {[
                  'Reduzir Impostos / Planejamento Tributário',
                  'Trocar de Contador Atual (Migração Ágil)',
                  'Abrir uma Nova Empresa / CNPJ',
                  'BPO Financeiro & Gestão de Folha',
                  'Regularizar Pendências Fiscais / Dívidas',
                ].map((opt) => (
                  <label
                    key={opt}
                    onClick={() => setGoal(opt)}
                    className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                      goal === opt
                        ? 'bg-brand-navy-800 border-brand-gold-400 text-white font-semibold'
                        : 'bg-brand-navy-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <input
                      type="radio"
                      name="goal"
                      checked={goal === opt}
                      onChange={() => setGoal(opt)}
                      className="accent-brand-gold-400"
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Faixa aproximada de faturamento mensal:
              </label>
              <select
                value={revenueRange}
                onChange={(e) => setRevenueRange(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-brand-navy-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-brand-gold-400"
              >
                <option value="Ainda vou abrir meu negócio">Ainda vou abrir meu negócio (R$ 0)</option>
                <option value="Até R$ 10.000/mês">Até R$ 10.000/mês</option>
                <option value="R$ 10.000 a R$ 30.000/mês">R$ 10.000 a R$ 30.000/mês</option>
                <option value="R$ 30.000 a R$ 80.000/mês">R$ 30.000 a R$ 80.000/mês</option>
                <option value="R$ 80.000 a R$ 200.000/mês">R$ 80.000 a R$ 200.000/mês</option>
                <option value="Acima de R$ 200.000/mês">Acima de R$ 200.000/mês</option>
              </select>
            </div>

            <button
              type="button"
              onClick={() => setStep(2)}
              className="w-full mt-4 py-3 rounded-xl font-bold text-sm text-brand-navy-950 bg-gradient-to-r from-brand-gold-300 via-brand-gold-400 to-brand-gold-500 hover:brightness-110 shadow-lg shadow-brand-gold-500/20 transition-all flex items-center justify-center gap-2"
            >
              <span>Avançar para Etapa Final</span>
              <ArrowRight className="w-4 h-4 text-brand-navy-950" />
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Seu Nome Completo *
              </label>
              <input
                type="text"
                required
                placeholder="Ex: Dra. Mariana Costa"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-brand-navy-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-gold-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                WhatsApp com DDD (para envio da resposta em até 15 min) *
              </label>
              <input
                type="text"
                required
                placeholder="(21) 99999-9999"
                value={phone}
                onChange={handlePhoneChange}
                className="w-full px-3.5 py-2.5 rounded-xl bg-brand-navy-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-gold-400"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Segmento / Atividade
                </label>
                <input
                  type="text"
                  placeholder="Ex: Medicina, TI, Varejo"
                  value={segment}
                  onChange={(e) => setSegment(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-brand-navy-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-gold-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  CNPJ (opcional)
                </label>
                <input
                  type="text"
                  placeholder="00.000.000/0000-00"
                  value={cnpj}
                  onChange={handleCnpjChange}
                  className="w-full px-3 py-2.5 rounded-xl bg-brand-navy-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-gold-400"
                />
              </div>
            </div>

            <div className="pt-2 flex gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-1/3 py-3 rounded-xl font-semibold text-xs text-slate-300 bg-brand-navy-800 hover:bg-brand-navy-700 transition-colors"
              >
                Voltar
              </button>

              <button
                type="submit"
                className="w-2/3 py-3 rounded-xl font-bold text-xs sm:text-sm text-brand-navy-950 bg-gradient-to-r from-brand-gold-300 via-brand-gold-400 to-brand-gold-500 hover:brightness-110 shadow-lg shadow-brand-gold-500/25 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-brand-navy-950" />
                <span>Receber Diagnóstico no WhatsApp</span>
              </button>
            </div>

            <div className="pt-2 text-[10px] text-slate-400 text-center flex items-center justify-center gap-1.5">
              <Lock className="w-3 h-3 text-brand-gold-400" />
              <span>Conformidade com a LGPD (Lei 13.709/2018) &bull; Seus dados são confidenciais.</span>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
