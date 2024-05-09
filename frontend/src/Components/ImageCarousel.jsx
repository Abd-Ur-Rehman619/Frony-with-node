import shoesImg from "../json/Carousel_Imgs.json";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function ImageCarousel() {
  return (
    <Carousel
      className="w-[50rem] pt-10 mt-5 border-2 rounded shadow-2xl"
      showArrows={true}
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
    >
      {shoesImg.map((item) => (
        <div className="relative flex justify-end " key={item.id}>
          <img
            loading="lazy"
            className=" h-[20rem] object-contain"
            src={item.imageURL}
            alt={`Slide ${item.id}`}
          />
          <div className="absolute bottom-10 left-10 ">
            <p className="text-2xl text-white sm:text-black font-bold p-2">
              Exclusive Products
            </p>
            <p className="text-md text-white sm:text-black font-medium p-2">
              Bringing you the best variety
            </p>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
