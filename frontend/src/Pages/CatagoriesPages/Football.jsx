import ShowProducts from "../../Components/Layouts/ShowProducts";
import { useProductFilterByCategory } from "../../Components/Layouts/useProductsFilterByCategory";

export default function Football() {
  const footballCollection = useProductFilterByCategory("FOOTBALL");
  return (
    <>
      {footballCollection && (
        <ShowProducts
          titleLabel={"Football Collection"}
          descriptionLabel={"View All Football Shoes"}
          products={footballCollection}
        />
      )}
    </>
  );
}
