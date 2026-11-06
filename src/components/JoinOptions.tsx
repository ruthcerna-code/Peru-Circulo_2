import React from 'react';
import { HeartIcon, FlowerIcon, ButterflyIcon } from './SvgIcons';
import { ActiveModal } from '../types';

interface JoinOptionsProps {
  onOpenModal: (modal: ActiveModal) => void;
}

export const JoinOptions: React.FC<JoinOptionsProps> = ({ onOpenModal }) => {
  return (
    <section className="py-24 bg-[#F8EDE6]" id="sumate">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-[48px] font-normal text-[#2E2448] mb-3">
          Súmate al círculo
        </h2>
        <p className="text-lg md:text-xl text-[#2E2448]/90 max-w-[720px] mb-12">
          Hay muchas formas de abrazar a una familia en duelo: aprendiendo a acompañar, donando o regalando un recuerdo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {/* Tile 1: Profesionales de la salud */}
          <button
            onClick={() => onOpenModal('professionals')}
            className="group text-left flex flex-col rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-1"
          >
            <div className="bg-[#4A3A6E] group-hover:bg-[#4A6FA5] text-white p-7 min-h-[190px] flex justify-between items-start gap-4 transition-colors">
              <h3 className="font-serif-display text-2xl sm:text-[28px] font-normal leading-snug">
                Profesionales de la salud
              </h3>
              <div className="shrink-0 w-16 h-16 flex items-center justify-center">
                <HeartIcon size={64} />
              </div>
            </div>
            <div className="bg-[#2E2448] text-white py-5 px-7 flex justify-between items-center text-base font-medium">
              <span>Solicita una charla o capacitación</span>
              <span className="text-2xl leading-none transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </div>
          </button>

          {/* Tile 2: Cajitas de recuerdo */}
          <button
            onClick={() => onOpenModal('memory-box')}
            className="group text-left flex flex-col rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-1"
          >
            <div className="bg-[#4A3A6E] group-hover:bg-[#4A6FA5] text-white p-7 min-h-[190px] flex justify-between items-start gap-4 transition-colors">
              <h3 className="font-serif-display text-2xl sm:text-[28px] font-normal leading-snug">
                Cajitas de recuerdo
              </h3>
              <div className="shrink-0 w-16 h-16 flex items-center justify-center">
                <FlowerIcon size={64} />
              </div>
            </div>
            <div className="bg-[#2E2448] text-white py-5 px-7 flex justify-between items-center text-base font-medium">
              <span>Pide o regala una cajita <span aria-hidden="true">🦋🌸</span></span>
              <span className="text-2xl leading-none transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </div>
          </button>

          {/* Tile 3: Donaciones y alianzas */}
          <button
            onClick={() => onOpenModal('donate')}
            className="group text-left flex flex-col rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-1"
          >
            <div className="bg-[#4A3A6E] group-hover:bg-[#4A6FA5] text-white p-7 min-h-[190px] flex justify-between items-start gap-4 transition-colors">
              <h3 className="font-serif-display text-2xl sm:text-[28px] font-normal leading-snug">
                Donaciones y alianzas
              </h3>
              <div className="shrink-0 w-16 h-16 flex items-center justify-center">
                <ButterflyIcon size={64} />
              </div>
            </div>
            <div className="bg-[#2E2448] text-white py-5 px-7 flex justify-between items-center text-base font-medium">
              <span>Ayúdanos a llegar a más familias</span>
              <span className="text-2xl leading-none transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
