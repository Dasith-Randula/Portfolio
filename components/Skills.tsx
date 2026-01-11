
import React from 'react';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Technological Arsenal</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Organized tools and methodologies utilized to build digital universes.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div key={idx} className="space-y-8">
              <h3 className="text-xl font-display font-bold text-white flex items-center gap-3">
                <span className="w-8 h-[1px] bg-white/20"></span>
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx}
                    className="group p-5 rounded-xl bg-white/[0.02] border border-gray-900 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-bold group-hover:translate-x-1 transition-transform">{skill.name}</h4>
                      <i className="fa-solid fa-chevron-right text-[10px] text-gray-700 group-hover:text-white transition-colors"></i>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
