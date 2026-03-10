import React from 'react';

const Skills = () => {
  // Structure de données pour faciliter l'ajout/suppression plus tard
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "SCSS", "Tailwind", "React"]
    },
    {
      title: "Backend",
      skills: ["MySQL", "Node.js"]
    },
    {
      title: "Outils",
      skills: ["Git", "VS Code", "IA (Gemini/Cursor)"]
    },
    {
      title: "Design",
      skills: ["Figma", "UI/UX"]
    }
  ];

  return (
    <section id="skills" className="py-24">
      {/* En-tête de section */}
      <div className="text-center mb-16 space-y-4">
        <span className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-400">
          Compétences
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Mes expertises
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Un ensemble de compétences techniques et créatives pour donner vie à vos projets.
        </p>
      </div>

      {/* Grille des catégories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className="bg-[#161D2F] p-8 rounded-3xl border border-white/5 flex flex-col items-center hover:border-white/10 transition-colors group"
          >
            <h3 className="text-xl font-bold text-white mb-8 group-hover:text-sky-400 transition-colors">
              {category.title}
            </h3>
            
            {/* Conteneur des badges (Style Nuage / Wrap) */}
            <div className="flex flex-wrap justify-center gap-3">
              {category.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-4 py-2 bg-[#0B1120] text-gray-300 text-sm font-medium rounded-xl border border-white/5 hover:border-white/20 hover:text-white transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;