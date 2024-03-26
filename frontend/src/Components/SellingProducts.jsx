import DescriptionLabel from "./Layouts/DescriptionLabel";
import ProductCard from "./Layouts/ProductCard";
import TitleLabel from "./Layouts/TitleLabel";

export default function SellingProducts() {
  return (
    <>
      <main className="flex flex-col gap-10">
        <div>
          <TitleLabel>{["This Month"]}</TitleLabel>
        </div>
        <div>
          <DescriptionLabel>Best Selling Products</DescriptionLabel>
        </div>
        <div className="flex flex-row">
          <ProductCard />
        </div>
      </main>
    </>
  );
}
