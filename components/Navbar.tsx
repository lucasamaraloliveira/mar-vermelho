
import React, { useState, useEffect } from 'react';
import { Menu, X, Anchor, Church, Compass } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', href: '#home', icon: Anchor },
    { label: 'Sobre', href: '#about', icon: Compass },
    { label: 'Catedrais', href: '#cathedrals', icon: Church },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);

    // If we are already on the home view (or the target section's page), 
    // we might want to manually trigger smooth scroll if the hash doesn't change
    if (window.location.hash === href) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed top-2 md:top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-5xl ${scrolled || isOpen ? 'glass py-2 md:py-3 px-4 md:px-6 rounded-xl md:rounded-2xl shadow-2xl' : 'bg-transparent py-4 md:py-5 px-6'
      }`}>
      <div className="flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group" onClick={(e) => handleNavClick(e, '#home')}>
          <div className="w-8 h-8 md:w-10 md:h-10 bg-red-900/40 border border-gold/30 rounded-full flex items-center justify-center group-hover:bg-red-900/60 transition-all">
            <Anchor className="text-gold w-5 h-5 md:w-6 md:h-6" />
          </div>
          <span className="text-lg md:text-2xl font-serif text-white tracking-wider md:tracking-widest uppercase truncate max-w-[150px] md:max-w-none">
            Mar Vermelho
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[10px] lg:text-xs uppercase tracking-widest text-neutral-300 hover:text-gold transition-colors font-semibold"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#whatsapp"
            className="bg-gold hover:bg-yellow-500 text-black px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all transform hover:scale-105"
          >
            Concierge
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gold p-1" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Content */}
      <div className={`md:hidden absolute top-full left-0 w-full mt-2 glass rounded-xl p-6 transition-all duration-300 transform origin-top shadow-2xl ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
        }`}>
        <div className="flex flex-col gap-5">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-4 text-lg font-serif text-neutral-200 hover:text-gold active:text-gold"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              <item.icon className="w-5 h-5 text-gold/60" />
              {item.label}
            </a>
          ))}
          <div className="h-px bg-white/10 my-1"></div>
          <a
            href="#whatsapp"
            className="w-full bg-gold text-black py-4 rounded-xl text-center font-bold uppercase tracking-widest text-xs"
            onClick={() => setIsOpen(false)}
          >
            WhatsApp Concierge
          </a>
        </div>
      </div>
    </nav>
  );
};
