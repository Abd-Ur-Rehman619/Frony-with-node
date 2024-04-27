import ShowProducts from "../../Components/Layouts/ShowProducts";
import { useEffect, useState } from "react";
export default function Sandals() {
  const [sandalsCollection, setSandalsCollection] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/products/sandals");

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();
      setSandalsCollection(data);
    }
    fetchData();
  }, []);
  return (
    <>
      {sandalsCollection && (
        <ShowProducts
          titleLabel={"Sandals Collection"}
          descriptionLabel={"View All Sandals Shoes"}
          products={sandalsCollection}
        />
      )}
    </>
  );
}
