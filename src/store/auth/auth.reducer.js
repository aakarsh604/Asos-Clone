import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT } from "./auth.types";

let initialState={
    loading: false,
    error: false,
    isAuth: false,
}
export const authReducer = (state=initialState, {type, payload} ) => {
        switch(type) {
            case LOGIN_LOADING : {
                return {...state}
            }
            case LOGIN_SUCCESS : {
                return {...state,
                   loading:false,
                   error:false,
                   isAuth:true,
                  
                }
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