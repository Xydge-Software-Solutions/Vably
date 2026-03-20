import Image from 'next/image';
import { CheckCircle, ArrowUpRight, Award, ArrowRight, Terminal, Network, Brain } from 'lucide-react';
import { TestimonialCarousel } from '@/components/TestimonialCarousel';

export default function Home() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-8 py-20 lg:py-32 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <div className="inline-flex items-center gap-2 bg-primary-fixed text-on-primary-fixed px-4 py-1.5 rounded-full mb-6">
              <CheckCircle className="w-4 h-4" />
              <span className="text-xs font-bold tracking-widest uppercase font-label">The Digital Architect Blueprint</span>
            </div>
            <h1 className="font-headline text-5xl lg:text-7xl font-extrabold text-on-background tracking-tight leading-[1.1] mb-8">
              Master the Art of <span className="text-primary italic">High-Value</span> Assistance.
            </h1>
            <p className="text-lg lg:text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed">
              Move beyond administration. VABLY transforms ambitious professionals into elite Digital Architects, guided by Upwork&apos;s top 1% talent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg hover:shadow-secondary-container/20 transition-all">
                Join Next Cohort
                <div className="bg-on-secondary-container/10 p-1 rounded-full">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </button>
              <button className="border border-outline-variant text-on-surface px-8 py-4 rounded-xl font-bold hover:bg-surface-container-low transition-all">
                View Curriculum
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
              <Image alt="Professional Virtual Assistant Workspace" fill className="object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4BL4y2FrghCIP4IK4IqiElL461HM8ZWnld5bDKz10GGKcGVniqhXE9M25Y-94ebKv9bE6Em6VRuGeLMw0QiJ2k2X1E9-nwP-pmlCac8Hb7aDJQpF2jvzEAgIJ94INBWNgNaTre-hLL4c9k92uowCNYC2g1PLalgLpV4_IWlvz9V2EhZiucHrqHPu0Nizp3SpIWG-6W6hjv_XhR5a8c-Agyrh5WnnqX_KahHzyXDsiYTK7OENORW3xfli68PH-NmCwcGHI8mlURTwR" referrerPolicy="no-referrer" />
              <div className="absolute bottom-6 left-6 glass-card p-4 rounded-2xl shadow-xl border border-white/20 flex items-center gap-4">
                <div className="bg-primary p-2 rounded-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-primary uppercase tracking-widest leading-none mb-1">Top Rated Plus</p>
                  <p className="text-sm font-bold text-on-surface">Upwork Certified Excellence</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary-fixed/30 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* Logo Bar */}
      <section className="bg-surface-container-low py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-outline mb-10">Alumni Hired By Global Giants</p>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-40 grayscale contrast-125">
            <span className="text-2xl font-black font-headline tracking-tighter">UPWORK</span>
            <span className="text-2xl font-black font-headline tracking-tighter">FIVERR</span>
            <span className="text-2xl font-black font-headline tracking-tighter">REMOTE.CO</span>
            <span className="text-2xl font-black font-headline tracking-tighter">HUBSPOT</span>
            <span className="text-2xl font-black font-headline tracking-tighter">NOTION</span>
          </div>
        </div>
      </section>

      {/* About Sifon Thomas */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="bg-primary aspect-square rounded-[3rem] absolute -bottom-6 -right-6 -z-10"></div>
            <div className="relative rounded-[3rem] w-full aspect-square overflow-hidden shadow-2xl">
              <Image alt="Sifon Thomas Portrait" fill className="object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpFwjbQ14qMQqRuJR4UsIh3sM_f59jtDizFfryMRBjpcfDoA3AelUevM_Xcia6svFtXzXppBhOS2XCc6WSuKoaP0xbsWPPn0idkaYeddm5bwuoNi4HmPOOXI5AxGWUihcLEiQGOh8XLfSc-p5L4Jn-CjJLJtgs_5vik7XCzzLcMOffwAGEsfS-2IW8fV7MVxYSzFy8YDQuFQZscJFXg_MJmm2VeCDgEo2DR6TPWVny8PXqMQa0fFnBlHVUQCqMX5QvwrW9-oPhBHYC" referrerPolicy="no-referrer" />
            </div>
          </div>
          <div>
            <span className="text-primary font-bold uppercase tracking-[0.15em] text-sm mb-4 block">Meet Your Lead Architect</span>
            <h2 className="font-headline text-4xl font-extrabold text-on-background mb-8 leading-tight">Founded by Sifon Thomas, the standard for elite VAs.</h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed">
              <p>After scaling a freelance career to the Top 1% of Upwork earners globally, Sifon realized the industry wasn&apos;t lacking workers—it was lacking <span className="text-on-surface font-bold">architects</span>.</p>
              <p>VABLY was born to codify the exact systems, communication frameworks, and technical stacks that global founders pay a premium for. We don&apos;t teach you how to work; we teach you how to lead.</p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-outline-variant/20 pt-10">
              <div>
                <p className="text-3xl font-black text-primary mb-1">500+</p>
                <p className="text-xs font-bold uppercase tracking-wider text-outline">Graduates Placed</p>
              </div>
              <div>
                <p className="text-3xl font-black text-primary mb-1">$2M+</p>
                <p className="text-xs font-bold uppercase tracking-wider text-outline">Total Alumni Earnings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive About Section */}
      <section className="py-24 px-8 relative overflow-hidden architectural-grid border-y border-surface-container">
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="h-[2px] w-12 bg-primary"></div>
                <span className="text-primary font-black uppercase tracking-[0.2em] text-xs">The Vision</span>
              </div>
              <h2 className="font-headline text-4xl lg:text-5xl font-extrabold text-on-background leading-tight mb-8">
                We don&apos;t just train assistants. We build <span className="text-primary">Digital Architects</span>.
              </h2>
              <p className="text-xl text-on-surface-variant leading-relaxed mb-8">
                In a global market flooded with generalists, VABLY is the definitive academy for professionals who demand more from their careers. We bridge the gap between basic task execution and strategic partnership.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white border-l-4 border-primary shadow-sm">
                  <h4 className="font-bold text-on-surface mb-2">Technical Mastery</h4>
                  <p className="text-sm text-on-surface-variant">Deep-dive training into the exact SaaS stacks high-growth companies use.</p>
                </div>
                <div className="p-6 bg-white border-l-4 border-secondary shadow-sm">
                  <h4 className="font-bold text-on-surface mb-2">High-Value Network</h4>
                  <p className="text-sm text-on-surface-variant">Direct pathways to Upwork&apos;s most prestigious and high-paying roles.</p>
                </div>
              </div>
            </div>
            <div className="space-y-12 lg:pt-12">
              <div className="relative pl-12 border-l border-outline-variant/30 pb-12">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-[10px] font-bold">1</div>
                <h3 className="text-2xl font-bold font-headline mb-4 text-on-background">The Blueprint for Authority</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Our curriculum is built on the real-world success of our founder, Sifon Thomas. As a Top-Rated Expert who has billed thousands of hours for global executives, Sifon has decoded the DNA of high-value remote work. VABLY teaches you how to design workflows, manage complex projects, and become the &quot;Digital Architect&quot; every founder dreams of hiring.
                </p>
              </div>
              <div className="relative pl-12 border-l border-outline-variant/30 pb-12">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container text-[10px] font-bold">2</div>
                <h3 className="text-2xl font-bold font-headline mb-4 text-on-background">Elite Career Engineering</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Beyond the skills, we engineer your career path. From profile optimization on platforms like Upwork to mastering the high-stakes negotiation of six-figure contracts, we provide the mentorship required to navigate the elite tiers of the digital economy.
                </p>
              </div>
              <div className="relative pl-12 border-l border-outline-variant/30">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed text-[10px] font-bold">3</div>
                <h3 className="text-2xl font-bold font-headline mb-4 text-on-background">Future-Proofed Strategy</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  The world is shifting toward AI-integrated operations. VABLY ensures you are at the forefront of this evolution, training you to leverage automation and intelligence to multiply your output and value.
                </p>
              </div>
              <div className="pt-8">
                <button className="w-full lg:w-auto bg-primary text-on-primary px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:translate-y-[-2px] transition-all flex items-center justify-center gap-4">
                  Discover the Vably Method
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 border-t border-r border-primary/10 -z-10"></div>
      </section>

      {/* Core Programs */}
      <section className="bg-on-background py-24 px-8 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-headline text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight">Three Paths to Mastery.</h2>
            <p className="text-emerald-100/60 max-w-xl text-lg">Choose the blueprint that fits your professional trajectory.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/10 transition-all group">
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Terminal className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-headline">Technical Stack Masterclass</h3>
              <p className="text-emerald-100/60 mb-8 leading-relaxed">Master the modern SaaS landscape: CRM, Automation, and Project Management tools used by Silicon Valley startups.</p>
              <a className="inline-flex items-center gap-2 text-secondary-fixed font-bold" href="#">Learn More <ArrowRight className="w-4 h-4" /></a>
            </div>
            <div className="bg-primary p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6">
                <span className="bg-secondary-container text-on-secondary-container text-[10px] font-black uppercase px-3 py-1 rounded-full">Popular</span>
              </div>
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-8">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-headline">The VA Accelerator</h3>
              <p className="text-white/80 mb-8 leading-relaxed">Our flagship 8-week cohort. From administrative assistant to indispensable strategic partner.</p>
              <a className="inline-flex items-center gap-2 text-white font-bold" href="#">Join the Cohort <ArrowRight className="w-4 h-4" /></a>
            </div>
            <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/10 transition-all group">
              <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-headline">Elite Communication</h3>
              <p className="text-emerald-100/60 mb-8 leading-relaxed">Master the soft skills: High-stakes negotiation, client retention, and executive presence for the digital world.</p>
              <a className="inline-flex items-center gap-2 text-secondary-fixed font-bold" href="#">Learn More <ArrowRight className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-xs">Testimonials</span>
            <h2 className="font-headline text-4xl font-extrabold text-on-background mt-2">Built by Success Stories</h2>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-8">
        <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(209,238,133,0.15),transparent)] pointer-events-none"></div>
          <h2 className="font-headline text-4xl lg:text-6xl font-extrabold text-white mb-8 tracking-tight">Your career as an architect starts now.</h2>
          <p className="text-emerald-100/70 text-lg lg:text-xl mb-12 max-w-2xl mx-auto">Limited seats available for our next cohort. Secure your spot in the room where the next generation of digital leaders are built.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-secondary-container text-on-secondary-container px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:scale-105 transition-all">
              Join Next Cohort
            </button>
            <button className="bg-white/10 text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg backdrop-blur-md hover:bg-white/20 transition-all">
              Talk to an Advisor
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
