// import { applyMiddleware, legacy_createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
// import { reducer } from "./UserReducer/reducer";

// export const store = legacy_createStore(
//   reducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

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
export const store = legacy_createStore(
  rootReducer,
  compose(applyMiddleware(thunk), reduxDevTool)
);