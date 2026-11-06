import React from 'react';
import { HeroButterfly } from './SvgIcons';
import { ActiveModal } from '../types';
import { Instagram, MessageCircle, Heart, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenModal: (modal: ActiveModal) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <>
      <section className="relative overflow-hidden bg-[#F8EDE6] min-h-[580px] flex items-center pt-8 pb-14 md:py-20">
        {/* Large Geometric Butterfly Illustration */}
        <div 
          className="absolute -left-36 lg:-left-24 top-1/2 -translate-y-1/2 w-[340px] h-[340px] md:w-[480px] md:h-[480px] opacity-80 pointer-events-none select-none transition-transform duration-700 ease-out hover:scale-105"
          aria-hidden="true"
        >
          <HeroButterfly className="w-full h-full drop-shadow-sm" />
        </div>

        {/* Ambient warm glow in background */}
        <div 
          className="absolute right-0 top-0 w-96 h-96 bg-gradient-to-bl from-[#F1DDE0]/50 to-transparent rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full">
          <div className="ml-auto max-w-[660px]">
            <p className="font-sans font-bold text-2xl md:text-[34px] tracking-tight text-[#2E2448] mb-4 md:mb-6">
              Círculo de Apoyo ante el Duelo
            </p>

            <h1 className="font-serif-display text-[40px] sm:text-[54px] md:text-[66px] leading-[1.08] text-[#2E2448] font-normal mb-6 text-balance">
              No estás sola.<br />
              <span className="italic font-normal">No estás solo.</span>
            </h1>

            <p className="text-lg md:text-[21px] text-[#2E2448]/90 leading-relaxed max-w-[580px] mb-8">
              Si tú o alguien que quieres perdió a su bebé durante el embarazo, el parto o sus primeros días de vida, llegaste al lugar correcto. Aquí puedes hablar de tu bebé, llorarlo y recordarlo.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <button
                onClick={() => onOpenModal('join-circle')}
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-semibold text-[17px] bg-[#F2A07B] text-[#2E2448] hover:brightness-105 hover:-translate-y-0.5 transition-all shadow-sm cursor-pointer"
              >
                <span>Quiero unirme al círculo</span>
                <span className="text-xl leading-none" aria-hidden="true">→</span>
              </button>

              <button
                onClick={() => onOpenModal('first-steps')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-semibold text-[16px] bg-[#DCD2EE] text-[#2E2448] hover:bg-[#A893D1]/30 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <span>Por dónde empezar</span>
                <span className="text-lg leading-none" aria-hidden="true">→</span>
              </button>
            </div>

            <p className="font-script text-2xl md:text-[28px] text-[#4A3A6E] flex items-center gap-2">
              <span>En honor a los bebés que nacieron dormidos y a los que no pudieron quedarse</span>
              <span aria-hidden="true">🦋</span>
            </p>
          </div>
        </div>
      </section>

      {/* Franja de Contacto */}
      <div className="bg-[#A893D1] text-[#2E2448] font-semibold text-[15px] py-3.5 border-y border-[#2E2448]/10">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
          <a
            href="https://www.instagram.com/circulodeapoyoperu/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Instagram size={18} className="text-[#2E2448]" />
            <span>Escríbenos por Instagram: <strong className="underline">@circulodeapoyoperu</strong></span>
          </a>

          <button
            onClick={() => onOpenModal('join-circle')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer text-left"
          >
            <MessageCircle size={18} className="text-[#2E2448]" />
            <span>Te sumamos a nuestro grupo de apoyo por WhatsApp <span aria-hidden="true">💜</span></span>
          </button>
        </div>
      </div>
    </>
  );
};
