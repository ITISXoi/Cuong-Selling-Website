/* eslint-disable react-hooks/exhaustive-deps */
import { Layout } from "@/layout";
import { PageComponent } from "next";
import { BoxBackground } from "./styled";
import CartDetail from "./components/CartDetail";

export const Cart: PageComponent = () => {
  return (
    <>
      <BoxBackground />
      <CartDetail />
    </>
  );
};

Cart.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
