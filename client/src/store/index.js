import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "./apis/productsApi";
import { usersApi } from "./apis/usersApi";
import { reviewApi } from "./apis/reviewApi";

import { apiSlice } from "./slices/apiSlice";
import { authReducer } from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(usersApi.middleware)
      .concat(apiSlice.middleware)
      .concat(reviewApi.middleware);
  },
});

setupListeners(store.dispatch);

export {
  useFetchProductsQuery,
  useGetProductByIdQuery,
} from "./apis/productsApi";

export { useLoginUserMutation } from "./apis/usersApi";
export {
  useAddReviewMutation,
  useGetReviewByIdQuery,
  useRemoveReviewMutation,
  useCheckoutMutation,
} from "./apis/reviewApi";
