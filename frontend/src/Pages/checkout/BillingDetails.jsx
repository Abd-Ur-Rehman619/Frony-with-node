import { Button } from "@mui/material";
import styles from "./BillingDetails.module.css";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function BillingDetails({ detail }) {
  const [products, setproducts] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (data === "Unauthorized!") {
        navigate("/");
      }
      setproducts(data);
    }
    fetchData();
  }, [token]);
  async function handleOrder() {
    if (!detail.address == "" && !detail.town == "" && !detail.phone == "") {
      const response = await fetch("http://localhost:3000/orders", {
        method: "POST",
        body: JSON.stringify({
          address: detail.address,
          town: detail.town,
          phone: detail.phone,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        toast.error("Can't place an order");
      } else {
        toast.success("Order placed");
        setTimeout(() => navigate("/"), 1000);
      }
      const data = await response.json();
      return data;
    } else {
      toast.error("Fill all the input fields");
    }
  }
  const total = products.reduce(
    (accumulator, item) => accumulator + item.quantity * item.productId.price,
    0
  );
  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />
      <div>
        {products.map((product) => (
          <tr key={product.productId.name}>
            <td className={styles.product}>
              <span className={styles.productImage}>
                <img
                  src={`../${product.productId.imageURL}`}
                  alt="img"
                  className={styles.image}
                />
                {product.name}
              </span>
              <span>${product.productId.price}</span>

              <span>${product.quantity * product.productId.price}</span>
            </td>
          </tr>
        ))}

        <div className={styles.cartTotal}>
          <p>
            Shipping:<span>Free</span>
          </p>
          <p className="border-none">
            Total:<span>{total}</span>
          </p>
        </div>

        <div className={styles.checkbox}>
          <label>Cash on delivery</label>
        </div>
      </div>

      <div className={styles.orderBtn}>
        <Button onClick={handleOrder}>Place Order</Button>
      </div>
    </>
  );
}
