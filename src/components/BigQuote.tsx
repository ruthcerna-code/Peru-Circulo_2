import React from 'react';

interface BigQuoteProps {
  onScrollToSumate: () => void;
}

export const BigQuote: React.FC<BigQuoteProps> = ({ onScrollToSumate }) => {
  return (
    <section className="bg-[#A893D1] relative overflow-hidden py-24 sm:py-28 text-[#2E2448]">
      {/* Decorative Butterfly SVG on the right */}
      <svg
        className="absolute -right-28 sm:-right-20 top-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[520px] sm:h-[520px] opacity-40 sm:opacity-75 pointer-events-none select-none z-[1]"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <path d="M50 50 C25 0, -10 10, 4 46 C10 62, 34 60, 50 50Z" fill="#F8EDE6" />
        <path d="M50 50 C75 0, 110 10, 96 46 C90 62, 66 60, 50 50Z" fill="#D97A8E" />
        <path d="M50 52 C30 62, 6 80, 22 94 C36 104, 48 76, 50 52Z" fill="#2E2448" />
        <path d="M50 52 C70 62, 94 80, 78 94 C64 104, 52 76, 50 52Z" fill="#F2A07B" />
        <rect x="47.5" y="30" width="5" height="48" rx="2.5" fill="#F8EDE6" />
      </svg>

      <div className="max-w-[1200px] mx-auto px-6 relative z-[2]">
        <blockquote className="font-serif-display text-2xl sm:text-3xl md:text-[44px] leading-[1.25] max-w-[760px] text-[#2E2448] font-normal mb-8">
          “Juntas podemos cambiar la forma en que se vive el duelo perinatal: en los hospitales, en el trabajo, en la familia y en la sociedad.”
        </blockquote>

        <button
          onClick={onScrollToSumate}
          className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full font-semibold text-[17px] bg-[#2E2448] text-white hover:brightness-110 hover:-translate-y-0.5 transition-all shadow-md cursor-pointer"
        >
          <span>Súmate</span>
          <span className="text-xl leading-none" aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  );
};
