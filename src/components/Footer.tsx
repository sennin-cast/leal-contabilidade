import React from 'react';
import { ShieldCheck, Phone, MapPin, Mail, Lock, Code, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy-950 text-slate-400 text-xs border-t border-brand-gold-500/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-brand-gold-500/50">
                <img src="./Logo.jpg" alt="Leal Assessoria Contábil" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="font-serif text-lg font-bold text-white tracking-wider block">LEAL</span>
                <span className="text-[10px] tracking-[0.2em] font-semibold text-brand-gold-400 uppercase">
                  Assessoria Contábil
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              Desde 1989 oferecendo segurança fiscal, redução legal de impostos (elisão preventiva) e contabilidade estratégica para empresas em Nova Iguaçu, no Rio de Janeiro e em todo o Brasil.
            </p>

            <div className="p-3.5 rounded-xl bg-brand-navy-900 border border-slate-800 text-[11px] space-y-1 text-slate-300">
              <div className="font-semibold text-white flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-gold-400" />
                <span>Responsáveis Técnicos Habilitados:</span>
              </div>
              <div>&bull; Ademar Rodrigues Leal &ndash; CRC/RJ 062692/O-8</div>
              <div>&bull; Lucas Heckert Leal &ndash; CRC/RJ 119264/O-8</div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2">
              <li><a href="#especialidades" className="hover:text-brand-gold-300 transition-colors">Especialidades</a></li>
              <li><a href="#servicos" className="hover:text-brand-gold-300 transition-colors">Serviços Oficiais</a></li>
              <li><a href="#como-funciona" className="hover:text-brand-gold-300 transition-colors">Como Funciona</a></li>
              <li><a href="#calculadora" className="hover:text-brand-gold-300 transition-colors">Calculadora Fiscal</a></li>
              <li><a href="#historia" className="hover:text-brand-gold-300 transition-colors">Nossa História</a></li>
              <li><a href="#depoimentos" className="hover:text-brand-gold-300 transition-colors">Depoimentos</a></li>
              <li><a href="#localizacao" className="hover:text-brand-gold-300 transition-colors">Localização</a></li>
              <li><a href="#faq" className="hover:text-brand-gold-300 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Col 3: Nichos */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Segmentos Atendidos
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>&bull; Médicos, Clínicas & Saúde (Fator R / Equiparação)</li>
              <li>&bull; Tecnologia, TI & Startups (Anexo III 6%)</li>
              <li>&bull; E-commerce, Dropshipping & Marketplaces</li>
              <li>&bull; Sociedades Unipessoais de Advocacia (SUA)</li>
              <li>&bull; Engenheiros, Arquitetos & Consultores</li>
              <li>&bull; Comércio Varejista & PMEs em Geral</li>
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Contato Oficial
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-gold-400 shrink-0 mt-0.5" />
                <span>Rua Otávio Tarquino, 507, Loja – Centro, Nova Iguaçu - RJ, CEP: 26210-171</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-gold-400 shrink-0" />
                <a
                  href="https://wa.me/55219964476004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-gold-300 font-bold text-slate-200"
                >
                  (21) 99644-76004
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Conformidade com LGPD (Lei 13.709/2018)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Regulatory disclaimer */}
        <div className="pt-8 border-t border-slate-800 text-[11px] text-slate-500 leading-relaxed text-center sm:text-left space-y-2">
          <p>
            <strong>Conformidade Legal & Ética CFC / CRC-RJ:</strong> Todas as atividades desenvolvidas pela Leal Assessoria Contábil respeitam integralmente o Código de Ética Profissional do Contador (Resolução CFC nº 803/1996) e a NBC PG 01. As reduções tributárias descritas neste site decorrem exclusivamente de práticas legais de elisão fiscal e planejamento tributário preventivo admitidas pela legislação brasileira, sem garantias de não recolhimento de tributos devidos.
          </p>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Leal Assessoria Contábil. Todos os direitos reservados.
          </div>

          {/* Developer credit */}
          <div className="flex items-center gap-2 p-2 rounded-lg bg-brand-navy-900 border border-slate-800 text-slate-400">
            <Code className="w-3.5 h-3.5 text-brand-gold-400" />
            <span>Desenvolvido por:</span>
            <a
              href="https://wa.me/5521979451436?text=Ol%C3%A1%20Esdras!%20Vi%20o%20site%20da%20Leal%20Assessoria%20Cont%C3%A1bil%20que%20voc%C3%AA%20desenvolveu."
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold-300 hover:text-white font-semibold transition-colors flex items-center gap-1"
            >
              <span>Esdras Dantas</span>
              <span className="text-slate-500">(21) 97945-1436</span>
              <ExternalLink className="w-2.5 h-2.5 ml-0.5 opacity-70" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
