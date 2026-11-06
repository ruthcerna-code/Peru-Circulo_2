import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import { ActiveModal } from '../types';

interface FloatingButtonProps {
  onOpenContact: () => void;
}

export const FloatingButton: React.FC<FloatingButtonProps> = ({ onOpenContact }) => {
  return (
    <button
      type="button"
      onClick={onOpenContact}
      className="fixed right-5 bottom-5 z-40 bg-[#F2A07B] text-[#2E2448] py-3.5 px-6 rounded-full font-bold text-base shadow-[0_8px_24px_rgba(46,36,72,0.25)] flex items-center gap-2.5 hover:brightness-105 hover:-translate-y-1 transition-all cursor-pointer border border-[#2E2448]/10 group"
      aria-label="Abrir formulario de contacto o mensaje"
    >
      <span className="text-lg leading-none" aria-hidden="true">✉</span>
      <span>Escríbenos</span>
    </button>
  );
};
