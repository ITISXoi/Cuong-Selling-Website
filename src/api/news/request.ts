import { IMarkAsReadRequest, INewResponse, INewsRequest } from "./types";
import axios from "axios";
import { API_NEWS_KEY } from "@/utils/constants";
import { request } from "api/axios";

export const getNews = async (params: INewsRequest) => {
  const apiKey = API_NEWS_KEY;
  const url = `https://newsapi.org/v2/everything`;
  const res = await axios({
    method: "get",
    url: url,
    params: { ...params, apiKey },
  });

  return res.data.articles;
};

export const crawlNews = async (
  params?: INewsRequest
): Promise<INewResponse[]> => {
  const res = await request({
    url: "/crawl/news-api",
    method: "GET",
    params: params,
  });
  return res.data.articles;
};

export const markAsReadData = async (
  params: IMarkAsReadRequest
): Promise<any> => {
  const res = await request({
    url: `/following/mark-as-read-data/${params.id}`,
    method: "PUT",
    params: { type: params.type },
  });
  return res.data;
};
