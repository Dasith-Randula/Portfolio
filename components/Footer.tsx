
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-gray-900 bg-[#050505]">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Dasith Randula. All rights reserved.
        </div>
        
        <div className="flex items-center gap-8 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Ready for takeoff
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
