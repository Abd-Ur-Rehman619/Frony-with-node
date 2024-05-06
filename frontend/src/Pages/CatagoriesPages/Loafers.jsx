import ShowProducts from "../../Components/Layouts/ShowProducts";
import { useEffect, useState } from "react";

export default function Loafers() {
  const [LoafersCollection, setLoafersCollection] = useState([]);

  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/products/loafers");

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();
      setisLoading(true);
      setLoafersCollection(data);
    }
    fetchData();
  }, []);
  return (
    <>
      {LoafersCollection && (
        <ShowProducts
          titleLabel={"Loafers Collection"}
          descriptionLabel={"View All Loafers Shoes"}
          products={LoafersCollection}
          isLoading={isLoading}
        />
      )}
    </>
  );
}
