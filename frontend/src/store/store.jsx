import { configureStore } from "@reduxjs/toolkit";
import { cartReducer, logReducer } from "./cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    log: logReducer,
  },
});
