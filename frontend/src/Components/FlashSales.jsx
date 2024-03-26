import DescriptionLabel from "./Layouts/DescriptionLabel";
import ProductCard from "./Layouts/ProductCard";
import TitleLabel from "./Layouts/TitleLabel";
import { Button } from "@mui/material";
import shoes from "../json/Home.json";
import { Link } from "react-router-dom";

export default function FlashSales({ titleLabel, descriptionLabel, count }) {
  return (
    <>
      <main className="flex flex-col gap-10">
        <div>
          <TitleLabel>{titleLabel}</TitleLabel>
        </div>
        <div>
          <DescriptionLabel> {descriptionLabel} </DescriptionLabel>
        </div>
        <div className="grid grid-cols-5">
          {count === 1
            ? shoes.flashSales.map((items) => (
                <div key={items.id}>
                  <ProductCard
                    slug={items.slug}
                    name={items.name}
                    price={items.price}
                    brand={items.brand}
                    discount={items.discount}
                    gender={items.gender}
                    image={items.imageURL}
                  />
                </div>
              ))
            : count === 2
            ? shoes.sellingProducts.map((items) => (
                <div key={items.id}>
                  <ProductCard
                    slug={items.slug}
                    name={items.name}
                    price={items.price}
                    brand={items.brand}
                    discount={items.discount}
                    gender={items.gender}
                    image={items.imageURL}
                  />
                </div>
              ))
            : shoes.exploreProduct.map((items) => (
                <div key={items.id}>
                  <ProductCard
                    slug={items.slug}
                    name={items.name}
                    price={items.price}
                    brand={items.brand}
                    discount={items.discount}
                    gender={items.gender}
                    image={items.imageURL}
                  />
                </div>
              ))}
        </div>

        {(count === 1 || count === 3) && (
          <div className="flex justify-center">
            <Link to={"/products"}>
              <Button
                sx={{
                  backgroundColor: "#DB4444",
                  width: "234px",
                  height: "56px",
                  color: "white",
                }}
              >
                View All Products
              </Button>
            </Link>
          </div>
        )}
      </main>
    </>
  );
}
