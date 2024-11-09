import { createApi } from "@reduxjs/toolkit/query/react";
import data from "../data.json";

export const dataApi = createApi({
    reducerPath: 'dataApi',
    baseQuery: async () => ({data}),
    endpoints: (builder) => ({
        getData: builder.query({
            query: () => '',
        }),
    }),
});
export const {useGetDataQuery} = dataApi;