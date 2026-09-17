import { Suspense } from "react";
import MoviesInfos from "../Components/MoviesInfos";


const Movies = () => {
    let PromiseMoviesInfos = async()=>{
        let res = await fetch("https://api.tvmaze.com/shows")
        let data = await res.json()
        return data
    }
    return (
        <div>
           <Suspense fallback={<div className="bg-black h-[500px] flex items-center justify-center">
            <span className="loading loading-bars loading-xl text-white mr-2"> </span>
            <h1 className="text-white text-4xl">Loading....</h1>
           </div>}>
                <MoviesInfos PromiseMoviesInfos ={PromiseMoviesInfos()}></MoviesInfos>
           </Suspense>
        </div>
    );
};

export default Movies;