import "./main.scss"
import Movie from "../movie/Movie";
import React from "react";
import Movies from "../../data/MoviesData";

class Main extends React.Component{
    constructor() {
        super();
        this.state = {
            count: 0,
            moviesData: [],
            isLoaded: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    async componentDidMount() {
        //1 - request for movies list by title
        let request1 = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=9cce15d4&s=The%20matrix");
        let data1 = await request1.json();
        let movieList = await data1['Search'].map(movie=>movie['Title']);

        //check
        console.log('movieList');
        console.log(movieList);

        //2 - requests for movies description
        let request2 = movieList.map(title => fetch("http://www.omdbapi.com/?i=tt3896198&apikey=9cce15d4&t=" + title));
        Promise.all(request2)
            .then(response2 => Promise.all(response2.map(r => r.json())))
            .then(data2 => {
                this.setState({moviesData: data2, isLoaded: true})
            });

    }
    handleClick(){
        this.setState(prevState=>{
            return{
                count:prevState.count+1
            }
        })
    }

    render() {
        console.log("render");
        const { isLoaded, moviesData } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>
        }
        else {
            console.log("loaded");
            console.log(moviesData);
            const movies = moviesData.map((
                moviesData, index) => <Movie
                key={index}
                title = {moviesData.Title}
                img ={moviesData.Poster}
                desc = {moviesData.Plot}
                metascore = {moviesData.Metascore}
                imdb = {moviesData.imdbRating}
                year = {moviesData.Year} />);

            return(
                <div>
                    <div className="row">
                        {movies}
                    </div>
                    <h2>{this.state.count} state</h2>
                    <button type="button" className="btn btn-primary" onClick={this.handleClick}>Click</button>
                </div>
            );
        }
    }
}
export default Main;