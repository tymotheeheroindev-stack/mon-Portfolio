import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // On définit clairement les liens pour qu'ils matchent tes ID de sections
  const footerLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Projets', href: '#projects' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#161D2F] pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white tracking-tight">Portfolio</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Créateur d'expériences digitales passionné par l'innovation et le design.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Navigation</h4>
            <nav className="flex flex-col gap-4">
              {/* CORRECTION ICI : On utilise footerLinks.map */}
              {footerLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-gray-400 hover:text-white text-sm transition-colors w-fit"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Réseaux sociaux</h4>
            <div className="flex gap-4">
              {/* Tes icônes réseaux sociaux ici (inchangées) */}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-gray-500 text-xs">
            © {currentYear} Portfolio. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;