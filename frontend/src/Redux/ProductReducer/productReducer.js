import * as actionTypes from "./productActionTypes";

const initialState = {
  products: [],
  productDetails: {},
  isLoading: false,
  isError: false,
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: payload,
      };
    case actionTypes.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
