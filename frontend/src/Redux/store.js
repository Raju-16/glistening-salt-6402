import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userReducer } from "./UserReducer/userReducer";
import { productReducer } from "./ProductReducer/productReducer";

const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
});

export const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

