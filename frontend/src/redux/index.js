import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const USER_LOAD = 'USER_LOAD';
const USER_SUCCESS = 'USER_SUCCESS';
const USER_FAIL = 'USER_FAIL';
const USER_LOGOUT = 'USER_LOGOUT';
const USER_CLEAR_ERROR = 'USER_CLEAR_ERROR';

export const userDefaultState = {
    isLoggedIn: false,
    token: '',
    error: null,
    role: '',
};

const UserReducer = (state = userDefaultState, action) => {
    switch (action.type) {
        case USER_LOAD:
            return {
                ...state,
                isLoggedIn: false,
                token: '',
                role: '',
            };
        case USER_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                token: action.payload.token,
                role: action.payload.role,
            };
        case USER_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                token: '',
                error: action.payload,
                role: '',
            };
        case USER_CLEAR_ERROR:
            return {
                ...state,
                error: null,
                role: '',
            };
        case USER_LOGOUT:
            return userDefaultState;
        default:
            return state;
    }
};


export default combineReducers({
    form: formReducer,
    user: UserReducer,
});