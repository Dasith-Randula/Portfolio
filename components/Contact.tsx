
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    // Simulate send animation
    setIsSent(true);
    setTimeout(() => {
      setFormState({ name: '', email: '', message: '' });
      setIsSent(false);
      alert('Transmission received. I will orbit back to you soon.');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white">Let's Connect</h2>
              <p className="text-xl text-gray-500 leading-relaxed">
                Whether you have a project in mind or just want to discuss software and design, my transmission channels are open.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center text-white text-xl">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-1">Email Me</h4>
                  <a href="mailto:dasith@example.com" className="text-white hover:text-gray-300 transition-colors">hello@dasithrandula.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center text-white text-xl">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-1">Based In</h4>
                  <p className="text-white">Colombo, Sri Lanka</p>
                </div>
              </div>
            </div>

            {/* Orbiting Socials */}
            <div className="pt-10">
              <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-6">Social Satellites</h4>
              <div className="flex gap-4">
                <a href="#" className="w-14 h-14 rounded-full border border-gray-800 flex items-center justify-center text-white text-2xl hover:border-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-110 animate-[float_3s_ease-in-out_infinite]">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="#" className="w-14 h-14 rounded-full border border-gray-800 flex items-center justify-center text-white text-2xl hover:border-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-110 animate-[float_4s_ease-in-out_infinite_reverse]">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#" className="w-14 h-14 rounded-full border border-gray-800 flex items-center justify-center text-white text-2xl hover:border-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-110 animate-[float_5s_ease-in-out_infinite]">
                  <i className="fa-brands fa-behance"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-[#111] p-8 md:p-12 rounded-3xl border border-gray-900">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Your Name</label>
                <input 
                  type="text" 
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-[#050505] border border-gray-800 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-white transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                <input 
                  type="email" 
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-[#050505] border border-gray-800 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-white transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Message</label>
                <textarea 
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-[#050505] border border-gray-800 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-white transition-colors resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSent}
                className="w-full py-5 bg-white text-black font-bold uppercase tracking-[0.2em] rounded-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all transform active:scale-95 disabled:opacity-50 flex items-center justify-center gap-3 overflow-hidden relative group"
              >
                <span className={isSent ? 'translate-y-20 opacity-0' : 'transition-all'}>Initiate Launch</span>
                <i className={`fa-solid fa-paper-plane ${isSent ? 'animate-[launch_1s_ease-in-out_forwards]' : ''}`}></i>
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes launch {
          0% { transform: translate(0, 0) scale(1); opacity: 1; }
          100% { transform: translate(100px, -100px) scale(2); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
