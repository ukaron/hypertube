import {
    trendingFilmsRequest,
    trendingFilmsSuccess,
    searchFilmSuccess,
    searchFilmRequest,
    genreMovieRequest, genreMovieSuccess
} from "../actions/films";
import {getTrendingFilms, getSearchFilms, getGenreMovie} from "../utils/api";


export const userSelector = state => state.user;
