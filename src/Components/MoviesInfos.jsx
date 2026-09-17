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
          <span>Search Tv Shows</span>
        </h1>

        {/* Clean dark search input field */}
        <div className="lg:ml-7 lg:flex lg:flex-row lg:items-center lg:justify-center flex flex-col gap-4 relative w-[50%] mx-auto  lg:w-[100%]">
          
          <input
            type="text"
            // value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a shows..."
            className="w-full pl-12 pr-4 py-3.5 bg-[#12121a] text-white placeholder-slate-500 rounded-xl border border-white/10 focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] outline-none transition duration-200 text-sm"
          />
          <button className=" btn border-0 mx-auto flex px-5 py-3 rounded-xl font-black bg-[#E50914] text-white shadow-lg shadow-[#E50914]/30 tracking-wider hover:bg-red-500">Search</button>
        </div>
        
      </div>
            </div>



            <div className="lg:gird lg:grid-cols-3 md:grid md:grid-cols-2 xl:grid xl:grid-cols-5 gap-7  flex flex-col items-center  justify-items-center
            xl:w-[1500px] mx-auto pb-4">

            {
                movies.map(movie => <Movie key={movie.id} movie={movie}></Movie>)
            }
            </div>
        </div>
    );
};

export default MoviesInfos;