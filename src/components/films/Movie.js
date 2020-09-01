import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import {ImagePoster, FilmCard} from "./films-styled";


const Movie = (props) => {
        return (
            <FilmCard>
                <ImagePoster
                    className="img-thumbnail rounded-circle mx-auto mb-2 shadow-sm"
                    src={`https://image.tmdb.org/t/p/w500${props.poster}`}
                    alt={props.title}
                />
                <h4 className="mb-0">{props.title}</h4>
            </FilmCard>
        );
}

export default Movie;