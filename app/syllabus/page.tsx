'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Terminal, Network, Brain, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function SyllabusPage() {
  const searchParams = useSearchParams();
  const [selectedTab, setSelectedTab] = useState<number | null>(null);

  const programs = [
    {
      id: 0,
      title: 'Technical Stack Masterclass',
      icon: Terminal,
      description: 'Master the modern SaaS landscape: CRM, Automation, and Project Management tools used by Silicon Valley startups.',
      weeks: 6,
      cost: '$1,499',
      color: 'bg-primary',
      modules: [
        {
          week: 1,
          title: 'CRM Fundamentals & HubSpot Deep Dive',
          topics: [
            'CRM principles and best practices',
            'HubSpot platform overview and setup',
            'Contact and deal management',
            'Pipeline configuration'
          ]
        },
        {
          week: 2,
          title: 'Advanced CRM Operations',
          topics: [
            'Workflow automation and sequences',
            'Custom properties and fields',
            'Reporting and analytics',
            'Integration strategies'
          ]
        },
        {
          week: 3,
          title: 'Project Management & Productivity Tools',
          topics: [
            'Asana fundamentals and advanced features',
            'Project templating and workflows',
            'Team collaboration best practices',
            'Time tracking and resource management'
          ]
        },
        {
          week: 4,
          title: 'Automation Mastery',
          topics: [
            'Zapier and Make.com advanced integrations',
            'Multi-tool automation workflows',
            'API connections and custom integrations',
            'Troubleshooting and optimization'
          ]
        },
        {
          week: 5,
          title: 'Communication & Collaboration Tools',
          topics: [
            'Slack advanced features and integrations',
            'Email management and automation',
            'Calendar and scheduling tools',
            'Documentation systems (Notion, Confluence)'
          ]
        },
        {
          week: 6,
          title: 'Capstone Project & Integration',
          topics: [
            'Build an integrated tech stack',
            'Real-world scenario implementation',
            'Performance optimization',
            'Final presentation and feedback'
          ]
        }
      ]
    },
    {
      id: 1,
      title: 'The VA Accelerator',
      icon: Network,
      description: 'Our flagship 8-week cohort. From administrative assistant to indispensable strategic partner.',
      weeks: 8,
      cost: '$2,999',
      color: 'bg-primary',
      modules: [
        {
          week: 1,
          title: 'Foundation: Your Digital Architecture',
          topics: [
            'Understanding the Digital Architect mindset',
            'Core principles of high-value assistance',
            'Systems thinking and process design',
            'Personal branding for VAs'
          ]
        },
        {
          week: 2,
          title: 'Technical Foundations',
          topics: [
            'Essential SaaS tools overview',
            'Project management systems',
            'Communication platforms',
            'Data organization and security'
          ]
        },
        {
          week: 3,
          title: 'Advanced Communication & Client Management',
          topics: [
            'Executive communication frameworks',
            'High-stakes email writing',
            'Meeting coordination and scheduling',
            'Client relationship management'
          ]
        },
        {
          week: 4,
          title: 'Project & Operations Management',
          topics: [
            'Complex project coordination',
            'Process documentation',
            'Timeline and resource management',
            'Quality assurance protocols'
          ]
        },
        {
          week: 5,
          title: 'Strategic Thinking & Problem Solving',
          topics: [
            'Anticipating client needs',
            'Strategic planning assistance',
            'Data analysis and reporting',
            'Business metrics and KPIs'
          ]
        },
        {
          week: 6,
          title: 'Profitability & Rate Optimization',
          topics: [
            'Service packaging and pricing',
            'Contract negotiation',
            'Revenue maximization strategies',
            'Premium positioning'
          ]
        },
        {
          week: 7,
          title: 'Platform Mastery (Upwork & Beyond)',
          topics: [
            'Upwork profile optimization',
            'Proposal writing for premium clients',
            'Building long-term contracts',
            'Portfolio showcase and social proof'
          ]
        },
        {
          week: 8,
          title: 'Capstone & Launch Your Practice',
          topics: [
            'Build your ideal client profile',
            'Launch your service offering',
            'Community networking and support',
            'Continued growth strategies'
          ]
        }
      ]
    },
    {
      id: 2,
      title: 'Elite Communication',
      icon: Brain,
      description: 'Master the soft skills: High-stakes negotiation, client retention, and executive presence for the digital world.',
      weeks: 5,
      cost: '$1,299',
      color: 'bg-secondary',
      modules: [
        {
          week: 1,
          title: 'Executive Presence & Communication Foundation',
          topics: [
            'Building credibility and authority',
            'Executive communication standards',
            'Written communication excellence',
            'Professional presence in digital environments'
          ]
        },
        {
          week: 2,
          title: 'Advanced Negotiation Skills',
          topics: [
            'Salary and rate negotiation',
            'Contract terms and conditions',
            'Win-win negotiation strategies',
            'Handling difficult conversations'
          ]
        },
        {
          week: 3,
          title: 'Client Retention & Relationship Management',
          topics: [
            'Building long-term partnerships',
            'Anticipating client needs',
            'Proactive communication strategies',
            'Upselling and expanding relationships'
          ]
        },
        {
          week: 4,
          title: 'Leadership & Team Dynamics',
          topics: [
            'Thought leadership development',
            'Influencing without authority',
            'Building trust and credibility',
            'Collaborative problem-solving'
          ]
        },
        {
          week: 5,
          title: 'Personal Brand & Influence',
          topics: [
            'Developing your unique voice',
            'Social media presence for professionals',
            'Speaking and presentation skills',
            'Building your executive brand'
          ]
        }
      ]
    }
  ];

  const tabFromQuery = Number.parseInt(searchParams.get('tab') ?? '', 10);
  const activeTab = selectedTab ?? (Number.isInteger(tabFromQuery) && tabFromQuery >= 0 && tabFromQuery < programs.length ? tabFromQuery : 0);

  const currentProgram = programs[activeTab];

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="px-8 py-16 max-w-7xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        <h1 className="font-headline text-5xl lg:text-6xl font-extrabold text-on-background mb-6">
          Program Syllabus
        </h1>
        <p className="text-xl text-on-surface-variant max-w-2xl">
          Detailed breakdowns of each program, showing week-by-week modules, learning outcomes, and investment details.
        </p>
      </section>

      {/* Program Selector */}
      <section className="px-8 py-12 border-b border-outline-variant">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <button
                  key={program.id}
                  onClick={() => setSelectedTab(index)}
                  className={`p-6 rounded-2xl border-2 transition-all text-left ${
                    activeTab === index
                      ? `${program.color} text-white border-transparent shadow-lg`
                      : 'border-outline-variant hover:border-primary bg-surface-container-low'
                  }`}
                >
                  <Icon className="w-8 h-8 mb-4" />
                  <h3 className="font-bold text-lg mb-2">{program.title}</h3>
                  <div className={`text-sm ${activeTab === index ? 'text-white/80' : 'text-on-surface-variant'}`}>
                    <p>{program.weeks} weeks</p>
                    <p className="font-bold mt-2">{program.cost}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-lg text-on-surface-variant mb-4">{currentProgram.description}</p>
            <div className="inline-flex gap-8 text-sm">
              <div>
                <p className="text-outline uppercase tracking-widest font-bold text-xs mb-2">Duration</p>
                <p className="text-2xl font-bold text-primary">{currentProgram.weeks} Weeks</p>
              </div>
              <div>
                <p className="text-outline uppercase tracking-widest font-bold text-xs mb-2">Investment</p>
                <p className="text-2xl font-bold text-primary">{currentProgram.cost}</p>
              </div>
            </div>
          </div>

          {/* Modules */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold font-headline text-on-background">Course Curriculum</h2>
            {currentProgram.modules.map((module, index) => (
              <div key={index} className="border border-outline-variant rounded-2xl p-8 hover:border-primary transition-colors">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border border-primary flex items-center justify-center">
                    <span className="font-bold text-primary">W{module.week}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold font-headline text-on-background mb-4">
                      {module.title}
                    </h3>
                    <ul className="space-y-3">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-on-surface-variant">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 p-12 rounded-3xl bg-primary text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h2>
            <p className="text-lg mb-8 text-white/80">Join our next cohort and become a Digital Architect.</p>
            <button className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all">
              Enroll Now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
