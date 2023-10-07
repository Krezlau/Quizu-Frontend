import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISearchState {
  text: string;
  supressSearchWindow: boolean;
}

const initialState: ISearchState = {
  text: "",
  supressSearchWindow: false,
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
      state.supressSearchWindow = false;
    },
    reset: (state) => {
      state.text = "";
    },
    supress: (state) => {
      state.supressSearchWindow = true;
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice;
