import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT } from "./auth.types";

let token =localStorage.getItem("token");
let initialState={
    loading: false,
    error: false,
    isAuth: !!token,
    token:token
}
export const authReducer = (state=initialState, {type, payload} ) => {
        switch(type) {
            case LOGIN_LOADING : {
                return {...state}
            }
            case LOGIN_SUCCESS : {
                localStorage.setItem("token",payload)
                return {...state,
                   loading:false,
                   error:false,
                   isAuth:true,   
                   token:payload          
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