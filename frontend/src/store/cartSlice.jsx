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

const logSlice = createSlice({
  name: "LogState",
  initialState: false,
  reducers: {
    updateLog: (state) => {
      localStorage.setItem("isLoggedIn", "true");
      return true;
    },
    changeLog: (state) => {
      localStorage.setItem("isLoggedIn", "false");
      return false;
    },
  },
});
export const { setCartData } = cartSlice.actions;
export const { updateLog, changeLog } = logSlice.actions;

export const cartReducer = cartSlice.reducer;
export const logReducer = logSlice.reducer;
