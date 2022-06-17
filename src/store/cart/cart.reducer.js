import { ADD_TO_CART_ERROR, ADD_TO_CART_LOADING, ADD_TO_CART_SUCCESS, GET_ITEM_CART_ERROR, GET_ITEM_CART_LOADING, GET_ITEM_CART_SUCCESS, GET_PRODUCT_DETAILS_ERROR, GET_PRODUCT_DETAILS_LOADING, GET_PRODUCT_DETAILS_SUCCESS, REMOVE_FROM_CART_ERROR, REMOVE_FROM_CART_LOADING, REMOVE_FROM_CART_SUCCESS, UPDATE_CART_ERROR, UPDATE_CART_LOADING, UPDATE_CART_SUCCESS } from "./cart.types"

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
   updateItemCart:{
   loading:false,
   error:false
   },
   getProductDetails:{
   loading:false,
   error:false,
   },
   detailsData:{},
   cartData:[]
}


export const cartReducer = (state=initialState,{type,payload})=>{
    switch(type){
        case GET_PRODUCT_DETAILS_LOADING:{
          return {...state,getProductDetails:{
            ...state.getProductDetails,loading:true,error:false
          }}
        }
        case GET_PRODUCT_DETAILS_SUCCESS:{
          return {...state,getProductDetails:{
            ...state.getProductDetails,loading:false,error:false
          },detailsData:payload}
        }
        case GET_PRODUCT_DETAILS_ERROR:{
          return {...state,getProductDetails:{
            ...state.getProductDetails,loading:false,error:true
          }}
        }
        case GET_ITEM_CART_LOADING:{
           return {...state,getItemCart:{
            ...state.getItemCart,loading:true,error:false
           }}
        }
        case GET_ITEM_CART_SUCCESS:{
          return {...state,getItemCart:{
            ...state.getItemCart,loading:false,error:false
          },cartData:payload}
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
          },cartData:[...state.cartData,payload]}
        }
        case ADD_TO_CART_ERROR:{
          return {...state,addItemCart:{
            ...state.addItemCart,loading:false,error:true,sucess:false
          }}
        }
        case REMOVE_FROM_CART_LOADING:{
             return {...state,removeItemCart:{
              ...state.removeItemCart,loading:true,error:false
             }}
        }
        case REMOVE_FROM_CART_SUCCESS:{
          let new1 = state.cartData.filter((el)=>(el.id!=payload))
          return {...state,removeItemCart:{
            ...state.removeItemCart,loading:false,error:false
           },cartData:new1}
        }
        case REMOVE_FROM_CART_ERROR:{
          return {...state,removeItemCart:{
            ...state.removeItemCart,loading:false,error:true
           }}
        }
        case UPDATE_CART_LOADING:{
              return {...state,updateItemCart:{
                ...state.updateItemCart,loading:true,error:false
              }}
        }
        case UPDATE_CART_SUCCESS:{
          let new1 = state.cartData.reduce((acu,el)=>{
            if(el.id===payload.id){
              el.quantity= payload.quantity;
              el.size=payload.size
            }
            acu.push(el)
            return acu
          },[])
          return {...state,updateItemCart:{
            ...state.updateItemCart,loading:false,error:false
          },cartData:new1}
        }
        case UPDATE_CART_ERROR:{
          return {...state,updateItemCart:{
            ...state.updateItemCart,loading:false,error:true
          }}
        }
        default:{
            return state
        }
    }
}
