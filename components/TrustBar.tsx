import React from 'react';

const stats = [
  { value: '+200', label: 'Eventos cubiertos', icon: '🏆' },
  { value: '+500', label: 'Atletas fotografiados', icon: '🤸' },
  { value: '48h', label: 'Tiempo de entrega', icon: '⚡' },
  { value: '100%', label: 'Satisfacción garantizada', icon: '⭐' },
];

export default function TrustBar() {
  return (
    <section className="bg-gray-100 py-12 lg:py-16" aria-label="Estadísticas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center group"
            >
              <span className="text-3xl mb-2" aria-hidden="true">{stat.icon}</span>
              <span className="text-4xl lg:text-5xl font-black text-orange-500 leading-none mb-2 group-hover:scale-110 transition-transform duration-200">
                {stat.value}
              </span>
              <span className="text-sm lg:text-base text-gray-600 font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
