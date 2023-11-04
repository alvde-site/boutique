import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import authSlice from "./reducers/authSlice";
import popupsSlice from "./reducers/popupsSlice";
import productsSlice from "./reducers/productsSlice";
import usersSlice from "./reducers/usersSlice";
import categoriesSlice from "./reducers/categoriesSlice";
import collectionSlice from "./reducers/collectionSlice";
import {
  localStorageMiddleware,
  reHydrateStore,
} from "./middleware/localStorageMiddleware";
import ordersSlice from "./reducers/ordersSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    users: usersSlice,
    popups: popupsSlice,
    products: productsSlice,
    categories: categoriesSlice,
    collections: collectionSlice,
    orders: ordersSlice,
  },
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
