import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const outlayApi = createApi({
  reducerPath: "outlayApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/v1" }),
  endpoints: (builder) => ({
    getOutlayRows: builder.query({
      query: (entityId) => `/outlay-rows/entity/${entityId}/row/list`,
    }),
  }),
});

export const { useGetOutlayRowsQuery } = outlayApi;