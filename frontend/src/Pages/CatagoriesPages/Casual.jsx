import ShowProducts from "../../Components/Layouts/ShowProducts";
import { useProductFilterByCategory } from "../../Components/Layouts/useProductsFilterByCategory";

export default function Casual() {
  const casualCollection = useProductFilterByCategory("CASUAL");
  return (
    <>
      {casualCollection && (
        <ShowProducts
          titleLabel={"Casual Collection"}
          descriptionLabel={"View All Casual Shoes"}
          products={casualCollection}
        />
      )}
    </>
  );
}
