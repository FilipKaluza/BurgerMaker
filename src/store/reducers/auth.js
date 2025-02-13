import * as actionTypes from "../actions/actionsTypes";


const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    authRedirect: "/"
};

const setRedirectUrl = (state, action) => {
    return {
        ...state,
        authRedirect: action.url
    }
}

const authStart = (state, action) => {
    return {
        ...state,
        error: null,
        loading: true
    }
}

const authSuccess = (state, action) => {
    return {
        ...state,
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false
    }
}

const authFail = (state, action) => {
    return {
        ...state,
        error: action.error,
        loading: false
    }
}

const authLogout = (state, action) => {
    return {
        ...state,
        token: null,
        userId: null
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);  
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);  
        case actionTypes.AUTH_FAIL: return authFail(state, action);  
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        case actionTypes.SET_AUTH_REDIRECT: return setRedirectUrl(state, action);
        default:
            return state
    }
};

export default reducer;