import ShowProducts from "../../Components/Layouts/ShowProducts";
import { useProductFilter } from "../../Components/Layouts/useProductFilter";
export default function KidsCollection() {
  const kidsCollection = useProductFilter("KIDS");
  return (
    <>
      {kidsCollection && (
        <ShowProducts
          titleLabel={"Kids's Collection"}
          descriptionLabel={"View All Kids's Shoes"}
          products={kidsCollection}
        />
      )}
    </>
  );
}
