import { IPaginationRequest, IPaginationResponse } from "../types";

export interface ILocationRequest extends IPaginationRequest {
  name?: string;
}

export interface ILocationResponse {
  id: number;
  name: string;
  avatar: string;
  avatarType: string;
  code: string;
  createdAt: string;
  updatedAt: string;
  logoType: string;
  logoUrl: string;
  numberNew: number;
}

export interface IListLocationResponse {
  list: ILocationResponse[];
  pagination: IPaginationResponse;
}

export interface ITemplateCrawlResponse {
  id: number;
  name: string;
  link: string;
  type: string;
  methodCrawl: string;
  status: number;
  crawlTime: any;
  createdAt: string;
  updatedAt: string;
}

export interface IKeywordResponse {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface IListKeywordReponse {
  list: IKeywordResponse[];
  pagination: IPaginationResponse;
}

export interface IJobReponse {
  id: number;
  templateId: number;
  projectId: any;
  followingId: any;
  keywordId: number;
  locationId: number;
  companyId: number;
  field1: string;
  field2: string;
  field3: string;
  field4: string;
  field5: string;
  field6: string;
  field7: any;
  field8: any;
  field9: any;
  field10: any;
  createdAt: string;
  updatedAt: string;
  isViewDetail: number;
  isFollow: number;
}

export interface IListJobResponse {
  list: IJobReponse[];
  pagination: IPaginationResponse;
}

export interface IJobListRequest extends IPaginationRequest {
  templateId?: number | null;
  keywordId?: number | null;
  locationId?: number | null;
  hours?: number | null;
}

export interface IJobDetailRequest {
  id: string | number | null;
}

export interface IKeywordFilterResponse {
  id: number;
  name: string;
  numberNew: number;
}
