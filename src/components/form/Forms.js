import { BsSearch } from "react-icons/bs";
import {NavLink} from 'react-router-dom';
import React, {Component} from 'react';
import {Form} from "react-bootstrap";
import Movie from "../movie/Movie";


class Forms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            moviesData: []};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.searchCall(this.state.value);
        this.setState({value: ''});
        event.preventDefault();
    }

    async searchCall(title) {
        //1 - request for movies list by title
        let request1 = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=9cce15d4&s="+title);
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
                this.setState({moviesData: data2})
            });
    }

    render() {
        const { moviesData } = this.state;
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


        return (
            <div>
                <div className="row">
                    <form className="col-sm-4 mt-3" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="search">Search movie by title</label>
                            <input type="text" className="form-control" id="search"
                                   value={this.state.value} onChange={this.handleChange}
                                   aria-describedby="emailHelp"></input>
                        </div>
                        <button type="submit" className="btn btn-primary">Search</button>
                    </form>
                </div>
                    <div className="row">
                        {movies}
                    </div>

            </div>

        );
    }
}
export default Forms;