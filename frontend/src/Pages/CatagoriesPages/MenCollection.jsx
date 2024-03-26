import ShowProducts from "../../Components/Layouts/ShowProducts";
import { useProductFilter } from "../../Components/Layouts/useProductFilter";

export default function MenCollection() {
  const menCollection = useProductFilter("MEN");

  return (
    <>
      {menCollection && (
        <ShowProducts
          titleLabel={"Men's Collection"}
          descriptionLabel={"View All Men's Shoes"}
          products={menCollection}
        />
      )}
    </>
  );
}
