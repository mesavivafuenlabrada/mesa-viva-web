'use client';

import { useState, type FormEvent } from 'react';

const hours = [
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '18:00', '18:30', '19:00', '19:30', '20:00', '20:30',
  '21:00', '21:30', '22:00', '22:30', '23:00', '23:30',
];

const people = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getToday() {
  const d = new Date();
  return d.toISOString().split('T')[0];
}

function formatDate(dateStr: string) {
  const [y, m, d] = dateStr.split('-');
  return `${d}/${m}/${y}`;
}

function buildMessage(data: Record<string, string>) {
  const lines = [
    '¡Hola! Quiero hacer una reserva:',
    `- Nombre: ${data.name}`,
    `- Teléfono: ${data.phone}`,
    `- Fecha: ${data.date}`,
    `- Hora: ${data.time}`,
    `- Personas: ${data.people}`,
  ];
  if (data.notes) {
    lines.push(`- Comentarios: ${data.notes}`);
  }
  return encodeURIComponent(lines.join('\n'));
}

const initial = { name: '', phone: '', date: getToday(), time: '21:00', people: '4', notes: '' };

export default function Reservas() {
  const [form, setForm] = useState(initial);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const msg = buildMessage({ ...form, date: formatDate(form.date) });
    window.open(`https://wa.me/34695232391?text=${msg}`, '_blank');
  };

  const update = (key: string, value: string) => setForm((prev) => ({ ...prev, [key]: value }));

  return (
    <section id="reservas" className="relative bg-bg py-32 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <header className="mb-16">
          <p className="text-primary text-sm md:text-lg uppercase tracking-[0.6em] mb-4 font-black">
            Te esperamos
          </p>
          <h2
            className="text-5xl md:text-7xl text-white"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Reservas
          </h2>
          <div className="h-[1px] w-20 bg-primary/40 mx-auto mt-8"></div>
        </header>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-5 text-left">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 mb-2 block">
                Nombre
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => update('name', e.target.value)}
                className="w-full bg-surface border border-border rounded-sm px-4 py-3 text-white text-sm outline-none focus:border-primary transition-colors placeholder:text-white/20"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 mb-2 block">
                Teléfono
              </label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => update('phone', e.target.value)}
                className="w-full bg-surface border border-border rounded-sm px-4 py-3 text-white text-sm outline-none focus:border-primary transition-colors placeholder:text-white/20"
                placeholder="612 345 678"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <div>
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 mb-2 block">
                Fecha
              </label>
              <input
                type="date"
                required
                value={form.date}
                onChange={(e) => update('date', e.target.value)}
                min={getToday()}
                className="w-full bg-surface border border-border rounded-sm px-4 py-3 text-white text-sm outline-none focus:border-primary transition-colors [color-scheme:dark]"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 mb-2 block">
                Hora
              </label>
              <select
                required
                value={form.time}
                onChange={(e) => update('time', e.target.value)}
                className="w-full bg-surface border border-border rounded-sm px-4 py-3 text-white text-sm outline-none focus:border-primary transition-colors"
              >
                {hours.map((h) => (
                  <option key={h} value={h} className="bg-bg text-white">
                    {h}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 mb-2 block">
                Personas
              </label>
              <select
                required
                value={form.people}
                onChange={(e) => update('people', e.target.value)}
                className="w-full bg-surface border border-border rounded-sm px-4 py-3 text-white text-sm outline-none focus:border-primary transition-colors"
              >
                {people.map((n) => (
                  <option key={n} value={n} className="bg-bg text-white">
                    {n} {n === 1 ? 'persona' : 'personas'}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 mb-2 block">
              Comentarios <span className="text-white/20 font-normal normal-case">(opcional)</span>
            </label>
            <textarea
              rows={3}
              value={form.notes}
              onChange={(e) => update('notes', e.target.value)}
              className="w-full bg-surface border border-border rounded-sm px-4 py-3 text-white text-sm outline-none focus:border-primary transition-colors placeholder:text-white/20 resize-none"
              placeholder="Alergias, preferencias, celebración..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-4 rounded-full uppercase tracking-[0.2em] font-bold text-sm hover:bg-white hover:text-black transition-all duration-500 shadow-xl shadow-primary/20 cursor-pointer"
          >
            Reservar por WhatsApp
          </button>

          <p className="text-center text-white/20 text-[10px] uppercase tracking-[0.3em]">
            O llámanos al{' '}
            <a
              href="tel:+34695232391"
              className="text-primary hover:text-white transition-colors no-underline"
            >
              +34 695 23 23 91
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}
