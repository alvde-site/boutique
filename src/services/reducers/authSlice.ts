import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IInitialAuth } from "../../utils/interfaces";

const initialState: IInitialAuth = {
  loggedIn: false,
  userId: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signin(state, action) {
      const { userId } = action.payload;
      state.loggedIn = true;
      state.userId = userId;
    },
    signout(state) {
      state.loggedIn = false;
      state.userId = null;
    },
  },
});

export const selectAllAuth = (state: RootState) => state.auth;

export const { signin, signout } = authSlice.actions;

export default authSlice.reducer;
