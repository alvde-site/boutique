import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IPopupState } from "../../utils/interfaces";

const initialState: IPopupState[] = [
  { name: "menuPopup", state: false },
  { name: "authPopup", state: false },
  { name: "registerPopup", state: false },
  { name: "alertPopup", state: false },
  { name: "basketPopup", state: false },
  { name: "favourite", state: false },
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
    closeAllPopups(state) {
      state = initialState;
    },
  },
});

export const { handlePopupState, closeAllPopups } = popupsSlice.actions;

export const menuPopup = (state: RootState) =>
  state.popups.find((popup) => popup.name === "menuPopup");
export const selectAllPopups = (state: RootState) => state.popups;

export default popupsSlice.reducer;
