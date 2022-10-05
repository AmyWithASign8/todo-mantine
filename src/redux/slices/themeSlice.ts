import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ThemeState {
  themeMod: string;
}

const initialState: ThemeState = {
  themeMod: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    switchTheme: (state) => {
      state.themeMod = "dark";
    },
  },
});

// Action creators are generated for each case reducer function
export const { switchTheme } = themeSlice.actions;

export default themeSlice.reducer;
