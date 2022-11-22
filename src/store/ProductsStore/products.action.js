import {
  DESC,
  PRODUCTS_ERROR,
  PRODUCTS_LOADING,
  PRODUCTS_SUCESS,
  SORT_PRODUCTS,
} from "./products.types";
import axios from "axios";

export const showProducts = (dispatch,value) => {
  dispatch({ type: PRODUCTS_LOADING });

  return axios
    .get(`https://asos.onrender.com/${value}`)
    .then((r) => {
      dispatch({ type: PRODUCTS_SUCESS, payload: r.data });
    })
    .catch(() => {
      console.log("error")
      dispatch({ type: PRODUCTS_ERROR });
    });
};

export const filterData = async (dispatch,productName, value) => {
  await axios
  .get(`https://asos.onrender.com/${productName}?sortFilter=${value}`)
  .then((r) => {
    dispatch({ type: PRODUCTS_SUCESS, payload: r.data });
  })
  .catch(() => {
    console.log("error")
    dispatch({ type: PRODUCTS_ERROR });
  });
}