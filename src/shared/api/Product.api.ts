import { api } from "./api";
import { type Product, productListSchema, type ProductPage, productPageSchema, productSchema } from "./types/api.types";


export const productApi = api.injectEndpoints({
    endpoints: builder => ({
        getProductsFilter: builder.query<Product[], string>({
            query:(url) => `/product?${url}`,
            providesTags: () => [
                {
                    type: 'Products'
                }
            ],
            transformResponse: (data:unknown) => productListSchema.parse(data)
        }),
        getProductsFilterPage: builder.query<ProductPage, string>({
            query:(url) => `/product?${url}`,
            providesTags: () => [
                {
                    type: 'Products'
                }
            ],
            transformResponse: (data:unknown) => productPageSchema.parse(data)
        }),
        getProduct: builder.query<Product, string>({
            query: (id) => `/product/${id}`,
            providesTags: () => [
                {
                    type: "Products"
                }
            ],
            transformResponse: (data:unknown) => productSchema.parse(data)
        })
    })
})

export const {useGetProductQuery, useGetProductsFilterQuery, useGetProductsFilterPageQuery} = productApi