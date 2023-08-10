/* eslint-disable react-hooks/exhaustive-deps */
import { Layout } from "@/layout";
import { PageComponent } from "next";
import { BoxBackground } from "./styled";
import CartDetail from "./components/CartDetail";

export const AllOrder: PageComponent = () => {
  return (
    <>
      <BoxBackground />
      <CartDetail />
    </>
  );
};

AllOrder.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
