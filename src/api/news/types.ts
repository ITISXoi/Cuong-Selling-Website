export interface IExampleTypeRequest {}
export interface IExampleTypeResponse {}

export interface INewsRequest {
  q?: string;
  country?: string;
  from?: string;
  to?: string;
  sortBy?: string;
  page?: number;
  limit: number;
  category?: string;
  type: "headline" | "everything";
  keyword?: string;
}

export interface INewResponse {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface Source {
  id: any;
  name: string;
}

export interface IMarkAsReadRequest {
  id: any;
  type: string;
}
