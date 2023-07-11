import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/store/index";

export interface IJobModal {
  id: number | null;
  jobModalType: "detail" | "watchlist" | "manager" | null;
  tabId: number | null;
  companyId: number | null;
  followingId: number | null;
  filter: {
    locationId?: number | null;
    templateId?: number | null;
    keywordId?: number | null;
    hours?: number | null;
    news?: string | null;
    // datePosted: string | number | null;
    // tags: {
    //   facebook: boolean;
    //   php: boolean;
    //   developer: boolean;
    //   welcome: boolean;
    //   basicChip: boolean;
    // };
  };
  listRead: number[];
}

const initialState = {
  id: null,
  tabId: null,
  companyId: null,
  followingId: null,
  jobModalType: null,
  filter: {
    locationId: null,
    templateId: 11,
    keywordId: null,
    hours: null,
    // datePosted: null,
    // tags: {
    //   facebook: true,
    //   php: true,
    //   developer: true,
    //   welcome: true,
    //   basicChip: true,
    // },
  },
  listRead: [] as any,
} as IJobModal;

export const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setJobId: (
      state: IJobModal,
      action: PayloadAction<null | [IJobModal["id"], IJobModal["jobModalType"]]>
    ) => {
      if (!action.payload) {
        return { ...state, id: null };
      }
      return {
        ...state,
        id: action.payload[0],
        jobModalType: action.payload[1],
      };
    },
    setTabId: (state: IJobModal, action: PayloadAction<IJobModal["tabId"]>) => {
      return { ...state, tabId: action.payload };
    },
    setCompanyId: (
      state: IJobModal,
      action: PayloadAction<IJobModal["companyId"]>
    ) => {
      return { ...state, companyId: action.payload };
    },
    setFollowingId: (
      state: IJobModal,
      action: PayloadAction<
        null | [IJobModal["followingId"], IJobModal["jobModalType"]]
      >
    ) => {
      if (!action.payload) {
        return { ...state, followingId: null };
      }
      return {
        ...state,
        followingId: action.payload[0],
        jobModalType: action.payload[1],
      };
    },
    setFilter: (
      state: IJobModal,
      action: PayloadAction<IJobModal["filter"]>
    ) => {
      return { ...state, filter: action.payload };
    },
    setListRead: (
      state: IJobModal,
      action: PayloadAction<IJobModal["listRead"]>
    ) => {
      return { ...state, listRead: action.payload };
    },
  },
});

export const {
  setJobId,
  setTabId,
  setFilter,
  setCompanyId,
  setFollowingId,
  setListRead,
} = jobSlice.actions;

export const getJobId = (state: RootState) => state.job.id;

export const getListRead = (state: RootState) => state.job.listRead;

export const getCompanyId = (state: RootState) => state.job.companyId;

export const getFollowingId = (state: RootState) => state.job.followingId;

export const getTabId = (state: RootState) => state.job.tabId;

export const getFilter = (state: RootState) => state.job.filter;

export const getJobModalType = (state: RootState) => state.job.jobModalType;

export default jobSlice.reducer;
