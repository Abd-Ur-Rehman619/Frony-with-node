import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartData: [],
  },
  reducers: {
    setCartData: (state, action) => {
      state.cartData = action.payload;
    },
  },
});

export const { setCartData } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
