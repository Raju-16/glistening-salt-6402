import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userReducer } from "./UserReducer/userReducer";
import { productReducer } from "./ProductReducer/productReducer";

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
});

export const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
