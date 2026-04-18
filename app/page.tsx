import React from 'react';
import Countdown from './Countdown';

// 1. COMPONENTE: NAVBAR (Actualizado con Reservas y Teléfono)
function Navbar() {
  const navItems = [
    { name: '| Quiénes Somos- |', href: '#quienes-somos' },
    { name: '| Nuestra Historia |', href: '#historia' },
    { name: '| Explorar Carta |', href: '#menu' },
    { name: '| Redes Sociales |', href: '#redes' },
    { name: 'Reservas', href: 'tel:+34695232391', isAction: true }, // Nueva opción
  ];

  return (
    <nav aria-label="Navegación principal" className="w-full">
      <ul className="flex flex-wrap items-center justify-center gap-x-6 md:gap-x-12 gap-y-4 mx-auto list-none p-0">
        {navItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className={`text-[10px] md:text-[11px] uppercase tracking-[0.4em] md:tracking-[0.6em] font-bold transition-all duration-300 no-underline whitespace-nowrap ${
                item.isAction 
                ? 'bg-[#f47920] text-white px-4 py-2 rounded-full hover:bg-white hover:text-black' 
                : '!text-white hover:!text-[#f47920] opacity-90 hover:opacity-100'
              }`}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// 2. COMPONENTE: HEADER
function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-[100] px-6 py-8 md:py-10 bg-gradient-to-b from-black via-black/80 to-transparent backdrop-blur-[4px]">
      <div className="max-w-[1800px] mx-auto">
        <Navbar />
      </div>
    </header>
  );
}

// 3. SECCIÓN: QUIÉNES SOMOS
function QuienesSomosSection() {
  return (
    <section id="quienes-somos" className="relative bg-[#0a0a0a] py-32 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <header className="mb-20">
          <p className="text-[#f47920] text-sm md:text-lg uppercase tracking-[0.6em] mb-4 font-black">Tu lugar en el mundo</p>
          <h2 className="font-mesa italic text-5xl md:text-7xl text-white">Quiénes Somos</h2>
          <div className="h-[1px] w-20 bg-[#f47920]/40 mx-auto mt-8"></div>
        </header>

        <div className="space-y-20 text-white/80 leading-relaxed text-lg font-light">
          <article className="max-w-2xl mx-auto">
            <h3 className="text-[#f47920] font-bold text-sm mb-6 uppercase tracking-[0.3em]">Más que un bar</h3>
            <p className="text-xl text-white font-medium mb-4 italic">"No somos un bar cualquiera. Somos tu Mesa Viva."</p>
            <p>
              Mesa Viva nace de un sueño, pero se sostiene de una idea muy sencilla: que cada persona que cruza nuestra puerta se sienta en casa. Sin postureo, sin prisas, sin extraños.
            </p>
          </article>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left max-w-3xl mx-auto">
            <div className="space-y-4">
              <h4 className="text-[#f47920] font-bold uppercase tracking-widest text-xs">Una mezcla de dos mundos</h4>
              <p className="text-sm">
                Traemos los <span className="text-white">toques latinos</span> que saben a fiesta, color y calidez, abrazando la <span className="text-white">comida española</span> que nos acogió. Esa mezcla es nuestra identidad.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-[#f47920] font-bold uppercase tracking-widest text-xs">Lo que nos importa</h4>
              <p className="text-sm">
                La cercanía de conocerte, la alegría de compartir una caña y la honestidad de cocinar con amor cada día.
              </p>
            </div>
          </div>

          <article className="max-w-2xl mx-auto pt-10">
            <div className="p-8 border border-white/10 bg-white/[0.02] rounded-sm">
              <p className="text-white italic mb-4">📍 Paseo de Chile, 16 – Frente a la Parroquia de San Juan Bautista</p>
              <p className="text-sm opacity-70">
                Porque una mesa llena de amigos es el mejor lugar del mundo. De la primera tapa a la última risa, hay solo un paso.
              </p>
            </div>
            <div className="mt-12">
              <p className="font-mesa italic text-[#f47920] text-3xl md:text-5xl">
                "No servimos solo comida. Servimos ganas de volver."
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

// 4. SECCIÓN: NUESTRA HISTORIA
function HistoriaSection() {
  return (
    <section id="historia" className="relative bg-[#0a0a0a] py-32 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <header className="mb-20">
          <p className="text-[#f47920] text-sm md:text-lg uppercase tracking-[0.6em] mb-4 font-black">El alma de la cocina</p>
          <h2 className="font-mesa italic text-5xl md:text-7xl text-white">Nuestra Historia</h2>
          <div className="h-[1px] w-20 bg-[#f47920]/40 mx-auto mt-8"></div>
        </header>

        <div className="space-y-20 text-white/80 leading-relaxed text-lg font-light">
          <article className="max-w-2xl mx-auto">
            <h3 className="text-[#f47920] font-bold text-sm mb-6 uppercase tracking-[0.3em]">De mis raíces a tu plato</h3>
            <p>
              Llegué a España siendo ayudante de cocina, donde la comida española me abrió los brazos. Pero llevo conmigo los <span className="text-white font-semibold italic">toques latinos</span> que me vieron nacer.
            </p>
          </article>

          <article className="max-w-2xl mx-auto">
            <h3 className="text-[#f47920] font-bold text-sm mb-6 uppercase tracking-[0.3em]">Un rincón propio</h3>
            <p>
              Mucha gente me preguntaba: "¿Y por qué Mesa Viva?" Porque siempre quise tener lo mío. Un lugar donde brindarle a la gente mi historia en cada bocado.
            </p>
            <blockquote className="mt-10 p-8 border-y border-white/10 bg-white/[0.02] font-mesa text-2xl text-white italic">
              "Mesa Viva es un sueño que tuve en un bus. Y ahora es el sueño que quiero compartir contigo."
            </blockquote>
          </article>

          <footer className="mt-16 flex flex-col items-center">
            <p className="font-mesa italic text-[#f47920] text-4xl md:text-6xl mb-8 leading-tight">
              "Cocino con amor. Sirvo con el alma. Y te espero con una caña."
            </p>
            <p className="uppercase tracking-[0.5em] text-[10px] font-bold opacity-40"></p>
          </footer>
        </div>
      </div>
    </section>
  );
}

// 5. SECCIÓN: CARTA
function CartaSection() {
  return (
    <section id="menu" className="relative bg-[#0a0a0a] py-32 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <header className="mb-20">
          <p className="text-[#f47920] text-sm md:text-lg uppercase tracking-[0.6em] mb-4 font-black">Explora</p>
          <h2 className="font-mesa italic text-5xl md:text-7xl text-white">Nuestra Carta</h2>
          <div className="h-[1px] w-20 bg-[#f47920]/40 mx-auto mt-8"></div>
        </header>
        
        <div className="bg-white/[0.03] p-10 md:p-20 rounded-sm border border-white/10 backdrop-blur-md max-w-3xl mx-auto shadow-2xl">
          <h3 className="font-mesa italic text-2xl md:text-4xl text-white mb-8">
            "Sabores que cuentan una historia"
          </h3>
          
          <a 
            href="https://buscarmenu.es/menu/barmesaviva/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block w-full md:w-auto bg-[#f47920] text-white px-12 py-5 rounded-full uppercase tracking-[0.2em] font-bold text-[13px] hover:bg-white hover:text-black transition-all duration-500 shadow-xl shadow-[#f47920]/10 no-underline mb-16"
          >
            Abrir Carta Digital
          </a>

          <div className="flex flex-col items-center gap-8">
            <div className="bg-white p-3 rounded-sm shadow-2xl">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://buscarmenu.es/menu/barmesaviva/" 
                alt="QR Carta Mesa Viva" 
                className="w-32 h-32"
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

// 6. SECCIÓN: REDES SOCIALES
function RedesSection() {
  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/mesa_viva_fuenlabrada/',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
      ),
      label: '@mesa_viva_fuenlabrada'
    },
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@mesa_viva_fuenlabrada?lang=es',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
      ),
      label: '@mesa_viva_fuenlabrada'
    },
    {
      name: 'Email',
      href: 'mailto:mesavivafuenlabrada@gmail.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
      ),
      label: 'mesavivafuenlabrada@gmail.com'
    }
  ];

  return (
    <section id="redes" className="relative bg-[#050505] py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto text-center">
        <header className="mb-12">
          <p className="text-[#f47920] text-xs uppercase tracking-[0.6em] mb-4 font-black">Conectamos</p>
          <h2 className="font-mesa italic text-4xl md:text-5xl text-white">Síguenos en Mesa Viva</h2>
        </header>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-6 py-3 bg-white/[0.03] border border-white/10 rounded-full hover:border-[#f47920]/50 transition-all duration-300 no-underline !text-white"
            >
              <div className="text-white group-hover:text-[#f47920] transition-colors">
                {social.icon}
              </div>
              <div className="flex flex-col items-start no-underline">
                <span className="text-[8px] uppercase tracking-[0.2em] font-black text-[#f47920]">
                  {social.name}
                </span>
                <span className="text-[11px] font-medium text-white group-hover:text-white/80 no-underline italic">
                  {social.label}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// 7. COMPONENTE PRINCIPAL
export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#f47920]/30 overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Inter:wght@400;700;900&display=swap');
        
        :root { scroll-behavior: smooth; }
        .font-mesa { font-family: 'Playfair Display', serif; }
        .font-viva { font-family: 'Dancing Script', cursive; }

        a, a:visited, a:hover, a:active {
          text-decoration: none !important;
          color: inherit;
        }

        nav a { 
          font-family: 'Inter', sans-serif !important; 
        }

        .countdown-large span {
          font-size: clamp(2.5rem, 12vw, 5rem) !important; 
          font-weight: 800 !important;
          color: white !important;
          line-height: 1 !important;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade { animation: fadeIn 1.2s ease-out forwards; }
      `}} />

      <Header />

      <section className="relative h-screen flex flex-col items-center justify-center pt-20 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(244,121,32,0.05)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="relative flex flex-col items-center mb-24 md:mb-40 animate-fade">
          <h1 className="font-mesa text-white text-[clamp(4rem,16vw,12rem)] font-bold tracking-tighter leading-none text-center">
            Mesa
          </h1>
          <h2 className="font-viva text-[#f47920] text-[clamp(5rem,20vw,15rem)] leading-[0.3] mt-[-0.1em] drop-shadow-[0_15px_50px_rgba(244,121,32,0.4)]">
            Viva
          </h2>
        </div>
        <div className="flex flex-col items-center animate-fade [animation-delay:400ms]">
          <h3 className="font-viva text-[#f47920] text-[2.5rem] md:text-[3.5rem] mb-8 md:mb-12 drop-shadow-lg text-center">
            Inauguración
          </h3>
          <div className="countdown-large">
            <Countdown />
          </div>
        </div>
      </section>

      <QuienesSomosSection />
      <HistoriaSection />
      <CartaSection />
      <RedesSection />

      <footer className="py-12 text-center bg-[#050505] border-t border-white/5">
        <p className="text-[10px] uppercase tracking-[0.8em] text-white/20 mb-2">Fuenlabrada • Madrid</p>
        <p className="text-[9px] uppercase tracking-widest text-white/10 italic">
          © {new Date().getFullYear()} Mesa Viva. No servimos solo comida. Servimos ganas de volver.
        </p>
      </footer>
    </main>
  );
}