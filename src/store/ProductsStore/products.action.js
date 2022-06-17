import {
  PRODUCTS_ERROR,
  PRODUCTS_LOADING,
  PRODUCTS_SUCESS,
  SORT_PRODUCTS,
} from "./products.types";
import axios from "axios";

export const showProducts = (dispatch,value) => {
  dispatch({ type: PRODUCTS_LOADING });

  return axios
    .get(`http://localhost:8080/${value}`)
    .then((r) => {
      dispatch({ type: PRODUCTS_SUCESS, payload: r.data });
    })
    .catch(() => {
      console.log("error")
      dispatch({ type: PRODUCTS_ERROR });
    });
};

export const sort = (dispatch, value, data) => {
  
  let array;
  switch(value){

    case "ASC":
       data.sort((a,b) => (+(a.Price)) - (+(b.Price)) )

       dispatch({type:SORT_PRODUCTS, payload:data}) 
      break;

    case "DESC":
       data.sort((a,b) => (+(b.Price)) - (+(a.Price)) )
       dispatch({type:SORT_PRODUCTS, payload:data}) 
      
       break;

    case "black" :

     array = data.filter((el) => el.color === value   )   
      // console.log("array",array)
      dispatch ({type:SORT_PRODUCTS,payload: array})
      break;

      case "white" :
       array = data.filter((el) => el.color === value   )   
        // console.log("array",array)
        dispatch ({type:SORT_PRODUCTS,payload: array})
        break;

      case "green" :
       array = data.filter((el) => el.color === value   )   
        // console.log("array",array)
        dispatch ({type:SORT_PRODUCTS,payload: array})
        break;

      case "khaki" :
       array = data.filter((el) => el.color === value   )   
        // console.log("array",array)
        dispatch ({type:SORT_PRODUCTS,payload: array})
        break;
        
      case "orange" :
       array = data.filter((el) => el.color === value   )   
        // console.log("array",array)
        dispatch ({type:SORT_PRODUCTS,payload: array})
        break;

      case "beige-brown" :
       array = data.filter((el) => el.color === value   )   
        // console.log("array",array)
        dispatch ({type:SORT_PRODUCTS,payload: array})
        break;

        case "none":
        
          return axios
          .get("http://localhost:8080/Shoes")
          .then((r) => {
            //   console.log(r.data, "manish");
            dispatch({ type: PRODUCTS_SUCESS, payload: r.data });
          })
          .catch(() => {
            console.log("error")
            dispatch({ type: PRODUCTS_ERROR });
          })
        
      
      
    default:{
      dispatch({type:SORT_PRODUCTS,payload:data})
    }
  
  }

  
};
