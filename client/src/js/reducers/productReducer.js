import {
  ADD_PRODUCT_FAILED,
  DELET_PRODUCT_FAILED,
  EDIT_PRODUCT_FAILED,
  GET_ALL_PRODUCTS_FAILED,
  GET_ALL_PRODUCTS_SUCCESS,
  PROD_DETAILS_FAILED,
  PROD_DETAILS_SUCCESS,
  PROD_LOADING,
} from "../const/productConst";

const initialState = {
  prodloading: true,
  products: [],
  error: null,
  details: {},
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PROD_LOADING:
      return {
        ...state,
        prodloading: true,
      };
    case GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        prodloading: false,
        products: payload,
      };
    case PROD_DETAILS_SUCCESS:
      return {
        ...state,
        prodloading: false,
        details: payload,
      };
    case GET_ALL_PRODUCTS_FAILED:
    case PROD_DETAILS_FAILED:
    case ADD_PRODUCT_FAILED:
    case EDIT_PRODUCT_FAILED:
    case DELET_PRODUCT_FAILED:
      return {
        ...state,
        prodloading: false,
        error: payload,
      };
    default:
      return state;
  }
};
