'use client';

import React, { useState } from 'react';

type Category = 'todos' | 'futbol-am' | 'soccer' | 'beisbol' | 'basquetbol' | 'atletismo';

interface GalleryItem {
  id: number;
  category: Exclude<Category, 'todos'>;
  sport: string;
  label: string;
  gradient: string;
  icon: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, category: 'futbol-am', sport: 'Fútbol Americano', label: 'Fotografía fútbol americano Cancún - SnapSport', gradient: 'from-orange-900 via-orange-800 to-red-900', icon: '🏈' },
  { id: 2, category: 'soccer', sport: 'Soccer', label: 'Fotografía soccer Cancún - SnapSport', gradient: 'from-green-900 via-green-800 to-blue-900', icon: '⚽' },
  { id: 3, category: 'beisbol', sport: 'Béisbol', label: 'Fotografía béisbol Cancún - SnapSport', gradient: 'from-blue-900 via-indigo-800 to-purple-900', icon: '⚾' },
  { id: 4, category: 'basquetbol', sport: 'Básquetbol', label: 'Fotografía básquetbol Cancún - SnapSport', gradient: 'from-yellow-900 via-orange-800 to-red-800', icon: '🏀' },
  { id: 5, category: 'atletismo', sport: 'Atletismo', label: 'Fotografía atletismo Cancún - SnapSport', gradient: 'from-teal-900 via-cyan-800 to-blue-800', icon: '🏃' },
  { id: 6, category: 'futbol-am', sport: 'Fútbol Americano', label: 'Fotografía fútbol americano acción Cancún - SnapSport', gradient: 'from-red-900 via-orange-800 to-yellow-800', icon: '🏈' },
  { id: 7, category: 'soccer', sport: 'Soccer', label: 'Fotografía soccer torneos Cancún - SnapSport', gradient: 'from-lime-900 via-green-800 to-emerald-900', icon: '⚽' },
  { id: 8, category: 'beisbol', sport: 'Béisbol', label: 'Fotografía béisbol Quintana Roo - SnapSport', gradient: 'from-violet-900 via-blue-800 to-indigo-900', icon: '⚾' },
  { id: 9, category: 'atletismo', sport: 'Atletismo', label: 'Fotografía atletismo deportivo Cancún - SnapSport', gradient: 'from-sky-900 via-blue-800 to-cyan-900', icon: '🏃' },
];

const filters: { key: Category; label: string }[] = [
  { key: 'todos', label: 'Todos' },
  { key: 'futbol-am', label: 'Fútbol Am.' },
  { key: 'soccer', label: 'Soccer' },
  { key: 'beisbol', label: 'Béisbol' },
  { key: 'basquetbol', label: 'Básquetbol' },
  { key: 'atletismo', label: 'Atletismo' },
];

export default function Gallery() {
  const [active, setActive] = useState<Category>('todos');
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered =
    active === 'todos'
      ? galleryItems
      : galleryItems.filter((item) => item.category === active);

  return (
    <section
      id="galeria"
      className="py-20 lg:py-28 bg-gray-900"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-orange-500 font-bold text-sm uppercase tracking-widest mb-4">
            Nuestro trabajo
          </span>
          <h2
            id="gallery-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4"
          >
            Galería — Fotografía Deportiva{' '}
            <span className="text-orange-500">en Cancún</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Cada foto cuenta una historia de esfuerzo, pasión y victoria. Estos son
            algunos momentos que hemos inmortalizado para nuestros clientes.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" role="tablist" aria-label="Filtrar por deporte">
          {filters.map((f) => (
            <button
              key={f.key}
              role="tab"
              aria-selected={active === f.key}
              onClick={() => setActive(f.key)}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-200 ${
                active === f.key
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group"
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              role="img"
              aria-label={item.label}
            >
              {/* Gradient background (replace with next/image in production) */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-500 group-hover:scale-105`}
              />

              {/* Sport icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-7xl opacity-30 group-hover:opacity-10 transition-opacity duration-300" aria-hidden="true">
                  {item.icon}
                </span>
              </div>

              {/* Placeholder text */}
              <div className="absolute inset-0 flex items-end p-4">
                <p className="text-white/20 text-xs font-medium">
                  {item.label}
                </p>
              </div>

              {/* Hover overlay */}
              <div
                className={`absolute inset-0 bg-blue-900/80 flex flex-col items-center justify-center transition-opacity duration-300 ${
                  hovered === item.id ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <span className="text-4xl mb-3" aria-hidden="true">{item.icon}</span>
                <span className="text-white font-black text-xl mb-1">{item.sport}</span>
                <span className="text-orange-400 text-sm font-semibold">Ver más →</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6 text-sm">
            * Agrega tus fotos reales en{' '}
            <code className="text-orange-400 bg-gray-800 px-2 py-0.5 rounded">public/images/</code>
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-colors duration-200"
          >
            Solicita tu Cobertura
          </a>
        </div>
      </div>
    </section>
  );
}
