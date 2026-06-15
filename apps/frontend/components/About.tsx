import React from 'react';
import Link from 'next/link';

const benefits = [
  {
    title: 'Memorias permanentes',
    description: 'Fotos profesionales que atletas y familias atesorarán para siempre.',
  },
  {
    title: 'Material para patrocinadores',
    description: 'Contenido visual de alto nivel para presentar a marcas e inversores.',
  },
  {
    title: 'Impacto en redes sociales',
    description: 'Fotos de acción optimizadas para Instagram, Facebook y TikTok.',
  },
  {
    title: 'Cobertura completa del evento',
    description: 'De la llegada al podio: no perdemos ningún momento del partido.',
  },
];

export default function About() {
  return (
    <section
      id="deportes"
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="inline-block text-orange-500 font-bold text-sm uppercase tracking-widest mb-4">
              ¿Por qué documentar?
            </span>
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-6"
            >
              ¿Por qué documentar tus{' '}
              <span className="text-orange-500">eventos deportivos?</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              En SnapSport entendemos que cada partido, torneo y competencia tiene momentos
              únicos e irrepetibles. Nuestro trabajo es asegurarnos de que nunca se pierdan.
            </p>

            <ul className="space-y-5 mb-10">
              {benefits.map((benefit) => (
                <li key={benefit.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-bold text-gray-900">{benefit.title}:</span>{' '}
                    <span className="text-gray-600">{benefit.description}</span>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href="#paquetes"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-900 hover:bg-blue-800 text-white font-bold rounded-full transition-colors duration-200"
            >
              Conoce Nuestros Paquetes
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Visual placeholder — replace with next/image when photo is available */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-blue-900 via-blue-800 to-orange-900 overflow-hidden shadow-2xl">
              {/* Camera icon placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white/30">
                <svg className="w-32 h-32 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-sm font-medium">Tu foto de evento aquí</p>
              </div>
              {/* Decorative dots */}
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-orange-500 animate-pulse" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white rounded-2xl px-6 py-4 shadow-xl">
              <p className="text-3xl font-black leading-none">+200</p>
              <p className="text-sm font-medium opacity-90">Eventos cubiertos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
