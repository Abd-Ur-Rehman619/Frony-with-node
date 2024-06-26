import ShowProducts from "../../Components/Layouts/ShowProducts";
import { useEffect, useState } from "react";

export default function Heels() {
  const [heelsCollection, setHeelsCollection] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://frony-with-node.vercel.app/products/heels"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();
      setisLoading(true);
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
          isLoading={isLoading}
        />
      )}
    </>
  );
}
