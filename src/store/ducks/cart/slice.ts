import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/store/index";

export interface IProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category: string;
  url: string;
}

export interface ICart {
  listProduct: IProduct[];
  totalPrice: number;
}

const initialState = {
  listProduct: [],
  totalPrice: 0,
} as ICart;

export const cartSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    setMyCart: (state: ICart, actions: PayloadAction<any>) => {
      return {
        ...state,
        listProduct: actions.payload,
      };
    },
    setMyTotalPrice: (state: ICart, actions: PayloadAction<number>) => {
      return {
        ...state,
        totalPrice: actions.payload,
      };
    },
  },
});

export const { setMyCart, setMyTotalPrice } = cartSlice.actions;

export const getListProduct = (state: RootState) => state.cart.listProduct;
export const getTotalPrice = (state: RootState) => state.cart.totalPrice;

export default cartSlice.reducer;
