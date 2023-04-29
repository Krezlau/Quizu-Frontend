import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAlertState {
  isActive: boolean;
  pos: string;
  type: string;
  text: string;
}

const initialState: IAlertState = {
  isActive: false,
  pos: "-bottom-full",
  type: "",
  text: "",
};

const alertSlice = createSlice({
  name: "alert",
  initialState: initialState,
  reducers: {
    show: (
      state,
      action: PayloadAction<{
        type: string;
        text: string;
      }>
    ) => {
      state.isActive = true;
      state.pos = "-bottom-10";
      state.type = action.payload.type;
      state.text = action.payload.text;
    },
    hide: (state) => {
      state.isActive = false;
      state.pos = "-bottom-full";
    },
  },
});

export const alertActions = alertSlice.actions;

export default alertSlice;
