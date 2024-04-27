import DescriptionLabel from "./Layouts/DescriptionLabel";
import ProductCard from "./Layouts/ProductCard";
import TitleLabel from "./Layouts/TitleLabel";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData } from "../store/cart-action";

export default function FlashSales({ titleLabel, descriptionLabel, count }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  const cartData = useSelector((state) => state.cart.cartData);
  const itemsPerPage = 10;
  const startIndex = (count - 1) * itemsPerPage;
  let shoes = [];

  if (count === 1) {
    shoes = cartData.slice(0, itemsPerPage);
  } else if (count === 2) {
    shoes = cartData.slice(startIndex, startIndex + itemsPerPage);
  } else {
    shoes = cartData.slice(20);
  }

  return (
    <>
      <main className="flex flex-col gap-10">
        <div>
          <TitleLabel>{titleLabel}</TitleLabel>
        </div>
        <div>
          <DescriptionLabel> {descriptionLabel} </DescriptionLabel>
        </div>

        <div className="grid gap-8 justify-center items-center grid-cols-2 sm:justify-center sm:items-center md:grid-cols-3  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {shoes.map((items) => (
            <div
              key={items._id}
              className="flex flex-col  md:w-[270px] md:mx-0  relative mx-4 h-full"
            >
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
