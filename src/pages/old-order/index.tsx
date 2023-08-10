import { AllOrder } from "@/modules/AllOrder";
import { COOKIES, getCookies } from "@/utils/cookies";
import { GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default AllOrder;

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const data = getCookies(COOKIES.token);
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale as string)),
    },
  };
};
