import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/store/index";

export interface IProfileModal {
  type: "facebook" | "twitter" | null;
  link: string | null;
}

const initialState = {
  type: null,
  link: null,
} as IProfileModal;

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setTypeLink: (
      state: IProfileModal,
      action: PayloadAction<
        null | [IProfileModal["type"], IProfileModal["link"]]
      >
    ) => {
      if (!action.payload) {
        return { ...state, type: null, link: null };
      }
      return {
        ...state,
        type: action.payload[0],
        link: action.payload[1],
      };
    },
  },
});

export const { setTypeLink } = profileSlice.actions;

export const getTypeProfile = (state: RootState) => state.profile.type;
export const getLinkProfile = (state: RootState) => state.profile.link;

export default profileSlice.reducer;
