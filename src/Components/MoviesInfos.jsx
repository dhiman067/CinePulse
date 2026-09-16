import { use } from "react";
import Movie from "./Movie";
import { 
  Search, 
  Star, 
  Calendar, 
  Film, 
  Clapperboard 
} from 'lucide-react';



const MoviesInfos = ({PromiseMoviesInfos}) => {
    let movies = use(PromiseMoviesInfos)
    return (
        <div className="bg-[#0D0D12]">
            <div className="flex flex-col items-center">
                 <div className="w-full max-w-xl text-center mb-10 space-y-4 mt-10">
        <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight flex items-center justify-center space-x-3">
          <Film className="w-8 h-8 text-[#E50914]" />
          <span>Search Movies</span>
        </h1>

        {/* Clean dark search input field */}
        <div className="relative w-[50%] mx-auto lg:w-[full] lg:w-[100%]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            // value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a movie title..."
            className="w-full pl-12 pr-4 py-3.5 bg-[#12121a] text-white placeholder-slate-500 rounded-xl border border-white/10 focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] outline-none transition duration-200 text-sm"
          />
        </div>
      </div>
            </div>



            <div className="lg:gird lg:grid-cols-3 md:grid md:grid-cols-2 xl:grid xl:grid-cols-5 gap-7  flex flex-col items-center  justify-items-center
            xl:w-[1500px] mx-auto">

            {
                movies.map(movie => <Movie key={movie.id} movie={movie}></Movie>)
            }
            </div>
        </div>
    );
};

export default MoviesInfos;