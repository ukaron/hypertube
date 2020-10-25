import { USER_AUTH_STATUS } from '../constants/actions/user';

export const getUser = () => {

}

export const userLogin = (status) => dispatch => {
    return dispatch({type: USER_AUTH_STATUS, payload: status});
}