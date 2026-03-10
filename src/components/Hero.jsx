import React from 'react';

const Hero = () => {
  return (
    <section id='home' className="flex flex-col md:flex-row items-center justify-between py-20 gap-12">
      {/* Côté gauche : Texte */}
      <div className="flex-1 space-y-8">
        <div className="inline-block px-4 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-sm text-gray-400">
          Bienvenue sur mon portfolio
        </div>
        
        <h2 className="text-6xl md:text-7xl font-bold leading-tight tracking-tighter">
          Créateur <br />
          d'expériences <br />
          <span className="text-gray-400">digitales</span>
        </h2>
        
        <p className="text-lg text-gray-400 max-w-md leading-relaxed">
          Designer & développeur passionné par la création d'interfaces modernes et intuitives qui transforment les idées en réalité.
        </p>
        
        <div className="flex items-center gap-4">
          <button className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all flex items-center gap-2">
            Voir mes projets <span>→</span>
          </button>
          <button className="px-8 py-3 border border-slate-700 rounded-lg font-semibold hover:bg-slate-800 transition-all">
            Me contacter
          </button>
        </div>
      </div>

      {/* Côté droit : Image (Ton Chibi ou Photo) */}
      <div className="flex-1 flex justify-end">
        <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden bg-slate-800 border border-slate-700 shadow-2xl">
          {/* Remplace l'URL par ton image plus tard */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent"></div>
          <img 
            src="https://via.placeholder.com/600" 
            alt="Portrait" 
            className="w-full h-full object-cover opacity-80"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;