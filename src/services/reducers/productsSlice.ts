import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IProductsState } from "../../utils/interfaces";
import { product1, product2, product3, product4 } from "../../utils/constants";

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
    isInOrder: false,
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
    isInOrder: true,
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
    isInOrder: true,
  },
  {
    img: product4,
    title: "Burgundy dress [x1]",
    article: "PP13",
    size: "L",
    height: 160,
    quantity: 1,
    discount: "",
    price: 9000,
    id: "4",
    isInBasket: false,
    isInFavorite: false,
    isInOrder: true,
  },
];

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
