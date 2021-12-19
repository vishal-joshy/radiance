import { configureStore } from "@reduxjs/toolkit";
import generalReducer from "./general/generalSlice";

export const store = configureStore({
  reducer: {
    general: generalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
