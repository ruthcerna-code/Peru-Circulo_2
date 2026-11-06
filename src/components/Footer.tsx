import React from 'react';
import { Phone, ExternalLink, Heart, Instagram } from 'lucide-react';
import { ButterflyIcon } from './SvgIcons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2E2448] text-white pt-20 pb-10 text-base border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-14">
          {/* Column 1: Info (approx 5 cols) */}
          <div className="lg:col-span-5">
            <h4 className="font-serif-display font-medium text-2xl text-white mb-4 flex items-center gap-2">
              <span aria-hidden="true">💜</span>
              <span>CAD Perú</span>
            </h4>
            <p className="text-white/80 leading-relaxed text-base mb-4 max-w-sm">
              Círculo de Apoyo ante el Duelo. Red de apoyo y contención ante el duelo gestacional, perinatal, neonatal e infancia temprana en el Perú.
            </p>
            <p className="text-sm text-white/60">
              Espacio fundado por madres en duelo para acompañar a otras familias en su camino de reconstrucción y amor.
            </p>
          </div>

          {/* Column 2: Navega (approx 3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif-display font-medium text-2xl text-white mb-4">
              Navega
            </h4>
            <ul className="list-none m-0 p-0 grid gap-2.5 text-base text-white/85">
              <li>
                <a href="#quienes" className="hover:text-white hover:underline underline-offset-4 transition-colors">
                  Quiénes somos
                </a>
              </li>
              <li>
                <a href="#acompanamos" className="hover:text-white hover:underline underline-offset-4 transition-colors">
                  Cómo acompañamos
                </a>
              </li>
              <li>
                <a href="#derechos" className="hover:text-white hover:underline underline-offset-4 transition-colors">
                  Tus derechos
                </a>
              </li>
              <li>
                <a href="#memoria" className="hover:text-white hover:underline underline-offset-4 transition-colors">
                  Memoria y homenajes
                </a>
              </li>
              <li>
                <a href="#sumate" className="hover:text-white hover:underline underline-offset-4 transition-colors">
                  Súmate
                </a>
              </li>
              <li>
                <a href="#preguntas" className="hover:text-white hover:underline underline-offset-4 transition-colors">
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contacto (approx 4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="font-serif-display font-medium text-2xl text-white mb-4">
              Contacto
            </h4>
            <ul className="list-none m-0 p-0 grid gap-2.5 text-base text-white/85">
              <li>
                <a
                  href="https://www.instagram.com/circulodeapoyoperu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#F2A07B] hover:underline underline-offset-4 transition-colors"
                >
                  <Instagram size={17} />
                  <span>Instagram @circulodeapoyoperu</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.threads.net/@circulodeapoyoperu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#F2A07B] hover:underline underline-offset-4 transition-colors"
                >
                  <ExternalLink size={17} />
                  <span>Threads @circulodeapoyoperu</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linktr.ee/circulodeapoyoperu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#F2A07B] hover:underline underline-offset-4 transition-colors"
                >
                  <ExternalLink size={17} />
                  <span>linktr.ee/circulodeapoyoperu</span>
                </a>
              </li>
            </ul>

            <div className="mt-6 p-4 rounded-xl bg-white/[0.08] border border-white/10">
              <div className="flex items-start gap-2.5">
                <Phone size={18} className="text-[#F2A07B] shrink-0 mt-1" />
                <p className="text-sm text-white/90 leading-relaxed">
                  Si sientes que no puedes más o te encuentras en una crisis emocional, busca ayuda profesional o llama a la <strong>Línea 113, opción 5</strong> (salud mental gratuita del Minsa, 24 horas).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & copyright */}
        <div className="border-t border-white/20 pt-6 text-sm text-white/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© 2026 Círculo de Apoyo ante el Duelo – CAD Perú</span>
          <span className="flex items-center gap-2">
            <span>Hecho con amor, en memoria de nuestros bebés</span>
            <span aria-hidden="true">🦋</span>
          </span>
        </div>
      </div>
    </footer>
  );
};
