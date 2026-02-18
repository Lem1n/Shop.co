import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {productListSchema, type Product} from './types/api.types'


const BASE_URL = "http://localhost:3000";

export const api = createApi({
	reducerPath: "api",
	tagTypes: ["Products"],
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: (builder) => ({
		getProducts: builder.query<Product[], void>({
			query: () => "/product",
			providesTags: () => [
				{
					type: "Products",
				},
			],
            transformErrorResponse: (data:unknown) => productListSchema.parse(data)
		}),
	}),
});

export const {useGetProductsQuery} = api
