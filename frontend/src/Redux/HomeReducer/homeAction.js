import axios from "axios";
import * as types from "./homeActionType";

export const getL2Data = () => (dispatch) => {
  dispatch({ type: types.GET_LINE2_DATA_REQUEST });
  return axios
    .get("http://localhost:8080/HomePageL2")
    .then((res) =>
      dispatch({ type: types.GET_LINE2_DATA_SUCCESS, payload: res.data })
    )
    .catch((e) => dispatch({ type: types.GET_LINE2_DATA_FAILURE }));
};

export const getL3Data = () => (dispatch) => {
  dispatch({ type: types.GET_LINE3_DATA_REQUEST });
  return axios
    .get("http://localhost:8080/HomePageL3")
    .then((res) =>
      dispatch({ type: types.GET_LINE3_DATA_SUCCESS, payload: res.data })
    )
    .catch((e) => dispatch({ type: types.GET_LINE3_DATA_FAILURE }));
};

export const getL4Data = () => (dispatch) => {
  dispatch({ type: types.GET_LINE4_DATA_REQUEST });
  return axios
    .get("http://localhost:8080/HomePageL4")
    .then((res) =>
      dispatch({ type: types.GET_LINE4_DATA_SUCCESS, payload: res.data })
    )
    .catch((e) => dispatch({ type: types.GET_LINE4_DATA_FAILURE }));
};

export const getL5Data = () => (dispatch) => {
  dispatch({ type: types.GET_LINE5_DATA_REQUEST });
  return axios
    .get("http://localhost:8080/HomePageL5")
    .then((res) => {
    //   console.log("res", res.data);
      dispatch({ type: types.GET_LINE5_DATA_SUCCESS, payload: res.data });
    })
    .catch((e) => dispatch({ type: types.GET_LINE5_DATA_FAILURE }));
};

export const getL6Data = () => (dispatch) => {
  dispatch({ type: types.GET_LINE6_DATA_REQUEST });
  return axios
    .get("http://localhost:8080/HomePageL6")
    .then((res) =>
      dispatch({ type: types.GET_LINE6_DATA_SUCCESS, payload: res.data })
    )
    .catch((e) => dispatch({ type: types.GET_LINE6_DATA_FAILURE }));
};

export const getL7Data = () => (dispatch) => {
  dispatch({ type: types.GET_LINE7_DATA_REQUEST });
  return axios
    .get("http://localhost:8080/HomePageL7")
    .then((res) =>
      dispatch({ type: types.GET_LINE7_DATA_SUCCESS, payload: res.data })
    )
    .catch((e) => dispatch({ type: types.GET_LINE7_DATA_FAILURE }));
};
