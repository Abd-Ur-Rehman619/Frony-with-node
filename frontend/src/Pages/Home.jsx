import BrowseCatagories from "../Components/BrowseCatagories";
import Catagories from "../Components/Catagories";
import FlashSales from "../Components/FlashSales";
import { ImageCarousel } from "../Components/ImageCarousel";
import NewArrivals from "../Components/NewArrivals";
import ServicesComponent from "../Components/ServicesComponent";

export default function Home() {
  return (
    <>
      <div className="flex items-center flex-col gap-32 h-screens">
        <div className="w-full">
          <div className=" flex mx-4 my-0 lg:gap-20 lg:mx-32 lg:my-0 ">
            <Catagories />
            <ImageCarousel />
          </div>
        </div>
        <div>
          <FlashSales
            titleLabel="Today's"
            descriptionLabel="Flash Sales"
            count={1}
          />
        </div>

        <div>
          <BrowseCatagories />
        </div>

        <div>
          <FlashSales
            titleLabel={"This Month"}
            descriptionLabel={"Best Selling Products"}
            count={2}
          />
        </div>

        <div>
          <FlashSales
            titleLabel="Our Products"
            descriptionLabel="Explore Our Products"
            count={3}
          />
        </div>

        <div className="mx-10 w-full">
          <NewArrivals />
        </div>

        <div className=" flex justify-center  pb-24 w-full">
          <ServicesComponent />
        </div>
      </div>
    </>
  );
}
