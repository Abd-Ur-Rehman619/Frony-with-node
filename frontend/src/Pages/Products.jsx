import { useDispatch, useSelector } from "react-redux";
import ShowProducts from "../Components/Layouts/ShowProducts";
import { useEffect, useState } from "react";
import { fetchCartData } from "../store/cart-action";

export default function Products() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    dispatch(fetchCartData())
      .then(() => setIsLoading(true))
      .catch(() => setIsLoading(false));
  }, [dispatch]);

  const allShoes = useSelector((state) => state.cart.cartData);
  return (
    <>
      <ShowProducts
        titleLabel={"Products"}
        descriptionLabel={"View All Products"}
        products={allShoes}
        isLoading={isLoading}
      />
    </>
  );
}
