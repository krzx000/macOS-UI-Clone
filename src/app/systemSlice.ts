import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Application } from "../types/application";

interface SystemState {
  theme: "light" | "dark";
  runningApps: Application[];
}

const initialState: SystemState = {
  theme: "light",
  runningApps: [],
};

const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.theme = action.payload;
    },
    openApp: (state, action: PayloadAction<Application>) => {
      console.log("cwel");
      state.runningApps.push(action.payload);
    },
  },
});

export const { setTheme, openApp } = systemSlice.actions;
export default systemSlice.reducer;
