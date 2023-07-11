import { IPaginationResponse } from "../types";

export interface IExampleTypeRequest {}
export interface IExampleTypeResponse {}

export interface IFollowCompanyRequest {
  companyId: number;
}

export interface IFollowCompanyResponse {
  userId: number;
  aliasName: string;
  companyId: number;
  createdAt: number;
  updatedAt: number;
  linkFacebook: string;
  linkLinkedIn: string;
  linkTwitter: string;
  linkWebsite: string;
  id: number;
}

export interface ICreateWatchListRequest {
  companyId: number;
  linkFacebook?: string;
  linkTwitter?: string;
  linkLinkedIn?: string;
  linkWebsite?: string;
}

export interface IManagerResponse{
  id: number;
  followingId: number;
  name: string;
  facebookLink: string | null;
  twitterLink: string | null;
  linkedinLink: string | null;
  newFacebookPosts: number;
  newTwitterPosts: number;
  newLinkedInPosts: number;
  lastReadFacebook: string | null;
  lastReadTwitter: string | null;
  lastReadLinkedIn: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface IFollowingResponse {
  id: number;
  userId: number;
  companyId: number;
  aliasName: string;
  createdAt: string;
  updatedAt: string;
  linkFacebook?: null;
  linkLinkedIn?: null;
  linkTwitter?: null;
  linkWebsite?: null;
  newFacebookPosts: number;
  newTwitterPosts: number;
  newLinkedInPosts: number;
  newWebsitePosts: number;
  lastReadFacebook?: null;
  lastReadTwitter?: null;
  lastReadLinkedIn?: null;
  lastReadWebsite?: null;
  manager?: IManagerResponse;
}

export interface IListFollowingResponse {
  list: IFollowingResponse[];
  pagination: IPaginationResponse;
}

export interface IAddManagerRequest {
  followingId: number;
  name: string;
  facebookLink: string;
  twitterLink: string;
  linkedinLink: string;
}

export interface IUpdateManagerRequest {
  followingId: number;
  name: string;
  facebookLink: string;
  twitterLink: string;
  linkedinLink: string;
  id: number;
}

export interface IUpdateManageResponse {
  followingId: number;
  name: string;
  facebookLink: string;
  twitterLink: string;
  linkedinLink: string;
  createdAt: number;
  updatedAt: number;
  newFacebookPosts: number;
  newTwitterPosts: number;
  newLinkedInPosts: number;
  lastReadFacebook?: null;
  lastReadTwitter?: null;
  lastReadLinkedIn?: null;
  id: number;
}

export interface IAddManagerResponse {
  followingId: number;
  name: string;
  createdAt: number;
  updatedAt: number;
  facebookLink?: null;
  twitterLink?: null;
  linkedinLink?: null;
  newFacebookPosts: number;
  newTwitterPosts: number;
  newLinkedInPosts: number;
  lastReadFacebook?: null;
  lastReadTwitter?: null;
  lastReadLinkedIn?: null;
  id: number;
}
