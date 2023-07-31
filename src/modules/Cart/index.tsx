/* eslint-disable react-hooks/exhaustive-deps */
import { IJobListRequest, useCrawlJobsList } from "@/api/filter";
import { Layout } from "@/layout";
import { getFilter } from "@/store/ducks/job/slice";
import { useAppSelector } from "hooks/useRedux";
import { PageComponent } from "next";
import { useEffect, useState } from "react";
// import { BoxBackground } from "./styled";

export const Cart: PageComponent = () => {
  return (
    <>
      {/* <BoxBackground /> */}
      {/* <AllVendors /> */}
    </>
  );
};

Cart.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
