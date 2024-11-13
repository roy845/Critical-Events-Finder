import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AllowedActiveTabString, TabsState } from "../types/types";

const initialState: TabsState = {
  activeTab: "table",
};

const tabSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<AllowedActiveTabString>) => {
      state.activeTab = action.payload;
    },
  },
});

export const { setActiveTab } = tabSlice.actions;
export default tabSlice.reducer;
