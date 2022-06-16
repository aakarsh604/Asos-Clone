import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT } from "./auth.types";
import axios from "axios"

export const loginReq = (payload) => (dispatch)=>{
      // loading
      dispatch({type:LOGIN_LOADING})
      // success
      axios.get("http://localhost:8080/users").then((res)=>{
        console.log(res)
        dispatch({type:LOGIN_SUCCESS,payload:payload})
      }).catch((error)=>{
        dispatch({type:LOGIN_ERROR,payload:error});
      })
}

export const logoutReq = () => ({type : LOGOUT})