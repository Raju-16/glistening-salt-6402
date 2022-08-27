import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userReducer } from "./UserReducer/userReducer";
import { productReducer } from "./ProductReducer/productReducer";

const reduxDevTool =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose;

const rootReducer = combineReducers({ cartReducer, userReducer });

export const store = legacy_createStore(
  rootReducer,
  reduxDevTool(applyMiddleware(thunk))
);

