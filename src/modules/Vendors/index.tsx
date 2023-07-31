/* eslint-disable react-hooks/exhaustive-deps */
import { Layout } from "@/layout";
import { PageComponent } from "next";
import AllVendors from "./components/AllVendors";
import { BoxBackground } from "./styled";

export const Vendors: PageComponent = () => {
  return (
    <>
      <BoxBackground />
      <AllVendors />
    </>
  );
};

Vendors.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
