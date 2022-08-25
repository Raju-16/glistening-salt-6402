// Import Action types
import * as types from "./Cart_ActionTypes";

const initialState = {
    cartProducts: []
}
const cartReducer = (state=initialState , { type, payload }) => {
    switch (type) {
        case types.GET_CART_PRODUCTS:
            return {
                ...state,
                cartProducts: payload
            }
        default :return state;
    }
}

export default cartReducer;