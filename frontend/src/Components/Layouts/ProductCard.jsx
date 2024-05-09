import { useState } from "react";
import view from "../../assets/View.png";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

export default function ProductCard({
  slug,
  name,
  price,
  discount,
  brand,
  gender,
  image,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const Log = useSelector((state) => state.log);
  const token = localStorage.getItem("token");

  const discountPrice = price + 20;

  async function handleAddToCart() {
    const response = await fetch("https://frony-with-node.vercel.app/cart", {
      method: "POST",
      body: JSON.stringify({ productId: slug }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    // if (!response.ok) {
    //   toast.error("Item not added to the cart");
    // } else {
    //   toast.success("Items added to the cart");
    // }
  }

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative flex justify-center bg-[#F5F5F5] p-12 mb-2">
          <img className="h-36" src={image} alt="" />
          {Log && isHovered && (
            <div className="absolute flex justify-center bottom-0 bg-black text-white ">
              <button className="w-[270px] h-10" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          )}
        </div>

        <div className="flex justify-between items-center ">
          <div className="flex flex-col w-full gap-y-3">
            <p className="font-semibold text-ellipsis overflow-hidden h-7">
              {name}
            </p>
            <div className="flex gap-4">
              <span className="text-[#DB4444] font-medium">${price}</span>
              {discount > 0 && (
                <span className="text-[#9096A2] font-medium line-through">{`$${discountPrice}`}</span>
              )}
            </div>
            <div className="flex gap-4">
              <span>{brand}</span>
              <span>{gender}</span>
            </div>
          </div>

          <div className="flex flex-col absolute top-0 right-0 mt-2 mr-2">
            <Link to={`/Products/${slug}`}>
              <IconButton style={{ backgroundColor: "white" }}>
                <img src={view} alt="View Logo" />
              </IconButton>
            </Link>
          </div>
          {discount !== 0 && (
            <div className="absolute top-1 left-1 bg-[#DB4444] text-white p-2 rounded">
              {`${discount}%`}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
