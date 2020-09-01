import {TRENDING_FILMS_REQUEST, TRENDING_FILMS_ERROR, TRENDING_FILMS_SUCCESS} from '../constants/actions/films';

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