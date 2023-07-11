import { IPaginationRequest } from "./../types";
import { useQuery, UseQueryOptions } from "react-query";
import { getDetailManager, getExample, getFollowIng } from "./request";
import {
  IAddManagerResponse,
  IExampleTypeResponse,
  IListFollowingResponse,
} from "./types";

export const useFeaturedNFT = (
  option?: UseQueryOptions<IExampleTypeResponse, Error>
) => {
  return useQuery<IExampleTypeResponse, Error>(
    "/nfts/homepage",
    getExample,
    option
  );
};

export const useGetListFollowing = (
  params: IPaginationRequest,
  option?: UseQueryOptions<IListFollowingResponse, Error>
) => {
  return useQuery<IListFollowingResponse, Error>(
    [`/following/list-following`, params],
    () => getFollowIng(params),
    option
  );
};

export const useGetDetailManager = (
  id: number,
  option?: UseQueryOptions<IAddManagerResponse, Error>
) => {
  return useQuery<IAddManagerResponse, Error>(
    [`/following/detail-follow-manager-team`, id],
    () => getDetailManager(id),
    option
  );
};
