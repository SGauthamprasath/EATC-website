import { useState } from 'react';
import { motion } from 'motion/react';

export default function Contact() {
  const recipientEmail = 'Attestation2400@gmail.com';
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    serviceInterest: 'Document Attestation',
    message: '',
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Contact form inquiry - ${formData.firstName || 'New'} ${formData.lastName || 'customer'}`
    );
    const body = encodeURIComponent(
      [
        `First Name: ${formData.firstName}`,
        `Last Name: ${formData.lastName}`,
        `Email: ${formData.email}`,
        `Service Interest: ${formData.serviceInterest}`,
        '',
        formData.message,
      ].join('\n')
    );

    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen">
      {/* Header */}
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
          support_agent
        </span>

        <div className="relative z-10 max-w-[1200px] mx-auto px-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl font-display font-bold text-white mb-8">Connect with our Experts</h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Providing legal-grade attestation services with absolute precision. Our dedicated team is ready to assist you with your global documentation needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bento Contact Grid */}
      <section className="max-w-[1200px] mx-auto px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="bg-white p-8 border border-outline-variant rounded-2xl hover:border-accent transition-all">
              <div className="flex items-start gap-6">
                <div className="bg-secondary-container p-3 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">call</span>
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-primary">Direct Assistance</h3>
                  <p className="text-sm text-on-surface-variant font-medium mt-1">011 4286 0201</p>
                  <p className="text-[10px] font-bold text-on-surface-variant mt-3 uppercase tracking-widest opacity-70">Mon - Fri, 9am - 6pm EST</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border border-outline-variant rounded-2xl hover:border-accent transition-all">
              <div className="flex items-start gap-6">
                <div className="bg-secondary-container p-3 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">mail</span>
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-primary">Email Inquiries</h3>
                  <p className="text-sm text-on-surface-variant font-medium mt-1">Attestation2400@gmail.com<br/>Eatcgroup.in@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border border-outline-variant rounded-2xl hover:border-accent transition-all flex-grow">
              <div className="flex items-start gap-6">
                <div className="bg-secondary-container p-3 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-primary">Location</h3>
                  <p className="text-sm text-on-surface-variant font-medium mt-1 leading-relaxed">G92-Pratap complex<br/>First Floor-No 117<br/>Munirka, New Delhi-110067, India<br/>Landmark: Near Metro Station- Gate no.3<br/>Ph: 9790687070<br/>9942457070</p>
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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-primary uppercase tracking-wider">First Name</label>
                  <input
                    className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 focus:border-accent focus:ring-0 transition-all outline-none"
                    placeholder="John"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-primary uppercase tracking-wider">Last Name</label>
                  <input
                    className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 focus:border-accent focus:ring-0 transition-all outline-none"
                    placeholder="Doe"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-primary uppercase tracking-wider">Email Address</label>
                <input
                  className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 focus:border-accent focus:ring-0 transition-all outline-none"
                  placeholder="j.doe@company.com"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-primary uppercase tracking-wider">Service Interest</label>
                <select
                  className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 focus:border-accent focus:ring-0 transition-all outline-none appearance-none"
                  name="serviceInterest"
                  value={formData.serviceInterest}
                  onChange={handleChange}
                >
                  <option>Document Attestation</option>
                  <option>Embassy Legalization</option>
                  <option>Corporate Verification</option>
                  <option>Other Inquiry</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-primary uppercase tracking-wider">Message</label>
                <textarea
                  className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 focus:border-accent focus:ring-0 transition-all outline-none"
                  placeholder="Tell us how we can help..."
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button className="w-full bg-accent text-white font-bold py-4 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group" type="submit">
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
          src="/assets/Contact/office.jpg"
          alt="Office Map"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="bg-white p-6 rounded-2xl shadow-2xl border border-outline-variant flex items-center gap-6 min-w-[320px]">
            <div className="bg-accent p-3 rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>domain</span>
            </div>
            <div>
              <p className="text-lg font-display font-bold text-primary">EATC Group Office</p>
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
