import React from "react";
import { connect } from "react-redux";
import { ContentWrapper } from "./content-styled";
import TrendingFilms from "../TrendingFilms/TrendingFilms";

const Content = (props) => {
        return (
            <ContentWrapper>
                <TrendingFilms films={props.films.trendingFilms}/>
            </ContentWrapper>
        );
};

const mapStateToProps = (state) => ({
    films: state.films,
});

export default connect(mapStateToProps)(Content);