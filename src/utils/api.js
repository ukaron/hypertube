import axios from "axios";

const MOVIE_DB_URL = "https://api.themoviedb.org/3";
const TRENDING_MOVIE = "/trending/movie/week";
const API_KEY = "?api_key=6c60e65c45de8fc3495acac976c567ce"

export const getTrendingFilms = () => axios.get(`${MOVIE_DB_URL}${TRENDING_MOVIE}${API_KEY}`);
