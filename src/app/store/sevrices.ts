// Define a service using a base URL and expected endpoints
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {DTO} from "@/shared/api";


export const couponsApi = createApi({
    reducerPath: "pokemonApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://185.178.44.117/api/v1"}),
    endpoints: (builder) => ({
        getTrendCoupons: builder.query<DTO.SearchResult, number>({
            query: (page) => `coupons/trends?page=${page}`
        })
    })

});

export const {useGetTrendCouponsQuery} = couponsApi;
