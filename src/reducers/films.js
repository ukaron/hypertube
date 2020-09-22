import {
    TRENDING_FILMS_REQUEST, TRENDING_FILMS_ERROR,TRENDING_FILMS_SUCCESS,
    SEARCH_FILM_SUCCESS, SEARCH_FILM_REQUEST, SEARCH_FILM_ERROR
} from '../constants/actions/films';

const initialState = {
    loading: false,
    trendingFilms: [],
    searchFilms: [],
    error: ''
}

const films = (state= initialState, action) => {
    switch (action.type){
        case TRENDING_FILMS_REQUEST:
            return { ...state,
                loading: true
            };
        case TRENDING_FILMS_SUCCESS:
            return {
                ...state,
                loading: false,
                trendingFilms: action.payload,
                error: ''
            };
        case TRENDING_FILMS_ERROR:
            return {
                ...state,
                loading: false,
                trendingFilms: [],
                error: action.payload
            }
        case SEARCH_FILM_REQUEST:
            return { ...state,
                loadingSearch: true,
                searchFilms: action.payload,
            };
        case SEARCH_FILM_SUCCESS:
            return {
                ...state,
                loadingSearch: false,
                searchFilms: action.payload,
                error: ''
            };
        case SEARCH_FILM_ERROR:
            return {
                ...state,
                loadingSearch: false,
                searchFilms: [],
                error: action.payload
            }
        default: return state;
    }
}

export default films;