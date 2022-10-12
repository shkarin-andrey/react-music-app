import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITrack } from "../../util/interface/ITrack";

export const shazamApi = createApi({
  reducerPath: "api/shazam",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "3c11af2fa7msh7cd3fe7b2de2eaep151642jsnd3da9212fc7d"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query<any, void>({
      query: () => "/charts/world",
    }),
    getTrackDetail: builder.query<ITrack, string>({
      query: (track_id) => ({
        url: "/tracks/details",
        params: { track_id },
      }),
    }),
  }),
});

export const { useGetTopChartsQuery, useGetTrackDetailQuery } = shazamApi;
