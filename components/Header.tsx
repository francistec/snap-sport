'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#galeria', label: 'Galería' },
  { href: '#deportes', label: 'Deportes' },
  { href: '#paquetes', label: 'Paquetes' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-blue-900/95 backdrop-blur-md shadow-lg' : 'bg-blue-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center gap-2 group">
            <span className="text-2xl font-black tracking-tight">
              <span className="text-orange-500">Snap</span>
              <span className="text-white">Sport</span>
            </span>
            <span className="hidden sm:block text-xs text-gray-400 font-medium mt-1">
              Fotografía Deportiva
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-orange-400 font-medium text-sm transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="#contacto"
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm rounded-full transition-colors duration-200 shadow-lg shadow-orange-500/25"
            >
              Solicita Presupuesto
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white"
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="lg:hidden pb-4 border-t border-blue-800" aria-label="Menú móvil">
            <div className="flex flex-col gap-1 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-2.5 text-gray-300 hover:text-orange-400 hover:bg-blue-800 rounded-lg font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contacto"
                onClick={() => setMenuOpen(false)}
                className="mt-2 mx-4 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold text-center rounded-full transition-colors"
              >
                Solicita Presupuesto
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
