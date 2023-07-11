import {
  ILoginByPasswordRequest,
  ILoginByPasswordResponse,
  IUserInfoResponse,
} from "./types";
import { request } from "api/axios";

export const loginByPassword = async (
  params: ILoginByPasswordRequest
): Promise<ILoginByPasswordResponse> => {
  const res = await request({
    method: "post",
    url: `/user/login-by-password`,
    data: params,
  });
  return res.data;
};

export const getUserInfo = async (): Promise<IUserInfoResponse> => {
  const res = await request({
    method: "get",
    url: `/user/me`,
  });
  return res.data;
};
