import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/store/index";
import { COOKIES, getCookies } from "@/utils/cookies";

export interface IAuth {
  isAuthenticator: Boolean;
  login: boolean;
  signup: boolean;
}

const initialState = {
  signup: false,
  login: false,
  isAuthenticator: Boolean(getCookies(COOKIES.token)),
} as IAuth;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleLoginModal: (
      state: IAuth,
      action: PayloadAction<undefined | IAuth["login"]>
    ) => {
      if (action.payload === undefined) {
        return {
          ...state,
          login: !state.login,
        };
      }
      return {
        ...state,
        login: action.payload,
      };
    },
    toggleSignupModal: (
      state: IAuth,
      action: PayloadAction<undefined | IAuth["signup"]>
    ) => {
      if (action.payload === undefined) {
        return {
          ...state,
          signup: !state.signup,
        };
      }
      return {
        ...state,
        signup: action.payload,
      };
    },
    setIsAuthenticator: (
      state: IAuth,
      action: PayloadAction<IAuth["isAuthenticator"]>
    ) => {
      return {
        ...state,
        isAuthenticator: action.payload,
      };
    },
  },
});

export const { toggleLoginModal, setIsAuthenticator, toggleSignupModal } =
  authSlice.actions;

export const getLoginState = (state: RootState) => state.auth.login;
export const getIsAuthenticator = (state: RootState) =>
  state.auth.isAuthenticator;
export const getSignupState = (state: RootState) => state.auth.signup;

export default authSlice.reducer;
