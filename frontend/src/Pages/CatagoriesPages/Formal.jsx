import ShowProducts from "../../Components/Layouts/ShowProducts";
import { useEffect, useState } from "react";

export default function Formal() {
  const [formalCollection, setFormalCollection] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/products/formal");

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();
      setFormalCollection(data);
    }
    fetchData();
  }, []);
  return (
    <>
      {formalCollection && (
        <ShowProducts
          titleLabel={"Formal Collection"}
          descriptionLabel={"View All Formal Shoes"}
          products={formalCollection}
        />
      )}
    </>
  );
}
