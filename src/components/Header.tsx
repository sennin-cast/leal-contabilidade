import React, { useEffect, useRef, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { BrandMark } from './BrandMark';

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
  const [mobileOpen, setMobileOpen] = useState(false);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const openButtonRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    let rafId = 0;
    const updateScroll = () => {
      rafId = 0;
      const y = window.scrollY;
      const isScrolled = y > 24;
      setScrolled((prev) => (prev === isScrolled ? prev : isScrolled));

      if (progressBarRef.current) {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const ratio = docHeight > 0 ? Math.min(1, Math.max(0, y / docHeight)) : 0;
        progressBarRef.current.style.transform = `scaleX(${ratio})`;
      }
    };

    const onScroll = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(updateScroll);
      }
    };

    updateScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    if (mobileOpen) {
      closeButtonRef.current?.focus();
    } else if (document.activeElement === closeButtonRef.current) {
      openButtonRef.current?.focus();
    }

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
        className={`fixed top-0 inset-x-0 z-40 transition-[background-color,border-color,color,box-shadow] duration-300 ${
          scrolled
            ? 'bg-[#E4DAC9]/95 backdrop-blur-md border-b border-[#C4B69F] shadow-soft text-[#181512]'
            : 'surface-dark bg-[#181512]/80 backdrop-blur-md border-b border-[#C6A15B]/25 text-[#F5EFE6]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 sm:h-[88px] flex items-center justify-between gap-4">
          <a
            href="#inicio"
            className="flex items-center gap-3 sm:gap-3.5 group cursor-pointer rounded-xl py-1 pr-2"
            aria-label="LN INTEGRA — Contabilidade e Psicologia — Ir para o início"
          >
            <div className="relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <BrandMark className="w-11 h-11 sm:w-12 sm:h-12 rounded-full shadow-soft" />
            </div>
            <div className="hidden sm:block w-px h-8 bg-[#C6A15B]/35 flex-shrink-0" aria-hidden="true" />
            <div className="flex flex-col min-w-0">
              <span
                translate="no"
                className={`font-display text-lg sm:text-[1.35rem] font-bold tracking-[0.04em] leading-none transition-colors ${
                  scrolled ? 'text-[#181512]' : 'text-[#F5EFE6]'
                }`}
              >
                <span className={scrolled ? 'text-[#7A5B22]' : 'text-[#D4AF6A]'}>LN</span>{' '}
                INTEGRA
              </span>
              <span
                className={`text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] sm:tracking-[0.16em] mt-1 transition-colors truncate ${
                  scrolled ? 'text-[#3A3128]' : 'text-[#D4AF6A]'
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
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold active:scale-[0.98] transition-[background-color,color,transform] duration-200 cursor-pointer ${
                scrolled
                  ? 'bg-[#1C1814] text-[#F5EFE6] hover:bg-[#3A3128]'
                  : 'bg-[#C6A15B] text-[#181512] hover:bg-[#D4AF6A]'
              }`}
            >
              <span>Agendar conversa</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          <button
            ref={openButtonRef}
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
            <Menu className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div
          ref={progressBarRef}
          aria-hidden="true"
          className="h-[2px] w-full bg-[#C6A15B] origin-left transition-transform duration-100 ease-out"
          style={{ transform: 'scaleX(0)' }}
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
          className={`absolute top-0 right-0 h-full w-4/5 max-w-xs bg-[#E4DAC9] border-l border-[#C4B69F] p-6 flex flex-col justify-between shadow-editorial overscroll-contain transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ transitionTimingFunction: 'var(--ease-drawer)' }}
        >
          <div>
            <div className="flex items-center justify-between pb-5 border-b border-[#C4B69F]">
              <div className="flex items-center gap-2.5">
                <BrandMark className="w-9 h-9 rounded-full" />
                <div className="flex flex-col">
                  <span translate="no" className="font-display text-base font-bold tracking-[0.04em] text-[#181512] leading-none">
                    <span className="text-[#7A5B22]">LN</span> INTEGRA
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#3A3128] mt-1">
                    Contabilidade &amp; Psicologia
                  </span>
                </div>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Fechar menu"
                className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-[#3A3128] hover:text-[#181512] hover:bg-[#D8CCB8] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" aria-hidden="true" />
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
