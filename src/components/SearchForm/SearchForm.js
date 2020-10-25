import { Form, Field } from 'react-final-form';
import { connect } from "react-redux";
import React from "react";
import {searchFilms} from "../../actions/films";

const SearchForm = (props) => {
    const onSubmit = (name) => {
        props.searchFilms(name.searchFilm)
        name.searchFilm = '';
    }

    return (
        <div>
            <Form onSubmit={onSubmit}
                render={({handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <Field name="searchFilm" component="input" placeholder="search film"/>
                        </div>
                        <button type="submit">Search</button>
                    </form>
                )}
            />

        </div>

    )
}
const mapStateToProps = (state) => ({
    films: state.films
});

export default connect(mapStateToProps, {searchFilms})(SearchForm);
