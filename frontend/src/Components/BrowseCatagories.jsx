import TitleLabel from "./Layouts/TitleLabel";
import BrowseCatagory from "./Layouts/BrowseCatagory";
import DescriptionLabel from "./Layouts/DescriptionLabel";

export default function BrowseCatagories() {
  return (
    <>
      <main className="flex flex-col gap-10 mx-8">
        <TitleLabel>{["Catagories"]}</TitleLabel>
        <div>
          <DescriptionLabel>Catagories</DescriptionLabel>
        </div>
        <div className="grid justify-center items-center grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 ">
          <BrowseCatagory
            catagoryImg={
              "https://static1.squarespace.com/static/527679aee4b06f1a7db2bffd/5276a43ee4b02ee843116503/594f6fcfbf629a4fd2196496/1697039488820/public_uploads_destaqueshome_resized_IMG_4844-1100x1100.jpg?format=1500w"
            }
            link={"/products/men"}
          >
            Men's Collection
          </BrowseCatagory>
          <BrowseCatagory
            catagoryImg={
              "https://static-01.daraz.pk/p/9737c190095696f5b43f7e9ed2f3fbd4.jpg"
            }
            link={"/products/women"}
          >
            Women's Collection
          </BrowseCatagory>
          <BrowseCatagory
            catagoryImg={
              "https://www.hopkicks.pk/image/cache/catalog/2023/JULY%2023/I-SHOES/29/8-1100x1100.jpg"
            }
            link={"/products/kids"}
          >
            Kids Collection
          </BrowseCatagory>
          <BrowseCatagory
            catagoryImg={
              "https://media1.popsugar-assets.com/files/thumbor/DPAYKZVLHShuVdgQaxfetILfzEQ=/1100x1100/filters:format_auto():quality(85):extract_cover()/2016/02/25/914/n/1922564/724d9d40_edit_img_cover_file_40321412_1456408800_Gucci-Crisscross-Sandals-Trend.jpg"
            }
            link={"/products/heels"}
          >
            Heel's Collection
          </BrowseCatagory>
          <BrowseCatagory
            catagoryImg={
              "https://m.media-amazon.com/images/I/61nbBxfsXCL._AC_UF1000,1000_QL80_.jpg"
            }
            link={"/products/football"}
          >
            Football Shoes
          </BrowseCatagory>
          <BrowseCatagory
            catagoryImg={
              "https://i.pinimg.com/736x/1b/bd/ef/1bbdefc389d5179a92b31bec800ec8b8.jpg"
            }
            link={"/products/formal"}
            className="grid grid-cols-subgrid gap-4 col-span-3"
          >
            Formal Collection
          </BrowseCatagory>
        </div>
      </main>
    </>
  );
}
