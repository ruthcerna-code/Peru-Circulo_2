import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, Trash2 } from 'lucide-react';
import { Activity } from '../types';
import { sortActivitiesByDate } from '../data/activitiesData';

interface ActivitiesSectionProps {
  activities: Activity[];
  editing: boolean;
  onChange: (activities: Activity[]) => void;
}

const dateLabel = (value: string) => {
  const [year, month, day] = value.split('-').map(Number);
  if (!year || !month || !day) return value;
  return new Date(year, month - 1, day).toLocaleDateString('es-PE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

export const ActivitiesSection: React.FC<ActivitiesSectionProps> = ({
  activities,
  editing,
  onChange,
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const ordered = sortActivitiesByDate(activities);

  const updateScrollState = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(maxScroll - el.scrollLeft > 8);
  };

  useEffect(() => {
    updateScrollState();
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);
    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [ordered.length, editing]);

  const scrollByCard = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('[data-activity-card]');
    const gap = 16;
    const distance = (card?.offsetWidth ?? el.clientWidth / 3) + gap;
    el.scrollBy({ left: direction * distance, behavior: 'smooth' });
  };

  const updateActivity = (id: string, patch: Partial<Activity>) => {
    onChange(activities.map((item) => (item.id === id ? { ...item, ...patch } : item)));
  };

  const addActivity = () => {
    const today = new Date().toISOString().slice(0, 10);
    onChange([
      {
        id: `act-${Date.now()}`,
        title: 'Nueva actividad',
        summary: 'Escribe aquí de qué se trata.',
        publishedAt: today,
      },
      ...activities,
    ]);
    scrollerRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
  };

  const removeActivity = (id: string) => {
    onChange(activities.filter((item) => item.id !== id));
  };

  return (
    <section id="actividades" className="bg-[#F8EDE6] py-14 border-y border-[#2E2448]/10" aria-labelledby="actividades-titulo">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <h2 id="actividades-titulo" className="font-serif-display text-3xl sm:text-4xl font-normal text-[#2E2448]">
              Actividades
            </h2>
            <p className="text-[#2E2448]/80 mt-1">
              Las últimas actividades, de la más reciente a la más antigua.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {editing && (
              <button
                type="button"
                onClick={addActivity}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#2E2448] text-white text-sm font-semibold cursor-pointer"
              >
                <Plus size={16} />
                Agregar
              </button>
            )}
            {ordered.length > 3 && (
              <>
                <button
                  type="button"
                  onClick={() => scrollByCard(-1)}
                  disabled={!canScrollLeft}
                  className="w-10 h-10 rounded-full border border-[#2E2448]/20 text-[#2E2448] disabled:opacity-30 cursor-pointer disabled:cursor-default"
                  aria-label="Ver actividades anteriores"
                >
                  <ChevronLeft className="mx-auto" size={20} />
                </button>
                <button
                  type="button"
                  onClick={() => scrollByCard(1)}
                  disabled={!canScrollRight}
                  className="w-10 h-10 rounded-full border border-[#2E2448]/20 text-[#2E2448] disabled:opacity-30 cursor-pointer disabled:cursor-default"
                  aria-label="Mover la franja a la derecha"
                >
                  <ChevronRight className="mx-auto" size={20} />
                </button>
              </>
            )}
          </div>
        </div>

        {editing && (
          <p className="mb-4 text-sm font-medium text-[#4A6FA5]">
            Modo cambio activo. Edita el título, la fecha de publicación y el texto. Se ordenan solas por fecha.
          </p>
        )}

        <div
          ref={scrollerRef}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {ordered.map((activity) => (
            <article
              key={activity.id}
              data-activity-card
              className="snap-start shrink-0 w-full md:w-[calc((100%-2rem)/3)] bg-white rounded-2xl p-6 shadow-sm border border-[#2E2448]/8 flex flex-col gap-3 min-h-[220px]"
            >
              {editing ? (
                <>
                  <label className="text-xs font-semibold uppercase tracking-wide text-[#2E2448]/60">
                    Fecha de publicación
                    <input
                      type="date"
                      value={activity.publishedAt}
                      onChange={(event) => updateActivity(activity.id, { publishedAt: event.target.value })}
                      className="mt-1 w-full rounded-lg border border-[#2E2448]/15 px-3 py-2 text-sm text-[#2E2448] bg-[#F8EDE6]"
                    />
                  </label>
                  <label className="text-xs font-semibold uppercase tracking-wide text-[#2E2448]/60">
                    Título
                    <input
                      type="text"
                      value={activity.title}
                      onChange={(event) => updateActivity(activity.id, { title: event.target.value })}
                      className="mt-1 w-full rounded-lg border border-[#2E2448]/15 px-3 py-2 text-base font-medium text-[#2E2448] bg-white"
                    />
                  </label>
                  <label className="text-xs font-semibold uppercase tracking-wide text-[#2E2448]/60 flex-1">
                    Texto
                    <textarea
                      value={activity.summary}
                      onChange={(event) => updateActivity(activity.id, { summary: event.target.value })}
                      rows={4}
                      className="mt-1 w-full rounded-lg border border-[#2E2448]/15 px-3 py-2 text-sm text-[#2E2448] bg-white resize-y"
                    />
                  </label>
                  <button
                    type="button"
                    onClick={() => removeActivity(activity.id)}
                    className="inline-flex items-center gap-1.5 self-start text-sm text-[#D97A8E] font-semibold cursor-pointer"
                  >
                    <Trash2 size={15} />
                    Quitar
                  </button>
                </>
              ) : (
                <>
                  <p className="text-sm font-semibold text-[#4A6FA5]">{dateLabel(activity.publishedAt)}</p>
                  <h3 className="font-sans font-medium text-[22px] leading-tight text-[#2E2448]">{activity.title}</h3>
                  <p className="text-[#2E2448]/80 text-[15px] leading-relaxed">{activity.summary}</p>
                </>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
