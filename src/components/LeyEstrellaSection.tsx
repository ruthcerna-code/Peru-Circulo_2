import React from 'react';
import { ActiveModal } from '../types';
import { ShieldCheck, Calendar, FileText, Heart, CheckCircle2 } from 'lucide-react';

interface LeyEstrellaSectionProps {
  onOpenModal: (modal: ActiveModal) => void;
}

export const LeyEstrellaSection: React.FC<LeyEstrellaSectionProps> = ({ onOpenModal }) => {
  return (
    <section className="bg-[#2E2448] text-white py-24 relative overflow-hidden" id="derechos">
      {/* Background ambient accents */}
      <div 
        className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-[#A893D1]/10 blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <span className="inline-block bg-[#F2A07B] text-[#2E2448] font-bold text-xs tracking-[1.5px] uppercase px-4 py-1.5 rounded-full mb-6">
            Ley N.° 32132 · Ley Estrella
          </span>

          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-[50px] font-normal leading-[1.15] mb-6">
            Tu duelo está reconocido por ley
          </h2>

          <p className="text-lg text-white/90 leading-relaxed mb-5">
            El Perú cuenta con una ley que promueve el cuidado integral y multidisciplinario de la madre ante la muerte y el duelo gestacional y neonatal. Nació gracias al impulso de familias en duelo, y nosotras fuimos parte de ese camino.
          </p>

          <p className="text-lg text-white/90 leading-relaxed mb-8">
            Pero una ley no basta por sí sola: hace falta que los hospitales, los equipos de salud y la sociedad sepan acompañar. Por eso seguimos trabajando.
          </p>

          <button
            onClick={() => onOpenModal('ley-estrella')}
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-semibold text-[17px] bg-[#F2A07B] text-[#2E2448] hover:brightness-105 hover:-translate-y-0.5 transition-all shadow-sm cursor-pointer"
          >
            <span>Conoce tus derechos</span>
            <span className="text-xl leading-none" aria-hidden="true">→</span>
          </button>
        </div>

        {/* Pillars List */}
        <ul className="grid gap-4 list-none m-0 p-0">
          <li className="bg-white/[0.07] border-l-4 border-[#A893D1] p-5 sm:p-6 rounded-r-xl transition-colors hover:bg-white/[0.1]">
            <div className="flex items-start gap-3.5">
              <ShieldCheck className="text-[#F2A07B] shrink-0 mt-1" size={24} />
              <div>
                <strong className="block font-serif-display text-xl sm:text-[22px] font-medium text-white mb-1">
                  Atención humanizada
                </strong>
                <p className="text-white/80 text-base leading-relaxed">
                  Cuidado integral, respeto al ritmo del parto y apoyo en salud mental para la madre y su familia durante su estancia hospitalaria.
                </p>
              </div>
            </div>
          </li>

          <li className="bg-white/[0.07] border-l-4 border-[#A893D1] p-5 sm:p-6 rounded-r-xl transition-colors hover:bg-white/[0.1]">
            <div className="flex items-start gap-3.5">
              <Calendar className="text-[#F2A07B] shrink-0 mt-1" size={24} />
              <div>
                <strong className="block font-serif-display text-xl sm:text-[22px] font-medium text-white mb-1">
                  15 de octubre
                </strong>
                <p className="text-white/80 text-base leading-relaxed">
                  Día Nacional de la Concientización sobre la Muerte Gestacional y Neonatal en todo el territorio peruano.
                </p>
              </div>
            </div>
          </li>

          <li className="bg-white/[0.07] border-l-4 border-[#A893D1] p-5 sm:p-6 rounded-r-xl transition-colors hover:bg-white/[0.1]">
            <div className="flex items-start gap-3.5">
              <FileText className="text-[#F2A07B] shrink-0 mt-1" size={24} />
              <div>
                <strong className="block font-serif-display text-xl sm:text-[22px] font-medium text-white mb-1">
                  Registro simbólico
                </strong>
                <p className="text-white/80 text-base leading-relaxed">
                  Inscripción voluntaria en RENIEC de los bebés que fallecieron antes de nacer, reconociendo su identidad y su nombre para siempre.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
