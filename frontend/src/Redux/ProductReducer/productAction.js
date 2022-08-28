import * as actionTypes from "./productActionTypes";
import axios from "axios";

export const getProducts = (params) => async (dispatch) => {
  console.log(params);
  dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });
  return await axios
    .get(`https://pacific-fortress-81214.herokuapp.com/api/products/?${params}`)
    .then((r) =>
      dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: r.data })
    )
    .catch((e) => dispatch({ type: actionTypes.GET_PRODUCTS_FAILURE }));
};

// export const getSortedProducts = (sortBy) => async (dispatch) => {
//   dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });
//   return await axios
//     .get(`https://pacific-fortress-81214.herokuapp.com/api/products/?${sortBy}`)
//     .then((r) => {
//       console.log(r.data);
//       dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: r.data });
//     })
//     .catch((e) => dispatch({ type: actionTypes.GET_PRODUCTS_FAILURE }));
// };

export const getProductDetails = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
  return axios
    .get(`https://pacific-fortress-81214.herokuapp.com/api/products/${id}`)
    .then((r) =>
      dispatch({
        type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
        payload: r.data,
      })
    )
    .catch((e) => dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_FAILURE }));
};
