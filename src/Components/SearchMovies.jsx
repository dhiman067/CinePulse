import React, { Suspense } from 'react';
import SearchResult from './SearchResult';

const SearchMovies = ({search}) => {
    let PromiseSearchMovies = async()=>{
        let url = `https://api.tvmaze.com/search/shows?q=${search}`
        let res = await fetch(url)
        let data = await res.json()
        return data
        // console.log(data);
    }
    return (
        <div>
            <Suspense fallback={<div className="bg-black h-[500px] flex items-center justify-center">
            <span className="loading loading-bars loading-xl text-white mr-2"> </span>
            <h1 className="text-white text-4xl">Loading....</h1>
           </div>}>
            <SearchResult PromiseSearchMovies={PromiseSearchMovies()}></SearchResult>
            </Suspense>
        </div>
    );
};

export default SearchMovies;