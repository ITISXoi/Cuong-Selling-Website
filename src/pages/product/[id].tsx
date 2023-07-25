import { DetailProdduct } from "@/modules/DetailProduct";
import { COOKIES, getCookies } from "@/utils/cookies";
import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default DetailProdduct;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const data = getCookies(COOKIES.token);
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale as string)),
    },
  };
};
