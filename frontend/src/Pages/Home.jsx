import React, { Suspense } from "react";
import Catagories from "../Components/Catagories";
const BrowseCatagories = React.lazy(() =>
  import("../Components/BrowseCatagories")
);
const FlashSales = React.lazy(() => import("../Components/FlashSales"));
import ImageCarousel from "../Components/ImageCarousel";
const NewArrivals = React.lazy(() => import("../Components/NewArrivals"));
const ServicesComponent = React.lazy(() =>
  import("../Components/ServicesComponent")
);
import { CircularProgress } from "@mui/material";

export default function Home() {
  return (
    <>
      <div className="flex items-center flex-col gap-32 h-screens">
        <div className="w-full">
          <div className=" flex mx-4 my-0 lg:gap-36 lg:mx-32 lg:my-0 ">
            <Catagories />
            <ImageCarousel />
          </div>
        </div>
        <div>
          <Suspense fallback={<CircularProgress />}>
            <FlashSales
              titleLabel="Today's"
              descriptionLabel="Flash Sales"
              count={1}
            />
          </Suspense>
        </div>

        <div>
          <Suspense fallback={<CircularProgress />}>
            <BrowseCatagories />
          </Suspense>
        </div>

        <div>
          <Suspense fallback={<CircularProgress />}>
            <FlashSales
              titleLabel={"This Month"}
              descriptionLabel={"Best Selling Products"}
              count={2}
            />
          </Suspense>
        </div>

        <div>
          <Suspense fallback={<CircularProgress />}>
            <FlashSales
              titleLabel="Our Products"
              descriptionLabel="Explore Our Products"
              count={3}
            />
          </Suspense>
        </div>

        <div className="mx-10 w-full">
          <Suspense fallback={<CircularProgress />}>
            <NewArrivals />
          </Suspense>
        </div>

        <div className=" flex justify-center  pb-24 w-full">
          <Suspense fallback={<CircularProgress />}>
            <ServicesComponent />
          </Suspense>
        </div>
      </div>
    </>
  );
}
