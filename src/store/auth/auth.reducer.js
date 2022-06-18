import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP,
} from "./auth.types";

let token = localStorage.getItem("token");
let profile = localStorage.getItem("profile");
let initialState = {
  loading: false,
  error: false,
  isAuth: !!token,
  token: token,
  profile: profile,
};
export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case LOGIN_SUCCESS: {
      localStorage.setItem("token", payload.token);
      localStorage.setItem("profile", payload.name);
      return {
        ...state,
        loading: false,
        error: false,
        isAuth: true,
        token: payload.token,
        profile: payload.name,
      };
    }
    case LOGIN_ERROR: {
      return { ...state };
    }
    case LOGOUT: {
      localStorage.removeItem("token");
      localStorage.removeItem("profile");
      return { ...state, loading: false, error: false, isAuth: false };
    }
    case SIGNUP:{
        return {...state};
    }
    default: {
      return { ...state };
    }
  }
};
