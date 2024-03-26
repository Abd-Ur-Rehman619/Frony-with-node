import ShowProducts from "../../Components/Layouts/ShowProducts";
import { useProductFilterByCategory } from "../../Components/Layouts/useProductsFilterByCategory";

export default function Heels() {
  const heelsCollection = useProductFilterByCategory("HEELS");
  return (
    <>
      {heelsCollection && (
        <ShowProducts
          titleLabel={"Heels Collection"}
          descriptionLabel={"View All Heels Shoes"}
          products={heelsCollection}
        />
      )}
    </>
  );
}
