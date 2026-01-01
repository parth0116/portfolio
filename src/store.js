import { configureStore ,combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

let initialState={}

const reducer=combineReducers({
 
})

const store = configureStore({
    reducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    devTools: true,
  });
  
  export default store;