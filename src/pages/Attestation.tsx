import { motion } from 'motion/react';
// import { Link } from 'react-router-dom';

export default function Attestation() {
  const services = [
    {
      title: 'Educational Documents',
      desc: 'Degree, Diploma, and certificate verification for global recognition.',
      icon: 'school',
      img: '/assets/Attestation/Educational%20Documents.jpeg'
    },
    {
      title: 'Marriage Certificate',
      desc: 'Legalization for spouse visas and global family residency sponsorship.',
      icon: 'family_history',
      img: '/assets/Attestation/MarriageCertificate.avif'
    },
    {
      title: 'Birth Certificate',
      desc: 'Official verification for child visa processing and citizenship applications.',
      icon: 'child_care',
      img: '/assets/Attestation/Birth%20Certificate.jpeg'
    },
    {
      title: 'Commercial Documents',
      desc: 'Invoices, COOs, and trade-related documents for international business.',
      icon: 'business_center',
      img: '/assets/Attestation/Commercial%20Documents.jpeg'
    },
    {
      title: 'Power of Attorney',
      desc: 'Legal empowerment documents for business and property representation overseas.',
      icon: 'gavel',
      img: '/assets/Attestation/Power%20of%20Attorney.avif'
    },
    {
      title: 'MEA Attestation',
      desc: 'Ministry of External Affairs verification for national-level legalization.',
      icon: 'verified_user',
      img: '/assets/Attestation/MEA%20Attestation.avif'
    },
    {
      title: 'Apostille Attestation',
      desc: 'Hague Convention standard verification for member countries.',
      icon: 'public',
      img: '/assets/Attestation/Apostille%20Attestation.jpeg'
    },
    {
      title: 'Norka/HRD Services',
      desc: 'State-level HRD and Norka verification for educational documents.',
      icon: 'account_balance',
      img: '/assets/Attestation/NorkaHRDServices.jpeg'
    },
    {
      title: 'SDM Attestation',
      desc: 'Local SDM and chamber of commerce verification for regional acceptance.',
      icon: 'location_city',
      img: '/assets/Attestation/SDMAttestation.jpeg'
    },
    {
      title: 'MOFA Attestation',
      desc: 'State home department verification for internal security clearance.',
      icon: 'home',
      img: '/assets/Attestation/MOFAAttestation.jpeg'
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section (enhanced) */}
      <section className="relative h-[600px] flex items-center overflow-hidden bg-pattern">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover grayscale opacity-30"
            src="/assets/Attestation/hero-bg.png"
            alt="Corporate Interior"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl font-display font-bold text-primary mb-8">Document Attestation</h1>
            <p className="text-lg text-on-surface-variant leading-relaxed">
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
            <img src="/assets/Attestation/DocumentCare.jpeg" alt="Document attestation" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="text-3xl font-display font-bold text-primary mb-4">Comprehensive Document Care</h2>
            <p className="text-on-surface-variant mb-6 leading-relaxed">From educational transcripts to commercial paperwork, our team validates, certifies and prepares documents for international acceptance — with clear steps and timelines.</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-sm"><span className="material-symbols-outlined text-primary">check_circle</span> Professional verification and formatting</li>
              <li className="flex items-start gap-3 text-sm"><span className="material-symbols-outlined text-primary">check_circle</span> MEA, Apostille and state-level processing</li>
              <li className="flex items-start gap-3 text-sm"><span className="material-symbols-outlined text-primary">check_circle</span> Secure physical handling and returns</li>
            </ul>

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
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
