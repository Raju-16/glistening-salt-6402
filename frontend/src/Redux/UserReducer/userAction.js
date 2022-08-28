import * as actionTypes from "./userActionTypes";
import axios from "axios";

export const SignupUser = (params) => async (dispatch) => {
  dispatch({ type: actionTypes.USER_SIGNUP_REQUEST });
  return await axios({
    method: "post",
    url: "/api/signup",
    baseURL: "https://pacific-fortress-81214.herokuapp.com/",
    data: params,
  })
    .then((r) =>
      dispatch({ type: actionTypes.USER_SIGNUP_SUCCESS, payload: r.data })
    )
    .catch((e) => dispatch({ type: actionTypes.USER_SIGNUP_FAILURE }));
};

export const LoginUser = (params) => async (dispatch) => {
  dispatch({ type: actionTypes.USER_LOGIN_REQUEST });
  return await axios({
    method: "post",
    url: "/api/login",
    baseURL: "https://pacific-fortress-81214.herokuapp.com/",
    data: params,
  })
    .then((r) =>
      dispatch({ type: actionTypes.USER_LOGIN_SUCCESS, payload: r.data })
    )
    .catch((e) => dispatch({ type: actionTypes.USER_LOGIN_FAILURE }));
};
