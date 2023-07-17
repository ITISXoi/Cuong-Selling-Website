/* eslint-disable react-hooks/exhaustive-deps */
import { IJobListRequest, useCrawlJobsList } from "@/api/filter";
import { Layout } from "@/layout";
import { getFilter } from "@/store/ducks/job/slice";
import { useAppSelector } from "hooks/useRedux";
import { PageComponent } from "next";
import { useEffect, useState } from "react";
import { BoxBackground } from "./styled";
import AllVendors from "./components/AllVendors";

export const Vendors: PageComponent = () => {
  const [value, setValue] = useState(2);
  const [params, setParams] = useState<IJobListRequest>({ page: 1, limit: 10 });
  const filter = useAppSelector(getFilter);
  useEffect(() => {
    const temp = { ...filter };
    if (temp.news) {
      delete temp.news;
    }
    setParams({ ...params, ...temp });
  }, [filter]);

  const { data: { list: listCrawlJob = [], pagination } = {}, isLoading } =
    useCrawlJobsList(params);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
