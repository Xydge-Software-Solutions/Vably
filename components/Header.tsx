'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DraftingCompass, ArrowUpRight, Menu, X } from 'lucide-react';

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <button
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 rounded-lg text-emerald-900 hover:bg-emerald-50 transition-colors"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <button className="hidden md:flex bg-primary text-on-primary px-6 py-2.5 rounded-xl font-bold text-sm hover:opacity-90 transition-all active:scale-95 items-center gap-2">
          Join Next Cohort
          <div className="bg-white/20 rounded-full p-0.5 flex items-center justify-center">
            <ArrowUpRight className="w-3 h-3" />
          </div>
        </button>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden px-8 pb-6 max-w-7xl mx-auto">
          <div className="rounded-2xl bg-white/95 backdrop-blur border border-emerald-100 shadow-lg p-4 space-y-2">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block rounded-lg px-3 py-2 font-medium transition-colors duration-300 ${
                    isActive
                      ? 'text-emerald-700 bg-emerald-50'
                      : 'text-slate-700 hover:text-emerald-600 hover:bg-emerald-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 bg-primary text-on-primary px-4 py-2.5 rounded-xl font-bold text-sm hover:opacity-90 transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              Join Next Cohort
              <div className="bg-white/20 rounded-full p-0.5 flex items-center justify-center">
                <ArrowUpRight className="w-3 h-3" />
              </div>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
