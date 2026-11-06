import React, { useState } from 'react';
import { ButterflyIcon } from './SvgIcons';
import { Menu, X, HeartHandshake } from 'lucide-react';
import { ActiveModal } from '../types';

interface NavbarProps {
  onOpenModal: (modal: ActiveModal) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Quiénes somos', href: '#quienes' },
    { label: 'Cómo acompañamos', href: '#acompanamos' },
    { label: 'Tus derechos', href: '#derechos' },
    { label: 'Memoria', href: '#memoria' },
    { label: 'Profesionales', href: '#sumate' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#2E2448] text-white shadow-sm border-b border-white/10 transition-all">
      <div className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          className="flex items-center gap-3 text-white font-bold text-[22px] tracking-tight hover:opacity-95 transition-opacity"
          aria-label="CAD Perú, inicio"
        >
          <span className="w-10 h-10 rounded-full bg-[#F1DDE0] flex items-center justify-center shadow-inner">
            <ButterflyIcon size={24} />
          </span>
          <span className="font-sans font-bold">CAD Perú</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium" aria-label="Menú principal">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className="text-white/90 hover:text-white transition-colors hover:underline underline-offset-8 decoration-[#D97A8E]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => onOpenModal('donate')}
            className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full font-semibold text-[15px] bg-[#F2A07B] text-[#2E2448] hover:brightness-105 hover:-translate-y-0.5 transition-all shadow-sm cursor-pointer"
          >
            <span>Donar</span>
            <span className="text-lg leading-none" aria-hidden="true">→</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-[#F2A07B] transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#2E2448] border-t border-white/10 px-6 py-5 shadow-2xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-4 text-base font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-white/90 hover:text-white py-1.5 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenModal('join-circle');
                }}
                className="w-full py-3 px-4 rounded-full bg-[#4A6FA5] text-white text-center font-medium text-sm flex items-center justify-center gap-2"
              >
                <HeartHandshake size={18} />
                <span>Unirme al Círculo por WhatsApp</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenModal('donate');
                }}
                className="w-full py-3 px-4 rounded-full bg-[#F2A07B] text-[#2E2448] text-center font-semibold text-sm flex items-center justify-center gap-2"
              >
                <span>Hacer una donación</span>
                <span>→</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
