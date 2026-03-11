import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Liste nettoyée : "Contact" est supprimé d'ici car il fait doublon avec le bouton
  const navLinks = [
    { name: 'Accueil', href: 'home' },
    { name: 'À propos', href: 'about' },
    { name: 'Compétences', href: 'skills' },
    { name: 'Projets', href: 'projects' },
  ];

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
      scrolled 
        ? 'py-4 bg-slate-700/40 backdrop-blur-2xl border-b border-white/15 shadow-2xl shadow-black/20' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <RouterLink to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-sky-500/20 group-hover:rotate-12 transition-transform duration-300">
            <Code2 size={24} />
          </div>
          <span className="text-xl font-bold tracking-tighter text-white uppercase">Knossos</span>
        </RouterLink>

        {/* NAVIGATION DESKTOP */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
          
          {/* L'unique bouton d'action */}
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-6 py-2.5 bg-white text-black text-sm font-bold rounded-xl hover:bg-sky-400 hover:text-white transition-all duration-300 active:scale-95 shadow-lg shadow-white/5"
          >
            Parlons-en !
          </button>
        </nav>

        {/* BOUTON MOBILE (BURGER) */}
        <button 
          className="md:hidden p-2 text-white bg-white/5 rounded-lg border border-white/10"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-2xl border-b border-white/10 p-8 md:hidden flex flex-col gap-8 shadow-2xl"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-3xl font-bold text-left text-white hover:text-sky-500 transition-colors"
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="w-full py-5 bg-sky-500 text-white text-lg font-bold rounded-2xl shadow-lg shadow-sky-500/20"
            >
              Parlons-en !
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;