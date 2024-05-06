import { useEffect, useState } from "react";
import ShowProducts from "../../Components/Layouts/ShowProducts";

export default function Casual() {
  const [casualCollection, setCasualCollection] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://frony-with-node.vercel.app/products/casual"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();
      setisLoading(true);
      setCasualCollection(data);
    }
    fetchData();
  }, [casualCollection]);
  return (
    <>
      {casualCollection && (
        <ShowProducts
          titleLabel={"Casual Collection"}
          descriptionLabel={"View All Casual Shoes"}
          products={casualCollection}
          isLoading={isLoading}
        />
      )}
    </>
  );
}
