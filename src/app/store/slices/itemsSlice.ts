import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

export interface Item {
  id: string;
  state: "watched" | "skipped";
}
export interface ItemsState {
  items: Array<Item>;
}

const initialState: ItemsState = {
  items: [],
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    toggleItem: (
      state,
      action: PayloadAction<{ id: string }>
    ) => {
      state.items = [
        ...state.items,
        {
          id: action.payload.id,
          state: "watched",
        },
      ];
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleItem } = itemsSlice.actions;

export default itemsSlice.reducer;
