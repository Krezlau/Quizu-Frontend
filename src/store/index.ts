import { configureStore } from "@reduxjs/toolkit";
import alertSlice from "./alert-slice";
import authSlice from "./auth-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    alert: alertSlice.reducer,
  },
});

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
