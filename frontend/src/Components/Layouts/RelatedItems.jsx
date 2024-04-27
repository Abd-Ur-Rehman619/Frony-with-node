import { useEffect, useState } from "react";
import TitleLabel from "./TitleLabel";
import productsData from "../../json/AllShoes.json";
import ProductCard from "./ProductCard";

export default function RelatedItems({ product }) {
  const [relatedItems, setRelateditems] = useState(null);

  useEffect(() => {
    const prouducts = productsData.filter(
      (myProduct) => myProduct.brand === product.brand
    );
    setRelateditems(prouducts);
  }, []);
  console.log(relatedItems);

  return (
    <>
      <main className="flex flex-col gap-10">
        <div>
          <TitleLabel>Related Item's</TitleLabel>
        </div>
        <div className="grid grid-cols-5 gap-10">
          {relatedItems &&
            relatedItems.map((items) => (
              <div key={items.id}>
                <ProductCard
                  slug={items.slug}
                  name={items.name}
                  price={items.price}
                  brand={items.brand}
                  discount={items.discount}
                  gender={items.gender}
                  image={items.imageURL}
                />
              </div>
            ))}
        </div>
      </main>
    </>
  );
}
