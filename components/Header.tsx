'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DraftingCompass, ArrowUpRight } from 'lucide-react';

export function Header() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/programs', label: 'Programs' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-[0_20px_40px_rgba(26,28,30,0.06)]">
      <nav className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <DraftingCompass className="text-emerald-900 w-7 h-7" />
          <span className="text-2xl font-black tracking-tighter text-emerald-950 font-headline">VABLY</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors duration-300 ${
                  isActive
                    ? 'text-emerald-700 font-bold border-b-2 border-emerald-500'
                    : 'text-slate-600 hover:text-emerald-500'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <button className="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-bold text-sm hover:opacity-90 transition-all active:scale-95 flex items-center gap-2">
          Join Next Cohort
          <div className="bg-white/20 rounded-full p-0.5 flex items-center justify-center">
            <ArrowUpRight className="w-3 h-3" />
          </div>
        </button>
      </nav>
    </header>
  );
}
