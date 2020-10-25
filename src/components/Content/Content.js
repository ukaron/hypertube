import React from "react";
import { connect } from "react-redux";
import { ContentWrapper } from "./content-styled";
import TrendingFilms from "../TrendingFilms/TrendingFilms";
import GenreMovie from "../GenreMovie/GenreMovie";
import Accordion from "@material-ui/core/Accordion";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const Content = ({films, genre}) => {
    const testGente = ['anime', 'action', 'comedy'];
    return (
            <ContentWrapper>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                >
                    {testGente.map((gen, i) => <MenuItem key={i}>{gen}</MenuItem>)}
                </Select>
                <GenreMovie genre={genre}/>
            </ContentWrapper>
        );
};

const mapStateToProps = (state) => ({
    films: state.films.trendingFilms,
    genre: state.films.genreMovie,
});

export default connect(mapStateToProps)(Content);