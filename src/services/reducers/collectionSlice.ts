import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ICollectionState } from "../../utils/interfaces";
import { collectionBD } from "../../utils/boutiqueBD";

const initialState: ICollectionState[] = collectionBD;

const collectionsSlice = createSlice({
  name: "collections",
  initialState,
  reducers: {},
});

export const selectAllCollections = (state: RootState) => state.collections;

export const selectCollectionsById = (state: RootState, sectionId: number) =>
  state.collections.find((collection) => collection.id === sectionId);

export default collectionsSlice.reducer;
