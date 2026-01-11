
import React from 'react';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic Background - Animated "Black Hole" CSS effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white opacity-5 blur-[120px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white opacity-10 blur-[60px] rounded-full animate-pulse"></div>
        
        {/* Particles */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="stars-container w-full h-full animate-[spin_100s_linear_infinite]">
             {[...Array(100)].map((_, i) => (
               <div 
                 key={i} 
                 className="absolute w-0.5 h-0.5 bg-white rounded-full"
                 style={{ 
                   top: `${Math.random() * 100}%`, 
                   left: `${Math.random() * 100}%` 
                 }}
               />
             ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full border border-gray-800 bg-white/5 text-gray-400 text-sm tracking-widest uppercase mb-4 animate-fade-in">
            Software Engineering Undergraduate
          </div>
          <h1 className="text-5xl md:text-8xl font-display font-bold text-white tracking-tight leading-none opacity-0 animate-[fade-up_1s_ease-out_forwards]">
            Dasith Randula
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto opacity-0 animate-[fade-up_1s_ease-out_0.3s_forwards]">
            Designing clean interfaces and building reliable web solutions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-12 opacity-0 animate-[fade-up_1s_ease-out_0.6s_forwards]">
            <button 
              onClick={() => scrollTo('projects')}
              className="px-8 py-4 bg-white text-black font-bold rounded-lg transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] flex items-center gap-2"
            >
              <i className="fa-solid fa-rocket"></i>
              View Projects
            </button>
            <button 
              onClick={() => scrollTo('about')}
              className="px-8 py-4 bg-white/5 text-white border border-white/10 font-bold rounded-lg transition-all hover:bg-white/10 hover:border-white/20"
            >
              About Me
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <button onClick={() => scrollTo('about')} className="text-gray-500 hover:text-white transition-colors">
          <i className="fa-solid fa-chevron-down text-2xl"></i>
        </button>
      </div>

      <style>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
