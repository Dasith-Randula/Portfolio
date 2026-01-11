
import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center overflow-hidden">
      <div className="relative w-48 h-48 flex items-center justify-center">
        {/* Central Sun (Logo D) */}
        <div className="relative z-10 w-16 h-16 bg-white rounded-full flex items-center justify-center text-black font-bold text-3xl shadow-[0_0_20px_rgba(255,255,255,0.8)]">
          D
        </div>
        
        {/* Orbit 1 */}
        <div className="absolute w-32 h-32 border border-gray-800 rounded-full animate-[spin_8s_linear_infinite]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-400 rounded-full"></div>
        </div>

        {/* Orbit 2 */}
        <div className="absolute w-44 h-44 border border-gray-900 rounded-full animate-[spin_12s_linear_infinite_reverse]">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-600 rounded-full"></div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <h2 className="text-white font-display text-xl tracking-widest animate-pulse uppercase">
          Launching Portfolio...
        </h2>
        <div className="w-48 h-1 bg-gray-900 mt-4 rounded-full overflow-hidden">
          <div className="h-full bg-white animate-[progress_2s_ease-in-out_infinite]"></div>
        </div>
      </div>

      <style>{`
        @keyframes progress {
          0% { width: 0%; transform: translateX(-100%); }
          50% { width: 100%; transform: translateX(0%); }
          100% { width: 0%; transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
