import * as actionTypes from "./actionTypes";

const intialState = {
  user_id: "",
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
};

export const reducer = (state = intialState, { type, action }) => {
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

    default:
      return state;
  }
};
