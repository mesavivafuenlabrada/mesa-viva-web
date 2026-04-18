"use client"; // Esto es necesario para que el reloj se mueva
import { useState, useEffect } from 'react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ dias: 0, horas: 0, min: 0, seg: 0 });

  useEffect(() => {
    const target = new Date("2026-05-08T00:00:00").getTime(); // Cambia la fecha aquí
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      setTimeLeft({
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        min: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seg: Math.floor((difference % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-4 text-center justify-center my-10">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="bg-white/50 p-4 rounded-lg min-w-[80px] border border-stone-200">
          <div className="text-3xl font-bold text-red-700">{value}</div>
          <div className="text-[10px] uppercase tracking-widest text-stone-500">{label}</div>
        </div>
      ))}
    </div>
  );
}