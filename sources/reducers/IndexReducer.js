import {
    LOGIN_SUCCESS,LOGIN_ERROR
} from '../actions/IndexAction';



export function LoginInfo(state = [], action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return action.data;
        case LOGIN_ERROR:
            return action.data;
        default:
            return state;
    }
}