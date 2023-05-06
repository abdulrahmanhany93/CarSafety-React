import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Slices/Auth/AuthSlice";
import HomeReducer from "./Slices/home/homeSlice";
import BrandReducer from "./Slices/Brand/BrandSlice";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    home: HomeReducer,
    brand: BrandReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
