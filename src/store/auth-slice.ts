import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAuthState {
  accessToken: string;
  isLoggedIn: boolean;
  userId: string;
  username: string;
}

const initialState: IAuthState = {
  accessToken: "",
  isLoggedIn: false,
  userId: "",
  username: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{
        username: string;
        accessToken: string;
        userId: string;
      }>
    ) => {
      state.accessToken = action.payload.accessToken;
      state.isLoggedIn = true;
      state.username = action.payload.username;
      state.userId = action.payload.userId;
    },
    logout: (state) => {
      state.accessToken = initialState.accessToken;
      state.isLoggedIn = initialState.isLoggedIn;
      state.username = initialState.username;
      state.userId = initialState.userId;
    },
    register: (
      state,
      action: PayloadAction<{
        idToken: string;
        username: string;
        userId: string;
      }>
    ) => {
      state.isLoggedIn = true;
      state.username = action.payload.username;
      state.accessToken = action.payload.idToken;
      state.userId = action.payload.userId;
    },
    refresh: (state, action: PayloadAction<{ token: string }>) => {
      state.accessToken = action.payload.token;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
