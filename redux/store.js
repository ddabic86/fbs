import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import userSlice from "./slices/userSlice";

const combinedReducer = combineReducers({
  user: userSlice,
});

const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  }
  // else if (action.type === "RESET_STORE") {
  //    return combinedReducer(undefined, action);
  // }
  else {
    return combinedReducer(state, action);
  }
};

export const makeStore = () =>
  configureStore({
    reducer: masterReducer,
    devTools: true,
  });

export const wrapper = createWrapper(makeStore, { debug: false });
