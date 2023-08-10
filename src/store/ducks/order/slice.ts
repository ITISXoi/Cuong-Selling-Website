import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/store/index";
import { COOKIES, getCookies } from "@/utils/cookies";

export interface ICart {
  cart: Product[];
  email: string;
  id: string;
  totalPrice: number;
  status: string;
  address: string;
  state: string;
  city: string;
  phoneNumber: string;
}

export interface IOrder {
  listOrder: ICart[];
}

const initialState = {
  listOrder: [],
} as IOrder;

export const orderSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    setMyOrder: (state: IOrder, actions: PayloadAction<any>) => {
      return {
        ...state,
        listOrder: actions.payload,
      };
    },
  },
});

export const { setMyOrder } = orderSlice.actions;

export const getListOrder = (state: RootState) => state.order.listOrder;

export default orderSlice.reducer;
