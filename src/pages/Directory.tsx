import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Directory() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white border-b border-outline-variant py-20 bg-pattern">
        <div className="max-w-[1200px] mx-auto px-10 text-center">
          <h1 className="text-5xl font-display font-bold text-primary mb-6">Global Attestation Directory</h1>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Find the right attestation process for your documents and destination. Professional verification services delivered with legal-grade reliability.
          </p>

          <div className="max-w-3xl mx-auto bg-white p-2 rounded-2xl shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.05)] border border-outline-variant flex flex-col md:flex-row gap-2">
            <div className="flex-1 flex items-center px-4 border-r border-outline-variant">
              <span className="material-symbols-outlined text-on-surface-variant mr-3">search</span>
              <input className="w-full border-none focus:ring-0 text-sm font-medium py-3 outline-none" placeholder="Search country or document type..." />
            </div>
            <div className="flex-1 flex items-center px-4">
              <span className="material-symbols-outlined text-on-surface-variant mr-3">category</span>
              <select className="w-full border-none focus:ring-0 text-sm font-bold py-3 bg-transparent outline-none appearance-none">
                <option>All Categories</option>
                <option>Embassy Attestation</option>
                <option>Educational</option>
                <option>Personal</option>
                <option>Commercial</option>
              </select>
            </div>
            <button className="bg-primary text-white px-10 py-4 rounded-xl font-bold hover:opacity-95 transition-all shadow-sm">
              Search Services
            </button>
          </div>
        </div>
      </section>

      {/* Directory Content */}
      <section className="max-w-[1200px] mx-auto px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Category */}
          <div className="md:col-span-8 bg-white border border-outline-variant rounded-2xl p-8 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-secondary-container rounded-xl text-primary">
                  <span className="material-symbols-outlined text-2xl">account_balance</span>
                </div>
                <h2 className="text-2xl font-display font-bold text-primary">Embassy Attestation</h2>
              </div>
              <p className="text-on-surface-variant mb-8 text-sm font-medium leading-relaxed">Official legalization for international use across major global hubs.</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  'UAE Attestation', 'Saudi Attestation', 'Qatar Attestation',
                  'Malaysian Attestation', 'Kuwait Attestation', 'Bahrain Attestation',
                  'Other Attestation'
                ].map((item) => (
                  <Link key={item} to="/detail" className="p-4 border border-outline-variant rounded-xl hover:border-primary transition-all flex items-center justify-between group">
                    <span className="text-xs font-bold">{item}</span>
                    <span className="material-symbols-outlined text-on-surface-variant text-base group-hover:text-primary group-hover:translate-x-1 transition-all">chevron_right</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-12 pt-6 border-t border-outline-variant flex justify-end">
              <Link to="/directory" className="text-primary text-sm font-bold flex items-center gap-2 hover:underline">
                View All Embassies
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Promo Card */}
          <div className="md:col-span-4 bg-primary-container rounded-2xl overflow-hidden relative flex flex-col justify-end p-8 min-h-[400px]">
            <img 
              className="absolute inset-0 w-full h-full object-cover opacity-20 transition-transform duration-1000 hover:scale-110" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcnnX62zMLB6dQ_uCp-ffagjjctdmXTTOmv7kD54xKuIyllgGa1QEJgs_599zLu7XnOOsf_WYSyyrjyoFdMGoRCEz4cQb_VdAljlhQ7-Jsb0a29-f4ffMAdNbTyHdYVrMuye6RkxlKjgnJAPrZauCRDMLH7Glq07U9rouyy9pVBvd9Kz268mb_JkNSZsNolb1SYJIN0vRm4GHT3f4POk30BcxZc-fhFuLAtXn5xaz1LhuyMVibH1VnGSK4mKneGps9l-wEQCG8aKo" 
              alt="Promo"
            />
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">Priority Service</span>
              <h3 className="text-2xl font-display font-bold text-white mb-3 leading-tight">Apostille Verification</h3>
              <p className="text-on-primary-container text-xs mb-8 leading-relaxed font-medium">Fast-track processing for Hague Convention member countries.</p>
              <button className="w-full bg-white text-primary py-4 rounded-xl font-bold text-sm hover:bg-surface transition-colors shadow-lg">
                Start Application
              </button>
            </div>
          </div>

          {/* Attestation Categories */}
          {[
            { 
              icon: 'school', 
              title: 'Educational', 
              items: ['Educational Documents', 'Degree Certificate', 'HRD Attestation', 'Kerala HRD'] 
            },
            { 
              icon: 'person', 
              title: 'Personal', 
              items: ['Marriage Certificate Attestation', 'Birth Certificate Attestation', 'Norka Attestation', 'Home Dept. Attestation'] 
            },
            { 
              icon: 'business', 
              title: 'Commercial', 
              items: ['Commercial Documents', 'Power of Attorney', 'SDM/ Chamber', 'MEA Attestation'] 
            },
            { 
              icon: 'verified', 
              title: 'Specialized', 
              items: ['Apostille Attestation', 'WES/IQAS Verification', 'Translations', 'Notary'] 
            },
            { 
              icon: 'gpp_good', 
              title: 'PCC & Visa', 
              items: ['UAE PCC', 'Oman PCC', 'PCC Attestation', 'Visa Stamping'] 
            },
            { 
              icon: 'grid_view', 
              title: 'Other Services', 
              items: ['Translations', 'WES/IQAS Verification', 'Notary', 'Specialized Support'] 
            }
          ].map((cat) => (
            <div key={cat.title} className="md:col-span-4 bg-white border border-outline-variant rounded-2xl p-8 flex flex-col hover:border-primary transition-all shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-secondary-container rounded-xl text-primary">
                  <span className="material-symbols-outlined text-2xl">{cat.icon}</span>
                </div>
                <h2 className="text-xl font-display font-bold text-primary">{cat.title}</h2>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-xs font-medium text-on-surface-variant">
                    <span className="material-symbols-outlined text-base text-primary/40">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/detail" className="text-primary text-sm font-bold flex items-center gap-2 hover:underline">
                Learn More
                <span className="material-symbols-outlined text-base">open_in_new</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-surface-container py-20 border-y border-outline-variant">
        <div className="max-w-[1200px] mx-auto px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Countries', val: '150+' },
              { label: 'Attestations', val: '2M+' },
              { label: 'Legal Acceptance', val: '100%' },
              { label: 'Fast Track', val: '24h' }
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-display font-bold text-primary mb-2">{stat.val}</div>
                <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
