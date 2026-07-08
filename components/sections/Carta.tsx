import Image from 'next/image';

export default function Carta() {
  return (
    <section id="menu" className="relative bg-bg py-32 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <header className="mb-20">
          <p className="text-primary text-sm md:text-lg uppercase tracking-[0.6em] mb-4 font-black">
            Explora
          </p>
          <h2
            className="text-5xl md:text-7xl text-white"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Nuestra Carta
          </h2>
          <div className="h-[1px] w-20 bg-primary/40 mx-auto mt-8"></div>
        </header>

        <div className="bg-surface p-10 md:p-20 rounded-sm border border-border backdrop-blur-md max-w-3xl mx-auto shadow-2xl">
          <h3
            className="text-2xl md:text-4xl text-white mb-8"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            &ldquo;Sabores que cuentan una historia&rdquo;
          </h3>

          <a
            href="https://buscarmenu.es/menu/barmesaviva/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full md:w-auto bg-primary text-white px-12 py-5 rounded-full uppercase tracking-[0.2em] font-bold text-[13px] hover:bg-white hover:text-black transition-all duration-500 shadow-xl no-underline mb-16"
          >
            Abrir Carta Digital
          </a>

          <div className="flex flex-col items-center gap-8">
            <div className="bg-white p-3 rounded-sm shadow-2xl">
              <Image
                src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://buscarmenu.es/menu/barmesaviva/"
                alt="QR Carta Mesa Viva"
                width={128}
                height={128}
                className="w-32 h-32"
                unoptimized
              />
            </div>
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40">
              Escanea para ver el menú en tu móvil
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
