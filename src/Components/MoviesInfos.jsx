import { use, useState } from "react";
import Movie from "./Movie";
import SearchMovies from "./SearchMovies";
import {
  Search,
  Star,
  Calendar,
  Film,
  Clapperboard
} from 'lucide-react';



const MoviesInfos = ({ PromiseMoviesInfos }) => {
  let [search, setSearch] = useState("")
  let [searchItems, setSearchItems] = useState(false)
  let handleSearchInput = (e) => {
    console.log(search);
    setSearchItems(true)
  }
  let movies = use(PromiseMoviesInfos)
  return (
    <div className="bg-[#0D0D12]">
      <div className="flex flex-col items-center">
        <div className="w-full max-w-7xl px-4 mb-12 mt-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-7 rounded-2xl border border-white/10 bg-[#111118] px-5 py-6 sm:px-7 shadow-2xl shadow-black/20">
            <div className="flex items-start gap-4">
              <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E50914]/10 border border-[#E50914]/30">
                <Film className="w-6 h-6 text-[#E50914]" />
              </div>
              <div>
                <p className="mb-1 text-xs font-bold uppercase tracking-[0.25em] text-[#E50914]">Explore the collection</p>
                <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                  Search TV Shows
                </h1>
                <p className="mt-2 text-sm text-slate-400">Find your next favorite story.</p>
              </div>
            </div>

            <div className="flex w-full flex-col sm:flex-row items-stretch sm:items-center gap-2 rounded-xl border border-white/10 bg-[#0D0D12] p-2 lg:w-auto">
              <div className="relative w-full sm:w-72">
                <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search TV shows..."
                  className="w-full rounded-lg bg-transparent py-2.5 pl-10 pr-3 text-sm text-white placeholder-slate-500 outline-none focus:ring-1 focus:ring-[#E50914]"
                />
              </div>
              <button onClick={search.length > 0 ? handleSearchInput : undefined} className="btn min-h-0 border-0 px-5 py-2.5 rounded-lg font-black bg-[#E50914] text-white shadow-lg shadow-[#E50914]/20 tracking-wider hover:bg-red-500">
                Search
              </button>
            </div>
          </div>

        </div>
      </div>




      <div className="lg:gird lg:grid-cols-3 md:grid md:grid-cols-2 xl:grid xl:grid-cols-5 gap-7  flex flex-col items-center  justify-items-center
            xl:w-[1500px] mx-auto pb-16">

        {
          movies.map(movie => <Movie search={search} searchItems={searchItems} key={movie.id} movie={movie}></Movie>)
        }
      </div>
      
      {searchItems && <SearchMovies search={search} />}

    </div>

  );
};

export default MoviesInfos;