import { RootState } from "./store";

export const selectItems = (state: RootState) => {
  return state.items.items;
};

export const selectItemById =
  (state: RootState) => (id: string) => {
    const item = state.items.items.find(
      (item) => item.id === id
    );

    return item || false;
  };
