import ShowProducts from "../../Components/Layouts/ShowProducts";
import { useEffect, useState } from "react";
export default function KidsCollection() {
  const [kidsCollection, KidsCollection] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/products/kids");

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();
      KidsCollection(data);
    }
    fetchData();
  }, []);
  return (
    <>
      {kidsCollection && (
        <ShowProducts
          titleLabel={"Kids's Collection"}
          descriptionLabel={"View All Kids's Shoes"}
          products={kidsCollection}
        />
      )}
    </>
  );
}
