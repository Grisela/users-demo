import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../constant/urls";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: (odata: string) => odata,
    }),
  }),
});

export const { useLazyGetDataQuery } = api;
