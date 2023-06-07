import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:5000/api/ecom",
  }),

  endpoints(builder) {
    return {
      fetchProducts: builder.query({
        query: () => {
          return {
            url: "/products",
            method: "GET",
          };
        },
      }),
      getProductById: builder.query({
        query: (id) => {
          return {
            url: `/products/${id}`,
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchProductsQuery, useGetProductByIdQuery } = productsApi;

export { productsApi };
