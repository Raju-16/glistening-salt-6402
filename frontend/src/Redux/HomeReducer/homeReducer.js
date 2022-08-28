import * as types from "./homeActionType";

const initialState = {
  productsL2: [],
  productsL3: [],
  productsL4: [],
  productsL5: [],
  productsL6: [],
  productsL7: [],
  isLoading: false,
  isError: false,
};

export const homeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    //Line2
    case types.GET_LINE2_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_LINE2_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        productsL2: payload,
      };
    case types.GET_LINE2_DATA_FAILURE:
      return {
        ...state,
        isError: true,
      };

    //Line3
    case types.GET_LINE3_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_LINE3_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        productsL3: payload,
      };
    case types.GET_LINE3_DATA_FAILURE:
      return {
        ...state,
        isError: true,
      };

    //Line4
    case types.GET_LINE4_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_LINE4_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        productsL4: payload,
      };
    case types.GET_LINE4_DATA_FAILURE:
      return {
        ...state,
        isError: true,
      };

    //Line5
    case types.GET_LINE5_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_LINE5_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        productsL5: payload,
      };
    case types.GET_LINE5_DATA_FAILURE:
      return {
        ...state,
        isError: true,
      };

    //Line6
    case types.GET_LINE6_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_LINE6_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        productsL6: payload,
      };
    case types.GET_LINE6_DATA_FAILURE:
      return {
        ...state,
        isError: true,
      };

    //Line7
    case types.GET_LINE7_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_LINE7_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        productsL7: payload,
      };
    case types.GET_LINE7_DATA_FAILURE:
      return {
        ...state,
        isError: true,
      };

    default:
      return state;
  }
};
