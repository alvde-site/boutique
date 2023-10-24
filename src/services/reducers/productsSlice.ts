import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IProductsInitialState, IProductsState } from "../../utils/interfaces";
import SizeButtons from "../../utils/SizeButtons";

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
      return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
    });
    return response as IProductsState[];
  }
);

const buttons = new SizeButtons(2);

const handleProductDataState = ({
  productId,
  existingProduct,
  field,
  state,
}: any) => {
  const localData = localStorage.getItem("boutique");
  if (localData) {
    const parsedLocalData = JSON.parse(localData);
    const formattedProductsBD = parsedLocalData.productsBD.map((i: any) =>
      i.id === productId ? { ...existingProduct, [field]: state } : i
    );
    const formattedLocalData = JSON.stringify({
      ...parsedLocalData,
      productsBD: formattedProductsBD,
    });
    localStorage.setItem("boutique", formattedLocalData);
  }
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addBasketProduct(state, action) {
      const { productId } = action.payload;
      const existingProduct = state.products.find((p) => p.id === productId);
      if (existingProduct) {
        handleProductDataState({
          productId,
          existingProduct,
          field: "isInBasket",
          state: true,
        });
        existingProduct.isInBasket = true;
      }
    },
    removeBasketProduct(state, action) {
      const { productId } = action.payload;
      const existingProduct = state.products.find((p) => p.id === productId);
      if (existingProduct) {
        handleProductDataState({
          productId,
          existingProduct,
          field: "isInBasket",
          state: false,
        });
        existingProduct.isInBasket = false;
      }
    },
    addFavouriteProduct(state, action) {
      const { productId } = action.payload;
      const existingProduct = state.products.find((p) => p.id === productId);
      if (existingProduct) {
        handleProductDataState({
          productId,
          existingProduct,
          field: "isInFavorite",
          state: true,
        });
        existingProduct.isInFavorite = true;
      }
    },
    removeFavouriteProduct(state, action) {
      const { productId } = action.payload;
      const existingProduct = state.products.find((p) => p.id === productId);
      if (existingProduct) {
        handleProductDataState({
          productId,
          existingProduct,
          field: "isInFavorite",
          state: false,
        });
        existingProduct.isInFavorite = false;
      }
    },
    addProducts(state, action) {
      const { productsData } = action.payload;
      if (productsData) {
        state.products = productsData;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        const formattedProduct = action.payload.map((product) => {
          return {
            ...product,
            id: nanoid(),
            buttons: buttons.getDatailsSize(),
          };
        });
        state.initialProducts = state.products.concat(formattedProduct);
        const localData = localStorage.getItem("boutique");
        if (!localData) {
          console.log("fetch", formattedProduct);
          state.products = state.products.concat(formattedProduct);
          localStorage.setItem(
            "boutique",
            JSON.stringify({ productsBD: formattedProduct })
          );
        }
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
  addProducts,
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
