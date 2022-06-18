import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./cart/cart.reducer";
import {authReducer} from "./auth/auth.reducer"
import { productsReducer } from "./ProductsStore/products.reducer";
const rootReducer = combineReducers({
    auth : authReducer,
    products:productsReducer,
    cart:cartReducer
})

export const store = legacy_createStore( rootReducer, applyMiddleware(thunk));
