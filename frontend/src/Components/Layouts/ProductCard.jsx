import { useState } from "react";
import controller from "../../assets/controller.png";
import heart from "../../assets/heart.png";
import view from "../../assets/view.png";
import yellow from "../../assets/heart - Copy.png";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

export default function ProductCard({
  slug,
  name,
  price,
  discount,
  brand,
  gender,
  image,
}) {
  const [isLiked, setLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleLikeClick = () => {
    setLiked(!isLiked);
  };

  return (
    <Link
      to={`${slug}`}
      className="flex flex-col  mb-20 w-[270px] h-[350px] relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex justify-center bg-[#F5F5F5] p-12 mb-2">
        <img className="h-36" src={`http://localhost:3000/${image}`} alt="" />
        {isHovered && (
          <div className="absolute flex justify-center bottom-0 bg-black text-white ">
            <button className="w-[270px] h-10">Add to Cart</button>
          </div>
        )}
      </div>

      <div className="flex justify-between items-center px-4">
        <div>
          <p className="font-semibold">{name}</p>

          <p className="text-[#DB4444] font-medium">${price}</p>

          <p className="text-[#DB4444] font-medium">{`$${price}`}</p>

          <p>{brand}</p>
          <p>{gender}</p>
        </div>

        <div className="flex flex-col absolute top-0 right-0 mt-2 mr-2">
          <IconButton
            onClick={handleLikeClick}
            style={{ backgroundColor: "white" }}
          >
            <img src={isLiked ? yellow : heart} alt="Heart Logo" />
          </IconButton>
          <IconButton style={{ backgroundColor: "white" }}>
            <img src={view} alt="View Logo" />
          </IconButton>
        </div>
        {discount !== "0" && (
          <div className="absolute top-1 left-1 bg-[#DB4444] text-white p-2 rounded">
            {`${discount}%`}
          </div>
        )}
      </div>
    </Link>
  );
}
