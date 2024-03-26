import Carousel from "react-material-ui-carousel";
import Paper from "@mui/material/Paper";
import shoesImg from "../json/Carousel_Imgs.json";

export const ImageCarousel = () => {
  return (
    <Carousel className="w-[65rem] bg-black  pt-20 ">
      {shoesImg.map((item) => (
        <Paper className="relative flex justify-end" key={item.id}>
          <img
            className=" h-[20rem]"
            src={item.imageURL}
            alt={`Slide ${item.id}`}
          />
          <div className="absolute bottom-10 left-10 ">
            <p className="text-2xl font-bold p-2">Exclusive Products</p>
            <p className="text-md font-medium p-2">
              Bringing you the best variety
            </p>
            <div>
              <button className="border-b font-semibold border-black ml-2">
                Shop Now
              </button>
            </div>
          </div>
        </Paper>
      ))}
    </Carousel>
  );
};
