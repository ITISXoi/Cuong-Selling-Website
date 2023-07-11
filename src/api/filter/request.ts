import { IPaginationRequest } from "./../types";
import {
  IListLocationResponse,
  ITemplateCrawlResponse,
  ILocationRequest,
  IListKeywordReponse,
  IListJobResponse,
  IJobListRequest,
  IJobDetailRequest,
  IJobReponse,
  IKeywordFilterResponse,
  ILocationResponse,
} from "./types";
import { request } from "api/axios";

export const getLocationList = async (
  params?: ILocationRequest
): Promise<ILocationResponse[]> => {
  const res = await request({
    url: "/crawl/get-unread-by-locations",
    method: "GET",
    params: params,
  });
  return res.data;
};

export const getSocialTemplateList = async (
  params?: IPaginationRequest
): Promise<ITemplateCrawlResponse[]> => {
  const res = await request({
    url: "/template-crawler/list",
    method: "GET",
    params: params,
  });
  return res.data;
};

export const getKeyWordList = async (
  params?: IPaginationRequest
): Promise<IListKeywordReponse> => {
  const res = await request({
    url: "/keyword/list",
    method: "GET",
    params: params,
  });
  return res.data;
};

export const getListJob = async (
  params?: IJobListRequest
): Promise<IListJobResponse> => {
  const res = await request({
    url: "/crawl/detail",
    method: "GET",
    params: params,
  });
  let temp: IListJobResponse = res.data;
  const { list = [], pagination } = temp;
  console.log("lol", "11212", params);
  return {
    pagination,
    list: list.map((item: IJobReponse) => {
      if (item.templateId === 11) {
        return {
          ...item,
          field1: item.field3,
          field2: item.field1,
          field3: item.field5,
          field4: item.field2,
          field5: item.field4,
        };
      } else return item;
    }),
  };
};

export const getJobDetail = async (
  params?: IJobDetailRequest
): Promise<IJobReponse> => {
  const res = await request({
    url: "/crawl/get-detail-template",
    method: "GET",
    params: params,
  });
  let temp: IJobReponse = res.data?.length > 0 ? res.data[0] : {};
  if (temp?.templateId === 11) {
    return {
      ...temp,
      field1: temp.field3,
      field2: temp.field1,
      field3: temp.field5,
      field4: temp.field2,
      field5: temp.field4,
    };
  }
  return temp;
};

export const getFilterKeyWord = async (
  params?: IJobListRequest
): Promise<IKeywordFilterResponse[]> => {
  const res = await request({
    url: "/crawl/get-unread-by-keywords",
    method: "GET",
    params: params,
  });
  return res.data;
};
