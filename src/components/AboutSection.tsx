import React from 'react';
import { ButterflyIcon, HeartIcon } from './SvgIcons';
import { Users, Sparkles, Heart } from 'lucide-react';

interface AboutSectionProps {
  onScrollToAcompanamos: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onScrollToAcompanamos }) => {
  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-12 bg-[#F8EDE6] items-stretch" id="quienes">
        {/* Left Visual Column */}
        <div className="lg:col-span-5 min-h-[440px] lg:min-h-[540px] relative p-8 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#C9B6E4] via-[#E8B4C0] to-[#F2C9A8]">
          {/* Subtle artistic light effect */}
          <div 
            className="absolute -top-16 -left-16 w-80 h-80 rounded-full bg-white/30 blur-2xl pointer-events-none" 
            aria-hidden="true" 
          />
          <div 
            className="absolute bottom-10 right-4 w-72 h-72 rounded-full bg-[#F2C9A8]/40 blur-xl pointer-events-none" 
            aria-hidden="true" 
          />

          {/* Artistic warm illustration overlay */}
          <div className="relative z-10 my-auto flex flex-col items-center text-center p-6 bg-white/40 backdrop-blur-sm rounded-3xl border border-white/40 shadow-sm max-w-sm mx-auto">
            <div className="w-20 h-20 rounded-full bg-[#2E2448] flex items-center justify-center mb-4 shadow-md">
              <ButterflyIcon size={46} />
            </div>
            <h4 className="font-serif-display text-2xl text-[#2E2448] mb-2 font-medium">
              Comunidad de Amor y Escucha
            </h4>
            <p className="text-sm text-[#2E2448]/85 leading-relaxed">
              Un lugar donde el amor hacia tu bebé nunca es silenciado, donde cada lágrima y cada recuerdo encuentran cobijo entre madres y padres que comprenden tu camino.
            </p>
          </div>

          <div className="relative z-10 mt-auto">
            <span className="inline-block bg-white/85 text-[#2E2448] font-medium text-xs px-3.5 py-1.5 rounded-lg shadow-xs">
              Foto sugerida: encuentro de madres del círculo
            </span>
          </div>
        </div>

        {/* Right Content Column */}
        <div className="lg:col-span-7 p-8 sm:p-14 lg:p-20 flex flex-col justify-center">
          <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-[42px] leading-[1.2] text-[#2E2448] mb-8 text-balance">
            Cuando los padres pierden a un hijo,{' '}
            <span className="block text-[1.5em] sm:text-[1.6em] font-normal leading-none my-1 text-[#2E2448]">
              no existe
            </span>{' '}
            una palabra para nombrarlos.
          </h2>

          <p className="text-lg text-[#2E2448]/90 leading-relaxed mb-5">
            Por eso este duelo tantas veces se vive en silencio. Somos madres y padres que vivimos la pérdida de un hijo o una hija, empezamos a compartir nuestras historias y decidimos acompañarnos.
          </p>

          <p className="text-lg text-[#2E2448]/90 leading-relaxed mb-6">
            Hoy somos una red que sostiene a otras familias: escuchamos sin juzgar, recordamos a nuestros bebés por su nombre y trabajamos para que su paso por este mundo sea reconocido.
          </p>

          <div className="p-4 rounded-xl bg-white/50 border border-[#2E2448]/10 mb-8 max-w-md">
            <p className="text-base text-[#2E2448]">
              <strong className="font-bold text-[#2E2448]">Fundadoras:</strong>{' '}
              Nicole Acosta, France Vences y Dora Pérez.
            </p>
          </div>

          <div>
            <button
              onClick={onScrollToAcompanamos}
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-semibold text-[17px] bg-[#2E2448] text-white hover:brightness-110 hover:-translate-y-0.5 transition-all shadow-sm cursor-pointer"
            >
              <span>Conoce cómo acompañamos</span>
              <span className="text-xl leading-none" aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Franja Coral */}
      <div className="h-8 bg-[#D97A8E]" aria-hidden="true" />
    </>
  );
};
