import ShowProducts from "../../Components/Layouts/ShowProducts";
import { useEffect, useState } from "react";

export default function Formal() {
  const [formalCollection, setFormalCollection] = useState([]);

  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://frony-with-node.vercel.app/products/formal"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();
      setisLoading(true);
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
          isLoading={isLoading}
        />
      )}
    </>
  );
}
