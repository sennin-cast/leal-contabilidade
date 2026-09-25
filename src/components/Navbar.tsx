import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MessageCircle } from 'lucide-react';

interface NavbarProps {
  onOpenModal: (source?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Calculadora', href: '#calculadora' },
    { label: 'Nossa História', href: '#historia' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-navy-950/90 backdrop-blur-md border-b border-brand-gold-500/25 shadow-xl shadow-black/40 py-3'
          : 'bg-brand-navy-950/60 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="relative w-11 h-11 rounded-lg overflow-hidden border border-brand-gold-500/40 shadow-sm shadow-brand-gold-500/20 group-hover:border-brand-gold-400 transition-colors">
            <img
              src="./Logo.jpg"
              alt="Leal Assessoria Contábil"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-slate-100 group-hover:text-brand-gold-300 transition-colors leading-none">
              LEAL
            </span>
            <span className="text-[10px] sm:text-xs tracking-[0.2em] font-semibold text-brand-gold-400 uppercase mt-0.5">
              Assessoria Contábil
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-brand-gold-300 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-gold-400 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => onOpenModal('Navbar CTA')}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-brand-navy-950 bg-gradient-to-r from-brand-gold-300 via-brand-gold-400 to-brand-gold-500 shadow-md shadow-brand-gold-500/20 hover:shadow-lg hover:shadow-brand-gold-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4 text-brand-navy-950 fill-brand-navy-950/20" />
            <span>Falar com um Contador</span>
            <ArrowRight className="w-3.5 h-3.5 text-brand-navy-950 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-brand-navy-800 transition-colors focus:outline-none"
          aria-label="Abrir menu de navegação"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-brand-gold-400" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-navy-900 border-b border-brand-gold-500/30 px-4 pt-3 pb-6 space-y-3 animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-2 text-base font-medium text-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-brand-navy-800 hover:text-brand-gold-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-brand-navy-700">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal('Mobile Menu CTA');
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold text-brand-navy-950 bg-gradient-to-r from-brand-gold-300 to-brand-gold-500 shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar com Especialista</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
