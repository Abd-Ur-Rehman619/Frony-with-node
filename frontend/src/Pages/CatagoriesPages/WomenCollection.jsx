import ShowProducts from "../../Components/Layouts/ShowProducts";
import { useProductFilter } from "../../Components/Layouts/useProductFilter";
export default function WomenCollection() {
  const { filteredProducts, isLoading } = useProductFilter("WOMEN");
  return (
    <>
      {filteredProducts && (
        <ShowProducts
          titleLabel={"Women's Collection"}
          descriptionLabel={"View All Women's Shoes"}
          products={filteredProducts}
          isLoading={isLoading}
        />
      )}
    </>
  );
}
