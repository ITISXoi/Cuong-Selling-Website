import { useQuery, UseQueryOptions } from "react-query";
import { IPaginationRequest } from "../types";
import {
  getFilterKeyWord,
  getJobDetail,
  getKeyWordList,
  getListJob,
  getLocationList,
  getSocialTemplateList,
} from "./request";
import {
  ILocationResponse,
  ITemplateCrawlResponse,
  ILocationRequest,
  IListKeywordReponse,
  IJobListRequest,
  IListJobResponse,
  IJobDetailRequest,
  IJobReponse,
  IKeywordFilterResponse,
} from "./types";

export const useLocationList = (
  params?: ILocationRequest,
  option?: UseQueryOptions<ILocationResponse[], Error>
) => {
  return useQuery<ILocationResponse[], Error>(
    ["/crawl/get-unread-by-locations", params],
    () => getLocationList(params),
    option
  );
};

export const useTemplateCrawlList = (
  params?: IPaginationRequest,
  option?: UseQueryOptions<ITemplateCrawlResponse[], Error>
) => {
  return useQuery<ITemplateCrawlResponse[], Error>(
    ["/template-crawler/list", params],
    () => getSocialTemplateList(params),
    option
  );
};

export const useGetKeyWordList = (
  params?: IPaginationRequest,
  option?: UseQueryOptions<IListKeywordReponse, Error>
) => {
  return useQuery<IListKeywordReponse, Error>(
    ["/template-crawler/list", params],
    () => getKeyWordList(params),
    option
  );
};

export const useCrawlJobsList = (
  params?: IJobListRequest,
  option?: UseQueryOptions<IListJobResponse, Error>
) => {
  return useQuery<IListJobResponse, Error>(
    ["/crawl/detail", params],
    () => getListJob(params),
    option
  );
};

export const useGetDetailJob = (
  params?: IJobDetailRequest,
  option?: UseQueryOptions<IJobReponse, Error>
) => {
  return useQuery<IJobReponse, Error>(
    ["/crawl/get-detail-template", params],
    () => getJobDetail(params),
    option
  );
};

export const useGetFilterKeyWord = (
  params?: IJobListRequest,
  option?: UseQueryOptions<IKeywordFilterResponse[], Error>
) => {
  return useQuery<IKeywordFilterResponse[], Error>(
    ["/crawl/get-unread-by-keywords", params],
    () => getFilterKeyWord(params),
    option
  );
};