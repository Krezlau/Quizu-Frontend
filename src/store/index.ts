import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import alertSlice from "./alert-slice";
import authSlice from "./auth-slice";
import playSlice from "./play-slice";

const persistConfig = {
  key: "play",
  storage: storage,
  whitelist: ["play"],
}

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  alert: alertSlice.reducer,
  play: playSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
