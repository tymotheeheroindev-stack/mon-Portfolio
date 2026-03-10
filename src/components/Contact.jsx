import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' ou 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // Remplace 'VOTRE_TEMPLATE_ID' par celui que tu as créé sur EmailJS
    emailjs.sendForm(
      'service_38qw1ld', 
      'template_vlui1r7', 
      form.current, 
      '-6c90623bOB9oAFvV'
    )
    .then((result) => {
        console.log(result.text);
        setStatus('success');
        setLoading(false);
        form.current.reset();
        // Le message de succès disparait après 5 secondes
        setTimeout(() => setStatus(null), 5000);
    }, (error) => {
        console.log(error.text);
        setStatus('error');
        setLoading(false);
    });
  };

  return (
    <section id="contact" className="py-24 border-t border-white/5">
      <div className="text-center mb-16 space-y-4">
        <span className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-400">
          Contact
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Travaillons ensemble</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Un projet en tête ? N'hésitez pas à me contacter pour en discuter.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Infos de contact */}
        <div className="space-y-10">
          <h3 className="text-2xl font-bold text-white">Informations de contact</h3>
          <div className="space-y-8">
            <div className="flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-2xl bg-[#161D2F] border border-white/10 flex items-center justify-center text-gray-400 group-hover:bg-white group-hover:text-[#0B1120] transition-all duration-300">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Email</p>
                <p className="text-white">tymothee.heroin.dev@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-2xl bg-[#161D2F] border border-white/10 flex items-center justify-center text-gray-400 group-hover:bg-white group-hover:text-[#0B1120] transition-all duration-300">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Téléphone</p>
                <p className="text-white">+33 6 17 17 17 88</p>
              </div>
            </div>

            <div className="flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-2xl bg-[#161D2F] border border-white/10 flex items-center justify-center text-gray-400 group-hover:bg-white group-hover:text-[#0B1120] transition-all duration-300">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Localisation</p>
                <p className="text-white">Sablons-Sur-Huisne / Condeau, France</p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulaire */}
        <div className="relative">
          <form ref={form} onSubmit={sendEmail} className="bg-[#161D2F] p-8 rounded-[2rem] border border-white/5 space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 ml-1">Nom</label>
              <input 
                name="from_name" 
                type="text" 
                required 
                placeholder="Votre nom"
                className="w-full bg-[#0B1120] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-white/30 transition-all placeholder:text-gray-600" 
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 ml-1">Email</label>
              <input 
                name="from_email" 
                type="email" 
                required 
                placeholder="votre@email.com"
                className="w-full bg-[#0B1120] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-white/30 transition-all placeholder:text-gray-600" 
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
              <textarea 
                name="message" 
                rows="4" 
                required 
                placeholder="Décrivez votre projet..."
                className="w-full bg-[#0B1120] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-white/30 transition-all placeholder:text-gray-600 resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-white text-black font-bold py-4 rounded-2xl hover:bg-gray-200 transition-all flex justify-center items-center gap-3 disabled:opacity-50"
            >
              {loading ? <Loader2 className="animate-spin" size={20} /> : "Envoyer le message"}
            </button>
          </form>

          {/* Notifications de statut */}
          {status === 'success' && (
            <div className="absolute -bottom-16 left-0 right-0 flex justify-center animate-fade-in">
              <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/50 text-green-400 px-4 py-2 rounded-full text-sm">
                <CheckCircle size={16} /> Message envoyé avec succès !
              </div>
            </div>
          )}
          {status === 'error' && (
            <div className="absolute -bottom-16 left-0 right-0 flex justify-center">
              <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-2 rounded-full text-sm">
                <AlertCircle size={16} /> Erreur lors de l'envoi.
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;