import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface RouterState {
  activePage: string;
}

const initialState: RouterState = {
  activePage: "",
};

export const routerSlice = createSlice({
  name: "router",
  initialState,
  reducers: {
    active: (state, action: PayloadAction<string>) => {
      state.activePage = action.payload;
    },
  },
});

export const { active } = routerSlice.actions;

export default routerSlice.reducer;
