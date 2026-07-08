export default function QuienesSomos() {
  return (
    <section id="quienes-somos" className="relative bg-bg py-32 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <header className="mb-20">
          <p className="text-primary text-sm md:text-lg uppercase tracking-[0.6em] mb-4 font-black">
            Tu lugar en el mundo
          </p>
          <h2
            className="text-5xl md:text-7xl text-white"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Quiénes Somos
          </h2>
          <div className="h-[1px] w-20 bg-primary/40 mx-auto mt-8"></div>
        </header>
        <div className="space-y-12 text-white/80 leading-relaxed text-lg font-light">
          <p className="text-xl text-white font-medium">
            &ldquo;No somos un bar cualquiera. Somos tu Mesa Viva.&rdquo;
          </p>
          <p className="max-w-2xl mx-auto">
            Mesa Viva nace de un sueño para que cada persona se sienta en casa.
            Traemos los toques latinos que saben a fiesta abrazando la comida
            española que nos acogió.
          </p>
        </div>
      </div>
    </section>
  );
}
