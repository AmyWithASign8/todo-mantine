import { StringLike } from "@firebase/util";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IPizza {
  name: string;
  imgUrl: string;
}

const initialState: State = {
  totalPrice: 0,
  items: [],
};

interface State {
  totalPrice: number;
  items: IPizza[];
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<IPizza>) {
      state.items.push(action.payload);
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.name !== action.payload);
    },
    clearItems(state) {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
