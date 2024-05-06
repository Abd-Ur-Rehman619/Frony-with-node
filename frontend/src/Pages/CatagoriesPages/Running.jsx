import ShowProducts from "../../Components/Layouts/ShowProducts";
import { useEffect, useState } from "react";

export default function Running() {
  const [runningCollection, setRunningCollection] = useState([]);

  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/products/running");

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();
      setisLoading(true);
      setRunningCollection(data);
    }
    fetchData();
  }, []);
  return (
    <>
      {runningCollection && (
        <ShowProducts
          titleLabel={"Running Collection"}
          descriptionLabel={"View All Running Shoes"}
          products={runningCollection}
          isLoading={isLoading}
        />
      )}
    </>
  );
}
