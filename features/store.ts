import { AnyAction } from "redux";
import { MakeStore, createWrapper, Context, HYDRATE } from "next-redux-wrapper";
import { configureStore, CombinedState, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";

import contents from "./contents/contentsSlice";
import users from "./users/usersSlice";

const rootReducer = (state: any, action: AnyAction) => {
  if (action.type === HYDRATE) return { ...state, ...action.payload };
  return combineReducers({ contents, users })(state, action);
};

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true,
  });

const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const wrapper = createWrapper(makeStore, { debug: true });
export default wrapper;
