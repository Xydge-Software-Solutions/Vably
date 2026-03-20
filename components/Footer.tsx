import Link from 'next/link';
import { Megaphone, Globe, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-emerald-950 text-emerald-400 py-16 px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8 max-w-7xl mx-auto">
        <div className="col-span-2 md:col-span-1">
          <span className="text-xl font-bold text-white block mb-6 font-headline">VABLY</span>
          <p className="text-emerald-100/60 text-sm font-manrope leading-relaxed">
            Architecting the future of remote work, one masterclass at a time.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 font-label">Programs</h4>
          <ul className="space-y-4">
            <li><Link className="text-emerald-100/60 hover:text-white transition-opacity text-sm font-manrope" href="/programs">VA Accelerator</Link></li>
            <li><Link className="text-emerald-100/60 hover:text-white transition-opacity text-sm font-manrope" href="#">Masterclass</Link></li>
            <li><Link className="text-emerald-100/60 hover:text-white transition-opacity text-sm font-manrope" href="#">Elite Comm</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 font-label">Company</h4>
          <ul className="space-y-4">
            <li><Link className="text-emerald-100/60 hover:text-white transition-opacity text-sm font-manrope" href="#">About Sifon</Link></li>
            <li><Link className="text-emerald-100/60 hover:text-white transition-opacity text-sm font-manrope" href="#">Alumni</Link></li>
            <li><Link className="text-emerald-100/60 hover:text-white transition-opacity text-sm font-manrope" href="#">Privacy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 font-label">Connect</h4>
          <div className="flex gap-4">
            <Megaphone className="w-6 h-6 cursor-pointer hover:text-white transition-colors" />
            <Globe className="w-6 h-6 cursor-pointer hover:text-white transition-colors" />
            <MessageCircle className="w-6 h-6 cursor-pointer hover:text-white transition-colors" />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-white/10 text-center">
        <p className="text-emerald-100/40 text-xs font-manrope tracking-wide">© 2024 VABLY. The Digital Architect.</p>
      </div>
    </footer>
  );
}
