import styles from "./CartData.module.css";

import { useDispatch, useSelector } from "react-redux";
import { updateQuantity } from "../../store/cartSlice";
import { removeItem } from "../../store/cartSlice";
import { Delete } from "@mui/icons-material";

export default function CartData() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const calculateSubtotal = (product) => {
    return product.price * product.quantity;
  };

  const handleIncrement = (product) => {
    const newQuantity = product.quantity + 1;
    dispatch(updateQuantity({ ...product, quantity: newQuantity }));
  };

  const handleDecrement = (product) => {
    if (product.quantity > 1) {
      const newQuantity = product.quantity - 1;
      dispatch(updateQuantity({ ...product, quantity: newQuantity }));
    }
  };

  const handleDelete = (product) => {
    dispatch(removeItem(product));
  };

  return (
    <>
      {cartItems.map((product) => (
        <tr key={product.name}>
          <td className={styles.product}>
            <span className={styles.productImage}>
              <img
                src={product.imageURL}
                alt={product.name}
                className={styles.image}
              />
              <span className="w-[9.5rem]">{product.name}</span>
            </span>

            <span>${product.price}</span>

            <span className={styles.quantityInput}>
              <div className="flex items-center h-11 w-40 border border-grey-700 rounded m-2">
                <button
                  className="bg-white hover:bg-[#DB4444] hover:text-white text-gray-800 font-semibold border rounded shadow h-11 w-10"
                  onClick={() => handleDecrement(product)}
                >
                  -
                </button>

                <p className="text-xl font-bold border h-11 w-20  pl-3 pr-3 flex items-center justify-center">
                  {product.quantity}
                </p>

                <button
                  className="bg-white hover:bg-[#DB4444] hover:text-white text-gray-800 font-semibold border rounded shadow h-11 w-10"
                  onClick={() => handleIncrement(product)}
                >
                  +
                </button>
              </div>
            </span>

            <span className="mr-5 flex items-center gap-6">
              ${calculateSubtotal(product)}
              <span>
                <Delete
                  onClick={() => handleDelete(product)}
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
