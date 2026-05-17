import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Attestation() {
  const services = [
    {
      title: 'Educational Documents',
      desc: 'Degree, Diploma, and certificate verification for global recognition.',
      icon: 'school',
      img: 'https://images.unsplash.com/photo-1523050335102-c3251c17b384?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Marriage Certificate',
      desc: 'Legalization for spouse visas and global family residency sponsorship.',
      icon: 'family_history',
      img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop'
    },
    {
      title: 'Birth Certificate',
      desc: 'Official verification for child visa processing and citizenship applications.',
      icon: 'child_care',
      img: 'https://images.unsplash.com/photo-1519689689378-0e8397144189?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Commercial Documents',
      desc: 'Invoices, COOs, and trade-related documents for international business.',
      icon: 'business_center',
      img: 'https://images.unsplash.com/photo-1454165833767-027ffea702b8?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Power of Attorney',
      desc: 'Legal empowerment documents for business and property representation overseas.',
      icon: 'gavel',
      img: 'https://images.unsplash.com/photo-1589216532372-1c2a367900d9?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'MEA Attestation',
      desc: 'Ministry of External Affairs verification for national-level legalization.',
      icon: 'verified_user',
      img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop'
    },
    {
      title: 'Apostille Attestation',
      desc: 'Hague Convention standard verification for member countries.',
      icon: 'public',
      img: 'https://images.unsplash.com/photo-1557568192-2afc83f38bc4?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Norka/HRD Services',
      desc: 'State-level HRD and Norka verification for educational documents.',
      icon: 'account_balance',
      img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop'
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section (enhanced) */}
      <section className="bg-white border-b border-outline-variant py-20 bg-pattern">
        <div className="max-w-[1200px] mx-auto px-10 text-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mx-auto">
            <span className="inline-block py-1 px-3 bg-secondary-container text-on-secondary-container text-xs font-bold rounded-full mb-6">ESTABLISHED 2008</span>
            <h1 className="text-5xl font-display font-bold text-primary mb-6">Document Attestation</h1>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto mb-12 leading-relaxed font-light">
              Comprehensive verification and legalization for your important certificates and documents — from educational transcripts to commercial records, we ensure global acceptability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      {/* Showcase Section: image + content */}
      <section className="py-20 bg-surface-bright">
        <div className="max-w-[1200px] mx-auto px-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} className="rounded-2xl overflow-hidden border border-outline-variant shadow-sm h-[420px]">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Document attestation" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="text-3xl font-display font-bold text-primary mb-4">Comprehensive Document Care</h2>
            <p className="text-on-surface-variant mb-6 leading-relaxed">From educational transcripts to commercial paperwork, our team validates, certifies and prepares documents for international acceptance — with clear steps and timelines.</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-sm"><span className="material-symbols-outlined text-primary">check_circle</span> Professional verification and formatting</li>
              <li className="flex items-start gap-3 text-sm"><span className="material-symbols-outlined text-primary">check_circle</span> MEA, Apostille and state-level processing</li>
              <li className="flex items-start gap-3 text-sm"><span className="material-symbols-outlined text-primary">check_circle</span> Secure physical handling and returns</li>
            </ul>
            <Link to="/detail" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:opacity-90">View Service Options <span className="material-symbols-outlined">arrow_forward</span></Link>
          </motion.div>
        </div>
      </section>
      <section className="max-w-[1200px] mx-auto px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white border border-outline-variant rounded-3xl overflow-hidden hover:border-primary hover:shadow-xl transition-all flex flex-col group"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-primary">{item.icon}</span>
                  <h3 className="text-xl font-display font-bold text-primary">{item.title}</h3>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-8 flex-grow">{item.desc}</p>
                <Link to="/detail" className="text-sm font-bold text-primary flex items-center gap-2 group-hover:underline">
                  View Detail
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
