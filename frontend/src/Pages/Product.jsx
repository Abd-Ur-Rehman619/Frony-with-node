import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductDetails from "../Components/Layouts/ProductDetails";
import RelatedItems from "../Components/Layouts/RelatedItems";
import productsData from "../json/AllShoes.json";

export default function Product() {
  const { productSlug } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = productsData.find(
      (product) => product.slug === productSlug
    );
    setProduct(foundProduct);
  }, [productSlug]);

  return (
    <>
      <div className="flex items-center flex-col gap-32 h-screens">
        BreadCrumb
        <div className="container flex gap-32">
          <ProductDetails product={product} />
        </div>
        <div className="container flex gap-32">
          {product && <RelatedItems product={product} />}
        </div>
      </div>
    </>
  );
}
