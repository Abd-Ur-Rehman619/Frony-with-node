import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductDetails from "../Components/Layouts/ProductDetails";
import RelatedItems from "../Components/Layouts/RelatedItems";
import "react-toastify/dist/ReactToastify.css";

export default function Product() {
  const { productSlug } = useParams();
  const [product, setProduct] = useState(null);
  const [singleShoe, setSingleShoe] = useState([]);

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
          {product && <RelatedItems product={product} />}
        </div>
      </div>
    </>
  );
}
