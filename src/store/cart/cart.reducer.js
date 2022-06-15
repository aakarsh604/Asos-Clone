import { ADD_TO_CART_ERROR, ADD_TO_CART_LOADING, ADD_TO_CART_SUCCESS, GET_ITEM_CART_ERROR, GET_ITEM_CART_LOADING, GET_ITEM_CART_SUCCESS } from "./cart.types"

let initialState={
   getItemCart:{
    loading:false,
    error:false
   },
   removeItemCart:{
    loading:false,
    error:false
   },
   addItemCart:{
    loading:false,
    error:false,
    sucess:false
   },
   data:[]
}


export const cartReducer = (state=initialState,{type,payload})=>{
    switch(type){
        case GET_ITEM_CART_LOADING:{
           return {...state,getItemCart:{
            ...state.getItemCart,loading:true,error:false
           }}
        }
        case GET_ITEM_CART_SUCCESS:{
          return {...state,getItemCart:{
            ...state.getItemCart,loading:false,error:false
          },data:payload}
        }
        case GET_ITEM_CART_ERROR:{
            return {...state,getItemCart:{
                ...state.getItemCart,loading:false,error:true
               }}
        }
        case ADD_TO_CART_LOADING:{
              return {...state,addItemCart:{
                ...state.addItemCart,loading:true,error:false,sucess:false
              }}
        }
        case ADD_TO_CART_SUCCESS:{
          return {...state,addItemCart:{
            ...state.addItemCart,loading:false,error:false,sucess:true
          },data:[...state.data,payload]}
        }
        case ADD_TO_CART_ERROR:{
          return {...state,addItemCart:{
            ...state.addItemCart,loading:false,error:true,sucess:false
          }}
        }
        default:{
            return state
        }
    }
}
