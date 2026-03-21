import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ArrowLeft, ArrowRight, Terminal, Network, Brain, GraduationCap, Check, Download, Star } from 'lucide-react';

export default function Programs() {
  return (
    <main className="pt-24">
      {/* Hero / Section Intro */}
      <section className="px-8 py-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase mb-6">Master Your Craft</span>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-background tracking-tighter leading-none mb-8">
            The Blueprints for <br/>
            <span className="text-primary italic">Digital Excellence</span>
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-xl leading-relaxed">
            Elevate your career from administrative support to executive partnership. Our structured programs are designed for the high-impact Digital Architect.
          </p>
        </div>
        <div className="md:col-span-5 relative">
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden editorial-shadow transform rotate-2 relative">
            <Image fill className="object-cover" alt="Sophisticated workspace with minimalist digital architect tools" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh6vJz4QC0KnTavHgvyLY-OROcDCneHI_dv0cihZOScpNXWTkaAwYlwceXRHjlYXIaH7pb72lVUJQlZdX_2azH9i3BaChCwp-6gyZpi29gcRHZOMeXXPoi90S01aJOBffDYPybHiVOPCUDCD5K9YPtCIKCOhffqOQUW8m2RMsCbpu0kv5sQqoQDbyYUIiFGeI12zOG86FnzDP0GAjCCe-HqjzJ725m8kdOT4coc4xeTG47SI5dKmA2HvdkRpeu_7h1yhDdBmBv641o" referrerPolicy="no-referrer" />
          </div>
          {/* Expert Badge */}
          <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest/80 backdrop-blur-xl p-6 rounded-2xl editorial-shadow max-w-[200px] border border-outline-variant/15">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="font-headline font-bold text-sm">Elite Certified</span>
            </div>
            <p className="text-xs text-on-surface-variant leading-tight">Accredited by the Global Digital Architecture Alliance.</p>
          </div>
        </div>
      </section>

      {/* Featured Programs: Bento Grid */}
      <section className="bg-surface-container-low py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="font-headline text-4xl font-bold tracking-tight text-on-background mb-4">Core Pathways</h2>
              <p className="text-on-surface-variant max-w-md">Specialized tracks tailored for specific career trajectories within the virtual landscape.</p>
            </div>
            <div className="flex gap-4">
              <span className="w-12 h-12 rounded-full border border-outline flex items-center justify-center opacity-30">
                <ArrowLeft className="w-6 h-6" />
              </span>
              <span className="w-12 h-12 rounded-full border border-primary flex items-center justify-center text-primary">
                <ArrowRight className="w-6 h-6" />
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Program Card 1 */}
            <Link href="/syllabus?tab=0" className="group bg-surface-container-lowest rounded-[2rem] p-8 editorial-shadow hover:bg-primary transition-all duration-500 overflow-hidden relative">
              <div className="mb-8 w-14 h-14 rounded-2xl bg-primary-fixed flex items-center justify-center group-hover:bg-secondary-fixed transition-colors">
                <Terminal className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4 group-hover:text-white transition-colors">Technical Stack Masterclass</h3>
              <p className="text-on-surface-variant mb-8 group-hover:text-primary-fixed transition-colors">Master the modern SaaS landscape: CRM, Automation, and Project Management tools used by Silicon Valley startups.</p>
              <div className="flex items-center gap-2 font-bold text-primary group-hover:text-secondary-fixed transition-colors">
                View Syllabus <ArrowRight className="w-5 h-5" />
              </div>
              <Terminal className="absolute -bottom-4 -right-4 w-32 h-32 opacity-[0.03] group-hover:opacity-10 group-hover:text-white transition-opacity" />
            </Link>
            {/* Program Card 2 */}
            <Link href="/syllabus?tab=1" className="group bg-surface-container-lowest rounded-[2rem] p-8 editorial-shadow hover:bg-primary transition-all duration-500 overflow-hidden relative">
              <div className="mb-8 w-14 h-14 rounded-2xl bg-primary-fixed flex items-center justify-center group-hover:bg-secondary-fixed transition-colors">
                <Network className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4 group-hover:text-white transition-colors">The VA Accelerator</h3>
              <p className="text-on-surface-variant mb-8 group-hover:text-primary-fixed transition-colors">Our flagship 8-week cohort. From administrative assistant to indispensable strategic partner.</p>
              <div className="flex items-center gap-2 font-bold text-primary group-hover:text-secondary-fixed transition-colors">
                View Syllabus <ArrowRight className="w-5 h-5" />
              </div>
              <Network className="absolute -bottom-4 -right-4 w-32 h-32 opacity-[0.03] group-hover:opacity-10 group-hover:text-white transition-opacity" />
            </Link>
            {/* Program Card 3 */}
            <Link href="/syllabus?tab=2" className="group bg-surface-container-lowest rounded-[2rem] p-8 editorial-shadow hover:bg-primary transition-all duration-500 overflow-hidden relative">
              <div className="mb-8 w-14 h-14 rounded-2xl bg-primary-fixed flex items-center justify-center group-hover:bg-secondary-fixed transition-colors">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4 group-hover:text-white transition-colors">Elite Communication</h3>
              <p className="text-on-surface-variant mb-8 group-hover:text-primary-fixed transition-colors">Master the soft skills: High-stakes negotiation, client retention, and executive presence for the digital world.</p>
              <div className="flex items-center gap-2 font-bold text-primary group-hover:text-secondary-fixed transition-colors">
                View Syllabus <ArrowRight className="w-5 h-5" />
              </div>
              <Brain className="absolute -bottom-4 -right-4 w-32 h-32 opacity-[0.03] group-hover:opacity-10 group-hover:text-white transition-opacity" />
            </Link>
          </div>
        </div>
      </section>

      {/* Curriculum Highlights: Editorial Asymmetry */}
      <section className="py-24 px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="aspect-square rounded-3xl overflow-hidden editorial-shadow relative">
                  <Image fill className="object-cover" alt="Digital professional working on data analytics" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA5lX_jnbXej7mC1rf2NH-Ei_XdcNtJ-0KN9ZIgN6fP4RhEAzLKDKPLk9Z1RE0MpsrNm9FQTrH6W4BciuVN2kNliGa0vgRuEIgeU63GxszhqGcUtzk4aIZdfWTdCmI6Kziz2_jhX3PXUBaoczEd29muXnoiC58RpfRSRRp28I_AzyJp6CLP3AB3J3ZEZxqLfB9HADcwp-7z-cDQOfY3T2mQih0_K6HWO7dQ2HTSvnhxUNTqwu1Ze-slGJ8rclrAcbmbURcJ472EHVq" referrerPolicy="no-referrer" />
                </div>
                <div className="bg-secondary-fixed p-6 rounded-3xl editorial-shadow">
                  <span className="font-headline text-4xl font-extrabold text-on-secondary-fixed tracking-tight">85%</span>
                  <p className="text-xs font-bold uppercase tracking-widest text-on-secondary-fixed-variant mt-2">Salary Increase</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-primary p-6 rounded-3xl editorial-shadow text-white h-48 flex flex-col justify-end">
                  <GraduationCap className="w-10 h-10 mb-4 text-secondary-fixed" />
                  <p className="font-bold text-sm">Real-World Simulation Tech</p>
                </div>
                <div className="aspect-[3/4] rounded-3xl overflow-hidden editorial-shadow relative">
                  <Image fill className="object-cover" alt="Team collaborating on a digital interface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ7wx8TvoSseUrO8NjDsULCEpF_T_pykOlJV6InOagiB4KJaUBcMR2zGIu1U6NIvUoIB7mFO5bphqtUqUuqhoi4O1lNpD1UDHfcIqwerYKt6MUQKO3YdRMQpafgzCyVFZnVZE6eKdrO0Pl7KHCjWgAlyZ8XMgsqodtlNq9aP14S7lG2sLIvStM2P5kTUUN7gsEJ8FmR6a73OS3BO2EveH5PX5Izp-ny8yn5b8QyLLN4omKHGm6TgDOd3NaXVCRL9Exz8eb_TEt1_Hl" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-10 leading-tight">
              The Curriculum <br/> <span className="text-primary-container">Beyond the Basics.</span>
            </h2>
            <ul className="space-y-8">
              <li className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Strategic Logic Systems</h4>
                  <p className="text-on-surface-variant">Don&apos;t just execute tasks; learn to design the systems that prevent tasks from being manual.</p>
                </div>
              </li>
              <li className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Crisis Architecture</h4>
                  <p className="text-on-surface-variant">Master the art of high-pressure management and rapid pivot execution for executive clients.</p>
                </div>
              </li>
              <li className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Brand Voice Alignment</h4>
                  <p className="text-on-surface-variant">Learn to mirror high-net-worth individual communication styles perfectly across all channels.</p>
                </div>
              </li>
            </ul>
            <button className="mt-12 bg-surface-container-lowest text-primary border border-primary px-8 py-4 rounded-xl font-bold font-label flex items-center gap-3 hover:bg-primary hover:text-white transition-all">
              Download Full Curriculum 
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Success Stories: Glassmorphism / Mini Testimonials */}
      <section className="bg-primary py-24 px-8 overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl font-bold text-white mb-4">Architect Success</h2>
            <p className="text-primary-fixed/70">Real results from our global cohort graduates.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 flex-1">
              <div className="flex gap-1 text-secondary-fixed mb-6">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-white text-lg leading-relaxed mb-8 italic">&quot;Vably didn&apos;t just teach me how to manage emails; they taught me how to manage a vision. My monthly rate tripled within 3 months of graduation.&quot;</p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-300">
                  <Image fill className="object-cover" alt="Portrait of successful VA graduate" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuMBATK_yAnMjAypY6QdUldaZThFcXhPiiMaZ5DD9-rco3Cq9pfxP-kJYvO0twEfxJsV3a1-wvb2fc1ZCTmWrhHe-Vj_C3UI4-cZDRDTk-z8-jFDdAvwdHv5nXD8r520zdLxtkPSpAwV48JX4F_ze4S5RC9QEZYkHDfoLoMQ4aSQR0tH34LKxTslmgOe2BjuOll7zMNuRqgJ_P11Kl3typ49R5KXaQwOaGagd1KlrURXl2Klopcsr08glFaRUVstjFq_xyU4VbBkw6" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h5 className="text-white font-bold">Elena Rodriguez</h5>
                  <p className="text-primary-fixed text-xs uppercase tracking-widest">Executive Partner, SV Tech</p>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 flex-1">
              <div className="flex gap-1 text-secondary-fixed mb-6">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-white text-lg leading-relaxed mb-8 italic">&quot;The AI automation module was a game changer. I now provide services that standard agencies can&apos;t even touch. The ROI was immediate.&quot;</p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-300">
                  <Image fill className="object-cover" alt="Portrait of male professional graduate" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAc_6-2lUTNpK8-HbjkjiWyYPsBS8iOabno_d-Jj5lv2sYmwuudXboWC1CfmaVRwAyXddWaECNWnKeI17fK-v18bTzwqhruGz25gqjX2aSXs7qf6Hfd3nC1pDcFQuX_tozPXoCNaVnYBFNRJwNe_yWEZtacXgtnYAa9I2dK8RBfJ92wBvKcJiwqkUI99pU7_Uvr8iSJK22QZZJ7dh-T5mKttQ5wNiC9s5gBFCljs5GMkERir7DDCbsZlltgk9wo8l178wstddNRa535" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h5 className="text-white font-bold">Marcus Chen</h5>
                  <p className="text-primary-fixed text-xs uppercase tracking-widest">Automation Specialist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary-fixed/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[500px] h-[500px] bg-primary-fixed/5 blur-[120px] rounded-full"></div>
      </section>

      {/* Final CTA: Enroll Now */}
      <section className="py-24 px-8">
        <div className="max-w-5xl mx-auto bg-surface-container-low rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-6 inline-block">Next Cohort: Oct 2024</span>
            <h2 className="font-headline text-5xl md:text-6xl font-extrabold text-on-background tracking-tighter mb-8">Ready to start your <br/> <span className="text-primary-container underline decoration-secondary-fixed decoration-8 underline-offset-8">Blueprint?</span></h2>
            <p className="text-on-surface-variant text-lg max-w-2xl mx-auto mb-12">Limited seats available for each cohort to ensure high-touch mentorship and direct industry placement guidance.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-on-primary px-10 py-5 rounded-2xl font-bold font-label text-lg shadow-xl shadow-primary/20 flex items-center justify-center gap-4 hover:scale-105 transition-transform">
                Enroll Now
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
              <button className="bg-surface-container-lowest text-on-surface px-10 py-5 rounded-2xl font-bold font-label text-lg border border-outline-variant hover:bg-surface-bright transition-colors">
                Book Career Audit
              </button>
            </div>
          </div>
          {/* Signature Component Overlap */}
          <div className="absolute top-10 right-10 hidden md:block rotate-12">
            <div className="bg-white/80 backdrop-blur-md p-4 rounded-xl editorial-shadow border border-white/40">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Live Enrollment</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
