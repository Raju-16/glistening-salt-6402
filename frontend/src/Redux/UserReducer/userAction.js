import * as actionTypes from "./userActionTypes";
import axios from "axios";

export const SignupUser = (params) => async (dispatch) => {
  dispatch({ type: actionTypes.USER_SIGNUP_REQUEST });
  return await axios({
    method: "post",
    url: "/api/signup",
    baseURL: "http://localhost:1000",
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
    baseURL: "http://localhost:1000",
    data: params,
  })
    .then((r) =>
      dispatch({ type: actionTypes.USER_LOGIN_SUCCESS, payload: r.data })
    )
    .catch((e) => dispatch({ type: actionTypes.USER_LOGIN_FAILURE }));
};
