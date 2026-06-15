import React from 'react';
import Link from 'next/link';

const plans = [
  {
    name: 'Starter',
    price: 'Desde $1,500',
    unit: 'MXN',
    description: 'Perfecto para torneos escolares y eventos locales pequeños.',
    features: [
      'Hasta 2h de cobertura',
      '50 fotos editadas',
      'Entrega digital en 72h',
      '1 deporte / disciplina',
      'Galería privada online',
    ],
    notIncluded: ['Redes sociales package', 'Video highlight'],
    cta: 'Empezar con Starter',
    highlight: false,
  },
  {
    name: 'Pro',
    price: 'Desde $3,500',
    unit: 'MXN',
    description: 'El favorito de ligas semi-profesionales y torneos multi-deporte.',
    features: [
      'Hasta 6h de cobertura',
      '200 fotos editadas',
      'Entrega en 48h',
      'Hasta 3 deportes',
      'Galería online compartible',
      'Pack para redes sociales',
    ],
    notIncluded: ['Video highlight'],
    cta: 'Elegir Pro',
    highlight: true,
  },
  {
    name: 'Elite',
    price: 'Desde $6,500',
    unit: 'MXN',
    description: 'Cobertura total para eventos de alto nivel y organizaciones.',
    features: [
      'Cobertura completa del evento',
      '+500 fotos editadas',
      'Entrega express 24h',
      'Todos los deportes',
      'Galería premium',
      'Video highlight',
      'Derechos de uso ampliados',
    ],
    notIncluded: [],
    cta: 'Elegir Elite',
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="paquetes"
      className="py-20 lg:py-28 bg-gray-100"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-orange-500 font-bold text-sm uppercase tracking-widest mb-4">
            Precios transparentes
          </span>
          <h2
            id="pricing-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4"
          >
            Elige tu Paquete de{' '}
            <span className="text-orange-500">Fotografía Deportiva</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Sin compromisos ocultos. Presupuesto transparente para tu evento en Cancún.
            Todos los paquetes incluyen edición profesional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-end">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative rounded-2xl overflow-hidden transition-all duration-200 ${
                plan.highlight
                  ? 'bg-orange-500 shadow-2xl shadow-orange-500/40 ring-4 ring-orange-300/50 scale-105 hover:-translate-y-2'
                  : 'bg-white shadow-lg hover:-translate-y-1'
              }`}
            >
              {plan.highlight && (
                <div className="bg-yellow-400 text-center py-2">
                  <span className="text-gray-900 text-xs font-black uppercase tracking-widest">
                    ⭐ Recomendado
                  </span>
                </div>
              )}

              <div className="p-8">
                <h3 className={`text-2xl font-black mb-1 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.highlight ? 'text-orange-100' : 'text-gray-500'}`}>
                  {plan.description}
                </p>

                <div className="mb-8">
                  <span className={`text-4xl font-black ${plan.highlight ? 'text-white' : 'text-orange-500'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ml-1 ${plan.highlight ? 'text-orange-100' : 'text-gray-400'}`}>
                    {plan.unit}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <svg className={`w-5 h-5 flex-shrink-0 ${plan.highlight ? 'text-white' : 'text-green-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`text-sm ${plan.highlight ? 'text-white/90' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 opacity-40">
                      <svg className="w-5 h-5 flex-shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className={`text-sm ${plan.highlight ? 'text-white/60' : 'text-gray-400'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#contacto"
                  className={`block text-center py-4 rounded-xl font-bold text-sm transition-all duration-200 ${
                    plan.highlight
                      ? 'bg-white text-orange-500 hover:bg-orange-50 shadow-lg'
                      : 'bg-orange-500 hover:bg-orange-600 text-white shadow-md'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-10">
          ¿Necesitas algo personalizado?{' '}
          <Link href="#contacto" className="text-orange-500 hover:text-orange-600 font-semibold">
            Contáctanos para un presupuesto a la medida →
          </Link>
        </p>
      </div>
    </section>
  );
}
