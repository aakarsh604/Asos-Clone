import React,{useEffect} from "react"
import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT, SIGNUP } from "./auth.types";
import axios from "axios"

export const loginReq = ({email,password}) => (dispatch) => {
  // loading
  dispatch({ type: LOGIN_LOADING })
  // success
    axios({
      url: `http://localhost:8080/users?email=${email}&password=${password}`,
      method: "GET"
    })
      .then((res) => {
       if(res.data.length>0){
        dispatch({type:LOGIN_SUCCESS,payload:{token:"QpwL5tke4Pnpja7X4",email:email}})
       }
      })
      .catch((err) => {
        dispatch({ type: LOGIN_ERROR, payload: err });
      });
}

export const logoutReq = () => (dispatch)=>{
     dispatch({type:LOGOUT})
}

export const signup=({email,password})=>(dispatch)=>{
  console.log(email,password)
   return fetch("http://localhost:8080/users",{
      method:"POST",
      headers:{"content-type":"application/json",},
      body:JSON.stringify({
         email:`${email}`,
         password:`${password}`
      })
    })
}
