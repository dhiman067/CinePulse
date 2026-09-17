import React, { use } from 'react';
import SearchResultCard from './SearchResultCard';

const SearchResult = ({PromiseSearchMovies}) => {
    const searchMovies = use(PromiseSearchMovies)

    return (
        <div className="lg:gird lg:grid-cols-3 md:grid md:grid-cols-2 xl:grid xl:grid-cols-5 gap-7  flex flex-col items-center  justify-items-center
            xl:w-[1500px] mx-auto pb-4">
            {
                searchMovies.map(movie => <SearchResultCard key={movie.show.id} movie={movie}></SearchResultCard>)
            }
        </div>
    );
};

export default SearchResult;