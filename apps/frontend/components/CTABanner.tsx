import React from 'react';
import Link from 'next/link';

export default function CTABanner() {
  return (
    <section
      className="py-20 lg:py-24 bg-orange-500 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-orange-400/40" />
        <div className="absolute -bottom-16 -left-16 w-96 h-96 rounded-full bg-orange-600/40" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full border-2 border-white/10" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
          <span className="animate-pulse">⚡</span>
          Cupos limitados por temporada
        </span>

        <h2
          id="cta-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6"
        >
          ¿Listo para inmortalizar tu próximo
          <br />
          <span className="text-yellow-300">evento deportivo en Cancún?</span>
        </h2>

        <p className="text-orange-100 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Cupos limitados por temporada. Reserva ahora y asegura tu fecha antes
          de que se agote la disponibilidad.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="#contacto"
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-orange-500 hover:bg-gray-100 font-black text-lg rounded-full transition-all duration-200 shadow-2xl hover:-translate-y-0.5"
          >
            Solicita tu Presupuesto Ahora
          </Link>
          <Link
            href="mailto:contacto@snapsport.com.mx"
            className="inline-flex items-center justify-center px-10 py-4 border-2 border-white/60 hover:border-white text-white font-bold text-lg rounded-full transition-all duration-200 hover:bg-white/10"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Enviar Email
          </Link>
        </div>

        <p className="text-orange-200 text-sm font-medium">
          ⚡ Respuesta en menos de 24 horas · Sin costo de consulta
        </p>
      </div>
    </section>
  );
}
