import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  // On prépare le terrain : plus tard, ce tableau "projectsData" 
  // sera rempli par ton Backend ou un CMS.
  const projectsData = [
    {
      id: 1,
      title: "Application Web Moderne",
      description: "Plateforme e-commerce complète avec gestion des commandes et paiements en ligne.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97", // Image temporaire
      tech: ["React", "TypeScript", "Tailwind CSS"],
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Application Mobile",
      description: "Interface intuitive pour une application de productivité avec synchronisation cloud.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
      tech: ["React Native", "Node.js", "MongoDB"],
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Projet Créatif",
      description: "Portfolio interactif avec animations et transitions fluides pour artiste numérique.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766",
      tech: ["Next.js", "Motion", "Three.js"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-24">
      {/* Header de section identique à la maquette */}
      <div className="text-center mb-16 space-y-4">
        <span className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-400">
          Projets
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white">Mes réalisations</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Découvrez une sélection de mes projets récents, démontrant mes compétences en développement et design.
        </p>
      </div>

      {/* Grille de projets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <div key={project.id} className="group bg-[#161D2F] rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-all">
            {/* Image du projet */}
            <div className="h-64 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Contenu de la carte */}
            <div className="p-8 space-y-4">
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Badges Tech */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-[#0B1120] text-xs font-medium text-gray-300 rounded-full border border-white/5">
                    {t}
                  </span>
                ))}
              </div>

              {/* Liens Code & Démo */}
              <div className="flex gap-6 pt-4">
                <a href={project.github} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                  <Github size={18} /> Code
                </a>
                <a href={project.demo} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                  <ExternalLink size={18} /> Démo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;