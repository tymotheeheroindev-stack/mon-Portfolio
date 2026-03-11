import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut, Trash2, Edit3, PlusCircle, Eye } from 'lucide-react';
// On importe l'URL de configuration que tu as créée dans src/api/config.js
import { API_URL } from '../api/config'; 
import { motion } from 'framer-motion';

const AdminDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ 
    title: '', 
    description: '', 
    image: '', 
    technologies: '',
    githubLink: '',
    demoLink: '' 
  });
  
  const navigate = useNavigate();

  // Chargement initial des projets depuis Render
  useEffect(() => { 
    fetchProjects(); 
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/projects/all`);
      setProjects(res.data);
    } catch (err) {
      console.error("Erreur lors de la récupération des projets:", err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdminAuthenticated');
    navigate('/login');
  };

  const handleEdit = (project) => {
    setEditingId(project._id);
    setFormData({
      title: project.title,
      description: project.description,
      image: project.image,
      technologies: project.technologies.join(', '),
      githubLink: project.githubLink || '',
      demoLink: project.demoLink || ''
    });
  };

  const handleDelete = async (id) => {
    if(window.confirm("Voulez-vous vraiment supprimer ce projet ?")) {
      try {
        await axios.delete(`${API_URL}/api/projects/${id}`); 
        fetchProjects();
      } catch (err) {
        alert("Erreur lors de la suppression");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { 
        ...formData, 
        technologies: formData.technologies.split(',').map(t => t.trim()) 
    };
    
    try {
      if (editingId) {
        // Modification d'un projet existant
        await axios.put(`${API_URL}/api/projects/${editingId}`, data);
      } else {
        // Ajout d'un nouveau projet
        await axios.post(`${API_URL}/api/projects/add`, data);
      }
      
      setEditingId(null);
      setFormData({ title: '', description: '', image: '', technologies: '', githubLink: '', demoLink: '' });
      fetchProjects();
      alert("Base de données mise à jour avec succès ! ✨");
    } catch (err) {
      console.error(err);
      alert("Erreur lors de l'enregistrement. Vérifiez la console.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-white p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER DASHBOARD */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent uppercase tracking-tighter">
            Knossos Admin
          </h1>
          
          <div className="flex items-center gap-4">
            <Link 
              to="/" 
              className="flex items-center gap-2 px-5 py-2.5 bg-white/5 text-gray-300 rounded-xl hover:bg-white/10 hover:text-white transition-all border border-white/10"
            >
              <Eye size={18} /> Voir le site
            </Link>

            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 px-5 py-2.5 bg-red-500/10 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all"
            >
              <LogOut size={18} /> Déconnexion
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* COLONNE GAUCHE : FORMULAIRE */}
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="bg-[#161D2F] p-8 rounded-[2.5rem] border border-white/5 shadow-2xl space-y-4 sticky top-8">
              <div className="flex items-center gap-3 mb-4 text-sky-400">
                {editingId ? <Edit3 /> : <PlusCircle />}
                <h2 className="text-xl font-semibold">{editingId ? 'Modifier le projet' : 'Ajouter un projet'}</h2>
              </div>

              <div className="space-y-4">
                <input 
                  value={formData.title} 
                  onChange={e => setFormData({...formData, title: e.target.value})} 
                  placeholder="Nom du projet" 
                  className="w-full bg-[#0B1120] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-sky-500 transition-all text-white"
                  required
                />

                <textarea 
                  value={formData.description} 
                  onChange={e => setFormData({...formData, description: e.target.value})} 
                  placeholder="Description du projet..." 
                  className="w-full bg-[#0B1120] border border-white/10 rounded-2xl px-5 py-4 h-32 outline-none focus:border-sky-500 transition-all text-white resize-none"
                  required
                />

                <input 
                  value={formData.image} 
                  onChange={e => setFormData({...formData, image: e.target.value})} 
                  placeholder="URL de l'image (Cloudinary)" 
                  className="w-full bg-[#0B1120] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-sky-500 transition-all text-white"
                  required
                />

                <input 
                  value={formData.technologies} 
                  onChange={e => setFormData({...formData, technologies: e.target.value})} 
                  placeholder="Technologies (séparées par des virgules)" 
                  className="w-full bg-[#0B1120] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-sky-500 transition-all text-white"
                  required
                />

                <div className="grid grid-cols-2 gap-4">
                  <input 
                    value={formData.githubLink} 
                    onChange={e => setFormData({...formData, githubLink: e.target.value})} 
                    placeholder="Lien GitHub" 
                    className="bg-[#0B1120] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-sky-500 text-white"
                  />
                  <input 
                    value={formData.demoLink} 
                    onChange={e => setFormData({...formData, demoLink: e.target.value})} 
                    placeholder="Lien Démo" 
                    className="bg-[#0B1120] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-sky-500 text-white"
                  />
                </div>
              </div>

              <button type="submit" className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-5 rounded-2xl shadow-lg shadow-sky-500/20 transition-all active:scale-[0.98] mt-4">
                {editingId ? 'Mettre à jour le projet' : 'Publier sur le site'}
              </button>

              {editingId && (
                <button 
                  type="button"
                  onClick={() => {
                    setEditingId(null);
                    setFormData({ title: '', description: '', image: '', technologies: '', githubLink: '', demoLink: '' });
                  }} 
                  className="text-gray-400 w-full hover:text-white transition-colors py-2 text-sm"
                >
                  Annuler la modification
                </button>
              )}
            </form>
          </div>

          {/* COLONNE DROITE : LISTE DES PROJETS */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-400 flex items-center gap-2">
              Projets en ligne <span className="bg-white/10 px-3 py-1 rounded-full text-sm text-white font-mono">{projects.length}</span>
            </h2>
            
            <div className="space-y-4">
              {projects.map(p => (
                <div key={p._id} className="group bg-[#161D2F] p-5 rounded-[2rem] border border-white/5 flex items-center gap-5 hover:border-white/20 transition-all shadow-xl">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 bg-[#0B1120] border border-white/5">
                    <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={p.title} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg text-white truncate">{p.title}</h3>
                    <p className="text-xs text-sky-400 font-medium truncate uppercase tracking-wider">
                      {p.technologies.join(' • ')}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleEdit(p)} 
                      className="p-3 text-gray-400 hover:text-sky-400 hover:bg-sky-400/10 rounded-xl transition-all"
                      title="Modifier"
                    >
                      <Edit3 size={18} />
                    </button>
                    <button 
                      onClick={() => handleDelete(p._id)} 
                      className="p-3 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-xl transition-all"
                      title="Supprimer"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}

              {projects.length === 0 && (
                <div className="text-center py-24 bg-white/5 rounded-[3rem] border border-dashed border-white/10 text-gray-500 italic">
                  Aucun projet publié pour le moment.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;