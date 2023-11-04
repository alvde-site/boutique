import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IProductsState } from "../../utils/interfaces";

interface IOrdersInitialState {
  initialOrders: [];
  orders: IProductsState[];
}

const initialState: IOrdersInitialState = {
  initialOrders: [],
  orders: [],
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder(state, action) {
      const { order } = action.payload;
      if (order) {
        state.orders = order;
      }
    },
  },
});

export const { addOrder } = ordersSlice.actions;

export const selectAllInOrders = (state: RootState) => state.orders.orders;

export default ordersSlice.reducer;
