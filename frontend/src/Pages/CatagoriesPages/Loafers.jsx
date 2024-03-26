import ShowProducts from "../../Components/Layouts/ShowProducts";
import { useProductFilterByCategory } from "../../Components/Layouts/useProductsFilterByCategory";

export default function Loafers() {
  const LoafersCollection = useProductFilterByCategory("LOAFERS");
  return (
    <>
      {LoafersCollection && (
        <ShowProducts
          titleLabel={"Loafers Collection"}
          descriptionLabel={"View All Loafers Shoes"}
          products={LoafersCollection}
        />
      )}
    </>
  );
}
