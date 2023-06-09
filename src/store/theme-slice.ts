import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IThemeState {
  theme: string;
}

const initialState: IThemeState = {
  theme: "mytheme",
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    change: (
      state,
      action: PayloadAction<{
        theme: string;
      }>
    ) => {
      state.theme = action.payload.theme;
    },
  },
});

export const themeActions = themeSlice.actions;

export default themeSlice;
