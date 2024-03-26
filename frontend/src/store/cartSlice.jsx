import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItem !== -1) {
        state.items[existingItem].quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },

    removeItem(state, action) {
      const itemToRemoveIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemToRemoveIndex !== -1) {
        state.items.splice(itemToRemoveIndex, 1);
      }
    },
  },
});

const logSlice = createSlice({
  name: "LogState",
  initialState: false,
  reducers: {
    updateLog: (state) => {
      return true;
    },
    changeLog: (state) => {
      return false;
    },
  },
});

export const { addItem, updateQuantity, removeItem } = cartSlice.actions;
export const { updateLog, changeLog } = logSlice.actions;

export const cartReducer = cartSlice.reducer;
export const logReducer = logSlice.reducer;
