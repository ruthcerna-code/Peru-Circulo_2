import React from 'react';
import { FlowerIcon, ButterflyIcon, StarIcon, HeartIcon } from './SvgIcons';
import { ActiveModal } from '../types';

interface HelpCardsProps {
  onOpenModal: (modal: ActiveModal) => void;
}

export const HelpCards: React.FC<HelpCardsProps> = ({ onOpenModal }) => {
  return (
    <section className="bg-[#F1DDE0] py-20" id="acompanamos">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#2E2448] mb-2">
          Estamos aquí para acompañarte.
        </h2>
        <p className="text-lg md:text-xl font-medium text-[#2E2448]/90 mb-10">
          Sientas lo que sientas ahora, no tienes que atravesarlo sola.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Acabo de perder a mi bebé */}
          <article className="bg-[#2E2448] text-white p-6 sm:p-7 rounded-2xl min-h-[290px] flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start gap-3">
              <h3 className="font-sans font-medium text-[23px] sm:text-[24px] leading-tight text-white">
                Acabo de perder a mi bebé
              </h3>
              <div className="shrink-0 w-14 h-14 flex items-center justify-center">
                <FlowerIcon size={52} />
              </div>
            </div>
            <div>
              <p className="text-white/75 text-sm mb-4 line-clamp-2">
                Primeros auxilios emocionales, derechos en el centro médico y recomendaciones para los primeros días.
              </p>
              <button
                onClick={() => onOpenModal('first-steps')}
                className="w-full inline-flex items-center justify-between px-5 py-3 rounded-full font-semibold text-[15px] bg-[#F2A07B] text-[#2E2448] hover:brightness-105 hover:-translate-y-0.5 transition-all cursor-pointer shadow-sm"
              >
                <span>Por dónde empezar</span>
                <span className="text-lg leading-none" aria-hidden="true">→</span>
              </button>
            </div>
          </article>

          {/* Card 2: Quiero unirme al círculo */}
          <article className="bg-[#2E2448] text-white p-6 sm:p-7 rounded-2xl min-h-[290px] flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start gap-3">
              <h3 className="font-sans font-medium text-[23px] sm:text-[24px] leading-tight text-white">
                Quiero unirme al círculo
              </h3>
              <div className="shrink-0 w-14 h-14 flex items-center justify-center">
                <ButterflyIcon size={50} />
              </div>
            </div>
            <div>
              <p className="text-white/75 text-sm mb-4 line-clamp-2">
                Grupos de apoyo mutuo para mamás y papás en duelo. Espacios seguros, gratuitos y amorosos.
              </p>
              <button
                onClick={() => onOpenModal('join-circle')}
                className="w-full inline-flex items-center justify-between px-5 py-3 rounded-full font-semibold text-[15px] bg-[#4A6FA5] text-white hover:brightness-105 hover:-translate-y-0.5 transition-all cursor-pointer shadow-sm"
              >
                <span>Únete al grupo</span>
                <span className="text-lg leading-none" aria-hidden="true">→</span>
              </button>
            </div>
          </article>

          {/* Card 3: Conocer mis derechos */}
          <article className="bg-[#2E2448] text-white p-6 sm:p-7 rounded-2xl min-h-[290px] flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start gap-3">
              <h3 className="font-sans font-medium text-[23px] sm:text-[24px] leading-tight text-white">
                Conocer mis derechos
              </h3>
              <div className="shrink-0 w-14 h-14 flex items-center justify-center">
                <StarIcon size={52} />
              </div>
            </div>
            <div>
              <p className="text-white/75 text-sm mb-4 line-clamp-2">
                Ley N.° 32132 (Ley Estrella). Cuidado respetuoso en hospitales, registro simbólico RENIEC y licencias.
              </p>
              <button
                onClick={() => onOpenModal('ley-estrella')}
                className="w-full inline-flex items-center justify-between px-5 py-3 rounded-full font-semibold text-[15px] bg-[#DCD2EE] text-[#2E2448] hover:brightness-105 hover:-translate-y-0.5 transition-all cursor-pointer shadow-sm"
              >
                <span>Ley Estrella</span>
                <span className="text-lg leading-none" aria-hidden="true">→</span>
              </button>
            </div>
          </article>

          {/* Card 4: Quiero acompañar a alguien */}
          <article className="bg-[#2E2448] text-white p-6 sm:p-7 rounded-2xl min-h-[290px] flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start gap-3">
              <h3 className="font-sans font-medium text-[23px] sm:text-[24px] leading-tight text-white">
                Quiero acompañar a alguien
              </h3>
              <div className="shrink-0 w-14 h-14 flex items-center justify-center">
                <HeartIcon size={52} />
              </div>
            </div>
            <div>
              <p className="text-white/75 text-sm mb-4 line-clamp-2">
                Guía sensible para abuelos, tíos, amigos y colegas sobre qué decir, qué evitar y cómo sostener.
              </p>
              <button
                onClick={() => onOpenModal('how-to-accompany')}
                className="w-full inline-flex items-center justify-between px-5 py-3 rounded-full font-semibold text-[15px] bg-[#D97A8E] text-white hover:brightness-105 hover:-translate-y-0.5 transition-all cursor-pointer shadow-sm"
              >
                <span>Cómo ayudar</span>
                <span className="text-lg leading-none" aria-hidden="true">→</span>
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
