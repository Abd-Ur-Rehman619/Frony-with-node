import { useEffect, useState } from "react";
import products from "../../json/AllShoes.json";

export function useProductFilterByCategory(category) {
  const [filteredProducts, setFilteredProducts] = useState(null);

  useEffect(() => {
    const filteredProducts = products.filter(
      (product) => product.category === category
    );
    setFilteredProducts(filteredProducts);
  }, [category]);

  return filteredProducts;
}
