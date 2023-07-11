import { useQuery, UseQueryOptions } from "react-query";
import { getUserInfo } from "./request";
import { IUserInfoResponse } from "./types";

export const useGetUserInfo = (
  option?: UseQueryOptions<IUserInfoResponse, Error>
) => {
  return useQuery<IUserInfoResponse, Error>(
    "/user/me",
    getUserInfo,
    option
  );
};
