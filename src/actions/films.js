import {
    REQUEST_START,
    TRENDING_FILMS_ERROR,
    TRENDING_FILMS_SUCCESS,
    SEARCH_FILM_REQUEST,
    SEARCH_FILM_ERROR,
    SEARCH_FILM_SUCCESS,
    GENRE_MOVIE_SUCCESS,
    GENRE_MOVIE_ERROR
} from '../constants/actions/films';
import { getRequest } from "../utils/api";

export const getRequestStart = () => dispatch => dispatch({
        type: REQUEST_START
})

export const trendingFilmsSuccess = films => dispatch => dispatch({
    type: TRENDING_FILMS_SUCCESS,
    payload: films
})

export const trendingFilmsError = error => dispatch => dispatch({
    type: TRENDING_FILMS_ERROR,
    payload: error
})

export const genreMovieSuccess = films => dispatch => dispatch({
    type: GENRE_MOVIE_SUCCESS,
    payload: films
})

export const genreMovieError = error => dispatch => dispatch({
    type: GENRE_MOVIE_ERROR,
    payload: error
})

export const searchFilmRequest = name => dispatch => dispatch({
    type: SEARCH_FILM_REQUEST,
    payload: name
});

export const searchFilmSuccess = films => dispatch => dispatch({
    type: SEARCH_FILM_SUCCESS,
    payload: films
})

export const searchFilmError = error => dispatch => dispatch({
    type: SEARCH_FILM_ERROR,
    payload: error
})


export const getFilms = () => (dispatch) => {
    dispatch(getRequestStart());
    getRequest(false, '/movie/popular').then(res => {
        dispatch(trendingFilmsSuccess(res.data.results));
    });
}
export const getGenre = () => (dispatch) => {
    dispatch(getRequestStart());
    getRequest(false, '/movie/popular').then(res => {
        dispatch(genreMovieSuccess(res.data.genres));
    });
}

export const searchFilms = name => dispatch => {
    dispatch(searchFilmRequest(name));
    getRequest(false, `/search/movie/name=${name}`).then(res =>{
        dispatch(searchFilmSuccess(res.data.results))
    })
}
