import axios from "axios";
import * as types from "./cartActionTypes";
// Action Types

// Action Creators
export const GET_CART_PRODUCTS = () => (dispatch) => {
  // dispatch({ type: types.GET_CART_PRODUCTS });
  return axios
    .get(`http://localhost:8080/cartProducts`)
    .then(function (response) {
      console.log(response.data);
      dispatch({ type: types.GET_CART_PRODUCTS, payload: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const addToCart = (item, qty) => (dispatch) => {
  return axios
    .post("http://localhost:8080/cartProducts", { ...item, qty })
    .then((res) => dispatch({ type: types.ADD_TO_CART, payload: res.data }));
};

export const deleteProduct = (id) => (dispatch) => {
  console.log("id from store", id);
  return axios.delete(`http://localhost:8080/cartProducts/${id}`);

  // .then(function (response) {
  //     console.log(response)
  // })
  // .catch(function (error) {
  // console.log(error)
  // })

  // let newData = data.filter(elem => {
  //     return elem.id !== id;
  // })

  // dispatch({ type: GET_CART_PRODUCTS, payload: newData })
};

export const updateQty = (id, qty) => (dispatch) => {
  console.log("qty", qty);
  return axios.patch(`http://localhost:8080/cartProducts/${id}`, { qty });
  //     .then(function (response) {
  //         console.log(response)
  //         axios.get("http://localhost:8080/cartProducts")
  //         .then(function (response) {
  //             console.log(response.data);
  //             dispatch({ type: GET_CART_PRODUCTS, payload: response.data })

  //         })
  //         .catch(function (error) {
  //         console.log(error);
  //     })
  //     })
  //     .catch(function (error) {
  //     console.log(error)
  // })
};
