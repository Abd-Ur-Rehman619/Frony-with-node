import ShowProducts from "../../Components/Layouts/ShowProducts";
import { useProductFilterByCategory } from "../../Components/Layouts/useProductsFilterByCategory";

export default function Running() {
  const runningCollection = useProductFilterByCategory("RUNNING");
  return (
    <>
      {runningCollection && (
        <ShowProducts
          titleLabel={"Running Collection"}
          descriptionLabel={"View All Running Shoes"}
          products={runningCollection}
        />
      )}
    </>
  );
}
