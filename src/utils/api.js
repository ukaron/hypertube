import axios from "axios";

const MOVIE_DB_URL = "https://api.themoviedb.org/3";
const localhost = "http://37.204.240.149:8081"

export const getRequest = (local = true, options) => axios.post(`${local ? localhost : MOVIE_DB_URL}${options}`,
    { crossDomain: true });