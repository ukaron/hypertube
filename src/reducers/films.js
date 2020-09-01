import { trendingFilmsRequest, trendingFilmsSuccess} from '../actions/films';
import {TRENDING_FILMS_REQUEST, TRENDING_FILMS_ERROR, TRENDING_FILMS_SUCCESS} from '../constants/actions/films';
import {getTrendingFilms} from '../utils/api'

const initialState = {
    loading: false,
    films: [],
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
                loading: false,
                films: action.payload,
                error: ''
            };
        case TRENDING_FILMS_ERROR:
            return {
                loading: false,
                films: [],
                error: action.payload
            }
        default: return state;
    }
}

export const getUsers = (state) => {
    return (dispatch) => {
        dispatch(trendingFilmsRequest());
        getTrendingFilms().then(res => {
            dispatch(trendingFilmsSuccess(res.data.results));
        });
    }

}
export default films;