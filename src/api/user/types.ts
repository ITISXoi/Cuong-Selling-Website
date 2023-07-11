export interface ILoginByPasswordRequest {
  email: string;
  password: string;
}
export interface ILoginByPasswordResponse {
  email: string;
  id: number;
  type: number;
  token: string;
}

export interface IUserInfoResponse {
  id: number;
  username: string;
  email: string;
  avatarUrl: any;
  status: any;
  createdAt: string;
  updatedAt: string;
  isActive: number;
  type: number;
}
