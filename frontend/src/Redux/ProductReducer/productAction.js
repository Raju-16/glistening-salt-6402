import * as actionTypes from "./productActionTypes";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });
  return await axios({
    method: "get",
    url: "/api/products",
    baseURL: "https://pacific-fortress-81214.herokuapp.com/",
  })
    .then((r) =>
      dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: r.data })
    )
    .catch((e) => dispatch({ type: actionTypes.GET_PRODUCTS_FAILURE }));
};
