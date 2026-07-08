'use client';

import { useState } from 'react';
import { menu } from '../../menuData';

const categories = [
  { key: 'paraPicar', label: 'Para Picar' },
  { key: 'frios', label: 'Fríos' },
  { key: 'hamburguesas', label: 'Hamburguesas' },
  { key: 'carnes', label: 'Carnes' },
  { key: 'postres', label: 'Postres' },
];

export default function MenuDigital() {
  const [active, setActive] = useState('paraPicar');

  const items = menu[active as keyof typeof menu] || [];

  return (
    <section className="relative bg-bg-alt py-32 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-16">
          <p className="text-primary text-sm md:text-lg uppercase tracking-[0.6em] mb-4 font-black">
            Descubre nuestros sabores
          </p>
          <h2
            className="text-5xl md:text-7xl text-white"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Menú
          </h2>
          <div className="h-[1px] w-20 bg-primary/40 mx-auto mt-8"></div>
        </header>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-6 py-3 rounded-full text-[11px] uppercase tracking-[0.2em] font-bold transition-all duration-300 cursor-pointer ${
                active === cat.key
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-surface text-white/60 border border-border hover:border-primary/50 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.nombre}
              className="group bg-surface border border-border rounded-sm p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex justify-between items-start gap-4">
                <h3 className="text-white font-bold text-lg">{item.nombre}</h3>
                <span className="text-primary font-bold text-lg whitespace-nowrap">
                  {item.precio}€
                </span>
              </div>
              <p className="text-white/50 text-sm mt-2 leading-relaxed">
                {item.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
