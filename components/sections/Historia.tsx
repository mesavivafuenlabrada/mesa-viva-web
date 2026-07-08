export default function Historia() {
  return (
    <section id="historia" className="relative bg-bg py-32 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <header className="mb-20">
          <p className="text-primary text-sm md:text-lg uppercase tracking-[0.6em] mb-4 font-black">
            El alma de la cocina
          </p>
          <h2
            className="text-5xl md:text-7xl text-white"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Nuestra Historia
          </h2>
          <div className="h-[1px] w-20 bg-primary/40 mx-auto mt-8"></div>
        </header>
        <p className="max-w-2xl mx-auto text-white/80 font-light leading-relaxed">
          Mesa Viva es un sueño que tuve en un bus. Llegué a España siendo
          ayudante de cocina, y ahora quiero brindarte mi historia en cada
          bocado.
        </p>
      </div>
    </section>
  );
}
