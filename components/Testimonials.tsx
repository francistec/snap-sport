import React from 'react';

interface Testimonial {
  name: string;
  role: string;
  sport: string;
  rating: number;
  quote: string;
  initial: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Liga Atlántico Cancún',
    role: 'Organizador de torneo',
    sport: 'Fútbol Americano',
    rating: 5,
    quote: 'SnapSport capturó cada momento del torneo de fútbol americano. Las fotos superaron todas nuestras expectativas — calidad profesional, ángulos increíbles y entrega puntual.',
    initial: 'LA',
  },
  {
    name: 'Academia Béisbol Caribe',
    role: 'Director técnico',
    sport: 'Béisbol',
    rating: 5,
    quote: 'Entrega puntual y calidad impresionante. Ya los contratamos para toda la temporada de béisbol. El material nos sirvió perfectamente para presentar a nuestros patrocinadores.',
    initial: 'AB',
  },
  {
    name: 'Claudia Martínez',
    role: 'Mamá de atleta',
    sport: 'Atletismo',
    rating: 5,
    quote: 'Las fotos de mi hijo en su primera competencia de atletismo son simplemente hermosas. Gracias a SnapSport tenemos recuerdos que durarán para siempre.',
    initial: 'CM',
  },
  {
    name: 'Club Soccer Riviera',
    role: 'Coordinador deportivo',
    sport: 'Soccer',
    rating: 5,
    quote: 'Contratamos el paquete Pro para nuestro torneo de fin de temporada y el resultado fue extraordinario. Las fotos para redes sociales nos generaron un alcance enorme.',
    initial: 'CS',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`Calificación: ${count} de 5 estrellas`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="py-20 lg:py-28 bg-gray-900"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-orange-500 font-bold text-sm uppercase tracking-widest mb-4">
            Casos de éxito
          </span>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4"
          >
            Lo que dicen{' '}
            <span className="text-orange-500">nuestros clientes</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Más de 200 eventos cubiertos y clientes satisfechos en toda la Riviera Maya.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="bg-gray-800/60 border border-gray-700/40 rounded-2xl p-8 hover:border-orange-500/30 transition-colors duration-300 group"
            >
              {/* Quote icon */}
              <svg className="w-8 h-8 text-orange-500/40 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>

              <StarRating count={t.rating} />

              <blockquote className="text-gray-300 text-base leading-relaxed my-5 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-700/60">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-black text-sm flex-shrink-0">
                  {t.initial}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">
                    {t.role} · {t.sport}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
