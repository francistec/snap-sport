import React from 'react';
import Link from 'next/link';

const packages = [
  {
    name: 'Starter',
    tagline: 'Torneos locales y eventos escolares',
    icon: '📷',
    features: [
      'Hasta 2 horas de cobertura',
      '50 fotos editadas',
      'Galería privada en línea',
      'Entrega en 72 horas',
      '1 deporte / disciplina',
    ],
    cta: 'Solicitar Starter',
    highlight: false,
  },
  {
    name: 'Pro',
    tagline: 'Ligas semi-profesionales, múltiples disciplinas',
    icon: '📸',
    features: [
      'Hasta 6 horas de cobertura',
      '200 fotos editadas',
      'Entrega prioritaria en 48h',
      'Hasta 3 deportes / disciplinas',
      'Galería online compartible',
      'Pack para redes sociales',
    ],
    cta: 'Solicitar Pro',
    highlight: true,
  },
  {
    name: 'Elite',
    tagline: 'Cobertura total con entrega premium',
    icon: '🎯',
    features: [
      'Cobertura completa del evento',
      '+500 fotos editadas',
      'Entrega express en 24h',
      'Todos los deportes',
      'Galería premium',
      'Video highlight',
      'Derechos de uso ampliados',
    ],
    cta: 'Solicitar Elite',
    highlight: false,
  },
];

export default function Services() {
  return (
    <section
      id="paquetes"
      className="py-20 lg:py-28 bg-blue-900"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-orange-400 font-bold text-sm uppercase tracking-widest mb-4">
            Lo que ofrecemos
          </span>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4"
          >
            Paquetes de{' '}
            <span className="text-orange-500">Fotografía Deportiva</span>
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Cada evento merece el paquete correcto. Elige el que mejor se adapte a tus
            necesidades y presupuesto.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className={`relative rounded-2xl p-8 flex flex-col transition-transform duration-200 hover:-translate-y-1 ${
                pkg.highlight
                  ? 'bg-orange-500 ring-4 ring-orange-300/40 shadow-2xl shadow-orange-500/30 scale-105'
                  : 'bg-blue-800/60 border border-blue-700/40'
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-yellow-400 text-gray-900 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                    Más Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <span className="text-4xl" aria-hidden="true">{pkg.icon}</span>
              </div>
              <h3 className={`text-2xl font-black mb-1 ${pkg.highlight ? 'text-white' : 'text-white'}`}>
                {pkg.name}
              </h3>
              <p className={`text-sm mb-6 ${pkg.highlight ? 'text-orange-100' : 'text-blue-300'}`}>
                {pkg.tagline}
              </p>

              <ul className="space-y-3 flex-1 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${pkg.highlight ? 'text-white' : 'text-orange-400'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-sm ${pkg.highlight ? 'text-white/90' : 'text-gray-300'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="#contacto"
                className={`block text-center py-3.5 rounded-full font-bold text-sm transition-all duration-200 ${
                  pkg.highlight
                    ? 'bg-white text-orange-500 hover:bg-orange-50 shadow-lg'
                    : 'bg-orange-500 hover:bg-orange-600 text-white'
                }`}
              >
                {pkg.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
