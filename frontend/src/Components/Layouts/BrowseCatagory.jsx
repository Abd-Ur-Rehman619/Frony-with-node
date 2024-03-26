import { Link } from "react-router-dom";

export default function BrowseCatagories({ catagoryImg, children, link }) {
  return (
    <>
      <Link to={link} className="flex flex-col items-center group relative">
        <img
          className="m-2 rounded transition-transform duration-300 transform group-hover:scale-110 "
          src={catagoryImg}
          alt="catagoryImg"
        />

        <label className="font-medium transition-transform duration-300 transform group-hover:scale-110 group-hover:text-red-500 m-2">
          {children}
        </label>
      </Link>
    </>
  );
}
