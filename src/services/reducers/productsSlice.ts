import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IProductsInitialState, IProductsState } from "../../utils/interfaces";

const initialState: IProductsInitialState = {
  initialProducts: [],
  products: [],
  status: "idle",
  error: undefined,
};

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const myInit = {
  headers: myHeaders,
};

const productRequest = new Request("productsBD.json", myInit);

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch(productRequest).then((res: any) => {
      console.log(res);
      return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
    });
    return response as IProductsState[];
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addBasketProduct(state, action) {
      const { productId } = action.payload;
      const existingProduct = state.products.find((p) => p.id === productId);
      if (existingProduct) {
        existingProduct.isInBasket = true;
      }
    },
    removeBasketProduct(state, action) {
      const { productId } = action.payload;
      const existingProduct = state.products.find((p) => p.id === productId);
      if (existingProduct) {
        existingProduct.isInBasket = false;
      }
    },
    addFavouriteProduct(state, action) {
      const { productId } = action.payload;
      const existingProduct = state.products.find((p) => p.id === productId);
      if (existingProduct) {
        existingProduct.isInFavorite = true;
      }
    },
    removeFavouriteProduct(state, action) {
      const { productId } = action.payload;
      const existingProduct = state.products.find((p) => p.id === productId);
      if (existingProduct) {
        existingProduct.isInFavorite = false;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        console.log('asdf')
        state.status = "succeeded";
        const formattedProduct = action.payload.map((product) => {
          return {
            ...product,
            id: nanoid(),
            // reactions: generateRandomReactions(),
          };
        });
        state.initialProducts = state.products.concat(formattedProduct);
        state.products = state.products.concat(formattedProduct);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {
  addBasketProduct,
  removeBasketProduct,
  addFavouriteProduct,
  removeFavouriteProduct,
} = productsSlice.actions;

export const selectAllProducts = (state: RootState) => state.products.products;

export const selectAllInBasket = (state: RootState) =>
  state.products.products.filter((product) => product.isInBasket);

export const selectAllInFavourite = (state: RootState) =>
  state.products.products.filter((product) => product.isInFavorite);

export const selectAllInOrder = (state: RootState) =>
  state.products.products.filter((product) => product.isInOrder);

export const selectProductById = (state: RootState, productId: string) =>
  state.products.products.find((product) => product.id === productId);

export default productsSlice.reducer;
