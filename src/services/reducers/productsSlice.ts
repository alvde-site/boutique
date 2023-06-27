import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IProductsState } from "../../utils/interfaces";
import {
  product1,
  product2,
  product3,
  product4,
  dress1,
  dress2,
  dress3,
  dress4,
  dress5,
  dress6,
  dress7,
} from "../../utils/constants";

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
    category: "dress",
    collection: "",
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
    category: "pant",
    collection: "",
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
    category: "dress",
    collection: "cruise2022",
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
    category: "dress",
    collection: "cruise2022",
  },
  {
    img: dress1,
    title: "Blue pleated panel dress",
    article: "А0118",
    size: "L",
    height: 160,
    quantity: 1,
    discount: "",
    price: 35000,
    id: "5",
    isInBasket: false,
    isInFavorite: true,
    isInOrder: false,
    category: "dress",
    collection: "cruise2022",
  },
  {
    img: dress2,
    title: "Rose pleated panel dress",
    article: "А0118",
    size: "L",
    height: 160,
    quantity: 1,
    discount: "",
    price: 35000,
    id: "6",
    isInBasket: false,
    isInFavorite: false,
    isInOrder: false,
    category: "dress",
    collection: "cruise2022",
  },
  {
    img: dress3,
    title: "Navy blue flounce dress",
    article: "А0118",
    size: "L",
    height: 160,
    quantity: 1,
    discount: "",
    price: 35000,
    id: "7",
    isInBasket: false,
    isInFavorite: false,
    isInOrder: false,
    category: "dress",
    collection: "cruise2022",
  },
  {
    img: dress4,
    title: "Sand pleated panel dress",
    article: "А0118",
    size: "L",
    height: 160,
    quantity: 1,
    discount: "",
    price: 35000,
    id: "8",
    isInBasket: false,
    isInFavorite: false,
    isInOrder: false,
    category: "dress",
    collection: "cruise2022",
  },
  {
    img: dress5,
    title: "Rose pleated panel dress",
    article: "А0118",
    size: "L",
    height: 160,
    quantity: 1,
    discount: "",
    price: 35000,
    id: "9",
    isInBasket: false,
    isInFavorite: false,
    isInOrder: false,
    category: "dress",
    collection: "cruise2022",
  },
  {
    img: dress6,
    title: "Burgundy dress",
    article: "А0118",
    size: "L",
    height: 160,
    quantity: 1,
    discount: "",
    price: 35000,
    id: "10",
    isInBasket: false,
    isInFavorite: false,
    isInOrder: false,
    category: "dress",
    collection: "cruise2022",
  },
  {
    img: dress7,
    title: "Coral pleated panel dress",
    article: "А0118",
    size: "L",
    height: 160,
    quantity: 1,
    discount: "",
    price: 35000,
    id: "11",
    isInBasket: false,
    isInFavorite: false,
    isInOrder: false,
    category: "dress",
    collection: "cruise2022",
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

export const selectAllDresses = (state: RootState) =>
  state.products.filter((product) => product.category === "dress");

export default productsSlice.reducer;
