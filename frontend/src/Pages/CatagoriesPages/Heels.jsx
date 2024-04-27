import ShowProducts from "../../Components/Layouts/ShowProducts";
import { useEffect, useState } from "react";

export default function Heels() {
  const [heelsCollection, setHeelsCollection] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/products/heels");

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();
      setHeelsCollection(data);
    }
    fetchData();
  }, []);
  return (
    <>
      {heelsCollection && (
        <ShowProducts
          titleLabel={"Heels Collection"}
          descriptionLabel={"View All Heels Shoes"}
          products={heelsCollection}
        />
      )}
    </>
  );
}
