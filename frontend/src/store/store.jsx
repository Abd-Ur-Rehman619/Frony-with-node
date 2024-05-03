import { configureStore } from "@reduxjs/toolkit";
import { cartReducer, logReducer } from "./cartSlice";

const persistedState = {
  log: localStorage.getItem("isLoggedIn") === "true",
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    log: logReducer,
  },
  preloadedState: persistedState,
});
