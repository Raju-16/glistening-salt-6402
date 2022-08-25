import { applyMiddleware, legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { reducer } from "./UserReducer/reducer";

export const store = legacy_createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
