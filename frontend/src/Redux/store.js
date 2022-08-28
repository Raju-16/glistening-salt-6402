import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./CartReducer/cartReducer";
import { userReducer } from "./UserReducer/userReducer";
import { homeReducer } from "./HomeReducer/homeReducer";

const reduxDevTool =
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose;
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const rootReducer = combineReducers({ cartReducer, userReducer, homeReducer });

export const store = legacy_createStore(
  rootReducer,
  // reduxDevTool(applyMiddleware(thunk))
  compose(applyMiddleware(thunk), reduxDevTool)
);
