<<<<<<< HEAD
import { applyMiddleware, legacy_createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
=======
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
>>>>>>> fcdc57cb925e622a01c020df0e6de46e4ccd12aa
import thunk from "redux-thunk";
import { userReducer } from "./UserReducer/userReducer";
import { productReducer } from "./ProductReducer/productReducer";

const reduxDevTool =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose;

const rootReducer = combineReducers({ cartReducer, userReducer });

export const store = legacy_createStore(
<<<<<<< HEAD
  reducer,
  applyMiddleware(thunk)
);

// New store

// import {
//   applyMiddleware,
//   combineReducers,
//   compose,
//   legacy_createStore,
// } from "redux";
// import thunk from "redux-thunk";
// // import { cartReducer } from "./CartReducer/cartReducer";
// import { userReducer } from "./UserReducer/userReducer";


// const reduxDevTool =
//   window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_();
// const rootReducer = combineReducers({ userReducer });


// export const store = legacy_createStore(
//   rootReducer,
//   compose(applyMiddleware(thunk), reduxDevTool)
// );
=======
  rootReducer,
  reduxDevTool(applyMiddleware(thunk))
);

>>>>>>> fcdc57cb925e622a01c020df0e6de46e4ccd12aa
