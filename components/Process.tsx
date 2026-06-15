import React from 'react';

const steps = [
  {
    number: '01',
    icon: '📅',
    title: 'Agenda tu Evento',
    description: 'Contáctanos con la fecha, deporte y ubicación de tu evento. Revisamos disponibilidad y te respondemos en menos de 24h.',
  },
  {
    number: '02',
    icon: '📋',
    title: 'Planeamos Juntos',
    description: 'Revisamos el venue, tus necesidades específicas y preparamos el equipo fotográfico ideal para tu tipo de evento deportivo.',
  },
  {
    number: '03',
    icon: '📸',
    title: 'Capturamos la Acción',
    description: 'Llegamos antes del inicio, cubrimos cada jugada clave y capturamos los momentos de emoción auténtica durante todo el evento.',
  },
  {
    number: '04',
    icon: '🚀',
    title: 'Entrega Express',
    description: 'Editamos y entregamos tus fotos profesionales en 24-48 horas vía galería privada en línea, listas para compartir.',
  },
];

export default function Process() {
  return (
    <section
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-orange-500 font-bold text-sm uppercase tracking-widest mb-4">
            Cómo trabajamos
          </span>
          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4"
          >
            Tu evento en{' '}
            <span className="text-orange-500">4 pasos</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Un proceso simple y sin complicaciones para que te enfoques en tu evento
            y nosotros en capturar los mejores momentos.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200"
            aria-hidden="true"
          />

          {steps.map((step, idx) => (
            <article key={step.number} className="flex flex-col items-center text-center group">
              {/* Icon bubble */}
              <div className="relative mb-6">
                <div className="w-28 h-28 rounded-full bg-blue-900 flex items-center justify-center shadow-xl group-hover:bg-orange-500 transition-colors duration-300 relative z-10">
                  <span className="text-4xl" aria-hidden="true">{step.icon}</span>
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-orange-500 text-white text-xs font-black flex items-center justify-center z-20 shadow-lg">
                  {idx + 1}
                </span>
              </div>

              <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-200">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
