import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISearchState {
  text: string;
}

const initialState: ISearchState = {
  text: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    change: (
      state,
      action: PayloadAction<{
        text: string;
      }>
    ) => {
      state.text = action.payload.text;
    },
    reset: (state) => {
      state.text = "";
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice;
