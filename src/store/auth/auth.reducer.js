import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT } from "./auth.types";


export const authReducer = (state, {type, payload} ) => {
        switch(type) {
            case LOGIN_LOADING : {
                return {...state}
            }
            case LOGIN_SUCCESS : {
                return {...state}
            }
            case LOGIN_ERROR : {
                return {...state}
            }
            case LOGOUT : {
                return {...state}
            }
            default : {
                return {...state}
            }
        }
}