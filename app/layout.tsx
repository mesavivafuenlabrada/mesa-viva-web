import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Dancing_Script, Inter } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const dancing = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mesa Viva | Bar & Restaurante en Fuenlabrada',
  description:
    'Mesa Viva es un bar-restaurante en Fuenlabrada, Madrid. Cocina fusión latina-española, hamburguesas, carnes y más. ¡Te esperamos!',
  keywords: ['Mesa Viva', 'restaurante', 'Fuenlabrada', 'comida latina', 'bar', 'hamburguesas'],
  openGraph: {
    title: 'Mesa Viva | Bar & Restaurante en Fuenlabrada',
    description:
      'No somos un bar cualquiera. Somos tu Mesa Viva. Cocina fusión latina-española.',
    url: 'https://mesaviva.com',
    siteName: 'Mesa Viva',
    locale: 'es_ES',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${dancing.variable} ${inter.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
