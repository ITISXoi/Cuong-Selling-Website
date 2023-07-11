import { IPaginationRequest } from "./../types";
import {
  IAddManagerRequest,
  IAddManagerResponse,
  ICreateWatchListRequest,
  IExampleTypeRequest,
  IFollowCompanyResponse,
  IListFollowingResponse,
  IUpdateManageResponse,
  IUpdateManagerRequest,
} from "./types";
import { request } from "api/axios";

export const getExample = async (params: IExampleTypeRequest) => {
  const res = await request({
    method: "get",
    url: `/example`,
    params: params,
  });

  return res.data.items;
};

export const followCompany = async (
  params: IExampleTypeRequest
): Promise<IFollowCompanyResponse> => {
  const res = await request({
    method: "post",
    url: `/following/create`,
    data: params,
  });
  return res.data;
};

export const createWatchList = async (
  params: ICreateWatchListRequest
): Promise<IFollowCompanyResponse> => {
  const res = await request({
    method: "post",
    url: `/following/add-detail-follow`,
    data: params,
  });
  return res.data;
};

export const getFollowIng = async (
  params: IPaginationRequest
): Promise<IListFollowingResponse> => {
  const res = await request({
    method: "get",
    url: `/following/list-following`,
    params: params,
  });
  return res.data;
};

export const deleteFollowing = async (
  id: number
): Promise<IListFollowingResponse> => {
  const res = await request({
    method: "delete",
    url: `/following/${id}`,
  });
  return res.data;
};

export const addManager = async (
  params: IAddManagerRequest
): Promise<IUpdateManageResponse> => {
  const res = await request({
    method: "post",
    url: `/following/add-detail-follow-manager-team`,
    data: params,
  });
  return res.data;
};

export const updateManager = async (
  params: IUpdateManagerRequest
): Promise<IUpdateManageResponse> => {
  const res = await request({
    method: "post",
    url: `/following/update-detail-follow-manager-team`,
    data: params,
  });
  return res.data;
};

export const getDetailManager = async (
  id: number
): Promise<IAddManagerResponse> => {
  const res = await request({
    method: "get",
    url: `/following/detail-follow-manager-team/${id}`,
  });
  return res.data;
};
