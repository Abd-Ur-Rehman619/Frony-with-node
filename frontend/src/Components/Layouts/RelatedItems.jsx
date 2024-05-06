import { useEffect, useState } from "react";
import TitleLabel from "./TitleLabel";
import ProductCard from "./ProductCard";

export default function RelatedItems({ productsData, product }) {
  const [relatedItems, setRelateditems] = useState(null);

  useEffect(() => {
    const prouducts = productsData.filter(
      (myProduct) => myProduct.brand === product.brand
    );
    setRelateditems(prouducts);
  }, [product]);

  return (
    <>
      <main className="flex flex-col gap-10">
        <div>
          <TitleLabel>Related Item's</TitleLabel>
        </div>
        <div className="grid gap-8 justify-center items-center grid-cols-2 sm:justify-center max-md:gap-0.5 max-lg:gap-3 sm:items-center  sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {relatedItems &&
            relatedItems.map((items) => (
              <div
                key={items._id}
                className="flex flex-col  md:w-[270px] md:mx-0  relative mx-4 h-full"
              >
                <ProductCard
                  slug={items.slug}
                  name={items.name}
                  price={items.price}
                  brand={items.brand}
                  discount={items.discount}
                  gender={items.gender}
                  image={`../${items.imageURL}`}
                />
              </div>
            ))}
        </div>
      </main>
    </>
  );
}
