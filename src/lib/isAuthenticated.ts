import { COOKIES } from "@/utils/cookies";
import { GetServerSidePropsContext } from "next";
import { parseCookies } from "nookies";

export function isAuthenticated(ctx: GetServerSidePropsContext) {
  const cookies = parseCookies(ctx);
  const token = cookies[COOKIES.token];
  if (!token) {
    return {
      isLoggedIn: false,
    };
  }
  return {
    isLoggedIn: true,
  };
}
