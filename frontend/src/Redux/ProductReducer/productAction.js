import * as actionTypes from "./productActionTypes";
import axios from "axios";

export const getProducts = (params) => async (dispatch) => {
  console.log(params);
  dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });
  return await axios
    .get("http://localhost:1000/api/products", { params: params })
    .then((r) =>
      dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: r.data })
    )
    .catch((e) => dispatch({ type: actionTypes.GET_PRODUCTS_FAILURE }));
};
