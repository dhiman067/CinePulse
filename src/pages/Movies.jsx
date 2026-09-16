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
           <Suspense fallback={<h1>Loading data.....</h1>}>
                <MoviesInfos PromiseMoviesInfos ={PromiseMoviesInfos()}></MoviesInfos>
           </Suspense>
        </div>
    );
};

export default Movies;