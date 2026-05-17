import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function EmbassyAttestation() {
  const embassies = [
    { 
      title: 'UAE Attestation', 
      desc: 'Legalization for Dubai, Abu Dhabi, and all northern emirates.',
      img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      title: 'Saudi Attestation', 
      desc: 'MOFA and Culture attestation for work and residence visas.',
      img: 'https://images.unsplash.com/photo-1586724230006-2adca53538c2?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      title: 'Qatar Attestation', 
      desc: 'Official verification for Ministry of Interior requirements in Doha.',
      img: 'https://images.unsplash.com/photo-1594993872205-096d29944ac8?q=80&w=2072&auto=format&fit=crop'
    },
    { 
      title: 'Malaysian Attestation', 
      desc: 'Wisma Putra and High Commission legalization services.',
      img: 'https://images.unsplash.com/photo-1528607929212-2636ec44253e?q=80&w=2038&auto=format&fit=crop'
    },
    { 
      title: 'Kuwait Attestation', 
      desc: 'Security and educational verification for State of Kuwait.',
      img: 'https://images.unsplash.com/photo-1518115664171-ec5af7d8f58b?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      title: 'Bahrain Attestation', 
      desc: 'Ministry of Foreign Affairs seals for Kingdom of Bahrain.',
      img: 'https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=2073&auto=format&fit=crop'
    },
    { 
      title: 'Other Attestation', 
      desc: 'Global embassy coordination for 120+ other countries.',
      img: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=2034&auto=format&fit=crop'
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section (enhanced) */}
      <section className="bg-white border-b border-outline-variant py-20 bg-pattern">
        <div className="max-w-[1200px] mx-auto px-10 text-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mx-auto">
            <span className="inline-block py-1 px-3 bg-secondary-container text-on-secondary-container text-xs font-bold rounded-full mb-6">ESTABLISHED 2008</span>
            <h1 className="text-5xl font-display font-bold text-primary mb-6">Embassy Attestation Services</h1>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto mb-12 leading-relaxed font-light">
              Direct coordination with foreign embassies and consulates for visa, residency, and immigration requirements globally. We manage protocols, translations and official liaison so you don't have to.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Embassy Grid */}
      {/* Showcase Section: image + content */}
      <section className="py-20 bg-surface-bright">
        <div className="max-w-[1200px] mx-auto px-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} className="rounded-2xl overflow-hidden border border-outline-variant shadow-sm h-[420px]">
            <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2070&auto=format&fit=crop" alt="Embassy coordination" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="text-3xl font-display font-bold text-primary mb-4">Seamless Embassy Liaison</h2>
            <p className="text-on-surface-variant mb-6 leading-relaxed">We take care of the entire embassy attestation lifecycle — document checks, translations, embassy submissions and courier returns — with transparent timelines and case tracking.</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-sm"><span className="material-symbols-outlined text-primary">check_circle</span> Dedicated case manager for embassy follow-ups</li>
              <li className="flex items-start gap-3 text-sm"><span className="material-symbols-outlined text-primary">check_circle</span> Fast-track options for urgent consular windows</li>
              <li className="flex items-start gap-3 text-sm"><span className="material-symbols-outlined text-primary">check_circle</span> Door-to-door courier and secure handling</li>
            </ul>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:opacity-90">Get Assistance <span className="material-symbols-outlined">arrow_forward</span></Link>
          </motion.div>
        </div>
      </section>
      <section className="max-w-[1200px] mx-auto px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {embassies.map((item, index) => (
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
                  <span className="material-symbols-outlined text-primary">account_balance</span>
                  <h3 className="text-xl font-display font-bold text-primary">{item.title}</h3>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-8 flex-grow">{item.desc}</p>
                <Link to="/detail" className="text-sm font-bold text-primary flex items-center gap-2 group-hover:underline">
                  Inquire Now
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
