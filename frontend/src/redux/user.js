import axios from 'axios';
const USER_LOAD = 'USER_LOAD';
const USER_SUCCESS = 'USER_SUCCESS';
const USER_FAIL = 'USER_FAIL';
const USER_LOGOUT = 'USER_LOGOUT';
const USER_CLEAR_ERROR = 'USER_CLEAR_ERROR';

export const defaultState = {
    isLoggedIn: false,
    token: '',
    error: null,
    role: '',
};

export default (state = defaultState, action) => {
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
            return defaultState;
        default:
            return state;
    }
};

export const baseFunc = (url) => (values) => (dispatch) => {
    dispatch({
        type: USER_LOAD,
    });
    return axios.post(url, values)
        .then(({ data }) => {
            dispatch({
                type: USER_SUCCESS,
                payload: data,
            });
        })
        .catch((err) => {
            dispatch({
                type: USER_FAIL,
                payload: err,
            });
        });
};

export const onLogout = () => ({
    type: USER_LOGOUT,
});

export const clearError = () => ({
    type: USER_CLEAR_ERROR,

});

export const onLogin = baseFunc('login uri');
export const onRegister = baseFunc('');
