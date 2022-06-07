import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Level = "superfan" | "casual" | "speedrun";

export interface SettingsState {
  level: Level;
}

const initialState: SettingsState = {
  level: "superfan",
};

export const settingsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    toggleLevel: (state, action: PayloadAction<{ level: Level }>) => {
      state.level = action.payload.level;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleLevel } = settingsSlice.actions;

export default settingsSlice.reducer;
