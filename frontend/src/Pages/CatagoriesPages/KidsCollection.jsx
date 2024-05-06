import ShowProducts from "../../Components/Layouts/ShowProducts";
import { useEffect, useState } from "react";
export default function KidsCollection() {
  const [kidsCollection, KidsCollection] = useState([]);

  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://frony-with-node.vercel.app/products/kids"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();
      setisLoading(true);
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
          isLoading={isLoading}
        />
      )}
    </>
  );
}
