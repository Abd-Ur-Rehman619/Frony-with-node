import { CircularProgress } from "@mui/material";
import DescriptionLabel from "./DescriptionLabel";
import ProductCard from "./ProductCard";
import TitleLabel from "./TitleLabel";

export default function ShowProducts({
  titleLabel,
  descriptionLabel,
  products,
  isLoading,
}) {
  return (
    <>
      <div className="flex items-center flex-col gap-32 ">
        <div className="container flex gap-32 mt-5">
          <main className="flex flex-col gap-10 ">
            <div>
              <TitleLabel>{titleLabel}</TitleLabel>
            </div>
            <div>
              <DescriptionLabel> {descriptionLabel} </DescriptionLabel>
            </div>
            <div className="grid gap-8 justify-center items-center grid-cols-2 sm:justify-center sm:items-center md:grid-cols-3  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
              {isLoading ? (
                products.map((items) => (
                  <div
                    key={items._id}
                    className="flex flex-col  md:w-[270px] md:mx-0  relative mx-4 h-full"
                  >
                    <ProductCard
                      slug={items._id}
                      name={items.name}
                      price={items.price}
                      brand={items.brand}
                      discount={items.discount}
                      gender={items.gender}
                      image={`../${items.imageURL}`}
                    />
                  </div>
                ))
              ) : (
                <CircularProgress />
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
