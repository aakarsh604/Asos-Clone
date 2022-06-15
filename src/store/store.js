import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import {authReducer} from "./auth/auth.reducer"
const rootReducer = combineReducers({
    auth : authReducer
})

export const store = legacy_createStore( rootReducer, applyMiddleware(thunk));
