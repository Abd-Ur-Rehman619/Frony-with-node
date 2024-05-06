import ShowProducts from "../../Components/Layouts/ShowProducts";
import { useEffect, useState } from "react";
export default function WomenCollection() {
  const [womenCollection, setWomenCollection] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://frony-with-node.vercel.app/products/women"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();
      setisLoading(true);
      setWomenCollection(data);
    }
    fetchData();
  }, []);
  return (
    <>
      {womenCollection && (
        <ShowProducts
          titleLabel={"Women's Collection"}
          descriptionLabel={"View All Women's Shoes"}
          products={womenCollection}
          isLoading={isLoading}
        />
      )}
    </>
  );
}
