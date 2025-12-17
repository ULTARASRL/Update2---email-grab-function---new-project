import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-dark/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-center md:justify-start items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-5 h-5 rounded-full border-[3px] border-brand-teal group-hover:bg-brand-teal/20 transition-colors"></div>
          <span className="text-3xl font-bold tracking-tight text-white">Adhesure</span>
        </a>
      </div>
    </nav>
  );
};

export default Header;