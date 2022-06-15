import axios from "axios";
import { ADD_TO_CART_ERROR, ADD_TO_CART_LOADING, ADD_TO_CART_SUCCESS, GET_ITEM_CART_ERROR, GET_ITEM_CART_LOADING, GET_ITEM_CART_SUCCESS } from "./cart.types";









export const getItemApi=()=>(dispatch)=>{
    dispatch({type:GET_ITEM_CART_LOADING})

    axios.get("http://localhost:8080/cartItem")
    .then((res)=>(dispatch({type:GET_ITEM_CART_SUCCESS,payload:res.data})))
    .catch((r)=>(dispatch({type:GET_ITEM_CART_ERROR})))
} 

export const addCartApi=(item,s)=>(dispatch)=>{
     dispatch({type:ADD_TO_CART_LOADING})
        axios.post("http://localhost:8080/cartItem",{
            productName:item.BrandName,
            Image:item.Image,
            price:item.Price,
            size:s,
            quantity:1
         }).then((res)=>(dispatch({type:ADD_TO_CART_SUCCESS,payload:res.data})))
         .catch((r)=>(dispatch({type:ADD_TO_CART_ERROR})))
     
}