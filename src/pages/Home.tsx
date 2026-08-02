import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Reviews from '../components/Reviews';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Dark panel */}
          <div className="relative bg-primary pl-10 pr-10 md:pl-[max(2.5rem,calc((100vw-1200px)/2+2.5rem))] py-20 md:py-32 flex items-center overflow-hidden">
            <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full border border-white/5"></div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative z-10 max-w-lg"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold mb-6">
                <span className="material-symbols-outlined text-base">verified_user</span>
                ISO 9001:2015 Certified Service
              </div>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                Legal-Grade Document Attestation You Can Trust.
              </h1>
              <p className="text-lg text-white/70 mb-10 leading-relaxed">
                EATC Group provides seamless, secure, and fast embassy and educational attestation services globally. We handle the complexity, you get peace of mind.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="border border-white/30 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
                  Track Document Status
                </button>
                <Link
                  to="/about"
                  className="bg-accent text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Light panel */}
          <div className="relative bg-surface-container min-h-[360px] md:min-h-0 overflow-hidden">
            <motion.img
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="absolute inset-0 w-full h-full object-cover"
              src="/assets/Home/unnamed.png"
              alt="Professional Business Setting"
            />
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-white border-y border-outline-variant">
          <div className="max-w-[1200px] mx-auto px-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '18+', label: 'Years Experience' },
              { value: '15k+', label: 'Documents Processed' },
              { value: '150+', label: 'Countries Served' },
              { value: '24/7', label: 'Dedicated Support' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-display font-bold text-primary">{stat.value}</div>
                <div className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-surface-bright">
        <div className="max-w-[1200px] mx-auto px-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-primary mb-4">Comprehensive Verification</h2>
            <p className="text-on-surface-variant">Select your required attestation category to begin</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white p-8 rounded-2xl border border-outline-variant hover:border-accent transition-all group relative overflow-hidden">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4">account_balance</span>
                  <h3 className="text-2xl font-display font-bold text-primary mb-4">Embassy & Consulate</h3>
                  <p className="text-on-surface-variant mb-6 text-sm leading-relaxed">
                    We facilitate direct coordination with foreign embassies and consulates for visa, residency, and immigration requirements across 150+ countries.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2 text-sm font-medium">
                      <span className="material-symbols-outlined text-accent text-lg">check_circle</span>
                      UAE, Qatar, Saudi Arabia Specialists
                    </li>
                    <li className="flex items-center gap-2 text-sm font-medium">
                      <span className="material-symbols-outlined text-accent text-lg">check_circle</span>
                      Apostille & Legalization Services
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2 rounded-xl overflow-hidden border border-outline-variant">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    src="/assets/Home/unnamed%20(1).png"
                    alt="Official Seal"
                  />
                </div>
              </div>
            </div>

            <div className="bg-primary-container text-white p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-on-primary-container text-4xl mb-4">speed</span>
                <h3 className="text-xl font-display font-bold mb-4">Express Processing</h3>
                <p className="opacity-80 text-sm leading-relaxed">
                  Urgent requirements? Our fast-track channel ensures your documents are processed within 48-72 hours.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-on-primary-container text-sm font-bold opacity-80 cursor-default">
                Learn about Priority Service
                <span className="material-symbols-outlined text-base">arrow_outward</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-outline-variant hover:border-accent transition-all group overflow-hidden flex flex-col">
              <div className="h-40 rounded-xl overflow-hidden mb-6 border border-outline-variant relative">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  src="/assets/Home/images.jpeg"
                  alt="Embassy Office"
                />
              </div>
              <span className="material-symbols-outlined text-primary text-4xl mb-4">account_balance</span>
              <h3 className="text-lg font-display font-bold text-primary mb-2">Embassy Attestation</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-4 flex-grow">Official legalization for international use across major global hubs.</p>
              <Link to="/embassy-attestation" className="text-sm font-bold text-primary inline-flex items-center gap-1 group">
                View Services <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-outline-variant hover:border-accent transition-all group overflow-hidden flex flex-col">
              <div className="h-40 rounded-xl overflow-hidden mb-6 border border-outline-variant relative">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  src="/assets/Home/photo-1517048676732-d65bc937f952.avif"
                  alt="Official Documents"
                />
              </div>
              <span className="material-symbols-outlined text-primary text-4xl mb-4">verified</span>
              <h3 className="text-lg font-display font-bold text-primary mb-2">Attestation</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-4 flex-grow">Comprehensive document legalization for personal and educational needs.</p>
              <Link to="/attestation" className="text-sm font-bold text-primary inline-flex items-center gap-1 group">
                View Services <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-outline-variant hover:border-accent transition-all group overflow-hidden flex flex-col">
              <div className="h-40 rounded-xl overflow-hidden mb-6 border border-outline-variant relative">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  src="/assets/Home/photo-1521791136064-7986c2920216.avif"
                  alt="Global Support"
                />
              </div>
              <span className="material-symbols-outlined text-primary text-4xl mb-4">grid_view</span>
              <h3 className="text-lg font-display font-bold text-primary mb-2">Other Services</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-4 flex-grow">PCC, Visa Stamping, translations, and specialized verification solutions.</p>
              <Link to="/other-services" className="text-sm font-bold text-primary inline-flex items-center gap-1 group">
                View Services <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The EATC Group Standard */}
      <section className="py-20 bg-surface-container">
        <div className="max-w-[1200px] mx-auto px-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3">
              <h2 className="text-4xl font-display font-bold text-primary mb-4 leading-tight">The EATC Group Standard</h2>
              <p className="text-on-surface-variant mb-8">Why thousands of professionals and businesses choose us for their most sensitive documents.</p>
              <div className="p-6 rounded-2xl bg-white border border-outline-variant inline-flex items-center gap-4">
                <div className="text-3xl font-bold text-primary">15k+</div>
                <div className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Documents<br/>Processed</div>
              </div>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: 'lock', title: 'Bank-Grade Security', desc: 'Encrypted tracking and climate-controlled vault storage for all physical documents.' },
                { icon: 'public', title: 'Global Network', desc: 'Direct liaison offices in major capitals ensuring faster government turnaround times.' },
                { icon: 'support_agent', title: 'Dedicated Support', desc: 'Personal case managers providing real-time updates through your preferred channel.' },
                { icon: 'price_check', title: 'Transparent Pricing', desc: 'No hidden fees or "incidental" charges. Fixed quotes provided at the start.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border border-outline-variant flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Reviews */}
      <Reviews />

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-10">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-primary mb-4">Visit Our Offices</h2>
              <p className="text-on-surface-variant mb-8 leading-relaxed">Drop off your documents in person at any of our high-security regional centers.</p>
              <div className="space-y-4">
                {[
                  { name: 'New Delhi', loc: 'G92-Pratap Complex,Munirka', active: true }
                ].map((office) => (
                  <div 
                    key={office.name} 
                    className={`p-4 rounded-xl border flex justify-between items-center transition-all cursor-pointer ${
                      office.active ? 'bg-surface-container border-accent' : 'bg-white border-outline-variant hover:bg-surface'
                    }`}
                  >
                    <div>
                      <h5 className="font-bold text-primary text-sm">{office.name}</h5>
                      <p className="text-xs text-on-surface-variant mt-1">{office.loc}</p>
                    </div>
                    <span className={`material-symbols-outlined ${office.active ? 'text-accent' : 'text-on-surface-variant'}`}>directions</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-[400px] rounded-2xl overflow-hidden border border-outline-variant relative group">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d575.7295456643667!2d77.1736562198987!3d28.55651105037589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d96799f59a5%3A0x8d324bce74a6a211!2sPratap%20Complex!5e0!3m2!1sen!2sin!4v1779343605526!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              <div className="absolute inset-0 pointer-events-none border-[12px] border-white/20"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
