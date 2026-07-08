const navItems = [
  { name: 'Quiénes Somos', href: '#quienes-somos' },
  { name: 'Nuestra Historia', href: '#historia' },
  { name: 'Carta', href: '#menu' },
  { name: 'Redes', href: '#redes' },
  { name: 'Reservas', href: '#reservas', isAction: true },
];

export default function Navbar() {
  return (
    <nav aria-label="Navegación principal" className="w-full">
      <ul className="flex flex-wrap items-center justify-center gap-x-6 md:gap-x-10 gap-y-3 mx-auto list-none p-0">
        {navItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className={`text-[10px] md:text-[11px] uppercase tracking-[0.3em] md:tracking-[0.5em] font-bold transition-all duration-300 no-underline whitespace-nowrap ${
                item.isAction
                  ? 'bg-primary text-white px-4 py-2 rounded-full hover:bg-white hover:text-black'
                  : 'text-white/90 hover:text-primary'
              }`}
            >
              {item.isAction ? item.name : `| ${item.name}`}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
