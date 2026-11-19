import { Activity } from '../types';

export const ACTIVITIES_STORAGE_KEY = 'cad-peru-actividades';

export const defaultActivities: Activity[] = [
  {
    id: 'act-1',
    title: 'Círculo de noviembre',
    summary: 'Encuentro virtual para madres y padres que quieren nombrar a su bebé y compartir cómo están.',
    publishedAt: '2026-11-12',
  },
  {
    id: 'act-2',
    title: 'Charla para equipos de salud',
    summary: 'Conversación sobre cuidado respetuoso en la pérdida gestacional y neonatal, Ley N.° 32132.',
    publishedAt: '2026-10-28',
  },
  {
    id: 'act-3',
    title: 'Día de la concientización',
    summary: 'Acto sencillo del 15 de octubre para recordar a los bebés que nacieron dormidos.',
    publishedAt: '2026-10-15',
  },
  {
    id: 'act-4',
    title: 'Taller de cajitas de recuerdo',
    summary: 'Espacio para preparar y entregar cajitas de recuerdo a familias que lo soliciten.',
    publishedAt: '2026-09-20',
  },
  {
    id: 'act-5',
    title: 'Encuentro de familias',
    summary: 'Reunión presencial en Lima para acompañarnos, sin prisa y sin obligación de hablar.',
    publishedAt: '2026-08-30',
  },
];

export function sortActivitiesByDate(activities: Activity[]): Activity[] {
  return [...activities].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function loadActivities(): Activity[] {
  try {
    const raw = localStorage.getItem(ACTIVITIES_STORAGE_KEY);
    if (!raw) return defaultActivities;
    const parsed = JSON.parse(raw) as Activity[];
    if (!Array.isArray(parsed) || parsed.length === 0) return defaultActivities;
    return parsed.filter((item) => item && item.id && item.title && item.publishedAt);
  } catch {
    return defaultActivities;
  }
}
