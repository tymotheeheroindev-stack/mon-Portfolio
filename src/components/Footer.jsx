import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Code2, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/ton-profil', name: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/ton-profil', name: 'LinkedIn' },
    { icon: <Instagram size={20} />, href: 'https://instagram.com/ton-profil', name: 'Instagram' },
    { icon: <Twitter size={20} />, href: 'https://twitter.com/ton-profil', name: 'Twitter' },
  ];

  return (
    // Changement ici : bg-slate-900/40 et border-t pour démarquer du fond #0B1120
    <footer className="relative mt-20 border-t border-white/10 bg-slate-900/40 backdrop-blur-md pt-20 pb-10 overflow-hidden">
      
      {/* Glow effect décoratif pour apporter de la lumière sous le contenu */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-[800px] h-[300px] bg-sky-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Section 1 : Brand */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-sky-500/20">
                <Code2 size={24} />
              </div>
              <span className="text-2xl font-bold tracking-tighter text-white uppercase">Knossos</span>
            </div>
            <p className="text-gray-300 max-w-sm leading-relaxed font-light">
              Développeur Fullstack spécialisé dans la création d'interfaces <br />
              numériques haut de gamme et d'expériences mémorables.
            </p>
          </div>

          {/* Section 2 : Navigation rapide */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase text-xs tracking-[0.2em] opacity-50">Navigation</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><button onClick={() => document.getElementById('about').scrollIntoView({behavior:'smooth'})} className="hover:text-sky-400 transition-colors">À propos</button></li>
              <li><button onClick={() => document.getElementById('projects').scrollIntoView({behavior:'smooth'})} className="hover:text-sky-400 transition-colors">Projets</button></li>
              <li><button onClick={() => document.getElementById('contact').scrollIntoView({behavior:'smooth'})} className="hover:text-sky-400 transition-colors">Contact</button></li>
            </ul>
          </div>

          {/* Section 3 : Réseaux */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase text-xs tracking-[0.2em] opacity-50">Suivez-moi</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-sky-500/50 hover:bg-sky-500/10 transition-all"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Barre du bas éclaircie également */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-[10px] tracking-[0.3em] uppercase font-medium">
            © {currentYear} KNOSSOS — Artisan du Web
          </p>

          <div className="flex items-center gap-8">
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-xs font-bold text-gray-300 hover:text-white transition-colors uppercase tracking-widest"
            >
              Haut de page <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
            </button>

            <Link 
              to="/login" 
              className="text-[10px] text-white/20 hover:text-sky-500 transition-colors uppercase tracking-[0.3em] font-bold"
            >
              Admin Access
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;