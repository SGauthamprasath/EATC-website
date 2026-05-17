import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Detail() {
  return (
    <main className="max-w-[1200px] mx-auto px-10 py-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs font-medium text-on-surface-variant mb-12">
        <Link to="/" className="hover:text-primary">Home</Link>
        <span className="material-symbols-outlined text-base">chevron_right</span>
        <Link to="/directory" className="hover:text-primary">Services</Link>
        <span className="material-symbols-outlined text-base">chevron_right</span>
        <span className="text-primary font-bold">Educational Certificate Attestation</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Content Area */}
        <div className="lg:col-span-8 space-y-16">
          <section>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">Educational Certificate Attestation</h1>
            <p className="text-lg text-on-surface-variant leading-relaxed max-w-2xl font-light">
              Streamline your global career and education moves with our legal-grade attestation services. We ensure your documents are recognized by international embassies and government bodies.
            </p>
          </section>

          {/* Process Guide */}
          <section className="space-y-8">
            <h2 className="text-2xl font-display font-bold text-primary">The Attestation Journey</h2>
            <div className="grid gap-4">
              {[
                { step: 1, title: 'Document Submission', desc: 'Upload high-resolution scans or send physical copies via our secure courier partner. We perform an initial compliance check within 2 hours.' },
                { step: 2, title: 'University & State Verification', desc: 'Your documents are sent to the respective university and Human Resource Development (HRD) department for the first level of legalization.' },
                { step: 3, title: 'Ministry of External Affairs (MEA)', desc: 'The central government provides the necessary MEA stamp or Apostille sticker for international validity.' },
                { step: 4, title: 'Embassy Legalization', desc: "Finally, the document is submitted to the destination country's embassy for the final attestation seal." }
              ].map((item) => (
                <motion.div 
                  key={item.step}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white border border-outline-variant rounded-2xl p-6 flex gap-6 items-start hover:border-primary transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-container text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold mb-1 text-primary">{item.title}</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Required Documents Section */}
          <section className="bg-primary-container text-white rounded-2xl p-10 border border-primary">
            <div className="flex items-center gap-4 mb-8">
              <span className="material-symbols-outlined text-4xl text-on-primary-container">description</span>
              <h2 className="text-2xl font-display font-bold">Required Documentation</h2>
            </div>
            <ul className="grid md:grid-cols-2 gap-6">
              {[
                'Original Degree Certificate',
                'Clear Passport Copy (Front & Back)',
                'All Year Mark Sheets',
                'Two Passport Size Photographs',
                'Authorization Letter (Provided)',
                'Job Offer Letter Copy (Optional)'
              ].map((doc) => (
                <li key={doc} className="flex items-center gap-3 text-sm font-medium">
                  <span className="material-symbols-outlined text-on-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  {doc}
                </li>
              ))}
            </ul>
          </section>

          {/* FAQ Section */}
          <section>
            <h2 className="text-2xl font-display font-bold text-primary mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: 'How long does the entire process take?', a: 'The standard processing time is 10-15 business days, depending on the university and the specific embassy requirements. We offer express services for urgent cases.' },
                { q: 'Is my original document safe with you?', a: 'Absolutely. We use trackable, high-security courier services and all documents are stored in fireproof vaults while not in transit for verification.' },
                { q: 'Do I need to be physically present?', a: 'No, you do not need to visit any office. Our team handles all the legwork at the universities, ministries, and embassies on your behalf.' }
              ].map((faq, i) => (
                <details key={i} className="group bg-white border border-outline-variant rounded-xl p-4 transition-all open:border-primary">
                  <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-sm text-primary">
                    {faq.q}
                    <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-lg">expand_more</span>
                  </summary>
                  <div className="pt-4 text-xs text-on-surface-variant leading-relaxed font-medium">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="sticky top-28 space-y-6">
            <div className="bg-white border border-outline-variant rounded-2xl p-6 shadow-sm">
              <img 
                className="w-full h-48 object-cover rounded-xl mb-6 shadow-inner" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT8B_G2qkshxfAtaLXtRqDWThQD0R85k9Ivsk7_oVyACgG9aYK0ybKAOglNbcqPJp0osc_SfvfaVWOeQcEDpbux2x8eeayoe4i-1lOFsOzqHj8o4W1ZPe88VuGZltAi6u-3xoI0WlenwMQ-eTmKF9SypuZxTNBR1f1EZBXgF4QdslHIwcRfQUNkGCa6c91vvEVYSnDUMMykCJ77LNFpIT2GHEgL7Dmm8dIIsZ1BWYOYDI0J-nDR_hJwsNtGziDjatamIwMGdiA0h0" 
                alt="Consultant"
              />
              <h3 className="text-lg font-display font-bold text-primary mb-2">Need Expert Advice?</h3>
              <p className="text-xs text-on-surface-variant font-medium leading-relaxed mb-6">
                Our legal attestation experts are available for a 15-minute free consultation to clarify your specific requirements.
              </p>
              <button className="w-full py-4 bg-primary text-white rounded-xl font-bold text-sm hover:opacity-90 transition-opacity mb-3">
                Speak with an Expert
              </button>
              <button className="w-full py-4 border border-outline-variant text-primary rounded-xl font-bold text-sm hover:bg-surface transition-colors">
                Download Fee Guide
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-surface-container rounded-xl border border-outline-variant">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <span className="text-xs font-bold text-primary">ISO 9001:2015 Certified</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-surface-container rounded-xl border border-outline-variant">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>gpp_good</span>
                <span className="text-xs font-bold text-primary">GDPR Compliant Data</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
