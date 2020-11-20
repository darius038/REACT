import "./main.scss"
import Movie from "../movie/Movie";
import React from "react";
import Movies from "../../data/MoviesData";

function Main(){
    const movies = Movies.map(
        movie => <Movie key={movie.id} title = {movie.title} desc = {movie.desc} />
        );
    return(
        <div>
            <div className="row">
                {movies}
            </div>
        </div>



    );
}

export default Main;