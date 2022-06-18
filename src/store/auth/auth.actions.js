import React,{useEffect} from "react"
import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT } from "./auth.types";
import axios from "axios"

export const loginReq = ({email,password}) => (dispatch) => {
  // loading
  console.log("payload :" ,email,password)
  // dispatch({ type: LOGIN_LOADING })
  // success
    axios({
      url: `http://localhost:8080/users?email=${email}&password=${password}`,
      method: "GET"
    })
      .then((res) => {
       if(res.data.length>0){
        dispatch({type:LOGIN_SUCCESS,payload:"QpwL5tke4Pnpja7X4"})
       }
      })
      .catch((err) => {
        dispatch({ type: LOGIN_ERROR, payload: err });
      });
}

export const logoutReq = () => ({ type: LOGOUT })