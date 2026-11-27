import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Contabilidade', href: '#contabilidade' },
  { label: 'Psicologia', href: '#psicologia' },
  { label: 'Nosso espaço', href: '#espaco' },
  { label: 'Contato', href: '#contato' },
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
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F8F6F0]/92 backdrop-blur-md border-b border-[#E9E3D9] shadow-soft'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-3.5 group focus:outline-none"
            aria-label="LN INTEGRA — Ir para o início"
          >
            <div className="w-11 h-11 rounded-full overflow-hidden border border-[#C2A36A]/65 bg-[#F8F6F0] flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <img
                src={siteConfig.brand.logoPath}
                alt="Logo LN INTEGRA"
                className="w-full h-full object-cover scale-125"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-semibold tracking-[0.14em] text-[#34322F] leading-none">
                INTEGRA
              </span>
              <span className="text-[10px] tracking-[0.22em] uppercase text-[#766044] mt-1 font-medium">
                Contabilidade e Psicologia
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Navegação principal">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#34322F]/85 hover:text-[#A48650] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#C2A36A] hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#C2A36A] text-sm font-medium text-[#34322F] bg-[#F8F6F0]/85 hover:bg-[#34322F] hover:text-[#F8F6F0] hover:border-[#34322F] transition-all duration-300"
            >
              <span>Fale conosco</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={mobileOpen}
            className="lg:hidden p-2.5 rounded-lg border border-[#E9E3D9] bg-[#F8F6F0]/90 text-[#34322F] hover:border-[#C2A36A] transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {/* Hairline scroll progress */}
        <div
          aria-hidden="true"
          className="h-[1.5px] bg-[#C2A36A] transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-[#34322F]/35 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <aside
          className={`absolute top-0 right-0 h-full w-4/5 max-w-xs bg-[#F8F6F0] border-l border-[#E9E3D9] p-6 flex flex-col justify-between shadow-editorial transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#E9E3D9]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full overflow-hidden border border-[#C2A36A]/60">
                  <img
                    src={siteConfig.brand.logoPath}
                    alt="LN INTEGRA"
                    className="w-full h-full object-cover scale-125"
                  />
                </div>
                <div>
                  <div className="font-serif text-lg font-semibold tracking-[0.12em] text-[#34322F]">
                    INTEGRA
                  </div>
                  <div className="text-[9px] uppercase tracking-[0.18em] text-[#766044]">
                    Contabilidade e Psicologia
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Fechar menu"
                className="p-2 rounded-lg text-[#766044] hover:text-[#34322F] hover:bg-[#E9E3D9]/50 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="py-6 flex flex-col gap-1" aria-label="Navegação mobile">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 px-2 text-base font-medium text-[#34322F] hover:text-[#A48650] border-b border-[#E9E3D9]/60 transition-colors"
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
              className="w-full py-3 px-4 rounded-lg bg-[#34322F] text-[#F8F6F0] text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#766044] transition-colors"
            >
              <span>Fale conosco</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <p className="text-[11px] text-[#766044] text-center">
              {siteConfig.contact.address.street}, {siteConfig.contact.address.complement} —{' '}
              {siteConfig.contact.address.city}/{siteConfig.contact.address.state}
            </p>
          </div>
        </aside>
      </div>
    </>
  );
};
