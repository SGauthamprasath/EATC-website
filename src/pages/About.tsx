import { motion } from 'motion/react';
import FallbackImage from '../components/FallbackImage';

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden bg-pattern">
        <div className="absolute inset-0 z-0">
          <FallbackImage
            className="w-full h-full object-cover grayscale opacity-30"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzkcIszeZ9xWItQ2-USAtmDyShMNKtG6M_ctcRplsz7Zh_TwONcVWXIpnykJtZGIs8m_eYi4ErLgdTsv0q6xxROpPRNJfJqFFvu6Hn0ksNXuPhUJHfLC13i8RTm_Pla84H00CA9ewmOcnd78ucnEfquPzWI4H7JORUyy_7UZxbkS7TOgUanK4UoNWkEe1T8j_6ukKPN79-P-h_r433---pP74wZxSoVwBw0YsvrWfJf1D3BFX92xHFlbOXT78FPfWSU4Kcdn0o4bQ"
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
            <span className="inline-block py-1 px-3 bg-secondary-container text-on-secondary-container text-xs font-bold rounded-full mb-6">ESTABLISHED 2008</span>
            <h1 className="text-5xl font-display font-bold text-primary mb-8">Our Mission: Precision in Every Seal</h1>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              We provide seamless, legal-grade document attestation services for global citizens and enterprises, ensuring every signature and stamp carries the weight of absolute trust.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-primary mb-8">The Standard of Legal Reliability</h2>
              <div className="space-y-6 text-on-surface-variant">
                <p className="text-sm leading-relaxed">
                  VeriCert was founded on a simple yet critical observation: the process of international document verification was unnecessarily opaque and fragmented. We set out to build a bridge between local authorities and global opportunities.
                </p>
                <p className="text-sm leading-relaxed">
                  Today, we operate as a primary nexus for embassy attestation, educational verification, and commercial legalizations. Our boutique approach treats every document as a vital key to a client's future success, combining old-world legal precision with modern digital efficiency.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-surface-container rounded-2xl overflow-hidden border border-outline-variant shadow-sm transition-transform hover:scale-[1.02]">
                <FallbackImage
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3IZChjMp71wkPtyS02FAsN2lVd6EZUvFxc1wZRTGreR9AW-nSs0UTgmw7Wq6MJ79EGWt_paynM0waGxEETQXruCMyPByH9D3vK9CY5ei_OlH2rLRFZq1JZkArg6Wtrr7-1_WzRPm1ezveTJSX-I_ULcDh4aeO5XLXkZj6ULsrfHlFYeMHrB_ipV4pQYCzxQpZTNMUa_CGI04X1zfS_u_5669hfHVskJPAQzhTYrS6bdzU0mli3QWrtToNgaIMJW_WuIeZjkQACNU"
                  alt="Legal Library"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-surface-bright">
        <div className="max-w-[1200px] mx-auto px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-primary">Rooted in Unwavering Values</h2>
            <p className="text-on-surface-variant mt-4">The pillars that uphold our commitment to excellence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: 'gavel', title: 'Integrity', desc: 'Zero-compromise approach to ethical verification and legal compliance standards.' },
              { icon: 'public', title: 'Global Reach', desc: 'A vast network spanning 120+ countries, connecting you to every major embassy.' },
              { icon: 'verified', title: 'Precision', desc: 'Meticulous attention to detail, ensuring first-time approval for all attestations.' },
              { icon: 'shield', title: 'Security', desc: 'Bank-grade data protection protocols for all your sensitive documentation.' }
            ].map((value) => (
              <motion.div 
                key={value.title}
                whileHover={{ y: -5 }}
                className="p-8 bg-white border border-outline-variant rounded-2xl hover:border-primary transition-all"
              >
                <span className="material-symbols-outlined text-primary text-4xl mb-6">{value.icon}</span>
                <h3 className="text-lg font-display font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed font-medium">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Leadership removed as requested */}

      {/* Trust Quote */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="max-w-[800px] mx-auto px-10">
          <h2 className="text-3xl font-display font-bold mb-6">Join 15,000+ satisfied clients</h2>
          <p className="text-on-primary-container text-lg mb-10 opacity-90 leading-relaxed font-light">
            Experience the world-class standard in document attestation. Clear, fast, and legally sound.
          </p>
          <div className="flex justify-center gap-4">
            <button className="border border-white/30 text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-colors">
              Contact Our Experts
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
