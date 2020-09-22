import {TRENDING_FILMS_REQUEST, TRENDING_FILMS_ERROR, TRENDING_FILMS_SUCCESS,
    SEARCH_FILM_REQUEST, SEARCH_FILM_ERROR, SEARCH_FILM_SUCCESS} from '../constants/actions/films';

export const trendingFilmsRequest = () =>  ({
        type: TRENDING_FILMS_REQUEST
})

export const trendingFilmsSuccess = films => ({
    type: TRENDING_FILMS_SUCCESS,
    payload: films
})

export const trendingFilmsError = error => ({
    type: TRENDING_FILMS_ERROR,
    payload: error
})

export const searchFilmRequest = (name) => ({
    type: SEARCH_FILM_REQUEST,
    payload: name
})

export const searchFilmSuccess = films => ({
    type: SEARCH_FILM_SUCCESS,
    payload: films
})

export const searchFilmError = error => ({
    type: SEARCH_FILM_ERROR,
    payload: error
})