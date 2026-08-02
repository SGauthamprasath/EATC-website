import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Embassy Attestation', path: '/embassy-attestation' },
    { name: 'Attestation', path: '/attestation' },
    { name: 'More', path: '/other-services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-primary border-b border-white/10 sticky top-0 w-full z-50">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex justify-between items-center h-20">
        <Link to="/" className="text-xl font-display font-bold text-white z-50">
          EATC Group
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-all relative pb-1 ${
                isActive(link.path)
                  ? 'text-white'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              {link.name}
              {isActive(link.path) && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white focus:outline-none z-50"
          >
            <span className="material-symbols-outlined text-3xl">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 right-0 bg-primary border-b border-white/10 md:hidden shadow-xl z-40"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-bold p-2 rounded-lg transition-colors ${
                    isActive(link.path)
                      ? 'bg-secondary-container text-on-secondary-container'
                      : 'text-white/60 hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-white/10 my-2" />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
