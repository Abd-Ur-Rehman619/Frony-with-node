import ShowProducts from "../../Components/Layouts/ShowProducts";
import { useProductFilterByCategory } from "../../Components/Layouts/useProductsFilterByCategory";

export default function Sandals() {
  const sandalsCollection = useProductFilterByCategory("SANDALS");
  return (
    <>
      {sandalsCollection && (
        <ShowProducts
          titleLabel={"Sandals Collection"}
          descriptionLabel={"View All Sandals Shoes"}
          products={sandalsCollection}
        />
      )}
    </>
  );
}
