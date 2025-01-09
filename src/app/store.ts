import { configureStore } from "@reduxjs/toolkit";
import systemReducer from "./systemSlice";

export const store = configureStore({
  reducer: {
    system: systemReducer,
  },
});

// Typy dla użycia z TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
