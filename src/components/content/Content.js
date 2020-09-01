import React from "react";
import Movie from "../films/Movie";
import {ContentWraper} from "./content-styled";



const Content = (props) => {
        return (
            <ContentWraper>
                {
                    props.trendingFilms ? props.trendingFilms.map(film => {
                        return (<Movie key={film.id} title={film.title} poster={film.poster_path} ></Movie>)

                    }) :
                        <h3>no films</h3>
                }
            </ContentWraper>
        );
}


export default Content;