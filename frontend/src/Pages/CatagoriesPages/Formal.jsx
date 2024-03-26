import ShowProducts from "../../Components/Layouts/ShowProducts";
import { useProductFilterByCategory } from "../../Components/Layouts/useProductsFilterByCategory";

export default function Formal() {
  const formalCollection = useProductFilterByCategory("FORMAL");
  return (
    <>
      {formalCollection && (
        <ShowProducts
          titleLabel={"Formal Collection"}
          descriptionLabel={"View All Formal Shoes"}
          products={formalCollection}
        />
      )}
    </>
  );
}
