
import React, { useState } from 'react';
import { 
  Search, 
  Star, 
  Calendar, 
  Film, 
  Clapperboard 
} from 'lucide-react';

const Movie = ({movie}) => {
    let summary = movie.summary?.replace(/<[^>]*>/g, '');
   


    return (
        <div>
           <div className="group w-full max-w-[400px] md:w-[300px] xl:max-w-[280px] bg-[#12121a] rounded-2xl border border-white/10 hover:border-[#E50914]/50 shadow-lg hover:shadow-[0_10px_30px_rgba(229,9,20,0.25)] transition-all duration-300 flex flex-col overflow-hidden">
      
      {/* ===== TOP: POSTER ===== */}
      <div className="relative w-full aspect-[2/3] bg-[#1a1a26] overflow-hidden flex items-center justify-center">
        
          <img
            src={movie.image.original}
            alt={movie.name}
           
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
          />
         
        <div className="absolute inset-0 bg-gradient-to-t from-[#12121a] via-transparent to-black/30 opacity-70" />
      </div>

      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* ===== BOTTOM: DETAILS ===== */}
      <div className="p-4 flex flex-col flex-1 justify-between bg-gradient-to-b from-[#12121a] to-[#0d0d14]">
        <div className="space-y-2 mb-4">
          {/* Movie Title */}
          <h3 
            className="text-base font-bold text-white group-hover:text-[#E50914] transition-colors line-clamp-1 leading-snug"
            title={movie.name}
          >
            {movie.name}
          </h3>

          {/* Rating & Year */}
          <div className="flex items-center space-x-2 text-xs text-slate-300 font-semibold">
            <div className="flex items-center space-x-1 text-amber-400">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="text-white font-bold">{movie.rating.average}</span>
            </div>
            <span className="text-slate-600 font-bold">•</span>
            <div className="flex items-center space-x-1 text-slate-400">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{movie.genres?.join(', ')}</span>
            </div>
          </div>
        </div>

        {/* [ See Details ] Button */}
        <button
        //   onClick={() => onSeeDetails && onSeeDetails(movie)}
          className="w-full relative group/btn overflow-hidden py-2 px-4 rounded-xl font-black text-xs tracking-wider uppercase text-white bg-gradient-to-r from-[#1e1e2d] to-[#171722] hover:from-[#E50914] hover:to-red-700 border border-white/10 hover:border-red-400/50 shadow-md hover:shadow-[0_0_20px_rgba(229,9,20,0.5)] transition-all duration-300 active:scale-[0.98] flex items-center justify-center space-x-2"
        >
          <span className="text-red-500 group-hover/btn:text-white transition-colors">[</span>
          <span className="tracking-widest">See Details</span>
          <span className="text-red-500 group-hover/btn:text-white transition-colors">]</span>
        </button>
      </div>
    </div>
        </div>
    );
};

export default Movie;