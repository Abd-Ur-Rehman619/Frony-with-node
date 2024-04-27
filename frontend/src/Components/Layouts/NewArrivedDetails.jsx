import { Link } from "react-router-dom";

export default function NewArrivedDetails({ Title, Description }) {
  return (
    <>
      <div className="absolute flex flex-col gap-5 bottom-3 left-3  w-full">
        <h3 className="text-white text-2xl font-bold">{Title} </h3>
        <p className="text-white">{Description}</p>
        <div>
          <Link className="font-semibold p-1 text-white border-b-[1px] border-white">
            Shop Now
          </Link>
        </div>
      </div>
    </>
  );
}
