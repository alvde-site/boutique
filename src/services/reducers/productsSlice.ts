import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IProductsState } from "../../utils/interfaces";
import { product1, product2, product3 } from "../../utils/constants";

const initialState: IProductsState[] = [
  {
    img: product1,
    title: "Coral pleated panel dress",
    article: "А0118",
    size: "L",
    height: 160,
    quantity: 1,
    discount: 15500,
    price: 8000,
    id: "1",
    isInBasket: true,
    isInFavorite: true,
  },
  {
    img: product2,
    title: "Denim effect pants",
    article: "PP29",
    size: "S",
    height: 160,
    quantity: 1,
    discount: "",
    price: 20000,
    id: "2",
    isInBasket: true,
    isInFavorite: true,
  },
  {
    img: product3,
    title: "Coral pleated panel dress",
    article: "PP13",
    size: "L",
    height: 160,
    quantity: 1,
    discount: "",
    price: 18000,
    id: "3",
    isInBasket: true,
    isInFavorite: true,
  },
];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    removeBasketProduct(state, action) {
      const { productId } = action.payload;
      const existingProduct = state.find((p) => p.id === productId);
      if (existingProduct) {
        existingProduct.isInBasket = false;
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

export const { removeBasketProduct, removeFavouriteProduct } = productsSlice.actions;

export const selectAllInBasket = (state: RootState) =>
  state.products.filter((product) => product.isInBasket);

export const selectAllInFavourite = (state: RootState) =>
  state.products.filter((product) => product.isInFavorite);

export default productsSlice.reducer;
