import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Atuação', href: '#atuacao' },
  { label: 'Como funciona', href: '#jornada' },
  { label: 'Espaço', href: '#espaco' },
  { label: 'Equipe', href: '#profissionais' },
  { label: 'Dúvidas', href: '#faq' },
];

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? Math.min(100, (y / docHeight) * 100) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [mobileOpen]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2.5 focus:rounded-xl focus:bg-[#1C1814] focus:text-[#F5EFE6] focus:text-sm focus:font-semibold"
      >
        Pular para o conteúdo principal
      </a>

      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#E4DAC9]/95 backdrop-blur-md border-b border-[#C4B69F] shadow-soft text-[#181512]'
            : 'bg-[#1C1814]/65 backdrop-blur-sm border-b border-[#C6A15B]/15 text-[#F5EFE6]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between gap-4">
          <a
            href="#inicio"
            className="flex items-center gap-3 group cursor-pointer rounded-xl"
            aria-label="LN INTEGRA — Ir para o início"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border border-[#C6A15B]/75 bg-[#EDE5D8] flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <img
                src={siteConfig.brand.logoPath}
                alt="Logo LN INTEGRA"
                className="w-full h-full object-cover scale-125"
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-display text-lg sm:text-xl font-bold tracking-tight leading-none transition-colors ${
                  scrolled ? 'text-[#181512]' : 'text-[#F5EFE6]'
                }`}
              >
                LN INTEGRA
              </span>
              <span
                className={`text-[11px] font-medium mt-0.5 transition-colors ${
                  scrolled ? 'text-[#3A3128]' : 'text-[#D8CCB8]'
                }`}
              >
                Contabilidade &amp; Psicologia
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-6" aria-label="Navegação principal">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors py-1.5 cursor-pointer underline-offset-4 hover:underline ${
                  scrolled
                    ? 'text-[#181512] hover:text-[#7A5B22]'
                    : 'text-[#F5EFE6]/95 hover:text-[#D4AF6A]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <a
              href="#contato"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                scrolled
                  ? 'bg-[#1C1814] text-[#F5EFE6] hover:bg-[#3A3128]'
                  : 'bg-[#C6A15B] text-[#181512] hover:bg-[#D4AF6A]'
              }`}
            >
              <span>Agendar conversa</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menu de navegação"
            aria-expanded={mobileOpen}
            className={`lg:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl border transition-colors cursor-pointer ${
              scrolled
                ? 'border-[#C4B69F] bg-[#EDE5D8] text-[#181512]'
                : 'border-[#C6A15B]/50 bg-[#1C1814]/80 text-[#F5EFE6]'
            }`}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        <div
          aria-hidden="true"
          className="h-[2px] bg-[#C6A15B] transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </header>

      {/* Mobile Drawer */}
      <div
        aria-hidden={!mobileOpen}
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-[#181512]/65 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <aside
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
          className={`absolute top-0 right-0 h-full w-4/5 max-w-xs bg-[#E4DAC9] border-l border-[#C4B69F] p-6 flex flex-col justify-between shadow-editorial transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-5 border-b border-[#C4B69F]">
              <span className="font-display text-lg font-bold text-[#181512]">LN INTEGRA</span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Fechar menu"
                className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-[#3A3128] hover:text-[#181512] hover:bg-[#D8CCB8] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="py-5 flex flex-col gap-1" aria-label="Navegação mobile">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 px-2 text-base font-medium text-[#181512] hover:text-[#7A5B22] border-b border-[#C4B69F]/60 transition-colors cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-4 space-y-3">
            <a
              href="#contato"
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full"
            >
              <span>Agendar conversa</span>
              <ArrowUpRight className="w-4 h-4 text-[#C6A15B]" />
            </a>
            <p className="text-xs text-[#3A3128] text-center">
              {siteConfig.contact.address.street}, {siteConfig.contact.address.complement} —{' '}
              {siteConfig.contact.address.city}/{siteConfig.contact.address.state}
            </p>
          </div>
        </aside>
      </div>
    </>
  );
};
