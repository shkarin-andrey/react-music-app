import { configureStore } from "@reduxjs/toolkit";
import { shazamApi } from "./api/shazamApi";
import trackReducer from "./redux/trackSlice";

const store = configureStore({
  reducer: {
    track: trackReducer,
    [shazamApi.reducerPath]: shazamApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
