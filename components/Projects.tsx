
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Constellations</h2>
            <p className="text-gray-500">Selected work spanning Software, Web, and UI Design.</p>
          </div>
          <a href="#" className="group flex items-center gap-2 text-white font-medium hover:text-gray-300 transition-colors">
            View full repository
            <i className="fa-solid fa-arrow-right-long group-hover:translate-x-1 transition-transform"></i>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <div 
              key={idx} 
              className="group relative flex flex-col bg-white/[0.02] border border-gray-900 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500 perspective-1000"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60"></div>
              </div>
              
              <div className="p-8 space-y-4 flex-grow flex flex-col">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, tIdx) => (
                    <span key={tIdx} className="text-[10px] uppercase tracking-widest text-gray-500 px-2 py-0.5 border border-gray-800 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-display font-bold text-white">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-grow">{project.description}</p>
                <a 
                  href={project.link} 
                  className="inline-flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest pt-4 group-hover:text-gray-300 transition-colors"
                >
                  Explore Project
                  <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
