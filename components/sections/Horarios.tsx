const schedule = [
  { day: 'Lunes', hours: 'Cerrado' },
  { day: 'Martes', hours: '18:00 - 00:00' },
  { day: 'Miércoles', hours: '18:00 - 00:00' },
  { day: 'Jueves', hours: '18:00 - 00:00' },
  { day: 'Viernes', hours: '18:00 - 02:00' },
  { day: 'Sábado', hours: '12:00 - 02:00' },
  { day: 'Domingo', hours: '12:00 - 00:00' },
];

export default function Horarios() {
  const today = new Date().getDay();
  const todayIndex = today === 0 ? 6 : today - 1;

  return (
    <section className="relative bg-bg py-32 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <header className="mb-16">
          <p className="text-primary text-sm md:text-lg uppercase tracking-[0.6em] mb-4 font-black">
            Visítanos
          </p>
          <h2
            className="text-5xl md:text-7xl text-white"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Horarios
          </h2>
          <div className="h-[1px] w-20 bg-primary/40 mx-auto mt-8"></div>
        </header>

        <div className="max-w-md mx-auto space-y-3">
          {schedule.map((item, i) => (
            <div
              key={item.day}
              className={`flex justify-between items-center px-6 py-4 rounded-sm border transition-all duration-300 ${
                i === todayIndex
                  ? 'border-primary bg-primary/10'
                  : 'border-border bg-surface hover:border-white/20'
              }`}
            >
              <span
                className={`font-bold text-sm uppercase tracking-[0.1em] ${
                  i === todayIndex ? 'text-primary' : 'text-white/80'
                }`}
              >
                {item.day}
              </span>
              <span
                className={`text-sm ${
                  item.hours === 'Cerrado'
                    ? 'text-red-400/60'
                    : i === todayIndex
                      ? 'text-white'
                      : 'text-white/60'
                }`}
              >
                {item.hours}
              </span>
            </div>
          ))}
        </div>

        <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] mt-8">
          Hoy está resaltado en naranja
        </p>
      </div>
    </section>
  );
}
