import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/auth.reducer";
import { cartReducer } from "./cart/cart.reducer";

const rootReducer = combineReducers({
    auth : authReducer,
    cart:cartReducer
})

export const store = legacy_createStore( rootReducer, applyMiddleware(thunk));
