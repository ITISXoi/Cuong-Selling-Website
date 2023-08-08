import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/store/index";
import { COOKIES, getCookies } from "@/utils/cookies";

export interface ICart {
  listProduct: Product[];
  totalPrice: number;
  email: string;
  cartId: string;
  status: string;
}

const initialState = {
  listProduct: [],
  totalPrice: 0,
  email: getCookies(COOKIES.email),
  status: "",
  cartId: "",
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
    setCartId: (state: ICart, actions: PayloadAction<string>) => {
      return {
        ...state,
        cartId: actions.payload,
      };
    },
    setMyTotalPrice: (state: ICart, actions: PayloadAction<number>) => {
      return {
        ...state,
        totalPrice: actions.payload,
      };
    },
    setOrderStatus: (state: ICart, actions: PayloadAction<string>) => {
      return {
        ...state,
        status: actions.payload,
      };
    },
    setCart: (state: ICart, actions: PayloadAction<any>) => {
      return {
        ...state,
        listProduct: actions.payload?.cart ? actions.payload.cart : [],
        totalPrice: actions.payload.totalPrice,
        status: actions.payload.status,
        cartId: actions.payload.id,
      };
    },
  },
});

export const {
  setMyCart,
  setMyTotalPrice,
  setOrderStatus,
  setCartId,
  setCart,
} = cartSlice.actions;

export const getListProduct = (state: RootState) => state.cart.listProduct;
export const getTotalPrice = (state: RootState) => state.cart.totalPrice;
export const getOrderStatus = (state: RootState) => state.cart.status;
export const getCartId = (state: RootState) => state.cart.cartId;
export const getCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
