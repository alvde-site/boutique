import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import authSlice from "./reducers/authSlice";
import popupsSlice from "./reducers/popupsSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    popups: popupsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
