import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IProductsState } from "../../utils/interfaces";
import { productsBD } from "../../utils/boutiqueBD";

const initialState: IProductsState[] = productsBD;

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addBasketProduct(state, action) {
      const { productId } = action.payload;
      const existingProduct = state.find((p) => p.id === productId);
      if (existingProduct) {
        existingProduct.isInBasket = true;
      }
    },
    removeBasketProduct(state, action) {
      const { productId } = action.payload;
      const existingProduct = state.find((p) => p.id === productId);
      if (existingProduct) {
        existingProduct.isInBasket = false;
      }
    },
    addFavouriteProduct(state, action) {
      const { productId } = action.payload;
      const existingProduct = state.find((p) => p.id === productId);
      if (existingProduct) {
        existingProduct.isInFavorite = true;
      }
    },
    removeFavouriteProduct(state, action) {
      const { productId } = action.payload;
      const existingProduct = state.find((p) => p.id === productId);
      if (existingProduct) {
        existingProduct.isInFavorite = false;
      }
    },
  },
});

export const {
  addBasketProduct,
  removeBasketProduct,
  addFavouriteProduct,
  removeFavouriteProduct,
} = productsSlice.actions;

export const selectAllProducts = (state: RootState) => state.products;

export const selectAllInBasket = (state: RootState) =>
  state.products.filter((product) => product.isInBasket);

export const selectAllInFavourite = (state: RootState) =>
  state.products.filter((product) => product.isInFavorite);

export const selectAllInOrder = (state: RootState) =>
  state.products.filter((product) => product.isInOrder);

export default productsSlice.reducer;
