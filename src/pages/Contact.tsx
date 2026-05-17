import { motion } from 'motion/react';

export default function Contact() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-outline-variant py-20 text-center">
        <div className="max-w-[1200px] mx-auto px-10">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl font-display font-bold text-primary mb-6"
          >
            Connect with our Experts
          </motion.h1>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed font-light">
            Providing legal-grade attestation services with absolute precision. Our dedicated team is ready to assist you with your global documentation needs.
          </p>
        </div>
      </section>

      {/* Bento Contact Grid */}
      <section className="max-w-[1200px] mx-auto px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="bg-white p-8 border border-outline-variant rounded-2xl hover:border-primary transition-all">
              <div className="flex items-start gap-6">
                <div className="bg-secondary-container p-3 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">call</span>
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-primary">Direct Assistance</h3>
                  <p className="text-sm text-on-surface-variant font-medium mt-1">+1 (555) 234-8900</p>
                  <p className="text-[10px] font-bold text-on-surface-variant mt-3 uppercase tracking-widest opacity-70">Mon - Fri, 9am - 6pm EST</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border border-outline-variant rounded-2xl hover:border-primary transition-all">
              <div className="flex items-start gap-6">
                <div className="bg-secondary-container p-3 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">mail</span>
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-primary">Email Inquiries</h3>
                  <p className="text-sm text-on-surface-variant font-medium mt-1">support@vericert.com</p>
                  <p className="text-sm text-on-surface-variant font-medium">legal@vericert.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border border-outline-variant rounded-2xl hover:border-primary transition-all flex-grow">
              <div className="flex items-start gap-6">
                <div className="bg-secondary-container p-3 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-primary">Global HQ</h3>
                  <p className="text-sm text-on-surface-variant font-medium mt-1 leading-relaxed">1200 Avenue of the Americas<br/>Suite 450, New York, NY 10036</p>
                  <div className="mt-8 flex gap-2">
                    <span className="bg-surface-container px-3 py-1.5 rounded-full text-[10px] font-bold text-primary uppercase tracking-wider">Verified Hub</span>
                    <span className="bg-surface-container px-3 py-1.5 rounded-full text-[10px] font-bold text-primary uppercase tracking-wider">Legal District</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 bg-white border border-outline-variant rounded-2xl p-10 shadow-sm">
            <h2 className="text-2xl font-display font-bold text-primary mb-8">Get in Touch</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-primary uppercase tracking-wider">First Name</label>
                  <input className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 focus:border-primary focus:ring-0 transition-all outline-none" placeholder="John" type="text"/>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-primary uppercase tracking-wider">Last Name</label>
                  <input className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 focus:border-primary focus:ring-0 transition-all outline-none" placeholder="Doe" type="text"/>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-primary uppercase tracking-wider">Email Address</label>
                <input className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 focus:border-primary focus:ring-0 transition-all outline-none" placeholder="j.doe@company.com" type="email"/>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-primary uppercase tracking-wider">Service Interest</label>
                <select className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 focus:border-primary focus:ring-0 transition-all outline-none appearance-none">
                  <option>Document Attestation</option>
                  <option>Embassy Legalization</option>
                  <option>Corporate Verification</option>
                  <option>Other Inquiry</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-primary uppercase tracking-wider">Message</label>
                <textarea className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 focus:border-primary focus:ring-0 transition-all outline-none" placeholder="Tell us how we can help..." rows={4}></textarea>
              </div>
              <button className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group">
                Send Message
                <span className="material-symbols-outlined text-base group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">send</span>
              </button>
              <p className="text-[10px] text-on-surface-variant text-center font-medium opacity-70">
                Response time typically under 2 hours during business sessions.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="w-full h-[500px] relative mt-16 overflow-hidden">
        <img 
          className="w-full h-full object-cover grayscale" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxiawHM815F39lWLFxZFKCgYo8p8QHsJCNCSA7BXOMNmkiT0SXYnn_BA3liN-aV1qgejnecqw06TC9SkUfJ9sbJ_CIqFxSS0B-lGOmBTqIspVDXubI31YLQeu8V3fgaXUSbeIwEij7XVHCmQh-Hfj4XhVB4lIZsNDcuZ1X32BHRWV6vj4FAA74mk73D6e1j0GSUzoJMmhUTiS5fbH0LEbZTyKOTmpBNuxGaIdm689fg9DRJGD_ywjlpOqkeSqEwPYi6hpgolHoIXA" 
          alt="Office Map" 
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="bg-white p-6 rounded-2xl shadow-2xl border border-outline-variant flex items-center gap-6 min-w-[320px]">
            <div className="bg-primary p-3 rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>domain</span>
            </div>
            <div>
              <p className="text-lg font-display font-bold text-primary">VeriCert Office</p>
              <p className="text-xs font-medium text-on-surface-variant">Global Operations Center</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 right-8">
          <div className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-outline-variant flex items-center gap-3">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-bold text-primary">Now Open: Site Visits Available</span>
          </div>
        </div>
      </section>
    </main>
  );
}
