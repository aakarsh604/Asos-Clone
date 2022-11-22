import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP,
} from "./auth.types";
import axios from "axios";

export const loginReq =
  ({ email, password }) =>
  (dispatch) => {
    // loading
    dispatch({ type: LOGIN_LOADING });
    // success
    axios.post(`https://asos.onrender.com/user/login`,{email,password}).then((res) => {

      dispatch({type:LOGIN_SUCCESS,payload:res.data})
    }).catch((err) => {
       dispatch({type:LOGIN_ERROR})
    })
  };

export const logoutReq = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};

export const signup =
  ({ name, email, password }) =>
  (dispatch) => {
    fetch("https://asos.onrender.com/user/register", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
    });
  };
