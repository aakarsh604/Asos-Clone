import {
  PRODUCTS_ERROR,
  PRODUCTS_LOADING,
  PRODUCTS_SUCESS,
  SORT_PRODUCTS,
} from "./products.types";
import axios from "axios";

export const showProducts = (dispatch) => {
  dispatch({ type: PRODUCTS_LOADING });

  return axios
    .get("http://localhost:8080/Shoes")
    .then((r) => {
      //   console.log(r.data, "manish");
      dispatch({ type: PRODUCTS_SUCESS, payload: r.data });
    })
    .catch(() => {
      dispatch({ type: PRODUCTS_ERROR });
    });
};

export const sort = (dispatch, value, data) => {
  // console.log(value,price)
  //  dispatch({type: PRODUCTS_LOADING})
  switch(value){

    case "ASC":{
       data.sort((a,b) => (+(a.Price)) - (+(b.Price)) )
       dispatch({type:SORT_PRODUCTS, payload:data}) 
      };
      break;

    case "DESC":{
       data.sort((a,b) => (+(b.Price)) - (+(a.Price)) )
       dispatch({type:SORT_PRODUCTS, payload:data}) 
      }
     break;
     
    default:{
      dispatch({type:SORT_PRODUCTS,payload:data})
    }
  
  }

  
};
