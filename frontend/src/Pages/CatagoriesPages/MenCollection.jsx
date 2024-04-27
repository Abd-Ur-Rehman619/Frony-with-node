import ShowProducts from "../../Components/Layouts/ShowProducts";
import { useEffect, useState } from "react";

export default function MenCollection() {
  const [menCollection, setMenCollection] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/products/men");

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();
      setMenCollection(data);
    }
    fetchData();
  }, []);

  return (
    <>
      {menCollection && (
        <ShowProducts
          titleLabel={"Men's Collection"}
          descriptionLabel={"View All Men's Shoes"}
          products={menCollection}
        />
      )}
    </>
  );
}
