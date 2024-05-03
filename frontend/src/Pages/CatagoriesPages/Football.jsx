import { useEffect, useState } from "react";
import ShowProducts from "../../Components/Layouts/ShowProducts";

export default function Football() {
  const [footballCollection, setFootballCollection] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/products/football");

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();
      setisLoading(true);
      setFootballCollection(data);
    }
    fetchData();
  }, []);
  return (
    <>
      {footballCollection && (
        <ShowProducts
          titleLabel={"Football Collection"}
          descriptionLabel={"View All Football Shoes"}
          products={footballCollection}
          isLoading={isLoading}
        />
      )}
    </>
  );
}
