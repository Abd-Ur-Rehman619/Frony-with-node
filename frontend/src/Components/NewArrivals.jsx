import TitleLabel from "./Layouts/TitleLabel";
import DescriptionLabel from "./Layouts/DescriptionLabel";
import womensCollection from "../assets/attractive-woman-wearing-hat-posing-black-background.png";
import playStation from "../assets/playstation.png";
import woffers from "../assets/woffers.png";
import Gucciperfume from "../assets/Gucciperfume.png";
import NewArrivedDetails from "./Layouts/NewArrivedDetails";

export default function NewArrivals() {
  return (
    <>
      <main className="flex flex-col gap-10 mx-10">
        <div>
          <TitleLabel>{["Featured"]}</TitleLabel>
        </div>
        <div>
          <DescriptionLabel>New Arrival</DescriptionLabel>
        </div>
        <div className=" w-full">
          <div className="flex flex-col lg:flex-row gap-6 w-full">
            <div className="relative flex justify-end border w-full border-black bg-black h-[17rem]  lg:h-[37.5rem] ">
              <div className="flex justify-center items-end h-full">
                <img
                  src="https://c4.wallpaperflare.com/wallpaper/816/770/388/jordan-fly-wade-nike-wallpaper-preview.jpg"
                  alt="playStation"
                  style={{ height: "100%" }}
                />
              </div>

              <NewArrivedDetails
                Title={"Men’s Collections"}
                Description={
                  "Featured Men collections that give you another vibe."
                }
              />
            </div>

            <div className="flex flex-col w-full gap-8">
              <div className="relative flex justify-end border border-black  bg-black md:h-[17rem]  h-[17.75rem]">
                <img
                  // className="h-[17.75rem] w-auto"
                  src="https://c4.wallpaperflare.com/wallpaper/816/770/388/jordan-fly-wade-nike-wallpaper-preview.jpg"
                  alt="womensCollection"
                  style={{ height: "100%" }}
                />

                <NewArrivedDetails
                  Title={"Women’s Collections"}
                  Description={
                    "Featured women collections that give you another vibe."
                  }
                />
              </div>

              <div className="flex flex-col lg:flex-row gap-6 w-full">
                <div className="relative flex justify-end border border-black bg-black w-full  h-[17.75rem]">
                  <div className="flex justify-center items-center h-full">
                    <img
                      src="https://t4.ftcdn.net/jpg/04/10/65/53/360_F_410655365_MjietOoPZAMAdqA74M6EXqRL3F8g5dHH.jpg"
                      alt="Jorden"
                      style={{ height: "100%" }}
                    />
                  </div>
                  <NewArrivedDetails
                    Title={"White Jordens"}
                    Description={"World best White Jorden"}
                  />
                </div>

                <div className="relative flex justify-end border border-black bg-black w-full h-[17.75rem]">
                  <div className="flex justify-center items-center h-full">
                    <img
                      src="https://t4.ftcdn.net/jpg/04/10/65/53/360_F_410655365_MjietOoPZAMAdqA74M6EXqRL3F8g5dHH.jpg"
                      alt="Nike"
                      style={{ height: "100%" }}
                    />
                  </div>

                  <NewArrivedDetails
                    Title={"Nike"}
                    Description={"Shop now the best Nike"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
