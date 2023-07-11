import { useQuery, UseQueryOptions } from "react-query";
import { crawlNews, getNews } from "./request";
import { request } from "api/axios";
import { INewResponse, INewsRequest } from "./types";

export const useGetNews = (
  params: INewsRequest,
  option?: UseQueryOptions<INewResponse[], Error>
) => {
  return useQuery<INewResponse[], Error>(
    ["/get/news", params],
    () => getNews(params),
    option
  );
};

export const useCrawlNews = (
  params?: INewsRequest,
  option?: UseQueryOptions<INewResponse[], Error>
) => {
  return useQuery<INewResponse[], Error>(
    ["/crawl/news-api", params],
    () => crawlNews(params),
    option
  );
};
