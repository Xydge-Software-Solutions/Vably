import Image from 'next/image';
import { CheckCircle, Send, Network, Mail, Phone, AtSign, Users, Camera, Plus } from 'lucide-react';

export default function Contact() {
  return (
    <main className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block px-4 py-1.5 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold tracking-widest uppercase font-label">The Digital Architect</span>
            <h1 className="text-5xl md:text-7xl font-extrabold font-headline text-on-background tracking-tighter leading-[0.9]">Let&apos;s build your <span className="text-primary">legacy.</span></h1>
            <p className="text-on-surface-variant text-lg max-w-md">Whether you&apos;re ready to master the craft or looking to hire the elite, our architectural team is standing by.</p>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-[2rem] overflow-hidden shadow-2xl relative">
              <Image fill className="object-cover" alt="Modern minimalist office workspace with green plants" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqceZ-K3vmdy6uf1nipvVm_jB2OxVzHoOTBsE0pUDnZ2i3M21AGe2kWRw0Lm6DFLjTzikEQR8FfXu8WZ1gx_iQtialmKyD5e-cX_WOSPuOjrNAvQ8lCd8Mbgjl9PoS8aYBsxzaotre3vk3tfOs00lmM9jox9QDHQsxEF-DZqjC3bX0KdteGJfTRdrLyYY1EER64PyzhM66i-jDkDLvCnu1vXWaaBWYiwIlEj3S0kOFBgSpWq2ixfsD5J_dPd_p6XehE2Rf0MVhindz" referrerPolicy="no-referrer" />
            </div>
            {/* Expert Badge Signature Component */}
            <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl shadow-xl border border-white/20 hidden md:flex items-center gap-4">
              <div className="bg-primary text-on-primary p-2 rounded-lg">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <p className="font-headline font-bold text-on-surface leading-none">Global Network</p>
                <p className="text-xs text-on-surface-variant mt-1">2,400+ Certified Architects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Bento Info Section */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Form Column */}
          <div className="lg:col-span-7 bg-surface-container-lowest p-8 md:p-12 rounded-[2rem] shadow-[0_20px_40px_rgba(26,28,30,0.06)] border border-outline-variant/15">
            <h2 className="text-3xl font-bold font-headline mb-8 text-on-background">Send a message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold font-label text-primary uppercase tracking-widest px-1">Full Name</label>
                  <input className="w-full bg-surface-container-low border-transparent focus:border-primary/40 focus:ring-4 focus:ring-primary/5 rounded-xl px-4 py-4 text-on-surface transition-all placeholder:text-on-surface-variant/40" placeholder="John Architect" type="text"/>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold font-label text-primary uppercase tracking-widest px-1">Email Address</label>
                  <input className="w-full bg-surface-container-low border-transparent focus:border-primary/40 focus:ring-4 focus:ring-primary/5 rounded-xl px-4 py-4 text-on-surface transition-all placeholder:text-on-surface-variant/40" placeholder="john@studio.com" type="email"/>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold font-label text-primary uppercase tracking-widest px-1">Subject</label>
                <select className="w-full bg-surface-container-low border-transparent focus:border-primary/40 focus:ring-4 focus:ring-primary/5 rounded-xl px-4 py-4 text-on-surface transition-all appearance-none cursor-pointer">
                  <option>General Inquiry</option>
                  <option>Program Enrollment</option>
                  <option>Corporate Training</option>
                  <option>Partnerships</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold font-label text-primary uppercase tracking-widest px-1">Message</label>
                <textarea className="w-full bg-surface-container-low border-transparent focus:border-primary/40 focus:ring-4 focus:ring-primary/5 rounded-xl px-4 py-4 text-on-surface transition-all placeholder:text-on-surface-variant/40 resize-none" placeholder="How can we help shape your career?" rows={5}></textarea>
              </div>
              <button className="w-full md:w-auto bg-secondary-container text-on-secondary-container px-10 py-5 rounded-xl font-black font-headline text-lg flex items-center justify-center gap-3 transition-transform active:scale-95 shadow-lg shadow-secondary-container/20" type="submit">
                Transmit Blueprint
                <Send className="w-6 h-6" />
              </button>
            </form>
          </div>
          {/* Info Column (Bento) */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-8">
            <div className="bg-primary text-on-primary p-10 rounded-[2rem] flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
                <Network className="w-48 h-48" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold font-headline mb-4">Direct Access</h3>
                <div className="space-y-4">
                  <a className="flex items-center gap-4 hover:translate-x-2 transition-transform" href="mailto:hello@vably.com">
                    <Mail className="w-6 h-6 text-primary-fixed" />
                    <span className="font-medium">hello@vably.com</span>
                  </a>
                  <a className="flex items-center gap-4 hover:translate-x-2 transition-transform" href="tel:+1234567890">
                    <Phone className="w-6 h-6 text-primary-fixed" />
                    <span className="font-medium">+1 (555) 012-3456</span>
                  </a>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-white/10">
                <h4 className="text-xs font-bold font-label uppercase tracking-widest mb-4 opacity-70">Follow our process</h4>
                <div className="flex gap-4">
                  <a className="bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-colors" href="#">
                    <AtSign className="w-6 h-6" />
                  </a>
                  <a className="bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-colors" href="#">
                    <Users className="w-6 h-6" />
                  </a>
                  <a className="bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-colors" href="#">
                    <Camera className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-surface-container p-8 rounded-[2rem] flex flex-col gap-4">
              <h3 className="text-xl font-bold font-headline">Visit our Studio</h3>
              <p className="text-on-surface-variant text-sm">88 Digital Avenue, Floor 12<br/>Creative District, NY 10013</p>
              <div className="mt-4 aspect-video rounded-2xl overflow-hidden grayscale contrast-125 opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500 border border-outline-variant/30 relative">
                <Image fill className="object-cover" alt="Stylized map showing office location in a city" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI_iECSWL2zy8nMxj8oQDOR8QTZcAXvCphDFacOoHUidCRLd1KveKXCccbiBMNG8wZ2G2IcE43OLZ6KH8OyOWvUZnwt8i_2y9X9vCTaV4yxXo72tQ4IN--a2suX0fNw7ZViRu3t190akLwS2D_89rq9WPpRgQROcOOG0lGsH2dJF0Hc4uVWMuRQgXQnEvZnTzHaivss5LDNZki8HmllxZ1BK1AyR6Z2g1HthF5OnXRuNZYB5S7Q1aB4Z0ClXjp7SD9yD72mr2_Qu6e" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-8 mb-32">
        <div className="text-center mb-16">
          <span className="text-primary font-bold font-label tracking-widest text-xs uppercase">Your Questions</span>
          <h2 className="text-4xl font-extrabold font-headline mt-2">Architecture Intel</h2>
        </div>
        <div className="space-y-4">
          {/* FAQ Item 1 */}
          <div className="group bg-surface-container-low rounded-2xl overflow-hidden border border-transparent hover:border-primary/20 transition-all">
            <button className="w-full px-8 py-6 flex items-center justify-between text-left">
              <span className="text-lg font-bold font-headline text-on-surface">When is the next cohort starting?</span>
              <Plus className="w-6 h-6 text-primary group-hover:rotate-45 transition-transform" />
            </button>
            <div className="px-8 pb-6 text-on-surface-variant leading-relaxed">
              The upcoming Fall cohort begins September 15th. Applications are reviewed on a rolling basis.
            </div>
          </div>
          {/* FAQ Item 2 */}
          <div className="group bg-surface-container-low rounded-2xl overflow-hidden border border-transparent hover:border-primary/20 transition-all">
            <button className="w-full px-8 py-6 flex items-center justify-between text-left">
              <span className="text-lg font-bold font-headline text-on-surface">Is prior experience required?</span>
              <Plus className="w-6 h-6 text-primary group-hover:rotate-45 transition-transform" />
            </button>
            <div className="px-8 pb-0 h-0 overflow-hidden text-on-surface-variant transition-all">
              While prior admin experience is helpful, we prioritize problem-solving skills and digital literacy above all else.
            </div>
          </div>
          {/* FAQ Item 3 */}
          <div className="group bg-surface-container-low rounded-2xl overflow-hidden border border-transparent hover:border-primary/20 transition-all">
            <button className="w-full px-8 py-6 flex items-center justify-between text-left">
              <span className="text-lg font-bold font-headline text-on-surface">Can I pay in installments?</span>
              <Plus className="w-6 h-6 text-primary group-hover:rotate-45 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-8">
        <div className="bg-emerald-950 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-lime-400 to-emerald-500 mix-blend-overlay"></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black font-headline text-white mb-8 tracking-tighter">Ready to redesign <br className="hidden md:block"/>your career?</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <button className="w-full md:w-auto bg-lime-400 text-emerald-950 px-10 py-5 rounded-2xl font-black font-headline text-lg hover:bg-white transition-colors">Join Next Cohort</button>
              <button className="w-full md:w-auto border-2 border-white/20 text-white px-10 py-5 rounded-2xl font-black font-headline text-lg hover:bg-white/10 transition-colors">View Curriculum</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
