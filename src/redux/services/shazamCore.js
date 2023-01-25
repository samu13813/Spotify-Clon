import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// GET call to API fetching worlds chart with keys

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'f2e4a898bbmsh5b73b79b065ca26p1d9141jsn02663139a68c');

      return headers;
    }
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/world' }),
  })
});

export const {
  useGetTopChartsQuery,
} = shazamCoreApi;