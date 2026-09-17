import { Clapperboard } from 'lucide-react';

import { FaInstagramSquare } from "@react-icons/all-files/fa/FaInstagramSquare";
import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare";
import { FaTwitterSquare } from "@react-icons/all-files/fa/FaTwitterSquare";


import React from 'react';

const Footer = () => {
  return (
    <div className='mb-[-30px]'>
      <footer className="bg-[#09090d] border-t border-white/10 text-slate-400 pt-16 pb-12 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Main Footer Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">

            {/* Brand Information */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-[#14141d] border border-red-500/40 flex items-center justify-center shadow-lg shadow-[#E50914]/20">
                  <Clapperboard className="w-5 h-5 text-[#E50914]" />
                </div>
                <span className="text-2xl font-black tracking-wider text-white">
                  Cine<span className="text-[#E50914]">Pulse</span>
                </span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                Your premier dark-mode gateway for exploring top movies, cast details, release schedules, and comprehensive cinematic metadata.
              </p>

              {/* Social Icons */}
              <div className="flex items-center space-x-3 pt-2">
                <FaTwitterSquare className="w-6 h-6" />
                <FaFacebookSquare className="w-6 h-6" />
                <FaInstagramSquare className="w-6 h-6" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Explore</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#" className="hover:text-[#E50914] transition-colors">Popular Releases</a></li>
                <li><a href="#" className="hover:text-[#E50914] transition-colors">Trending Today</a></li>
                <li><a href="#" className="hover:text-[#E50914] transition-colors">Top 250 Movies</a></li>
                <li><a href="#" className="hover:text-[#E50914] transition-colors">Upcoming Films</a></li>
              </ul>
            </div>

            {/* Genre Directory */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Genres</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#" className="hover:text-[#E50914] transition-colors">Action & Thriller</a></li>
                <li><a href="#" className="hover:text-[#E50914] transition-colors">Sci-Fi & Cyberpunk</a></li>
                <li><a href="#" className="hover:text-[#E50914] transition-colors">Horror & Suspense</a></li>
                <li><a href="#" className="hover:text-[#E50914] transition-colors">Drama & Romance</a></li>
              </ul>
            </div>

            {/* Support & Legal */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Information</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#" className="hover:text-[#E50914] transition-colors">About CinePulse</a></li>
                <li><a href="#" className="hover:text-[#E50914] transition-colors">API Documentation</a></li>
                <li><a href="#" className="hover:text-[#E50914] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#E50914] transition-colors">Terms of Service</a></li>
              </ul>
            </div>

          </div>

          {/* Copyright Section */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>© CinePulse Movie Information Portal. All rights reserved.</p>
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-slate-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-slate-400 transition">Terms of Service</a>
              <a href="#" className="hover:text-slate-400 transition">Cookie Settings</a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Footer;