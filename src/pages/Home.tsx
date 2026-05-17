import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white py-20 md:py-32 overflow-hidden border-b border-outline-variant">
        <div className="max-w-[1200px] mx-auto px-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold mb-6">
              <span className="material-symbols-outlined text-base">verified_user</span>
              ISO 9001:2015 Certified Service
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-primary mb-6 leading-tight">
              Legal-Grade Document Attestation You Can Trust.
            </h1>
            <p className="text-lg text-on-surface-variant mb-10 max-w-lg leading-relaxed">
              VeriCert provides seamless, secure, and fast embassy and educational attestation services globally. We handle the complexity, you get peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                Start Your Application
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button className="bg-white border border-outline-variant text-primary px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-surface-container transition-colors">
                Track Document Status
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <img 
              className="rounded-2xl w-full h-[500px] object-cover border border-outline-variant shadow-lg" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEg4YnSuYDQOCmHGYoh1jwLW9ZcdYlEFPXectkkXz_kTtVwz-Ux8xknbLD9Tm_UZZqn5CqxkN7yeYFX6nSEzUBzhXUbvwqqCFAdDS04xMI-c7VS4C8ymcvGCY_xXttESUzW-qiPld0BPL1K3vsqlkb_WoRZz3oqXCYemRQecUs-ex1LkZWNvAFGKj_kUZz6EuQkRuDMPnUrhBA87Hm-PfF0DmkSVs4EfwgakkPIOyMm6d8P_t6hmW7yu_6QX26nsR1lkZ_iiD3Wvc" 
              alt="Professional Business Setting"
            />
            {/* Floating Status Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl border border-outline-variant shadow-xl flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>task_alt</span>
              </div>
              <div>
                <p className="text-xs text-on-surface-variant font-medium">Document Status</p>
                <p className="text-lg font-bold text-primary">Verified & Dispatched</p>
              </div>
            </motion.div>
          </motion.div>
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
            <div className="md:col-span-2 bg-white p-8 rounded-2xl border border-outline-variant hover:border-primary transition-all group relative overflow-hidden">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4">account_balance</span>
                  <h3 className="text-2xl font-display font-bold text-primary mb-4">Embassy & Consulate</h3>
                  <p className="text-on-surface-variant mb-6 text-sm leading-relaxed">
                    We facilitate direct coordination with foreign embassies and consulates for visa, residency, and immigration requirements across 150+ countries.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2 text-sm font-medium">
                      <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                      UAE, Qatar, Saudi Arabia Specialists
                    </li>
                    <li className="flex items-center gap-2 text-sm font-medium">
                      <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                      Apostille & Legalization Services
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2 rounded-xl overflow-hidden border border-outline-variant">
                  <img 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeT5eHbFKTTeLSPhzMXCJQanMDSJP59r5emXdG91B4kvQnxQ7UDdffZUAITeF3oNZGmjOJ16itkiSFHchCTz45Tqcm2jKC0B4QkcAbNms7kNu4drkGR4N7j2zCo3ESPJEku8qpuTlwjESc7EZhB1_OQ4hpqXpCxeDcjF-Iuo32qiGjpYdJWcNOIK00pJQR1qF1lV9p7jZdK1dMxOLowbVMe91ZLmpxKJ7i6xVLqGpiFHH2wSS2H8F9Ye-m7UGvhYpelYQs6qdIzMs" 
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
              <Link to="/detail" className="mt-8 flex items-center gap-2 text-on-primary-container text-sm font-bold hover:underline">
                Learn about Priority Service
                <span className="material-symbols-outlined text-base">arrow_outward</span>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-outline-variant hover:border-primary transition-all group overflow-hidden flex flex-col">
              <div className="h-40 rounded-xl overflow-hidden mb-6 border border-outline-variant relative">
                <img 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop" 
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

            <div className="bg-white p-8 rounded-2xl border border-outline-variant hover:border-primary transition-all group overflow-hidden flex flex-col">
              <div className="h-40 rounded-xl overflow-hidden mb-6 border border-outline-variant relative">
                <img 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                  src="https://images.unsplash.com/photo-1589330694653-9ecf79401f11?q=80&w=1974&auto=format&fit=crop" 
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

            <div className="bg-white p-8 rounded-2xl border border-outline-variant hover:border-primary transition-all group overflow-hidden flex flex-col">
              <div className="h-40 rounded-xl overflow-hidden mb-6 border border-outline-variant relative">
                <img 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop" 
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

      {/* The VeriCert Standard */}
      <section className="py-20 bg-surface-container">
        <div className="max-w-[1200px] mx-auto px-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3">
              <h2 className="text-4xl font-display font-bold text-primary mb-4 leading-tight">The VeriCert Standard</h2>
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

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-10">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-primary mb-4">Visit Our Offices</h2>
              <p className="text-on-surface-variant mb-8 leading-relaxed">Drop off your documents in person at any of our high-security regional centers.</p>
              <div className="space-y-4">
                {[
                  { name: 'Headquarters - Dubai', loc: 'Business Bay, Tower A, Level 42', active: true },
                  { name: 'London Regional Office', loc: 'Canary Wharf, Financial District', active: false },
                  { name: 'Mumbai Operations Center', loc: 'BKC, Signature Towers, Suite 102', active: false },
                ].map((office) => (
                  <div 
                    key={office.name} 
                    className={`p-4 rounded-xl border flex justify-between items-center transition-all cursor-pointer ${
                      office.active ? 'bg-surface-container border-primary' : 'bg-white border-outline-variant hover:bg-surface'
                    }`}
                  >
                    <div>
                      <h5 className="font-bold text-primary text-sm">{office.name}</h5>
                      <p className="text-xs text-on-surface-variant mt-1">{office.loc}</p>
                    </div>
                    <span className={`material-symbols-outlined ${office.active ? 'text-primary' : 'text-on-surface-variant'}`}>directions</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-[400px] rounded-2xl overflow-hidden border border-outline-variant relative group">
              <img 
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBihzrgW_bYiYMlnejGJpqvenjKKwz4idzZGyImgFulUTMGyb5Lo7jvyI1VThfb3tOcvP5UmBsjARu4DK_09WPSQ_p2cn8_zQUIq3jrhq9io1KIhVtvDSZHHSkZyu9G4QiKQHdYWd6ZydnSe5I16xah6vZvNwbTRXNbYMMxt81n76RDPd49rfdbhx9nbGARf5muBEDCuDhF8kVH5O5BUKgj_w-p5axSlaJPddJZCSyXyzrr-H-5VWfy__paa7vnDbx0FOg6iapsOGU" 
                alt="Map Background" 
              />
              <div className="absolute inset-0 pointer-events-none border-[12px] border-white/20"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
