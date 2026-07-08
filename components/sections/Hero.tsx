import RedesSociales from '../RedesSociales';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-4 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(244,121,32,0.08)_0%,transparent_70%)] pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative flex flex-col items-center mb-16 md:mb-20 animate-fade">
        <h1
          className="font-playfair text-white text-[clamp(4rem,16vw,12rem)] font-bold tracking-tighter leading-none text-center"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Mesa
        </h1>
        <h2
          className="text-primary text-[clamp(5rem,20vw,15rem)] leading-[0.3] mt-[-0.1em] drop-shadow-[0_15px_50px_rgba(244,121,32,0.4)]"
          style={{ fontFamily: 'var(--font-dancing)' }}
        >
          Viva
        </h2>
      </div>

      <div
        id="redes"
        className="flex flex-col items-center animate-fade [animation-delay:400ms] text-center w-full"
      >
        <h3
          className="text-white text-3xl md:text-5xl mb-12 drop-shadow-lg font-bold"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Síguenos en Mesa Viva
        </h3>
        <RedesSociales />
      </div>
    </section>
  );
}
