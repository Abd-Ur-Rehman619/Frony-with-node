import { Link } from "react-router-dom";
import shoes from "../json/Catagories.json";

export default function Catagories() {
  return (
    <>
      <div className="pt-10 w-[15rem] pr-10 font-light border-r">
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
