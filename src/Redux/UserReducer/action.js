import * as actionTypes from "./actionTypes"
import axios from 'axios';

export const userSignUp = (params) => async (dispatch) => {
    dispatch({type: actionTypes.USER_SIGNUP_REQUEST});
    return await axios({
        method: "post",
        url: "/api/signup",
        baseURL: "http://localhost:1000",
        data: params
    }).then(r => dispatch({type: actionTypes.USER_SIGNUP_SUCCESS, payload: r.data})).catch(e => dispatch({type: actionTypes.USER_SIGNUP_FAILURE}))
}