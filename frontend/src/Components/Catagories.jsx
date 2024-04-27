import { Link } from "react-router-dom";
import shoes from "../json/Catagories.json";

export default function Catagories() {
  return (
    <>
      <div className=" p-4 hidden lg:flex lg:mt-5 lg:w-[15rem]  lg:font-light lg:border-r-2">
        <ul className="flex flex-col ">
          {shoes.map((item) => (
            <Link
              to={`./products${item.url}`}
              key={item.id}
              className="mb-2 text-md font-medium hover:text-xl hover:text-[#DB4444]"
            >
              {item.Catagory}
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}
