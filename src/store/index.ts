import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import alertSlice from "./alert-slice";
import authSlice from "./auth-slice";
import playSlice from "./play-slice";
import searchSlice from "./search-slice";
import themeSlice from "./theme-slice";

const persistConfig = {
  key: "state",
  storage: storage,
  whitelist: ["play", "theme", "auth"],
}

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  alert: alertSlice.reducer,
  play: playSlice.reducer,
  theme: themeSlice.reducer,
  search: searchSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
