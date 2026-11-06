import React, { useState, useEffect } from 'react';
import { Tribute, ActiveModal } from '../types';
import { INITIAL_TRIBUTES } from '../data/tributesData';
import { ButterflyIcon, StarIcon, HeartIcon, FlowerIcon, CandleIcon } from './SvgIcons';
import { Flame, Plus, Search, Heart, Sparkles } from 'lucide-react';

interface MemoryWallProps {
  onOpenModal: (modal: ActiveModal) => void;
  newTributesTrigger?: number;
}

export const MemoryWall: React.FC<MemoryWallProps> = ({ onOpenModal, newTributesTrigger }) => {
  const [tributes, setTributes] = useState<Tribute[]>(() => {
    try {
      const saved = localStorage.getItem('cad_peru_tributes');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return INITIAL_TRIBUTES;
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [litCandles, setLitCandles] = useState<Record<string, boolean>>({});

  // Sync when tributes change externally (e.g. from modal submit)
  useEffect(() => {
    try {
      const saved = localStorage.getItem('cad_peru_tributes');
      if (saved) {
        setTributes(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, [newTributesTrigger]);

  const handleLightCandle = (id: string) => {
    if (litCandles[id]) return; // already lit

    const updated = tributes.map((t) => {
      if (t.id === id) {
        return { ...t, candlesCount: t.candlesCount + 1 };
      }
      return t;
    });

    setTributes(updated);
    setLitCandles((prev) => ({ ...prev, [id]: true }));
    try {
      localStorage.setItem('cad_peru_tributes', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const filteredTributes = tributes.filter((t) => {
    const term = searchTerm.toLowerCase();
    return (
      t.babyName.toLowerCase().includes(term) ||
      t.message.toLowerCase().includes(term) ||
      (t.parentsName && t.parentsName.toLowerCase().includes(term)) ||
      t.dateOrMonth.toLowerCase().includes(term)
    );
  });

  const renderSymbol = (symbol: Tribute['symbol']) => {
    switch (symbol) {
      case 'mariposa':
        return <ButterflyIcon size={34} />;
      case 'estrella':
        return <StarIcon size={34} />;
      case 'corazon':
        return <HeartIcon size={34} />;
      case 'flor':
        return <FlowerIcon size={34} />;
      case 'vela':
      default:
        return <CandleIcon size={26} lit />;
    }
  };

  return (
    <section 
      className="py-24 text-center relative overflow-hidden bg-gradient-to-b from-[#F1DDE0] via-[#E4D7F0] to-[#DCD2EE]"
      id="memoria"
    >
      {/* Gentle floating background light elements */}
      <div 
        className="absolute top-10 left-1/4 w-72 h-72 rounded-full bg-white/40 blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-[#F2A07B]/20 blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <h2 className="font-script text-4xl sm:text-5xl md:text-[62px] text-[#2E2448] mb-5 tracking-tight font-semibold">
          Hasta volvernos a encontrar, mi pequeño amor 💜
        </h2>

        <p className="max-w-[700px] mx-auto text-lg md:text-[20px] text-[#2E2448]/90 leading-relaxed mb-8">
          Cada mes honramos el nacimiento a la tierra y al cielo de nuestros bebés. Nombrarlos es una forma de decir que existieron, que fueron amados y que siguen siendo parte de nuestra familia.
        </p>

        {/* Action Button */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <button
            onClick={() => onOpenModal('add-tribute')}
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full font-semibold text-[17px] bg-[#2E2448] text-white hover:brightness-110 hover:-translate-y-0.5 transition-all shadow-md cursor-pointer"
          >
            <span>Quiero que nombren a mi bebé</span>
            <span className="text-xl leading-none" aria-hidden="true">→</span>
          </button>
        </div>

        {/* Search Bar & Community Tribute Wall */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/60 shadow-lg text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#2E2448]/10 mb-8">
            <div>
              <h3 className="font-serif-display text-2xl text-[#2E2448] font-medium flex items-center gap-2">
                <span>Muro del Recuerdo y la Luz</span>
                <span className="text-base font-normal font-sans text-[#2E2448]/70">
                  ({tributes.length} angelitos recordados)
                </span>
              </h3>
              <p className="text-sm text-[#2E2448]/70 mt-1">
                Enciende una vela en honor a los bebés que siempre vivirán en nuestra memoria.
              </p>
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#2E2448]/40" size={17} />
              <input
                type="text"
                placeholder="Buscar por nombre..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm bg-white rounded-full border border-[#2E2448]/15 focus:outline-none focus:ring-2 focus:ring-[#A893D1] text-[#2E2448]"
              />
            </div>
          </div>

          {/* Tributes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredTributes.map((tribute) => {
              const isLit = litCandles[tribute.id];
              return (
                <div
                  key={tribute.id}
                  className="bg-gradient-to-b from-white to-[#F8EDE6]/50 rounded-2xl p-6 border border-[#2E2448]/10 shadow-xs hover:shadow-md transition-all flex flex-col justify-between relative group"
                >
                  <div className="flex justify-between items-start gap-3 mb-3">
                    <div>
                      <h4 className="font-serif-display text-xl font-bold text-[#2E2448] leading-tight">
                        {tribute.babyName}
                      </h4>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#D97A8E] mt-0.5">
                        {tribute.dateOrMonth}
                      </p>
                    </div>
                    <div className="shrink-0 w-10 h-10 rounded-full bg-[#F1DDE0]/60 flex items-center justify-center">
                      {renderSymbol(tribute.symbol)}
                    </div>
                  </div>

                  <p className="text-[15px] text-[#2E2448]/85 italic leading-relaxed my-3 line-clamp-4">
                    "{tribute.message}"
                  </p>

                  <div className="pt-3 border-t border-[#2E2448]/10 flex items-center justify-between text-xs mt-2">
                    <span className="text-[#2E2448]/70 font-medium">
                      {tribute.parentsName || 'Familia en amor'}
                    </span>

                    <button
                      type="button"
                      onClick={() => handleLightCandle(tribute.id)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                        isLit
                          ? 'bg-[#F2A07B]/30 text-[#2E2448] font-bold'
                          : 'bg-[#F8EDE6] hover:bg-[#F2A07B]/20 text-[#2E2448] border border-[#2E2448]/15'
                      }`}
                      title={isLit ? 'Vela encendida con amor' : 'Haz clic para encender una vela'}
                    >
                      <CandleIcon size={18} lit={true} />
                      <span className="font-mono text-xs">{tribute.candlesCount}</span>
                      <span className="hidden sm:inline text-[11px]">
                        {isLit ? 'Encendida' : 'Encender'}
                      </span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredTributes.length === 0 && (
            <div className="py-12 text-center text-[#2E2448]/70">
              <p>No se encontraron dedicatorias con ese nombre.</p>
              <button
                onClick={() => setSearchTerm('')}
                className="mt-3 text-sm text-[#4A3A6E] underline hover:text-[#2E2448]"
              >
                Ver todos los homenajes
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
