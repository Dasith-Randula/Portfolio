
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-white/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-gray-800 bg-[#111]">
              <img 
                src="https://picsum.photos/seed/dasith/800/800" 
                alt="Dasith Randula" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-display font-bold text-white">The Explorer Behind the Code</h2>
              <div className="h-1 w-20 bg-white"></div>
            </div>
            
            <p className="text-lg text-gray-400 leading-relaxed">
              I am a Software Engineering Undergraduate at <span className="text-white font-medium">SLTC Research University</span>, driven by the intersection of logical engineering and creative design. My journey is about finding the perfect orbit between robust backend systems and intuitive user interfaces.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              With a strong foundation in <span className="text-white">Web Development</span> and <span className="text-white">UI Design</span>, I approach software as a craft—focusing on performance, usability, and the cinematic experience of digital interaction.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-4 rounded-xl border border-gray-800 bg-white/5 hover:border-white/20 transition-colors">
                <h3 className="text-white font-bold text-xl mb-1">UI Design</h3>
                <p className="text-sm text-gray-500">Crafting clean & accessible visual languages.</p>
              </div>
              <div className="p-4 rounded-xl border border-gray-800 bg-white/5 hover:border-white/20 transition-colors">
                <h3 className="text-white font-bold text-xl mb-1">Web Dev</h3>
                <p className="text-sm text-gray-500">Building reliable and scalable web applications.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
