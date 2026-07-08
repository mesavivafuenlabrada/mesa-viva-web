'use client';

import { useEffect, useState } from 'react';
import Navbar from './Navbar';

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setHidden(current > lastScroll && current > 100);
      setLastScroll(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 px-6 py-6 md:py-8 bg-gradient-to-b from-black via-black/80 to-transparent backdrop-blur-sm transition-transform duration-500 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="max-w-[1800px] mx-auto">
        <Navbar />
      </div>
    </header>
  );
}
