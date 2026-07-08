const socialLinks = [
  {
    name: 'WhatsApp',
    href: 'https://wa.me/34695232391',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.3 8.38 8.38 0 0 1 3.8.9L21 3.5Z"/></svg>
    ),
    label: '+34 695 23 23 91',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/mesa_viva_fuenlabrada/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
    ),
    label: '@mesa_viva_fuenlabrada',
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@mesa_viva_fuenlabrada?lang=es',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
    ),
    label: '@mesa_viva_fuenlabrada',
  },
  {
    name: 'Email',
    href: 'mailto:mesavivafuenlabrada@gmail.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
    ),
    label: 'mesaviva@gmail.com',
  },
];

export default function RedesSociales() {
  return (
    <div className="flex flex-wrap justify-center gap-3 md:gap-5 w-full max-w-[1400px] mx-auto px-4">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 px-5 py-3 bg-surface border border-border rounded-full hover:border-primary/50 transition-all duration-300 no-underline text-white flex-shrink-0"
        >
          <div className="text-white group-hover:text-primary transition-colors">
            {social.icon}
          </div>
          <div className="flex flex-col items-start text-left leading-tight">
            <span className="text-[8px] uppercase tracking-[0.2em] font-black text-primary">
              {social.name}
            </span>
            <span className="text-[11px] font-medium text-white/80 group-hover:text-white transition-colors italic">
              {social.label}
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
