import { AnyAction } from "redux";
import { MakeStore, createWrapper, Context, HYDRATE } from "next-redux-wrapper";
import { configureStore, CombinedState, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";

import { FeedItemContents } from "../data";
import contents from "./contents/contentsSlice";

type InitialStates = {
  contents: {
    contentsList: FeedItemContents[];
  };
};

const rootReducer = (state: any, action: AnyAction) => {
  if (action.type === HYDRATE) {
    console.log("HYDRATE", action);
    return { ...state, ...action.payload };
  }
  return combineReducers({ contents })(state, action);
};

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: true,
  });

const store = makeStore();

// export const store = configureStore({
//   reducer: {
//     contents,
//   },
// });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const wrapper = createWrapper(makeStore, { debug: true });
export default wrapper;
