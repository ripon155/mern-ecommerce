import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// import { setCredentials, logOut } from "./authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://127.0.0.1:5000/api/ecom",
  //   credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    console.log(getState().auth);
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

// const baseQueryWithReauth = async (args, api, extraOptions) => {
//   let result = await baseQuery(args, api, extraOptions);
//   if (result.error && result.error.status === 401) {
//     console.log("sending refresh token");
//     // try to get a new token
//     const refreshResult = await baseQuery("/user/login", api, extraOptions);
//     if (refreshResult.data) {
//       const user = api.getState().auth.user;
//       // store the new token
//       api.dispatch(setCredentials(...refreshResult.data, user));
//       // retry the initial query
//       result = await baseQuery(args, api, extraOptions);
//     } else {
//       api.dispatch(logOut());
//     }
//   }
//   return result;
// };

export const apiSlice = createApi({
  reducerPath: "authToken",
  baseQuery: baseQuery,
  endpoints: () => ({}),
});
