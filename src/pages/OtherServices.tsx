import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import FallbackImage from '../components/FallbackImage';

export default function OtherServices() {
  const services = [
    { 
      title: 'UAE PCC', 
      desc: 'Police Clearance Certificate for United Arab Emirates visas and employment.',
      img: 'https://images.unsplash.com/photo-1577416416181-f284239bd4d0?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      title: 'Oman PCC', 
      desc: 'Official PCC procurement for the Sultanate of Oman residency requirements.',
      img: 'https://images.unsplash.com/photo-1549443165-1756b7342783?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      title: 'PCC Attestation', 
      desc: 'Legalization of local police clearance for global immigration use.',
      img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      title: 'Visa Stamping', 
      desc: 'Assistance with visa endorsements and official government stamping.',
      img: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      title: 'Translations', 
      desc: 'Certified legal translations in 50+ languages by accredited professionals.',
      img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2066&auto=format&fit=crop'
    },
    { 
      title: 'WES/IQAS Verification', 
      desc: 'WES, IQAS, and ICAS verification for North American educational equivalency.',
      img: 'https://images.unsplash.com/photo-1523050335102-c3251c17b384?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      title: 'Notary Services', 
      desc: 'Public notary and state-level verification for legal validity.',
      img: 'https://images.unsplash.com/photo-1589216532372-1c2a367900d9?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white border-b border-outline-variant py-20 bg-pattern">
        <div className="max-w-[1200px] mx-auto px-10 text-center">
          <h1 className="text-5xl font-display font-bold text-primary mb-6">Other Essential Services</h1>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Specialized administrative and legal support services to facilitate your global documentation journey.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      {/* Showcase Section: image + content */}
      <section className="py-20 bg-surface-bright">
        <div className="max-w-[1200px] mx-auto px-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} className="rounded-2xl overflow-hidden border border-outline-variant shadow-sm h-[420px]">
            <FallbackImage src="https://images.unsplash.com/photo-1528747045269-390fe33c19d2?q=80&w=2070&auto=format&fit=crop" alt="Support services" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="text-3xl font-display font-bold text-primary mb-4">Support Services That Move With You</h2>
            <p className="text-on-surface-variant mb-6 leading-relaxed">Beyond attestations, we provide PCCs, translations, notary services and verification for credential evaluation — all coordinated end-to-end.</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-sm"><span className="material-symbols-outlined text-primary">check_circle</span> Certified translations and notarizations</li>
              <li className="flex items-start gap-3 text-sm"><span className="material-symbols-outlined text-primary">check_circle</span> Credential evaluation support (WES, IQAS)</li>
              <li className="flex items-start gap-3 text-sm"><span className="material-symbols-outlined text-primary">check_circle</span> Custom packages for frequent corporate clients</li>
            </ul>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:opacity-90">Contact Us <span className="material-symbols-outlined">arrow_forward</span></Link>
          </motion.div>
        </div>
      </section>
      <section className="max-w-[1200px] mx-auto px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white border border-outline-variant rounded-3xl overflow-hidden hover:border-primary hover:shadow-xl transition-all flex flex-col group"
            >
              <div className="h-48 overflow-hidden">
                <FallbackImage
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-primary">grid_view</span>
                  <h3 className="text-xl font-display font-bold text-primary">{service.title}</h3>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-8 flex-grow">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
