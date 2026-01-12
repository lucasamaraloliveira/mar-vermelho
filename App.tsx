
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CathedralsList } from './components/CathedralsList';
import { WhatsAppView } from './components/WhatsAppView';

import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfUse } from './components/TermsOfUse';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');


  useEffect(() => {
    // Handle view content scrolling when returning to home or navigating sections
    if (currentView === 'home') {
      const hash = window.location.hash;
      if (hash && hash !== '#home') {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else if (hash === '#home' || !hash) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      // For any other view (whatsapp, privacy, terms), always scroll to top
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [currentView]); // Re-run when view changes

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as ViewState;
      if (['home', 'whatsapp', 'privacy', 'terms'].includes(hash)) {
        setCurrentView(hash || 'home');
      } else {
        // Keeps 'home' state for section anchors like #about, #cathedrals
        setCurrentView('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    switch (currentView) {
      case 'whatsapp':
        return <WhatsAppView onBack={() => window.location.hash = 'home'} />;
      case 'privacy':
        return <PrivacyPolicy onBack={() => window.location.hash = 'home'} />;
      case 'terms':
        return <TermsOfUse onBack={() => window.location.hash = 'home'} />;
      default:
        return (
          <>
            <Hero />
            <About />
            <CathedralsList />
            <section id="contact-cta" className="py-20 bg-neutral-900/50">
              <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-serif mb-6 text-gold">Atendimento Exclusivo</h2>
                <p className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto">
                  Entre em contato com nossa equipe de concierge para agendamentos privados,
                  celebrações exclusivas e suporte espiritual personalizado.
                </p>
                <button
                  onClick={() => window.location.hash = 'whatsapp'}
                  className="px-8 py-3 bg-gold text-black font-semibold rounded-full hover:bg-yellow-500 transition-all duration-300"
                >
                  Falar com Concierge
                </button>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
