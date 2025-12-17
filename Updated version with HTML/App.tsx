import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InstructionSection from './components/InstructionSection';
import Footer from './components/Footer';
import Popup from './components/Popup';
import PrivacyPolicy from './components/PrivacyPolicy';

const App: React.FC = () => {
  const [route, setRoute] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#privacy-policy') {
        setRoute('privacy');
      } else {
        setRoute('home');
      }
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark text-slate-50 font-sans selection:bg-brand-teal selection:text-brand-dark flex flex-col">
      <Header />
      <main className="flex-grow">
        {route === 'home' ? (
          <>
            <Hero />
            <InstructionSection />
            <Popup />
          </>
        ) : (
          <PrivacyPolicy />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;