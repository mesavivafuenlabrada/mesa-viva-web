import Header from '../components/Header';
import Hero from '../components/sections/Hero';
import QuienesSomos from '../components/sections/QuienesSomos';
import Historia from '../components/sections/Historia';
import MenuDigital from '../components/sections/MenuDigital';
import Carta from '../components/sections/Carta';
import Horarios from '../components/sections/Horarios';
import Reservas from '../components/sections/Reservas';
import Ubicacion from '../components/sections/Ubicacion';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-white selection:bg-primary/30 overflow-x-hidden">
      <Header />

      <Hero />
      <QuienesSomos />
      <Historia />
      <MenuDigital />
      <Carta />
      <Horarios />
      <Reservas />
      <Ubicacion />

      <Footer />
      <ScrollToTop />
    </main>
  );
}
