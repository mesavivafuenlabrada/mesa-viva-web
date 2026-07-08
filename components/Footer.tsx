export default function Footer() {
  return (
    <footer className="py-12 text-center bg-bg-alt border-t border-border">
      <p className="text-[10px] uppercase tracking-[0.8em] text-white/20 mb-4">
        Fuenlabrada &bull; Madrid
      </p>
      <p className="text-[9px] uppercase tracking-widest text-white/10">
        &copy; {new Date().getFullYear()} Mesa Viva. No servimos solo comida.
        Servimos ganas de volver.
      </p>
    </footer>
  );
}
