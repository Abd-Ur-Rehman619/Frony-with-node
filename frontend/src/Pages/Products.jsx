import { useDispatch, useSelector } from "react-redux";
import ShowProducts from "../Components/Layouts/ShowProducts";
import { useEffect } from "react";
import { fetchCartData } from "../store/cart-action";

export default function Products() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  const allShoes = useSelector((state) => state.cart.cartData);
  return (
    <>
      <ShowProducts
        titleLabel={"Products"}
        descriptionLabel={"View All Products"}
        products={allShoes}
      />
    </>
  );
}
