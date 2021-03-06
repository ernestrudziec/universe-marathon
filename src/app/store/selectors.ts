import { RootState } from "./store";

// items

export const selectItems = (state: RootState) => {
  return state.items.items;
};

export const selectItemById = (state: RootState) => (id: string) => {
  const item = state.items.items.find((item) => item.id === id);

  return item || { id, state: "not_watched" };
};

// settings

export const selectSettings = (state: RootState) => {
  return state.settings;
};
