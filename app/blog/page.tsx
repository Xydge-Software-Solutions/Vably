import Image from 'next/image';
import { CheckCircle, ArrowRight, Calendar, Users, CreditCard, Lightbulb } from 'lucide-react';

export default function Blog() {
  return (
    <main className="pt-24 pb-20">
      {/* Featured Article Section */}
      <section className="max-w-7xl mx-auto px-8 mb-20">
        <div className="relative group cursor-pointer overflow-hidden rounded-[2rem] bg-surface-container-lowest">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-0 lg:gap-12">
            <div className="lg:col-span-7 relative">
              <div className="relative w-full h-[400px] lg:h-[600px] transition-transform duration-700 group-hover:scale-105">
                <Image fill className="object-cover" alt="Modern minimalist home office with plant and laptop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkaeBErx3i3v0FMRUWF20zHjIsfTtxiO7CadxgiEqmeBX7P21_Ha2fjwA84aNyb2gq3Uu_IOeGSRI_FAF2yUiXSmPXSjZRkd-BKf4yrWhXDYhUEIRq82aWrNiMJF1t7hIBkzEp7yHhjhOTbjWlqUgykb3oPL5ISEm0Mq9xywc6Fs7D8hFyUPqHJrquvcBrXoQNC1UUl3r9tguTo89KwDzxl4VhQibP0ohW17ZapDJLhEGFYCa5S10M7iwkLmOzyZMRKJE9yVUS5vYG" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute top-6 left-6 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold tracking-widest text-primary font-headline uppercase">Featured Blueprint</span>
              </div>
            </div>
            <div className="lg:col-span-5 p-8 lg:p-12 lg:-ml-20 z-10">
              <div className="bg-surface-container-lowest/90 backdrop-blur-xl p-8 lg:p-12 rounded-3xl shadow-[0_40px_80px_rgba(26,28,30,0.08)]">
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-tight">Strategy</span>
                  <span className="text-on-surface-variant text-sm font-medium">12 Min Read</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-extrabold font-headline leading-[1.1] mb-6 text-on-background tracking-tighter">
                  Building Your Digital Architecture: The 2024 VA Roadmap.
                </h1>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                  Learn why the world&apos;s top executives aren&apos;t looking for assistants—they&apos;re looking for operational architects to design their digital workflow.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full bg-primary-fixed overflow-hidden">
                      <Image fill className="object-cover" alt="Headshot of a professional female architect" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMBJU2J30toqVFIAORx8IZQ603lPqIivzcTQnbi7ZjD3a6k-JTu8gMCoFCWd1zgYRnMqPrBkZTItvotddlI8yz9uwILNUM6vK3XZGdRtNeaaJuluC0CBFXGrd2Ku4eEIe2BryKN4-R1NidDcHYjk3x6-JPYnP03dDsBjam_t0lvIjhEewPImqttMc0JaJ8ZZcTOhtPOVAgDcQbCd4rvJIL0Ey-m0pJXY35DrU80v7VjwMpOyExFViasCdtE6C8GM7LIZSfTK2RspSb" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-on-surface">Elena Vably</p>
                      <p className="text-xs text-on-surface-variant">Founding Architect</p>
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-primary group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-8 mb-16">
        <div className="flex flex-wrap items-center gap-3 md:justify-center">
          <button className="bg-primary text-on-primary px-6 py-2 rounded-full font-bold text-sm transition-all shadow-md">All Knowledge</button>
          <button className="bg-surface-container-lowest text-on-surface-variant px-6 py-2 rounded-full font-bold text-sm hover:bg-surface-container-high transition-all">AI Workflows</button>
          <button className="bg-surface-container-lowest text-on-surface-variant px-6 py-2 rounded-full font-bold text-sm hover:bg-surface-container-high transition-all">Client Ops</button>
          <button className="bg-surface-container-lowest text-on-surface-variant px-6 py-2 rounded-full font-bold text-sm hover:bg-surface-container-high transition-all">The Masterclass</button>
          <button className="bg-surface-container-lowest text-on-surface-variant px-6 py-2 rounded-full font-bold text-sm hover:bg-surface-container-high transition-all">Career Design</button>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Recent Articles Grid */}
        <div className="lg:col-span-8 space-y-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Card 1 */}
            <div className="group cursor-pointer">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                <Image fill className="object-cover group-hover:scale-110 transition-transform duration-700" alt="Team collaborating around a high-end tech dashboard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhSOSjpscrGpSy397YE-33l8Jo0ssdOOr8QIlrx-65hOE3rrDoqzDGHRftnJT4-YMbQyvi3gbdHsL885pr6UKRZaLv4dynjmJFSABqOtXAafgQAQT6wT1VbLYJko3vfvkU_hKydg_J9HQ5Bl2S_zE3tfKD2heqtAoY9PLMpmsqYMZ1oeeUBCLurGDDF3DBm0V_qD12E8FaQZT79lcynBaVUNDNvMD6nBxxIbL8gIPs83weZbDOXU1MIoH5x1ulLKQa5bMiLFo2yk4C" referrerPolicy="no-referrer" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-primary uppercase">Mastery</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold font-headline mb-3 group-hover:text-primary transition-colors">The Art of High-Level Executive Calendaring</h3>
              <p className="text-on-surface-variant text-sm line-clamp-2 mb-4">Master the nuanced psychology of schedule management for high-performance CEOs.</p>
              <div className="flex items-center gap-4 text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest">
                <span>Mar 12, 2024</span>
                <span className="w-1 h-1 rounded-full bg-outline"></span>
                <span>8 MIN READ</span>
              </div>
            </div>
            {/* Card 2 */}
            <div className="group cursor-pointer">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                <Image fill className="object-cover group-hover:scale-110 transition-transform duration-700" alt="Abstract blue and green tech circuit pattern" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDPsX6Qlx45u5py8SpDiWgG2Jt1Ii41M3ZALZRuEkauG6ilpqgfVsng4NU40Ilun99WCsRZckkhwLRqhjXJ6gKnvsIT4g2_GkV3fpToDXMwCFwf_NMlzhqHn4lozJDReXXlhti97g5-w0rHtqVsaCNpKLyeRoDtBXRFc8gvU7SPnbQxf715-RPuPAmxei3ZzUwpNpOab4UskyNA2f0B3l2DMUyO5tT6wmRIA_VdE5dsdBJS79yxC-nesyaQHbXzMtu2NhzEzheJnH5" referrerPolicy="no-referrer" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-primary uppercase">AI Systems</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold font-headline mb-3 group-hover:text-primary transition-colors">Prompt Engineering for Executive Admins</h3>
              <p className="text-on-surface-variant text-sm line-clamp-2 mb-4">How to leverage Large Language Models to automate 60% of daily administrative friction.</p>
              <div className="flex items-center gap-4 text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest">
                <span>Mar 10, 2024</span>
                <span className="w-1 h-1 rounded-full bg-outline"></span>
                <span>15 MIN READ</span>
              </div>
            </div>
            {/* Card 3 */}
            <div className="group cursor-pointer">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                <Image fill className="object-cover group-hover:scale-110 transition-transform duration-700" alt="Chic modern co-working space with minimal decor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCX5KakGr8S-5mePE1cNRykaVpjdoZNlprrnR1vE8glHptSNoRXACcTxaPtizfW832359XviiYyW223ni4lU6Zl1aGR1IYPcHw5P_g9QXOXHNrD8RMoTheKnShz3yzVB3yvHgg5G6rGorwx40m4NXA6GEk4jD7hj4dhBy9STRr7TP2ZcuTuVRLWE2KHNQ5iDwcQH07Iu2z6AJvFv8_S7s_RAm-RawlsWHLqjBY-Gp3Ie4VvY9qgVughp-jzQhuZd-fZBTFk6SYnHxW" referrerPolicy="no-referrer" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-primary uppercase">Lifestyle</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold font-headline mb-3 group-hover:text-primary transition-colors">The Nomad Architect: Scaling from Anywhere</h3>
              <p className="text-on-surface-variant text-sm line-clamp-2 mb-4">Designing a remote career that supports luxury travel without compromising operational excellence.</p>
              <div className="flex items-center gap-4 text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest">
                <span>Mar 05, 2024</span>
                <span className="w-1 h-1 rounded-full bg-outline"></span>
                <span>6 MIN READ</span>
              </div>
            </div>
            {/* Card 4 */}
            <div className="group cursor-pointer">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                <Image fill className="object-cover group-hover:scale-110 transition-transform duration-700" alt="Person writing on a white board with elegant icons" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgvAa0WHy22y9NPb4kpf2HPJiroyeKXl2B8ZW_2hrqTZ4yNCCcrc_NxRx6Ie-zTD8D9HQwULDZrxBLiZSRgj5xvpXbIjPPdofBLFg3sdaFltdXBtIt4ukIxnllrV8NIcVfnqVr2QLE0bHas1yCc51OMymVCaXLPlXE-Wk4oZytSbMxcovna22sPe83063C3G8uJYzjFlEunsg4c2QkmEHhsIeZyOeexk50xykD66DmSUnbW4TQYGcVsB_iXAjnyshqOQI2-anLH6ye" referrerPolicy="no-referrer" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-primary uppercase">Business</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold font-headline mb-3 group-hover:text-primary transition-colors">Pricing for Value, Not for Hours</h3>
              <p className="text-on-surface-variant text-sm line-clamp-2 mb-4">Stop selling minutes. Start selling outcomes. The VABLY approach to retainer negotiation.</p>
              <div className="flex items-center gap-4 text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest">
                <span>Feb 28, 2024</span>
                <span className="w-1 h-1 rounded-full bg-outline"></span>
                <span>20 MIN READ</span>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="editorial-gradient p-12 rounded-[2.5rem] relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="max-w-md">
                <h2 className="text-3xl font-bold font-headline text-white mb-4 leading-tight">Master the Digital Blueprint.</h2>
                <p className="text-emerald-100/80">Weekly insights on automation, client psychology, and high-value VA career scaling.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input className="bg-white/10 border border-white/20 text-white placeholder:text-emerald-100/50 rounded-xl px-6 py-4 focus:ring-secondary focus:border-secondary backdrop-blur-md min-w-[280px] outline-none" placeholder="Your executive email" type="email"/>
                <button className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-xl font-bold hover:bg-white transition-all whitespace-nowrap">Subscribe</button>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-lime-400/10 rounded-full blur-[80px]"></div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-12">
          {/* Cohort Promotion Card */}
          <div className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/15 shadow-[0_20px_40px_rgba(26,28,30,0.06)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-container/20 rounded-bl-[100px] -z-0"></div>
            <div className="relative z-10">
              <span className="inline-block bg-primary text-white text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-6">Admission Open</span>
              <h4 className="text-2xl font-bold font-headline mb-4">VABLY Masterclass Cohort 12</h4>
              <p className="text-on-surface-variant mb-8 text-sm leading-relaxed">Join 40 high-impact individuals for an 8-week intensive certification in digital architecture.</p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold">Starts April 15, 2024</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold">Limited to 40 Seats</span>
                </div>
                <div className="flex items-center gap-3">
                  <CreditCard className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold">Installments Available</span>
                </div>
              </div>
              <button className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold flex items-center justify-center gap-2 group-hover:shadow-lg transition-all">
                Apply for Cohort 12
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Trending Topics */}
          <div>
            <h5 className="text-xs font-bold tracking-[0.2em] text-on-surface-variant/50 uppercase mb-6 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-outline-variant"></span>
              Trending Now
            </h5>
            <div className="space-y-6">
              <a className="flex gap-4 group" href="#">
                <span className="text-2xl font-black text-outline-variant/30 font-headline leading-none">01</span>
                <div>
                  <h6 className="font-bold group-hover:text-primary transition-colors">The Multi-Six Figure VA: Real Student Case Study</h6>
                  <p className="text-xs text-on-surface-variant mt-1">4.2k Reads</p>
                </div>
              </a>
              <a className="flex gap-4 group" href="#">
                <span className="text-2xl font-black text-outline-variant/30 font-headline leading-none">02</span>
                <div>
                  <h6 className="font-bold group-hover:text-primary transition-colors">Building Your Custom Notion Client Portal</h6>
                  <p className="text-xs text-on-surface-variant mt-1">2.9k Reads</p>
                </div>
              </a>
              <a className="flex gap-4 group" href="#">
                <span className="text-2xl font-black text-outline-variant/30 font-headline leading-none">03</span>
                <div>
                  <h6 className="font-bold group-hover:text-primary transition-colors">Top 10 AI Tools for Administrative Mastery</h6>
                  <p className="text-xs text-on-surface-variant mt-1">1.8k Reads</p>
                </div>
              </a>
            </div>
          </div>

          {/* Expert Badge Integration */}
          <div className="bg-secondary-container/10 p-6 rounded-2xl flex items-start gap-4 border-l-4 border-secondary">
            <Lightbulb className="w-6 h-6 text-secondary shrink-0" />
            <div>
              <p className="text-sm font-bold text-on-secondary-container mb-1 uppercase tracking-tight">Pro Tip</p>
              <p className="text-sm text-on-secondary-container/80 leading-snug">The best architects don&apos;t just follow blueprints—they improve them. Look for gaps in your client&apos;s workflow before they do.</p>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
