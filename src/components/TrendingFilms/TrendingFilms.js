import React from "react";
import Movie from "../films/Movie";

const TrendingFilms = props => {
    return (
        props.films ? props.films.map(film => {
                return (<Movie key={film.id} title={film.title} poster={film.poster_path} />)
            }) :
            <h3 style={{margin: "0 auto;"}}>no films</h3>
    )
}

export default TrendingFilms