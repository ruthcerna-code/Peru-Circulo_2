/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HelpCards } from './components/HelpCards';
import { AboutSection } from './components/AboutSection';
import { JoinOptions } from './components/JoinOptions';
import { LeyEstrellaSection } from './components/LeyEstrellaSection';
import { MemoryWall } from './components/MemoryWall';
import { BigQuote } from './components/BigQuote';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingButton } from './components/FloatingButton';
import { Modals } from './components/Modals';
import { ActiveModal } from './types';

export default function App() {
  const [activeModal, setActiveModal] = useState<ActiveModal>(null);
  const [tributesTrigger, setTributesTrigger] = useState(0);

  const handleOpenModal = (modal: ActiveModal) => {
    setActiveModal(modal);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  const handleTributeAdded = () => {
    setTributesTrigger((prev) => prev + 1);
  };

  const handleScrollToSection = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8EDE6] text-[#2E2448] flex flex-col font-sans selection:bg-[#DCD2EE] selection:text-[#2E2448]">
      {/* Hidden global SVG symbol definitions for high fidelity rendering */}
      <svg width="0" height="0" className="sr-only" aria-hidden="true">
        <defs>
          <symbol id="mariposa" viewBox="0 0 100 100">
            <path d="M50 50 C30 10, 0 15, 8 45 C12 60, 35 58, 50 50Z" fill="#A893D1" />
            <path d="M50 50 C70 10, 100 15, 92 45 C88 60, 65 58, 50 50Z" fill="#A893D1" />
            <path d="M50 52 C35 60, 15 75, 28 88 C38 96, 48 75, 50 52Z" fill="#D97A8E" />
            <path d="M50 52 C65 60, 85 75, 72 88 C62 96, 52 75, 50 52Z" fill="#D97A8E" />
            <rect x="47" y="35" width="6" height="40" rx="3" fill="#F8EDE6" />
          </symbol>
          <symbol id="estrella" viewBox="0 0 100 100">
            <path d="M50 4 L60 40 L96 50 L60 60 L50 96 L40 60 L4 50 L40 40Z" fill="#F8EDE6" />
            <circle cx="50" cy="50" r="9" fill="#4A6FA5" />
          </symbol>
          <symbol id="corazon" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="46" fill="#DCD2EE" />
            <path d="M50 78 C20 58, 22 30, 38 28 C45 27, 49 32, 50 36 C51 32, 55 27, 62 28 C78 30, 80 58, 50 78Z" fill="#D97A8E" />
          </symbol>
          <symbol id="flor" viewBox="0 0 100 100">
            <g fill="#F2A07B">
              <circle cx="50" cy="24" r="20" />
              <circle cx="76" cy="50" r="20" />
              <circle cx="50" cy="76" r="20" />
              <circle cx="24" cy="50" r="20" />
            </g>
            <circle cx="50" cy="50" r="18" fill="#F8EDE6" />
            <path d="M50 40 L58 50 L50 60 L42 50Z" fill="#D97A8E" />
          </symbol>
        </defs>
      </svg>

      {/* Top Header & Navigation */}
      <Navbar onOpenModal={handleOpenModal} />

      <main className="flex-1">
        {/* Hero Section with Butterfly & Contact Stripe */}
        <Hero onOpenModal={handleOpenModal} />

        {/* Tarjetas de Ayuda: ¿Qué necesitas? */}
        <HelpCards onOpenModal={handleOpenModal} />

        {/* Quiénes somos - Bloque Dividido */}
        <AboutSection onScrollToAcompanamos={() => handleScrollToSection('#acompanamos')} />

        {/* Súmate al círculo: 3 interactive tiles */}
        <JoinOptions onOpenModal={handleOpenModal} />

        {/* Ley Estrella - Ley N.° 32132 */}
        <LeyEstrellaSection onOpenModal={handleOpenModal} />

        {/* Muro de Memoria interactivo */}
        <MemoryWall onOpenModal={handleOpenModal} newTributesTrigger={tributesTrigger} />

        {/* Cita grande */}
        <BigQuote onScrollToSumate={() => handleScrollToSection('#sumate')} />

        {/* Preguntas Frecuentes (FAQ) */}
        <FaqSection onOpenModal={handleOpenModal} />
      </main>

      {/* Institutional Footer */}
      <Footer />

      {/* Floating Action Button "Escríbenos" */}
      <FloatingButton onOpenContact={() => handleOpenModal('contact')} />

      {/* Interactive Modals */}
      <Modals
        activeModal={activeModal}
        onClose={handleCloseModal}
        onTributeAdded={handleTributeAdded}
      />
    </div>
  );
}
