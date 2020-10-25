import { combineReducers } from 'redux';
import  films  from './films.js';
import user from './user.js';

export default combineReducers ({
    user,
    films
})
