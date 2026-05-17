/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Directory from './pages/Directory';
import Detail from './pages/Detail';
import Contact from './pages/Contact';
import EmbassyAttestation from './pages/EmbassyAttestation';
import Attestation from './pages/Attestation';
import OtherServices from './pages/OtherServices';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={
          <PageTransition>
            <Home />
          </PageTransition>
        } />
        <Route path="/about" element={
          <PageTransition>
            <About />
          </PageTransition>
        } />
        <Route path="/directory" element={
          <PageTransition>
            <Directory />
          </PageTransition>
        } />
        <Route path="/embassy-attestation" element={
          <PageTransition>
            <EmbassyAttestation />
          </PageTransition>
        } />
        <Route path="/attestation" element={
          <PageTransition>
            <Attestation />
          </PageTransition>
        } />
        <Route path="/other-services" element={
          <PageTransition>
            <OtherServices />
          </PageTransition>
        } />
        <Route path="/detail" element={
          <PageTransition>
            <Detail />
          </PageTransition>
        } />
        <Route path="/contact" element={
          <PageTransition>
            <Contact />
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  );
}

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-surface selection:bg-primary/10 selection:text-primary">
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
