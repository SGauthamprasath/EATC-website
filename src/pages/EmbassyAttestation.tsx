import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function EmbassyAttestation() {
  const embassies = [
    { 
      title: 'UAE Attestation', 
      desc: 'Legalization for Dubai, Abu Dhabi, and all northern emirates.',
      img: '/assets/EmbassyAttestation/UAE.avif'
    },
    { 
      title: 'Saudi Attestation', 
      desc: 'MOFA and Culture attestation for work and residence visas.',
      img: '/assets/EmbassyAttestation/saudi.jpg'
    },
    { 
      title: 'Qatar Attestation', 
      desc: 'Official verification for Ministry of Interior requirements in Doha.',
      img: '/assets/EmbassyAttestation/qatar.jpeg'
    },
    { 
      title: 'Oman Attestation', 
      desc: 'Wisma Putra and High Commission legalization services.',
      img: '/assets/EmbassyAttestation/oman.jpeg'
    },
    { 
      title: 'Kuwait Attestation', 
      desc: 'Security and educational verification for State of Kuwait.',
      img: '/assets/EmbassyAttestation/kuwait.jpeg'
    },
    { 
      title: 'Bahrain Attestation', 
      desc: 'Ministry of Foreign Affairs seals for Kingdom of Bahrain.',
      img: '/assets/EmbassyAttestation/Bahrain%20.jpeg'
    },
    {
      title: 'USA Attestation',
      desc: 'State Department and embassy legalization for US-bound documents.',
      img: '/assets/EmbassyAttestation/USA.jpeg'
    },
    {
      title: 'UK Attestation',
      desc: 'Foreign and Commonwealth Office attestation for UK visa applications.',
      img: '/assets/EmbassyAttestation/UK.jpg'
    },
    { 
      title: 'Other Attestation', 
      desc: 'Global embassy coordination for 120+ other countries.',
      img: '/assets/EmbassyAttestation/OTHER.avif'
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section (enhanced) */}
      <section className="relative h-[600px] flex items-center overflow-hidden bg-primary">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, transparent, transparent 78px, #ffffff 78px, #ffffff 80px)',
          }}
        ></div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 15% 40%, rgba(13,148,136,0.18), transparent 55%)',
          }}
        ></div>
        <span
          className="material-symbols-outlined absolute -right-24 top-1/2 -translate-y-1/2 text-white/[0.04] pointer-events-none select-none"
          style={{ fontSize: '34rem', fontVariationSettings: "'FILL' 1" }}
        >
          account_balance
        </span>

        <div className="relative z-10 max-w-[1200px] mx-auto px-10 w-full">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl"
            >
              <h1 className="text-5xl font-display font-bold text-white mb-8">Embassy Attestation Services</h1>
              <p className="text-lg text-white/70 leading-relaxed">
                Direct coordination with foreign embassies and consulates for visa, residency, and immigration requirements globally. We manage protocols, translations and official liaison so you don't have to.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Embassy Grid */}
      {/* Showcase Section: image + content */}
      <section className="py-20 bg-surface-bright">
        <div className="max-w-[1200px] mx-auto px-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} className="rounded-2xl overflow-hidden border border-outline-variant shadow-sm h-[420px]">
            <img src="/assets/EmbassyAttestation/coat-embassy.avif" alt="Embassy coat of arms" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="text-3xl font-display font-bold text-primary mb-4">Seamless Embassy Liaison</h2>
            <p className="text-on-surface-variant mb-6 leading-relaxed">We take care of the entire embassy attestation lifecycle — document checks, translations, embassy submissions and courier returns — with transparent timelines and case tracking.</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-sm"><span className="material-symbols-outlined text-accent">check_circle</span> Dedicated case manager for embassy follow-ups</li>
              <li className="flex items-start gap-3 text-sm"><span className="material-symbols-outlined text-accent">check_circle</span> Fast-track options for urgent consular windows</li>
              <li className="flex items-start gap-3 text-sm"><span className="material-symbols-outlined text-accent">check_circle</span> Door-to-door courier and secure handling</li>
            </ul>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity">Get Assistance <span className="material-symbols-outlined">arrow_forward</span></Link>
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
              className="bg-white border border-outline-variant rounded-3xl overflow-hidden hover:border-accent hover:shadow-xl transition-all flex flex-col group"
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
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
