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
        <div className="container flex gap-52">
          <Catagories />
          <ImageCarousel />
        </div>
        <div className="container border-b pb-10">
          <FlashSales
            titleLabel="Today's"
            descriptionLabel="Flash Sales"
            count={1}
          />
        </div>
        <div className="container border-b pb-10">
          <BrowseCatagories />
        </div>
        <div className="container border-b pb-10">
          <FlashSales
            titleLabel={"This Month"}
            descriptionLabel={"Best Selling Products"}
            count={2}
          />
        </div>
        <div className="container border-b pb-10">
          <FlashSales
            titleLabel="Our Products"
            descriptionLabel="Explore Our Products"
            count={3}
          />
        </div>
        <div className="container border-b pb-10">
          <NewArrivals />
        </div>
        <div className="container flex justify-center  pb-40">
          <ServicesComponent />
        </div>
      </div>
    </>
  );
}
