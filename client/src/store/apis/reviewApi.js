import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const reviewApi = createApi({
  reducerPath: "review",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:5000/api/ecom",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  //   63e6818ae3b78b62f96a19d6
  endpoints: (builder) => {
    return {
      getReviewById: builder.query({
        // providesTags: ["ProductReview"],
        //dynamic
        providesTags: (result, error, id) => {
          return [{ type: "ProductReview", id: id }];
        },
        query: (id) => {
          return {
            url: `/products/review/${id}`,
            method: "GET",
          };
        },
      }),

      removeReview: builder.mutation({
        invalidatesTags: (result, error, data) => {
          console.log(data);
          return [{ type: "ProductReview", id: data.proId }];
        },

        query: (data) => {
          return {
            url: `/products/${data.proId}/reviews/${data.id}`,
            method: "DELETE",
          };
        },
      }),

      checkout: builder.mutation({
        query: (cart) => {
          return {
            url: "/productcheckout/checkout-session",
            method: "POST",
            body: {
              data: cart,
            },
          };
        },
      }),

      addReview: builder.mutation({
        // invalidatesTags: ["ProductReview"],
        //dynamic tags

        invalidatesTags: (result, error, data) => {
          return [{ type: "ProductReview", id: data.id }];
        },
        query: (data) => {
          return {
            url: `/products/${data.id}/reviews`,
            method: "POST",
            body: {
              review: data.review,
              rating: data.rating,
            },
          };
        },
      }),
    };
  },
});
console.log(reviewApi);
export const {
  useAddReviewMutation,
  useGetReviewByIdQuery,
  useRemoveReviewMutation,
  useCheckoutMutation,
} = reviewApi;

export { reviewApi };
