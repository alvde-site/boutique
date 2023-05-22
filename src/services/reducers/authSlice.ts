import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IInitialAuth } from "../../utils/interfaces";



const initialState: IInitialAuth = {
  loggedIn: false,
  userEmail: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signin(state, action) {
      const { userEmail } = action.payload;
      state.loggedIn = true;
      state.userEmail = userEmail;
    },
    signout(state) {
      state.loggedIn = false;
      state.userEmail = null;
    },
  },
});

export const selectAllAuth = (state: RootState) => state.auth;

export const { signin, signout } = authSlice.actions;

export default authSlice.reducer;
