import {
  createSlice,
  PayloadAction,
  current,
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
      // console.log(current(state.items));
      const currentItem = current(state.items).find(
        (item) => item.id === action.payload.id
      );

      const currentItemIndex = current(
        state.items
      ).findIndex((item) => item.id === action.payload.id);

      if (!currentItem) {
        state.items = [
          ...state.items,
          {
            id: action.payload.id,
            state: "watched",
          },
        ];
      } else {
        if (currentItem.state === "skipped") {
          state.items = current(state.items).filter(
            (item) => item.id !== action.payload.id
          );
        } else {
          state.items[currentItemIndex].state = "skipped";
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleItem } = itemsSlice.actions;

export default itemsSlice.reducer;
