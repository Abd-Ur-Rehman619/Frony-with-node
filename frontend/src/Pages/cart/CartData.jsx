import { useEffect, useState } from "react";
import styles from "./CartData.module.css";

import { Delete } from "@mui/icons-material";

export default function CartData({ cartData, token }) {
  const [updatedCartData, setUpdatedCartData] = useState([]);
  const [cartItems, setCartItems] = useState(cartData);

  async function handleIncrement(id) {
    const response = await fetch("http://localhost:3000/cart", {
      method: "POST",
      body: JSON.stringify({ productId: id }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const updatedProduct = cartData.find(
        (product) => product.productId._id === id
      );
      updatedProduct.quantity++;
      const updatedData = [...cartData];
      setUpdatedCartData(updatedData);
    }
  }
  async function handleDecrement(id) {
    const response = await fetch("http://localhost:3000/cart-item-remove", {
      method: "POST",
      body: JSON.stringify({ productId: id }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const updatedProduct = cartData.find(
        (product) => product.productId._id === id
      );
      if (updatedProduct.quantity === 1) {
        window.alert("Can't decrease quantity anymore");
      } else {
        updatedProduct.quantity--;
      }

      const updatedData = [...cartData];
      setUpdatedCartData(updatedData);
    }
  }
  console.log(updatedCartData);
  async function handleDelete(id) {
    const response = await fetch("http://localhost:3000/delete-cart", {
      method: "POST",
      body: JSON.stringify({ productId: id }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const updatedCartData = cartData.filter(
        (item) => item.productId._id !== id
      );
      setCartItems(updatedCartData);
    } else {
      console.error("Failed to delete item from cart");
    }
  }

  return (
    <>
      {cartItems.map((product) => (
        <tr key={product.productId.name}>
          <td className={styles.product}>
            <span className={styles.productImage}>
              <img
                src={product.productId.imageURL}
                alt={product.productId.name}
                className={styles.image}
              />
              <span className="w-[9.5rem]">{product.productId.name}</span>
            </span>

            <span>${product.productId.price}</span>

            <span className={styles.quantityInput}>
              <div className="flex items-center h-11 w-40 border border-grey-700 rounded m-2">
                <button
                  className="bg-white hover:bg-[#DB4444] hover:text-white text-gray-800 font-semibold border rounded shadow h-11 w-10"
                  onClick={() => handleDecrement(product.productId._id)}
                >
                  -
                </button>

                <p className="text-xl font-bold border h-11 w-20  pl-3 pr-3 flex items-center justify-center">
                  {product.quantity}
                </p>

                <button
                  className="bg-white hover:bg-[#DB4444] hover:text-white text-gray-800 font-semibold border rounded shadow h-11 w-10"
                  onClick={() => handleIncrement(product.productId._id)}
                >
                  +
                </button>
              </div>
            </span>

            <span className="mr-5 flex items-center gap-6">
              ${product.productId.price * product.quantity}
              <span>
                <Delete
                  onClick={() => handleDelete(product.productId._id)}
                  className="hover:text-red-600"
                />
              </span>
            </span>
          </td>
        </tr>
      ))}
    </>
  );
}
