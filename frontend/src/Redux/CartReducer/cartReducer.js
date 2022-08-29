// Import Action types
import * as types from "./cartActionTypes";

const initialState = {
  cartProducts: [],
};
const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_CART_PRODUCTS:
      return {
        ...state,
        cartProducts: payload,
      };
    case types.ADD_TO_CART:
      return {
        ...state,
        cartProducts: [...state.cartProducts, payload],
      };
    default:
      return state;
  }
};

export { cartReducer };
