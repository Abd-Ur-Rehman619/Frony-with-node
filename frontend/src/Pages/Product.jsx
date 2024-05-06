import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductDetails from "../Components/Layouts/ProductDetails";
import RelatedItems from "../Components/Layouts/RelatedItems";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData } from "../store/cart-action";

export default function Product() {
  const { productSlug } = useParams();
  const [singleShoe, setSingleShoe] = useState([]);
  const cartData = useSelector((state) => state.cart.cartData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "http://localhost:3000/products/" + productSlug
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();
      setSingleShoe(data);
    }
    fetchData();
  }, [productSlug]);

  return (
    <>
      <div className="flex items-center flex-col gap-32 h-screens">
        <div className="md:flex 2xl:gap-32">
          <ProductDetails product={singleShoe} />
        </div>
        <div className="container flex gap-32">
          {singleShoe && (
            <RelatedItems productsData={cartData} product={singleShoe} />
          )}
        </div>
      </div>
    </>
  );
}
