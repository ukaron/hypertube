import React from "react";
import {ImagePoster, FilmCard} from "./films-styled";


const Movie = (props) => {
        return (
            <FilmCard>
                <ImagePoster
                    src={`https://image.tmdb.org/t/p/w500${props.poster}`}
                    alt={props.title}
                />
                <h4 style={{margin: "0 auto", padding: "0"}}>{props.title}</h4>
            </FilmCard>
        );
}

export default Movie;