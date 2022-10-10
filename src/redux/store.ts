import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    themeState: themeSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
