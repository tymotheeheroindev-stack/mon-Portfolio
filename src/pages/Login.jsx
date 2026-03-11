import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// On n'oublie pas l'import de la config
import { API_URL } from '../api/config';
import { motion } from 'framer-motion';

const Login = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false); // Optionnel : pour l'état de chargement
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Utilisation de la variable API_URL
      const response = await axios.post(`${API_URL}/api/admin/login`, { password });
      
      if (response.data.success) {
        localStorage.setItem('isAdminAuthenticated', 'true'); 
        navigate('/admin');
      }
    } catch (err) {
      setError(true);
      // On réinitialise l'erreur après 3 secondes
      setTimeout(() => setError(false), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1120] flex items-center justify-center px-4">
      <form onSubmit={handleLogin} className="bg-[#161D2F] p-10 rounded-[2.5rem] border border-white/5 w-full max-w-md space-y-8 shadow-2xl">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-white tracking-tight uppercase">Knossos Admin</h2>
          <p className="text-gray-400 text-sm italic">Accès restreint au système</p>
        </div>

        <div className="space-y-4">
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Code secret"
            className={`w-full bg-[#0B1120] border ${error ? 'border-red-500' : 'border-white/10'} rounded-2xl px-6 py-4 text-white focus:border-sky-500 outline-none transition-all shadow-inner`}
          />
          {error && (
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="text-red-500 text-xs text-center font-medium"
            >
              Identifiant invalide. Accès refusé.
            </motion.p>
          )}
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className={`w-full ${loading ? 'bg-gray-600' : 'bg-white hover:bg-sky-400 hover:text-white'} text-black font-bold py-4 rounded-2xl transition-all active:scale-95 shadow-lg`}
        >
          {loading ? 'Vérification...' : 'Déverrouiller'}
        </button>
      </form>
    </div>
  );
};

export default Login;