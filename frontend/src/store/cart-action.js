import { setCartData } from "./cartSlice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://frony-with-node.vercel.app/products"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(setCartData(cartData));
    } catch (error) {
      console.log(error);
    }
  };
};
