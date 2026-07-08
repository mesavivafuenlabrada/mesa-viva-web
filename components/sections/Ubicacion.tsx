export default function Ubicacion() {
  return (
    <section className="relative bg-bg-alt py-32 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto text-center">
        <header className="mb-16">
          <p className="text-primary text-sm md:text-lg uppercase tracking-[0.6em] mb-4 font-black">
            Encuéntranos
          </p>
          <h2
            className="text-5xl md:text-7xl text-white"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Ubicación
          </h2>
          <div className="h-[1px] w-20 bg-primary/40 mx-auto mt-8"></div>
        </header>

        <div className="bg-surface border border-border rounded-sm p-6 md:p-10">
          <p className="text-white/70 text-lg mb-6">
            C/ de Cuzco, 4, 28945 Fuenlabrada, Madrid
          </p>

          <div className="w-full aspect-[16/9] bg-black/50 rounded-sm overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.5!2d-3.794!3d40.286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418a1f2b2b0b0f%3A0x0!2sC.%20de%20Cuzco%2C%204%2C%2028945%20Fuenlabrada%2C%20Madrid!5e0!3m2!1ses!2ses!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Mesa Viva"
            ></iframe>
          </div>

          <a
            href="https://maps.google.com/?q=C.+de+Cuzco,+4,+28945+Fuenlabrada,+Madrid"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 text-primary text-sm uppercase tracking-[0.3em] font-bold hover:text-white transition-colors no-underline"
          >
            Abrir en Google Maps &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
