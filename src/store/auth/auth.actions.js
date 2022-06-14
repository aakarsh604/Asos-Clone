import { LOGIN_SUCCESS, LOGOUT } from "./auth.types";


export const loginReq = () => ({type : LOGIN_SUCCESS, payload})

export const logoutReq = () => ({type : LOGOUT, payload})