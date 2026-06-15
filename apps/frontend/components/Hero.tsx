import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Sección principal"
    >
      {/* Background gradient — replace with next/image when you have a hero photo */}
      <div
        className="absolute inset-0 bg-blue-900"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 20% 50%, rgba(255,107,53,0.15) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(0,78,137,0.8) 0%, transparent 60%)
          `,
        }}
      />

      {/* Animated sport shapes — decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full border border-orange-500/10 animate-ping" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 left-10 w-96 h-96 rounded-full border border-blue-400/10 animate-ping" style={{ animationDuration: '6s' }} />
        <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full border-2 border-yellow-400/10" />
        {/* Camera shutter decorative SVG */}
        <svg
          className="absolute right-0 bottom-0 w-1/2 opacity-5 text-white"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="300" cy="300" r="280" stroke="currentColor" strokeWidth="2" />
          <circle cx="300" cy="300" r="200" stroke="currentColor" strokeWidth="2" />
          <circle cx="300" cy="300" r="100" stroke="currentColor" strokeWidth="4" />
          <line x1="300" y1="20" x2="300" y2="580" stroke="currentColor" strokeWidth="1" />
          <line x1="20" y1="300" x2="580" y2="300" stroke="currentColor" strokeWidth="1" />
          <line x1="95" y1="95" x2="505" y2="505" stroke="currentColor" strokeWidth="1" />
          <line x1="505" y1="95" x2="95" y2="505" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500/20 border border-orange-500/30 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          <span className="text-orange-400 text-sm font-semibold tracking-wider uppercase">
            Cancún &amp; Riviera Maya
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight leading-none mb-6">
          Fotografía Deportiva
          <br />
          <span className="text-orange-500">Profesional</span>
          <br />
          <span className="text-gray-300 text-3xl sm:text-4xl lg:text-5xl font-bold">en Cancún</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-300 leading-relaxed mb-10">
          Capturamos cada instante de acción, emoción y victoria en tus eventos deportivos.
          Fútbol americano, soccer, béisbol, básquetbol y más.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link
            href="#contacto"
            className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-black text-lg rounded-full transition-all duration-200 shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Solicita un Presupuesto
          </Link>
          <Link
            href="#galeria"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 hover:border-white text-white font-bold text-lg rounded-full transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5"
          >
            Ver Galería
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
        </div>

        {/* Trust micro-copy */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-gray-400">
          {[
            '✓ Entrega en 48h',
            '✓ +200 eventos cubiertos',
            '✓ Cancún y Riviera Maya',
          ].map((item) => (
            <span key={item} className="flex items-center gap-1 font-medium">
              <span className="text-orange-400">{item.slice(0, 1)}</span>
              {item.slice(1)}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 animate-bounce">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
