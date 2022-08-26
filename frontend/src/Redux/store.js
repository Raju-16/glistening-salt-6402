import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./CartReducer/cartReducer";
import { userReducer } from "./UserReducer/userReducer";
const reduxDevTool =
  window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_();
const rootReducer = combineReducers({ cartReducer, userReducer });
import { cartReducer } from "./UserReducer/cartReducer";
import { userReducer } from "./UserReducer/userReducer";

const reduxDevTool =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const rootReducer = combineReducers({ cartReducer, userReducer });

export const store = legacy_createStore(
  rootReducer,
  compose(applyMiddleware(thunk), reduxDevTool)
);
