import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SystemState {
  theme: "light" | "dark";
}

const initialState: SystemState = {
  theme: "light", // domyślny motyw
};

const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = systemSlice.actions;
export default systemSlice.reducer;
