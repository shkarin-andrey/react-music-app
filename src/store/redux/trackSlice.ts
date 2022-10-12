import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface TrackState {
  activeTrack: string;
  statusTrack: "stop" | "active" | "pause";
}

const initialState: TrackState = {
  activeTrack: "",
  statusTrack: "stop",
};

export const trackSlice = createSlice({
  name: "track",
  initialState,
  reducers: {
    active: (state, action: PayloadAction<string>) => {
      state.activeTrack = action.payload;
    },
    status: (state, action: PayloadAction<"stop" | "active" | "pause">) => {
      state.statusTrack = action.payload;
    },
  },
});

export const { active, status } = trackSlice.actions;

export default trackSlice.reducer;
