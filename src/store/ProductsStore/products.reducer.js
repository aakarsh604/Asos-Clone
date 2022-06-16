import {
  PRODUCTS_ERROR,
  PRODUCTS_LOADING,
  PRODUCTS_SUCESS,
  SORT_PRODUCTS,
} from "./products.types";

let initialState = {
  loading: false,
  error: false,
  data: [],
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCTS_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case PRODUCTS_SUCESS: {
      // console.log(payload) payload :[el,el,el.....]
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    }

    case SORT_PRODUCTS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    }

    case PRODUCTS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    default: {
      return state;
    }
  }
};
