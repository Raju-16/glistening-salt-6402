import * as actionTypes from "./userActionTypes";

const initialState = {
  isAuth: false,
  token: "",
  user_id: "",
  isLoading: false,
  isError: false,
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.USER_SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.USER_SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case actionTypes.USER_SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case actionTypes.USER_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload.token,
        user_id: payload._id,
      };
    case actionTypes.USER_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
