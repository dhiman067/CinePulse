
import { useState } from 'react';
import {
  Clapperboard,
  Compass,
  Film,
  Flame,
  Menu,
  Popcorn,
  Star,
  X,
} from 'lucide-react';
import { useNavigate } from 'react-router';

const Navbar = () => {
  let navigate = useNavigate()

  let [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D12]/90 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Left Side: Site Logo and Brand Name */}
            <div
              className="flex items-center space-x-3.5 cursor-pointer group"
              
            >
              <div className="relative flex items-center justify-center">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#E50914] to-red-600 rounded-2xl blur-sm opacity-70 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative w-11 h-11 rounded-xl bg-[#14141d] border border-red-500/40 flex items-center justify-center shadow-2xl">
                  <Clapperboard onClick={() => navigate("/")} className="w-6 h-6 text-[#E50914] group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-wider text-white flex items-center">
                  Cine<span className="text-[#E50914] drop-shadow-[0_0_12px_rgba(229,9,20,0.6)]">Pulse</span>
                </span>
                <span className="text-[10px] text-slate-400 font-medium tracking-widest uppercase -mt-1">
                  Movie Portal
                </span>
              </div>
            </div>

            {/* Middle Options: Home, Trending, Top Rated, Genres */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-[#15151e]/80 p-1.5 rounded-full border border-white/10 shadow-inner">
              {[
                { name: "Home", icon: Popcorn },
                { name: "Trending", icon: Flame },
                { name: "Top Rated", icon: Star },
                { name: "Genres", icon: Compass }
              ].map((item) => {
                
                const Icon = item.icon;
                return (
                  <button
                    key={item.name}
                    onClick={() => setActiveTab(item.name)}
                    className="flex items-center space-x-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 
                        
                         text-slate-300 hover:text-white hover:bg-white/5"

                  >
                    <Icon className="w-4 h-4 text-slate-400" />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </nav>

            {/* Right Side: [Movies] Button */}
            <div className="hidden md:flex items-center">
              <button
                onClick={() => navigate("/movies")}
                className="group relative inline-flex items-center justify-center px-7 py-2.5 overflow-hidden font-bold rounded-xl shadow-xl transition duration-300 ease-out bg-[#E50914] hover:bg-red-600 text-white border border-red-400/30 active:scale-95 hover:shadow-[0_0_25px_rgba(229,9,20,0.6)]"
              >
                <Film className="w-4 h-4 mr-2 text-white transition-transform duration-300 group-hover:rotate-12" />
                <span className="tracking-wide text-sm font-black uppercase">[Movies]</span>
              </button>
            </div>

            {/* Mobile Drawer Menu Toggle */}
            <div className="flex md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-[#14141d] text-slate-300 hover:text-white border border-white/10 focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#111118] border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
            <div className="flex flex-col space-y-2">
              {["Home", "Trending", "Top Rated", "Genres"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                   
                    setMobileMenuOpen(false);
                  }}
                  className="text-left px-4 py-3 rounded-xl text-base font-medium transition activeTab === tab
                     
                     text-slate-300 hover:bg-white/5"
                    
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="pt-2">
              <button
                onClick={() => navigate('/movies')}
                className="w-full flex items-center justify-center px-5 py-3 rounded-xl font-black bg-[#E50914] text-white shadow-lg shadow-[#E50914]/30 uppercase tracking-wider"
              >
                <Film className="w-5 h-5 mr-2" />
                [Movies]
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;