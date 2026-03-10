import React from 'react';
import { Code2, Palette, Rocket, Award } from 'lucide-react';

const AboutCard = ({ icon: Icon, title, description }) => (
  <div className="bg-[#161D2F] p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all group">
    <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="text-[#0B1120] w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </div>
);

const About = () => {
  const features = [
    {
      icon: Code2,
      title: "Développement",
      description: "Création d'applications web modernes, performantes et évolutives avec les dernières technologies."
    },
    {
      icon: Palette,
      title: "Design",
      description: "Interfaces utilisateur élégantes et intuitives centrées sur l'expérience utilisateur et l'esthétique."
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Solutions créatives pour répondre à des défis complexes et repousser les limites du possible."
    },
    {
      icon: Award,
      title: "Qualité",
      description: "Code propre, maintenable et respect des meilleures pratiques pour des résultats durables."
    }
  ];

  return (
    <section className="py-24" id="about">
      {/* En-tête de la section */}
      <div className="text-center mb-16 space-y-4">
        <span className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-400">
          À propos
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white">Qui suis-je ?</h2>
        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Passionné par le développement web et le design, je transforme des idées en 
          expériences digitales remarquables. Avec une attention particulière aux détails et une 
          approche centrée sur l'utilisateur.
        </p>
      </div>

      {/* Grille de cartes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, index) => (
          <AboutCard key={index} {...f} />
        ))}
      </div>
    </section>
  );
};

export default About;