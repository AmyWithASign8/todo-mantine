import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import themeSlice from "./slices/themeSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    themeState: themeSlice,
    user: userSlice,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
