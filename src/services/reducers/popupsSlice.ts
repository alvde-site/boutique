import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IPopupState } from "../../utils/interfaces";
import {
  ALERT_POPUP,
  AUTH_POPUP,
  BASKET_POPUP,
  FAVOURITE_POPUP,
  MENU_POPUP,
  REGISTER_POPUP,
} from "../../utils/constants";

const initialState: IPopupState[] = [
  { name: MENU_POPUP, state: false },
  { name: AUTH_POPUP, state: false },
  { name: REGISTER_POPUP, state: false },
  { name: ALERT_POPUP, state: false },
  { name: BASKET_POPUP, state: false },
  { name: FAVOURITE_POPUP, state: false },
];

const popupsSlice = createSlice({
  name: "popups",
  initialState,
  reducers: {
    handlePopupState(state, action) {
      const { popupName, popupState } = action.payload;
      const existingPopup = state.find((popup) => popup.name === popupName);
      if (existingPopup) {
        existingPopup.state = popupState;
      }
    },
    closeAllPopups() {
      return initialState;
    },
  },
});

export const { handlePopupState, closeAllPopups } = popupsSlice.actions;

export const menuPopup = (state: RootState) =>
  state.popups.find((popup) => popup.name === MENU_POPUP);
export const selectAllPopups = (state: RootState) => state.popups;

export default popupsSlice.reducer;
