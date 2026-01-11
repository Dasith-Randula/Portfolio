
import React from 'react';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-display font-bold text-white mb-4">Academic Orbit</h2>
            <div className="h-1 w-20 bg-white"></div>
          </div>

          <div className="space-y-12">
            {EDUCATION.map((item, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12 border-l border-gray-800">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white">{item.degree}</h3>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-500 text-sm">{item.period}</span>
                  </div>
                  <h4 className="text-xl text-gray-400 font-medium">{item.university}</h4>
                  
                  <div className="pt-6">
                    <h5 className="text-white text-sm font-bold uppercase tracking-widest mb-4">Key Focus Areas</h5>
                    <div className="flex flex-wrap gap-3">
                      {item.focus.map((f, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.02] border border-gray-900 text-gray-400 text-sm hover:border-white/20 transition-colors">
                          <i className="fa-solid fa-circle text-[6px] text-white"></i>
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
