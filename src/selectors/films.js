import {trendingFilmsRequest, trendingFilmsSuccess, searchFilmSuccess, searchFilmRequest} from "../actions/films";
import {getTrendingFilms, getSearchFilms} from "../utils/api";

export const getFilms = () => {
    return (dispatch) => {
        dispatch(trendingFilmsRequest());
        getTrendingFilms().then(res => {
            dispatch(trendingFilmsSuccess(res.data.results));
        });
    }
}

export const searchFilms = (name) => {
    return(dispatch) => {
        dispatch(searchFilmRequest(name));
        getSearchFilms(name).then(res =>{
            dispatch(searchFilmSuccess(res.data.results))
        })
    }
}
