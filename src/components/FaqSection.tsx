import React, { useState } from 'react';
import { FAQS_DATA } from '../data/tributesData';
import { ActiveModal } from '../types';
import { MessageCircle } from 'lucide-react';

interface FaqSectionProps {
  onOpenModal: (modal: ActiveModal) => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenModal }) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]); // first open by default

  const toggleIndex = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <section className="py-24 bg-[#F8EDE6]" id="preguntas">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-[48px] font-normal text-[#2E2448] mb-10">
          Preguntas frecuentes
        </h2>

        <div className="divide-y-2 divide-[#2E2448] border-b-2 border-[#2E2448]">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div key={index} className="py-6 transition-all">
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full flex items-center justify-between gap-4 text-left font-sans font-semibold text-xl sm:text-[22px] text-[#2E2448] cursor-pointer hover:opacity-85 transition-opacity"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span 
                    className="text-3xl leading-none font-normal text-[#D97A8E] shrink-0 w-8 text-center transition-transform" 
                    aria-hidden="true"
                  >
                    {isOpen ? '–' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-3.5 max-w-[840px] text-lg text-[#2E2448]/85 leading-relaxed animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support note */}
        <div className="mt-12 p-6 rounded-2xl bg-white/60 border border-[#2E2448]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-sans font-bold text-lg text-[#2E2448]">
              ¿Tienes alguna otra duda o necesitas hablar con alguien?
            </h4>
            <p className="text-base text-[#2E2448]/80 mt-0.5">
              Estamos aquí para responderte con amor y sin juzgar.
            </p>
          </div>
          <button
            onClick={() => onOpenModal('contact')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm bg-[#DCD2EE] text-[#2E2448] hover:bg-[#A893D1]/40 transition-colors shrink-0 cursor-pointer"
          >
            <MessageCircle size={17} />
            <span>Escribir al círculo</span>
          </button>
        </div>
      </div>
    </section>
  );
};
