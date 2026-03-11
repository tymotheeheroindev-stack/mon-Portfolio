import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MessageSquare } from 'lucide-react';

const Hero = () => {
  return (
    <section id='home' className="relative min-h-[90vh] flex flex-col md:flex-row items-center justify-between py-20 gap-16 overflow-hidden">
      
      {/* Effet de lueur en arrière-plan (Glow effect) */}
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-sky-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[300px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full"></div>

      {/* Côté gauche : Texte */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 space-y-10 z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-sky-400 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
          </span>
          Disponible pour de nouveaux projets
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black leading-[1.1] tracking-tighter">
          Concevoir <br />
          <span className="bg-gradient-to-r from-white via-white to-gray-500 bg-clip-text text-transparent">
            le futur
          </span> <br />
          <span className="text-sky-500 underline decoration-sky-500/30 underline-offset-8">digital.</span>
        </h1>
        
        <p className="text-xl text-gray-400 max-w-lg leading-relaxed font-light">
          Je suis <span className="text-white font-medium">Tymothée Heroin</span>, développeur Fullstack MERN & Designer. Je transforme vos concepts en interfaces <span className="italic">mémorables</span> et performantes.
        </p>
        
        <div className="flex flex-wrap items-center gap-6">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-white text-black font-bold rounded-2xl flex items-center gap-3 transition-all shadow-xl shadow-white/10"
          >
            Voir mes projets 
            <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all flex items-center gap-2"
          >
            <MessageSquare size={18} className="text-sky-400" />
            Me contacter
          </motion.button>
        </div>
      </motion.div>

      {/* Côté droit : Image (Portrait / Chibi) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex-1 flex justify-center md:justify-end relative"
      >
        <div className="relative w-full max-w-[450px] aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group">
          {/* Overlay dégradé intelligent */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent z-10"></div>
          
          {/* L'image (Ton Chibi ici) */}
          <img 
            src="https://res.cloudinary.com/dq7s7b915/image/upload/v1773232660/favicon.png_hanjqj.png" 
            alt="Portrait Tymothée" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Badge flottant "Tech Stack" */}
          <div className="absolute bottom-8 left-8 z-20 p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl">
             <div className="flex gap-3">
                <span className="text-xs font-bold text-white">MERN STACK</span>
             </div>
          </div>
        </div>

        {/* Décoration géométrique derrière l'image */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-sky-500/20 rounded-full blur-3xl animate-pulse"></div>
      </motion.div>
    </section>
  );
};

export default Hero;