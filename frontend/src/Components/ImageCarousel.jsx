import Carousel from "react-material-ui-carousel";
import Paper from "@mui/material/Paper";
import shoesImg from "../json/Carousel_Imgs.json";

export const ImageCarousel = () => {
  return (
    <Carousel className="w-[50rem] pt-10">
      {shoesImg.map((item) => (
        <Paper className="relative flex justify-end" key={item.id}>
          <img
            className=" h-[20rem]"
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
        </Paper>
      ))}
    </Carousel>
  );
};
