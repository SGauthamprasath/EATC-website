import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-outline-variant mt-20">
      <div className="max-w-[1200px] mx-auto px-10 py-12 flex flex-col md:flex-row justify-between gap-12">
        <div className="max-w-sm">
          <div className="text-xl font-display font-bold text-primary mb-4">EATC GROUP</div>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Reliable, legal-grade verification for all your global documentation needs. Precision in every seal.
          </p>
          <div className="mt-8 text-xs text-on-surface-variant">
            © EATC GROUP Services. Legal-grade reliability.
          </div>
        </div>

        <div className="grid grid-cols-2 gap-16">
          <div>
            <h4 className="text-xs font-bold text-primary mb-4 uppercase tracking-wider">Company</h4>
            <div className="flex flex-col gap-2">
              <Link to="#" className="text-sm text-on-surface-variant hover:underline transition-all">Privacy Policy</Link>
              <Link to="#" className="text-sm text-on-surface-variant hover:underline transition-all">Terms of Service</Link>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold text-primary mb-4 uppercase tracking-wider">Network</h4>
            <div className="flex flex-col gap-2">
              <Link to="#" className="text-sm text-on-surface-variant hover:underline transition-all">Office Locations</Link>
              <Link to="#" className="text-sm text-on-surface-variant hover:underline transition-all">Global Network</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
