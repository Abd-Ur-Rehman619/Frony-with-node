import heart from "../../assets/heart.png";
import yellow from "../../assets/heart - Copy.png";
import delivery from "../../assets/icon-delivery.png";
import returnIcon from "../../assets/icon-return.png";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function ProductDetails({ product }) {
  const [favorite, setFavorite] = useState(false);

  // setTimeout(() => setShowMessage(false), 2000);
  const token = localStorage.getItem("token");
  const addToCartHandler = async (id) => {
    if (token) {
      const response = await fetch("https://frony-with-node.vercel.app/cart", {
        method: "POST",
        body: JSON.stringify({ productId: id }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Your item has been added to the cart.");
    } else {
      toast.error("Log In to add items to the cart");
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />
      <img
        src={`../${product.imageURL}`}
        alt="productImage"
        className="border rounded sm:w-[31.25rem] sm:h-[33.2rem] lg:w-[31.25rem] lg:h-[33.2rem] max-lg-w-[20rem] max-lg-h-[21rem]"
      />

      <div>
        <h1 className="text-2xl font-semibold leading-6 m-5 max-2xl:max-w-md">
          {product.name}
        </h1>
        <p
          className={
            product.is_in_inventory ? "text-green-400 m-5" : "text-rose-400 m-5"
          }
        >
          {product.is_in_inventory ? "In Stock" : "Not Available"}
        </p>
        <p className="text-2xl  leading-6 m-5">{`$${product.price}`}</p>
        <p className="text-sm max-lg:max-w-sm leading-5 p-5 border-b">{`Experience limitless comfort and performance with the ${product.name}, featuring signature React foam cushioning and lightweight upper for unparalleled support and breathability.`}</p>

        <div className="lg:flex m-5 ">
          <button
            onClick={() => addToCartHandler(product._id)}
            className="bg-[#fc8941] hover:bg-[#ff7520] hover:text-white text-white font-semibold py-2 px-4 border  rounded shadow m-2 w-36"
          >
            Add to Cart
          </button>
          <button
            className="bg-white  text-gray-800 font-semibold py-2 px-4 border  rounded shadow m-2 "
            onClick={() => setFavorite(!favorite)}
          >
            <img src={favorite ? yellow : heart} alt="Heart Logo" />
          </button>
        </div>

        <div className="flex flex-col  border rounded lg:w-[30rem] m-5 ">
          <div className="flex border-b p-5">
            <img loading="lazy" src={delivery} alt="delivery" />
            <div className="flex flex-col gap-1 pl-5">
              <p className="text-medium font-semibold">Free Delivery</p>
              <p className="text-sm font-semibold">
                Enter your postal code for Delivery Availibility
              </p>
            </div>
          </div>
          <div className="flex p-5">
            <img loading="lazy" src={returnIcon} alt="returnIcon" />
            <div className="flex flex-col gap-1 pl-5">
              <p className="text-medium font-semibold">Return Delivery</p>
              <p className="text-sm font-semibold">
                Free 30 Days Delivery Returns. Details
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
