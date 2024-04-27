import { useEffect, useState } from "react";
import ShowProducts from "../../Components/Layouts/ShowProducts";

export default function Casual() {
  const [casualCollection, setCasualCollection] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/products/casual");

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();
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
        />
      )}
    </>
  );
}
