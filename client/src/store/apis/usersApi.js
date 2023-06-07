import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "../slices/apiSlice";

const usersApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:5000/api/ecom/user",
  }),

  endpoints(builder) {
    return {
      loginUser: builder.mutation({
        query: (data) => {
          console.log(data);
          return {
            url: "/login",
            method: "POST",
            body: data,
          };
        },
      }),
    };
  },
});

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => {
    return {
      login: builder.mutation({
        query: (data) => {
          console.log(data);
          return {
            url: "/user/login",
            method: "POST",
            body: data,
          };
        },
      }),
    };
  },
});

export const { useLoginMutation } = authApi;

export const { useLoginUserMutation } = usersApi;

export { usersApi };
