import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ICategoryState } from "../../utils/interfaces";
import { categoryBD } from "../../utils/boutiqueBD";

const initialState: ICategoryState[] = categoryBD;

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
});

export const selectAllCategories = (state: RootState) => state.categories;

export const selectCategoryById = (state: RootState, sectionId: number) =>
  state.categories.find((category) => category.id === sectionId);

export default categoriesSlice.reducer;
