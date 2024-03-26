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
      <main className="flex flex-col gap-10">
        <div>
          <TitleLabel>{["Featured"]}</TitleLabel>
        </div>
        <div>
          <DescriptionLabel>New Arrival</DescriptionLabel>
        </div>
        <div className="flex flex-row gap-10">
          <div className="relative border border-black bg-black h-[37.5rem] w-[52rem]">
            <div className="flex justify-center items-end h-full">
              <img
                src="https://c4.wallpaperflare.com/wallpaper/816/770/388/jordan-fly-wade-nike-wallpaper-preview.jpg"
                alt="playStation"
              />
            </div>
            <NewArrivedDetails
              Title={"Men’s Collections"}
              Description={
                "Featured woman collections that give you another vibe."
              }
            />
          </div>

          <div className="flex flex-col h-[37.5rem] w-[52rem] gap-8">
            <div className="relative flex justify-end border border-black bg-black w-[52rem] h-[17.75rem]">
              <img
                className="h-[17.75rem] w-auto"
                src="https://us.123rf.com/450wm/imagineseven/imagineseven2303/imagineseven230302015/203585952-high-heel-women-shoes-on-a-dark-background-3d-illustration.jpg"
                alt="womensCollection"
              />

              <NewArrivedDetails
                Title={"Women’s Collections"}
                Description={
                  "Featured woman collections that give you another vibe."
                }
              />
            </div>
            <div className="flex flex-row gap-10 w-[52rem]">
              <div className="relative border border-black bg-black w-[25rem] h-[17.75rem]">
                <div className="flex justify-center items-center h-full">
                  <img
                    className="h-[17.75rem] w-auto"
                    src="https://t4.ftcdn.net/jpg/04/10/65/53/360_F_410655365_MjietOoPZAMAdqA74M6EXqRL3F8g5dHH.jpg"
                    alt="woffers"
                  />
                </div>
                <NewArrivedDetails
                  Title={"White Jordens"}
                  Description={"Amazon wireless speakers"}
                />
              </div>
              <div className="relative border border-black bg-black w-[25rem] h-[17.75rem]">
                <div className="flex justify-center items-center h-full">
                  <img
                    className="h-[17.75rem] w-auto"
                    src="https://thumbs.dreamstime.com/b/baby-yellow-sneakers-isolated-black-background-kids-fashion-shoes-146094770.jpg"
                    alt="Gucciperfume"
                  />
                </div>

                <NewArrivedDetails
                  Title={"Perfume"}
                  Description={"GUCCI INTENSE OUD EDP"}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
