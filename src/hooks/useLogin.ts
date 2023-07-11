import { toast } from "react-hot-toast";
import { getCookies, removeCookies } from "@/utils/cookies";
import { COOKIES } from "@/utils/cookies";
import {
  getIsAuthenticator,
  setIsAuthenticator,
  toggleLoginModal,
} from "@/store/ducks/auth/slice";
import { useAppDispatch, useAppSelector } from "./useRedux";

export const useLogin = () => {
  const isAuthenticator = useAppSelector(getIsAuthenticator);
  const dispatch = useAppDispatch();

  const onClick = () => {
    if (!isAuthenticator) {
      dispatch(toggleLoginModal(true));
    }
  };

  const updateIsAuthenticator = () => {
    toast.success("Login Success");
    dispatch(setIsAuthenticator(getCookies(COOKIES.token)));
    dispatch(toggleLoginModal());
  };

  const logout = () => {
    removeCookies(COOKIES.token);
    dispatch(setIsAuthenticator(getCookies(COOKIES.token)));
  };

  return {
    logout,
    onClick,
    updateIsAuthenticator,
    isAuthenticator,
  };
};
