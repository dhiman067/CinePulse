import React from 'react';
import { ChevronRight, Play, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router';

const Home = () => {
  let navigate = useNavigate();

    return (
        <div>
                  <section className="relative w-full flex-1 min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#0D0D12]">
        
        {/* High-Resolution Poster Collage Background */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-1000 opacity-40 mix-blend-luminosity filter contrast-125 saturate-150"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1920&q=80')` 
          }}
        />

        {/* Secondary Detailed Dark Movie Wall Visual Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30 mix-blend-overlay"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1920&q=80')` 
          }}
        />

        {/* Gradient Overlays: Deep Pitch Black Radial & Linear Gradient Vignettes */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0D0D12] via-[#0D0D12]/75 to-[#0D0D12]/80" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0D0D12] via-transparent to-[#0D0D12]" />
        <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0D0D12]/60 to-[#0D0D12]" />

        {/* Center Content Column Layout */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center py-20">
          
          {/* Subtle Tag/Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E50914]/10 border border-[#E50914]/30 backdrop-blur-md mb-8 shadow-lg shadow-[#E50914]/10">
            <Sparkles className="w-4 h-4 text-[#E50914] animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-slate-200 tracking-widest uppercase">
              The Ultimate Cinema Database
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-none mb-6">
            Discover Endless Stories & <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E50914] via-rose-500 to-amber-500 drop-shadow-[0_0_25px_rgba(229,9,20,0.5)]">
              Cinematic Masterpieces
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mb-10 drop-shadow-md">
            Explore thousands of blockbuster movies, hidden indie gems, cast insights, and top-rated classics all in one high-octane cinematic hub.
          </p>

          {/* Action Button: Explore Movies */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button 
              onClick={() => navigate('/movies')}
              className="group relative flex items-center justify-center px-10 py-4 rounded-2xl bg-[#E50914] hover:bg-red-600 text-white text-lg font-black tracking-wide shadow-[0_0_30px_rgba(229,9,20,0.5)] hover:shadow-[0_0_45px_rgba(229,9,20,0.8)] hover:scale-105 active:scale-95 transition-all duration-300 border border-red-400/30"
            >
              <Play className="w-5 h-5 mr-3 fill-current text-white group-hover:translate-x-0.5 transition-transform" />
              <span>Explore Movies</span>
              <ChevronRight className="w-5 h-5 ml-2 text-white/80 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </section>
        </div>
    );
};

export default Home;