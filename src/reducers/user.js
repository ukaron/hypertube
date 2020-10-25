import { REQUEST_START } from "../constants/actions/common";
import { USER_AUTH_STATUS } from "../constants/actions/user";

const initialState = {
    auth: false,
    login: '',
}

export const user = (state= initialState, action) => {
    switch (action.type) {
        case REQUEST_START:
            return {...state, loading: true};
        case USER_AUTH_STATUS:
            return {...state, auth: action.payload}
        default:
            return state;
    }
}

export default user;