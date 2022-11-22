import axios from "axios";
import {
  ADD_TO_CART_ERROR,
  ADD_TO_CART_LOADING,
  ADD_TO_CART_SUCCESS,
  GET_ITEM_CART_ERROR,
  GET_ITEM_CART_LOADING,
  GET_ITEM_CART_SUCCESS,
  GET_PRODUCT_DETAILS_ERROR,
  GET_PRODUCT_DETAILS_LOADING,
  GET_PRODUCT_DETAILS_SUCCESS,
  REMOVE_FROM_CART_ERROR,
  REMOVE_FROM_CART_LOADING,
  REMOVE_FROM_CART_SUCCESS,
  UPDATE_CART_ERROR,
  UPDATE_CART_LOADING,
  UPDATE_CART_SUCCESS,
} from "./cart.types";
let token = localStorage.getItem("token");
let userId = localStorage.getItem("userId");

export const getItemApi = () => (dispatch) => {
  dispatch({ type: GET_ITEM_CART_LOADING });
  axios
    .get(`https://asos.onrender.com/cart/${userId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      // console.log(res,'token wal');
      dispatch({ type: GET_ITEM_CART_SUCCESS, payload: res.data });
    })
    .catch((r) => dispatch({ type: ADD_TO_CART_ERROR }));
};

export const addCartApi = (item, s) => (dispatch) => {
  dispatch({ type: ADD_TO_CART_LOADING });
  let token = localStorage.getItem("token");
  let obj = {
    productName: item.Brand_Name,
    Image: item.Image,
    price: item.Price,
    size: s,
    color: item.color,
    quantity: 1,
  };
  axios
    .post("https://asos.onrender.com/cart/create", obj, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      // console.log(res,'token wal');
      dispatch({ type: ADD_TO_CART_SUCCESS, payload: res.data.cart });
    })
    .catch((r) => dispatch({ type: ADD_TO_CART_ERROR }));
};

export const removeCartApi = (id) => (dispatch) => {
   console.log('in remove')
  dispatch({ type: REMOVE_FROM_CART_LOADING });

  axios
    .delete(`https://asos.onrender.com/cart/delete/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      axios.get(`https://asos.onrender.com/cart/${userId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
         // console.log(res,'deleted')
         dispatch({ type: GET_ITEM_CART_SUCCESS, payload: res.data });
      })
    })
    .catch((r) => dispatch({ type: REMOVE_FROM_CART_ERROR }));
};

export const updateCartApi = (id, quantity, size) => (dispatch) => {
  dispatch({ type: UPDATE_CART_LOADING });
  let obj = {size:size, quantity:quantity}
  axios
    .patch(`https://asos.onrender.com/cart/${id}/edit`,{obj}, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      axios.get(`https://asos.onrender.com/cart/${userId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
         // console.log(res,'deleted')
         dispatch({ type: GET_ITEM_CART_SUCCESS, payload: res.data });
      })
    })
    .catch((r) => dispatch({ type: REMOVE_FROM_CART_ERROR }));
};

export const getproductdetailsApi = (id, prevLocation) => (dispatch) => {
  dispatch({ type: GET_PRODUCT_DETAILS_LOADING });
  axios
    .get(` https://asos.onrender.com/${prevLocation}/productdetails/${id}`)
    .then((res) => {
      // console.log(res);
      dispatch({ type: GET_PRODUCT_DETAILS_SUCCESS, payload: res.data });
    })
    .catch((r) => dispatch({ type: GET_PRODUCT_DETAILS_ERROR }));
};
