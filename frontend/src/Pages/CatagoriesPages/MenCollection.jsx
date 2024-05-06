import ShowProducts from "../../Components/Layouts/ShowProducts";
import { useEffect, useState } from "react";

export default function MenCollection() {
  const [menCollection, setMenCollection] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://frony-with-node.vercel.app/products/men"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();
      setisLoading(true);
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
          isLoading={isLoading}
        />
      )}
    </>
  );
}
