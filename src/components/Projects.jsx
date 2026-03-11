import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ExternalLink, Github } from 'lucide-react';
// On importe l'URL de configuration
import { API_URL } from '../api/config';

// Import Swiper React components & styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Utilisation de ${API_URL} au lieu de localhost
        const res = await axios.get(`${API_URL}/api/projects/all`);
        setProjects(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Erreur lors de la récupération des projets:", err);
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Mes Réalisations
          </h2>
          <div className="h-1 w-20 bg-sky-500 rounded-full"></div>
        </div>

        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-sky-500"></div>
            <p className="mt-4 text-gray-500 italic">Récupération des projets sur le serveur...</p>
          </div>
        ) : projects.length > 0 ? (
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-14 admin-swiper"
          >
            {projects.map((project) => (
              <SwiperSlide key={project._id}>
                <div className="bg-[#161D2F]/50 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden h-full flex flex-col hover:border-sky-500/50 transition-all duration-500 group">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map(tech => (
                        <span key={tech} className="text-[10px] font-bold uppercase px-3 py-1 bg-sky-500/10 text-sky-400 rounded-full border border-sky-500/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-sky-400 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                        {project.description}
                    </p>
                    <div className="mt-auto flex items-center gap-4">
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-white/5 rounded-2xl text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                      >
                        <Github size={20} />
                      </a>
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-3 bg-sky-500 hover:bg-sky-600 rounded-2xl text-white font-bold transition-all shadow-lg shadow-sky-500/20 active:scale-95"
                      >
                        Voir Live
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="text-center py-20 bg-white/5 rounded-[2.5rem] border border-dashed border-white/10">
            <p className="text-gray-500">Aucun projet n'est disponible pour le moment.</p>
          </div>
        )}
      </div>

      <style>{`
        .swiper-button-next, .swiper-button-prev {
          color: #0ea5e9 !important;
          transform: scale(0.6);
        }
        .swiper-pagination-bullet {
          background: #334155 !important;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #0ea5e9 !important;
          width: 20px;
          border-radius: 5px;
        }
      `}</style>
    </section>
  );
};

export default Projects;