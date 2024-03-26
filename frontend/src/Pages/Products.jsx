import ShowProducts from "../Components/Layouts/ShowProducts";
import products from "../json/AllShoes.json";

export default function Products() {
  return (
    <>
      <ShowProducts
        titleLabel={"Products"}
        descriptionLabel={"View All Products"}
        products={products}
      />
    </>
  );
}
